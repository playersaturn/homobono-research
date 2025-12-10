'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { Resend } from 'resend'

// Initialize Resend only if valid key is present, otherwise mock strictly for avoiding build errors
const resend = process.env.RESEND_API_KEY
    ? new Resend(process.env.RESEND_API_KEY)
    : { emails: { send: async () => console.warn('Resend API Key missing') } } as unknown as Resend

export async function createPost(formData: FormData) {
    const supabase = await createClient()

    const title = formData.get('title') as string
    const content = formData.get('content') as string
    const isPremium = formData.get('isPremium') === 'on'

    const { data: { user } } = await supabase.auth.getUser()

    if (!user || !user.email) return

    const ADMIN_EMAILS = ['eduardobuennogm@gmail.com', 'admin@admin.com']
    if (!ADMIN_EMAILS.includes(user.email)) {
        // Just return to avoid type mismatch with form action which expects void | Promise<void>
        // Ideally we throw or redirect, but returning nothing is safe for types.
        return
    }

    // 1. Save post to Supabase
    const { error } = await supabase.from('posts').insert({
        title,
        content,
        is_premium: isPremium,
        author_id: user.id
    })

    if (error) {
        console.error('Error creating post:', error)
        return // Return void to satisfy form action type
    }

    // 2. Send email to subscribers (if it's a premium post, or all posts)
    // For demo, we just log. In production:
    // Fetch subscribers -> Loop -> Send Email

    if (process.env.RESEND_API_KEY) {
        try {
            await resend.emails.send({
                from: 'InvestTips <onboarding@resend.dev>',
                to: ['delivered@resend.dev'], // Demo email
                subject: `Nova Dica: ${title}`,
                html: `<h1>${title}</h1><p>${content}</p><p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/dashboard">Leia mais no dashboard</a></p>`
            })
        } catch (emailError) {
            console.error('Failed to send email:', emailError)
        }
    } else {
        console.log(`[MOCK EMAIL] To: Subscribers | Subject: Nova Dica: ${title} | Content Snippet: ${content.substring(0, 50)}...`)
    }

    redirect('/admin')
}
