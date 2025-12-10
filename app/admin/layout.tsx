import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { LogOut, LayoutDashboard, PlusCircle, Users } from 'lucide-react'

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    const ADMIN_EMAILS = ['eduardobuennogm@gmail.com', 'admin@admin.com']
    if (!user.email || !ADMIN_EMAILS.includes(user.email)) {
        redirect('/dashboard')
    }

    // Basic check - in a real app, check for specific admin role/email
    // For now, we'll assume any logged in user can access (DEMO PURPOSE)
    // or restrict to a specific email if desired.

    return (
        <div className="min-h-screen bg-black flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-zinc-800 hidden md:flex flex-col bg-zinc-950">
                <div className="p-6">
                    <Link href="/" className="font-bold text-2xl tracking-tighter text-white">
                        Admin<span className="text-blue-500">Panel</span>
                    </Link>
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-4">
                    <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors">
                        <LayoutDashboard size={20} />
                        <span>Dashboard</span>
                    </Link>
                    <Link href="/admin/posts/new" className="flex items-center gap-3 px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors">
                        <PlusCircle size={20} />
                        <span>Novo Post</span>
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors">
                        <Users size={20} />
                        <span>Assinantes</span>
                    </Link>
                </nav>

                <div className="p-4 border-t border-zinc-800">
                    <form action="/auth/signout" method="post">
                        {/* We need a signout action usually, but for now linking to home or a button is fine if we implement the action */}
                        <button type="submit" formAction={async () => {
                            'use server'
                            const { signout } = await import('@/app/auth/actions')
                            await signout()
                        }} className="w-full flex items-center gap-3 px-4 py-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors text-sm">
                            <LogOut size={16} />
                            <span>Sair</span>
                        </button>
                    </form>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>
        </div>
    )
}
