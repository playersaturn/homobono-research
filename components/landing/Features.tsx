export default function Features() {
    const features = [
        {
            title: "Análises de Altcoins",
            description: "Relatórios detalhados sobre projetos promissores e tendências do mercado cripto.",
            icon: "📊"
        },
        {
            title: "Sinais de Mercado",
            description: "Alertas precisos de compra e venda baseados em análise técnica e fundamentalista.",
            icon: "⚡"
        },
        {
            title: "Estratégias DeFi",
            description: "Aprenda a rentabilizar seu capital com estratégias avançadas de Finanças Descentralizadas.",
            icon: "💎"
        }
    ]

    return (
        <section id="features" className="py-24 bg-zinc-900/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Por que assinar nossa newsletter?</h2>
                    <p className="text-zinc-400 text-lg">Tudo o que você precisa para tomar as melhores decisões de investimento.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all hover:-translate-y-1">
                            <div className="text-4xl mb-6">{feature.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-zinc-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
