import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { LogOut, Home, TrendingUp, Settings, CreditCard } from 'lucide-react'

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    return (
        <div className="min-h-screen bg-black flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-zinc-800 hidden md:flex flex-col">
                <div className="p-6">
                    <Link href="/" className="font-bold text-2xl tracking-tighter bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
                        InvestTips
                    </Link>
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-4">
                    <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors">
                        <Home size={20} />
                        <span>Início</span>
                    </Link>
                    <Link href="/dashboard/tips" className="flex items-center gap-3 px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors">
                        <TrendingUp size={20} />
                        <span>Dicas</span>
                    </Link>
                    <Link href="/dashboard/subscription" className="flex items-center gap-3 px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors">
                        <CreditCard size={20} />
                        <span>Assinatura</span>
                    </Link>
                    <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors">
                        <Settings size={20} />
                        <span>Configurações</span>
                    </Link>
                </nav>

                <div className="p-4 border-t border-zinc-800">
                    <div className="flex items-center gap-3 px-4 py-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-emerald-500"></div>
                        <div className="overflow-hidden">
                            <p className="text-sm font-medium text-white truncate">{user.email}</p>
                        </div>
                    </div>
                    <form action="/auth/signout" method="post">
                        {/* We need a signout action usually, but for now linking to home or a button is fine if we implement the action */}
                        <button className="w-full flex items-center gap-3 px-4 py-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors text-sm">
                            <LogOut size={16} />
                            <span>Sair</span>
                        </button>
                    </form>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                {children}
            </main>
        </div>
    )
}
