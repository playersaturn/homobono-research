import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { stripe } from '@/utils/stripe/config';
import { createClient } from '@/utils/supabase/server';
import Stripe from 'stripe';

export async function POST(req: Request) {
    const body = await req.text();
    const signature = (await headers()).get('Stripe-Signature') as string;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (error: any) {
        return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
    }

    const supabase = await createClient();

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.userId;
        const customerId = session.customer as string;

        if (userId) {
            // Update user profile to subscribed
            await supabase
                .from('profiles')
                .update({ is_subscribed: true, stripe_customer_id: customerId })
                .eq('id', userId);
        }
    }

    // Handle other events like subscription deleted/updated
    if (event.type === 'customer.subscription.deleted') {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;

        await supabase
            .from('profiles')
            .update({ is_subscribed: false })
            .eq('stripe_customer_id', customerId);
    }

    return new NextResponse(null, { status: 200 });
}
