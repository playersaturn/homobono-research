'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

export default function AuthBackdrop({ children }: { children: React.ReactNode }) {
    const router = useRouter()

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            router.push('/')
        }
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm cursor-pointer"
            onClick={handleBackdropClick}
        >
            <div className="w-full max-w-md cursor-default">
                {children}
            </div>
        </div>
    )
}
