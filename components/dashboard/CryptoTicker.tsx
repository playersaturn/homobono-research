'use client'

import { useEffect, useState } from 'react'
import { TrendingUp, TrendingDown, RefreshCcw } from 'lucide-react'

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
    const [error, setError] = useState(false)

    const fetchCrypto = async () => {
        setLoading(true)
        setError(false)
        try {
            const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=5&page=1&sparkline=false')
            if (!res.ok) throw new Error('Falha ao buscar dados')
            const data = await res.json()
            setCoins(data)
        } catch (err) {
            console.error(err)
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCrypto()
        // Refresh every 60 seconds
        const interval = setInterval(fetchCrypto, 60000)
        return () => clearInterval(interval)
    }, [])

    if (loading && coins.length === 0) {
        return (
            <div className="glass-card rounded-2xl p-6 h-[100px] flex items-center justify-center">
                <div className="animate-pulse flex space-x-4">
                    <div className="h-2 w-20 bg-zinc-700 rounded"></div>
                    <div className="h-2 w-20 bg-zinc-700 rounded"></div>
                    <div className="h-2 w-20 bg-zinc-700 rounded"></div>
                </div>
            </div>
        )
    }

    if (error && coins.length === 0) {
        return (
            <div className="glass-card rounded-2xl p-6 h-[100px] flex items-center justify-center text-red-400">
                <p className="text-sm flex items-center gap-2">
                    Erro ao carregar mercado
                    <button onClick={fetchCrypto} className="text-white hover:text-blue-400 transition-colors">
                        <RefreshCcw size={14} />
                    </button>
                </p>
            </div>
        )
    }

    return (
        <div className="glass-card rounded-2xl p-1 overflow-x-auto no-scrollbar scroll-smooth">
            <div className="flex justify-between items-center min-w-[700px] divide-x divide-white/5">
                {coins.map((coin) => (
                    <div key={coin.id} className="flex-1 px-6 py-4 flex items-center justify-between min-w-[140px] hover:bg-white/5 transition-colors cursor-default group">
                        <div className="flex items-center gap-3">
                            <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full shadow-lg" />
                            <div className="flex flex-col">
                                <span className="font-bold text-white text-sm uppercase tracking-wider">{coin.symbol}</span>
                                <span className="text-xs text-zinc-400">{coin.name}</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-sm font-bold text-white">
                                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(coin.current_price)}
                            </span>
                            <span className={`text-xs font-bold flex items-center ${coin.price_change_percentage_24h >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                                {coin.price_change_percentage_24h?.toFixed(2)}%
                                {coin.price_change_percentage_24h >= 0 ? <TrendingUp size={12} className="ml-1" /> : <TrendingDown size={12} className="ml-1" />}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
