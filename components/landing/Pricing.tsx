import Link from 'next/link'

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Invista em você</h2>
                    <p className="text-zinc-400 text-lg">Comece sua jornada de investidor com o melhor conteúdo.</p>
                </div>

                <div className="max-w-lg mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all shadow-2xl relative">
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">POPULAR</div>

                    <h3 className="text-2xl font-bold text-white mb-2">Assinatura Premium</h3>
                    <p className="text-zinc-400 text-sm mb-6">Acesso completo a todos os recursos</p>

                    <div className="flex items-baseline mb-8">
                        <span className="text-5xl font-bold text-white">R$ 29,90</span>
                        <span className="text-zinc-500 ml-2">/mês</span>
                    </div>

                    <ul className="space-y-4 mb-8 text-zinc-300 text-sm">
                        <li className="flex items-center">
                            <svg className="w-5 h-5 text-emerald-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            Dicas de investimento semanais
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 text-emerald-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            Análises de mercado aprofundadas
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 text-emerald-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            Acesso ao histórico de relatórios
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 text-emerald-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            Suporte prioritário
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 text-emerald-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span className="font-bold text-blue-400">PDF: Guia Mestre Crypto</span>
                        </li>
                    </ul>

                    <Link href="/signup" className="block w-full text-center py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg hover:shadow-blue-500/25">
                        Assinar Agora
                    </Link>
                    <p className="mt-4 text-xs text-center text-zinc-500">Cancele quando quiser.</p>
                </div>
            </div>
        </section>
    )
}
