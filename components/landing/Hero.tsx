import Link from 'next/link'

export default function Hero() {
    return (
        <div className="relative overflow-hidden pt-20 pb-20 lg:pt-32 lg:pb-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        <span className="block text-white">Inteligência Estratégica em</span>
                        <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
                            Criptoativos
                        </span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-zinc-400 mb-10">
                        Maximize seus lucros com análises profundas, guias exclusivos e sinais de mercado. Domine o investimento em criptomoedas com a HOMOBONO Research.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/signup" className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-lg font-bold transition-all shadow-lg hover:shadow-blue-500/25">
                            Começar Agora
                        </Link>
                        <Link href="#learn-more" className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-lg font-bold transition-all border border-white/10">
                            Saiba Mais
                        </Link>
                    </div>
                </div>
            </div>

            {/* Background Glow Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background"></div>
        </div>
    )
}
