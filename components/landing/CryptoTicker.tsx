'use client'

import { useEffect, useState } from 'react'

interface Coin {
    id: string
    symbol: string
    name: string
    image: string
    current_price: number
    price_change_percentage_24h: number
}

export default function CryptoTicker() {
    const [coins, setCoins] = useState<Coin[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCrypto = async () => {
            try {
                // Fetching more coins for a longer ticker
                const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=10&page=1&sparkline=false')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setCoins(data)
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        fetchCrypto()
        const interval = setInterval(fetchCrypto, 60000)
        return () => clearInterval(interval)
    }, [])

    // Fallback static data if loading or error, to prevent empty bar
    const displayCoins = coins.length > 0 ? coins : [
        { symbol: 'BTC', name: 'Bitcoin', current_price: 0, price_change_percentage_24h: 0 },
        { symbol: 'ETH', name: 'Ethereum', current_price: 0, price_change_percentage_24h: 0 },
        { symbol: 'SOL', name: 'Solana', current_price: 0, price_change_percentage_24h: 0 },
    ] as Coin[]

    return (
        <div className="w-full bg-[#050505] border-y border-white/5 overflow-hidden py-4 relative z-10">
            {/* Gradient Masks for fading edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

            <div className="flex animate-scroll hover:[animation-play-state:paused] whitespace-nowrap">
                {/* 
                   Using 3 sets instead of 4 to reduce DOM count.
                */}
                {[...displayCoins, ...displayCoins, ...displayCoins].map((coin, index) => (
                    <div key={`${coin.id || coin.symbol}-${index}`} className="flex items-center mx-8 space-x-3 cursor-default transform-gpu">
                        {coin.image && <img src={coin.image} alt={coin.name} className="w-6 h-6 rounded-full opacity-90" loading="lazy" decoding="async" />}
                        <div className="flex flex-col">
                            <div className="flex items-baseline space-x-2">
                                <span className="font-bold text-zinc-200 text-sm tracking-wide">{coin.symbol?.toUpperCase()}</span>
                                <span className={`text-xs font-bold flex items-center ${coin.price_change_percentage_24h >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                                    {coin.price_change_percentage_24h > 0 ? '+' : ''}{coin.price_change_percentage_24h?.toFixed(2)}%
                                </span>
                            </div>
                            <span className="text-zinc-500 text-xs font-mono tracking-tighter">
                                {coin.current_price ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(coin.current_price) : '---'}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translate3d(0, 0, 0); }
                    100% { transform: translate3d(-33.3333%, 0, 0); }
                }
                .animate-scroll {
                    animation: scroll 45s linear infinite;
                    will-change: transform;
                    /* Strict GPU Layer Promotion */
                    backface-visibility: hidden;
                    perspective: 1000px;
                }
            `}</style>
        </div>
    )
}
