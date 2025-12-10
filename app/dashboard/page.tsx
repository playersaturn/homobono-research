import { createClient } from '@/utils/supabase/server'
import { Crown, ArrowRight, Lock } from '@phosphor-icons/react/dist/ssr' // Using SSR import for Phosphor in Server Components if needed, or just standard
import Link from 'next/link'
import SubscribeButton from '@/components/dashboard/SubscribeButton'
import CryptoTicker from '@/components/dashboard/CryptoTicker'

export default async function DashboardPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    // Fetch user profile to check subscription
    const { data: profile } = await supabase
        .from('profiles')
        .select('is_subscribed')
        .eq('id', user?.id)
        .single()

    // ADMIN OVERRIDE
    const ADMIN_EMAILS = ['eduardobuennogm@gmail.com', 'admin@admin.com']
    const isSubscribed = profile?.is_subscribed || (user?.email && ADMIN_EMAILS.includes(user.email))

    const { data: posts } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-white tracking-tight mb-2">Dashboard</h1>
                <p className="text-zinc-400 text-lg">Bem-vindo à sua área de investidor.</p>
            </header>

            {/* Crypto Ticker Section */}
            <section className="mb-8">
                <CryptoTicker />
            </section>

            {!isSubscribed && (
                <div className="glass-card rounded-2xl p-8 mb-12 relative overflow-hidden group border-white/10">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Crown size={120} weight="duotone" />
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                            <Crown className="text-yellow-500" weight="fill" />
                            Desbloqueie o Potencial Máximo
                        </h2>
                        <p className="text-zinc-300 mb-6 max-w-2xl text-lg">
                            Assine o plano Premium para ter acesso a análises exclusivas, recomendações semanais de carteira e muito mais.
                        </p>
                        <SubscribeButton />
                    </div>
                </div>
            )}

            {isSubscribed && (
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-6">Materiais Exclusivos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="glass-card rounded-2xl p-6 flex flex-col hover:border-blue-500/50 transition-all group">
                            <div className="flex items-center justify-between mb-4">
                                <span className="bg-blue-500/20 text-blue-400 text-xs font-bold px-2 py-1 rounded border border-blue-500/30 backdrop-blur-sm">EBOOK</span>
                                <Lock size={16} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" weight="bold" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Guia Mestre Crypto</h3>
                            <p className="text-zinc-400 text-sm mb-4 flex-1">
                                Domine os fundamentos e estratégias avançadas do mercado de criptomoedas com este guia completo.
                            </p>
                            <a
                                href="/crypto-guide-placeholder.txt"
                                target="_blank"
                                download
                                className="glass-button block w-full text-center py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold transition-all backdrop-blur-md"
                            >
                                Download PDF
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <h2 className="text-2xl font-bold text-white mb-6">Últimas Dicas</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts?.map((post) => (
                    <div key={post.id} className="glass-card rounded-2xl p-6 hover:border-zinc-500/50 transition-all hover:translate-y-[-2px] flex flex-col h-full group">
                        <div className="flex justify-between items-start mb-4">
                            <span className={`text-xs font-bold px-2.5 py-1 rounded-full border backdrop-blur-sm ${post.is_premium ? 'bg-purple-500/10 text-purple-300 border-purple-500/30' : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'}`}>
                                {post.is_premium ? 'PREMIUM' : 'GRÁTIS'}
                            </span>
                            <span className="text-xs text-zinc-500">{new Date(post.created_at).toLocaleDateString()}</span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                        <p className="text-zinc-400 text-sm mb-6 line-clamp-3 md:line-clamp-4 flex-1">
                            {post.content}
                        </p>

                        <Link href={`/dashboard/tips/${post.id}`} className="inline-flex items-center text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors mt-auto">
                            Ler análise completa <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" weight="bold" />
                        </Link>
                    </div>
                ))}

                {!posts?.length && (
                    <div className="col-span-full py-12 text-center border border-dashed border-zinc-800 rounded-2xl bg-zinc-900/20">
                        <p className="text-zinc-500">Nenhuma dica publicada ainda.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
