import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { Plus } from '@phosphor-icons/react/dist/ssr'

export default async function AdminDashboard() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    const ADMIN_EMAILS = ['eduardobuennogm@gmail.com', 'admin@admin.com']

    if (!user?.email || !ADMIN_EMAILS.includes(user.email)) {
        redirect('/dashboard')
    }

    const { data: posts } = await supabase.from('posts').select('*').order('created_at', { ascending: false }).limit(5)

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-4xl font-bold text-white tracking-tight">Dashboard Admin</h1>
                <Link href="/admin/posts/new" className="glass-button bg-blue-600/80 hover:bg-blue-500/90 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all backdrop-blur-md shadow-lg shadow-blue-500/20">
                    Nova Dica
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="glass-card p-6 rounded-2xl">
                    <h3 className="text-zinc-400 text-sm font-medium mb-1">Total Assinantes</h3>
                    <p className="text-3xl font-bold text-white">0</p>
                </div>
                <div className="glass-card p-6 rounded-2xl">
                    <h3 className="text-zinc-400 text-sm font-medium mb-1">Receita Mensal</h3>
                    <p className="text-3xl font-bold text-emerald-400">R$ 0,00</p>
                </div>
                <div className="glass-card p-6 rounded-2xl">
                    <h3 className="text-zinc-400 text-sm font-medium mb-1">Dicas Publicadas</h3>
                    <p className="text-3xl font-bold text-blue-400">{posts?.length || 0}</p>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">Últimas Publicações</h2>
            <div className="glass-card rounded-2xl overflow-hidden border-white/10">
                <table className="w-full text-left">
                    <thead className="bg-white/5 text-zinc-400 text-xs uppercase backdrop-blur-sm">
                        <tr>
                            <th className="px-6 py-4 font-bold">Título</th>
                            <th className="px-6 py-4 font-bold">Status</th>
                            <th className="px-6 py-4 font-bold">Data</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                        {posts?.map((post) => (
                            <tr key={post.id} className="text-sm text-zinc-300 hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 font-medium">{post.title}</td>
                                <td className="px-6 py-4">
                                    {post.is_premium ? (
                                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-300 border border-purple-500/20">
                                            Premium
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-zinc-500/10 text-zinc-400 border border-zinc-500/20">
                                            Grátis
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-4">{new Date(post.created_at).toLocaleDateString()}</td>
                            </tr>
                        ))}
                        {!posts?.length && (
                            <tr>
                                <td colSpan={3} className="px-6 py-12 text-center text-zinc-500">
                                    Nenhuma publicação encontrada.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
