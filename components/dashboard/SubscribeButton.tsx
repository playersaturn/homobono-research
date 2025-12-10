'use client'

import { useState } from 'react'
import { ArrowRight, Crown } from '@phosphor-icons/react'

export default function SubscribeButton() {
    const [loading, setLoading] = useState(false)

    const handleSubscribe = async () => {
        setLoading(true)
        try {
            const response = await fetch('/api/stripe/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    priceId: 'price_1234567890', // Mock price ID
                }),
            })

            const data = await response.json()

            if (data.url) {
                window.location.href = data.url
            } else if (data.sessionId) {
                console.log("Session created:", data.sessionId)
            }
        } catch (error) {
            console.error('Error:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <button
            onClick={handleSubscribe}
            disabled={loading}
            className="glass-button inline-flex items-center gap-2 bg-blue-600/90 hover:bg-blue-500/90 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 backdrop-blur-md disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
        >
            {loading ? 'Processando...' : (
                <>
                    Assinar Premium <ArrowRight size={18} />
                </>
            )}
        </button>
    )
}
