import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/utils/stripe/config';
import { createClient } from '@/utils/supabase/server';

export async function POST(req: NextRequest) {
    try {
        const supabase = await createClient();
        const {
            data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const { priceId } = await req.json();

        // MOCK MODE Check
        if (!process.env.STRIPE_SECRET_KEY) {
            console.log("Mocking Stripe Checkout for user:", user.email);

            // Directly update subscription
            await supabase
                .from('profiles')
                .update({ is_subscribed: true, stripe_customer_id: 'mock_customer_id' })
                .eq('id', user.id);

            return NextResponse.json({ sessionId: 'mock_session_id', url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/dashboard` });
        }

        const session = await stripe.checkout.sessions.create({
            billing_address_collection: 'auto',
            customer_email: user.email,
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`,
            metadata: {
                userId: user.id,
            },
        });

        return NextResponse.json({ sessionId: session.id });
    } catch (err: any) {
        console.log(err);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
