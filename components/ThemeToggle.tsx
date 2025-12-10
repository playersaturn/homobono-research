'use client'

import { Moon, Sun } from '@phosphor-icons/react'
import { useTheme } from '@/components/ThemeProvider'

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="fixed top-4 right-4 z-[9999] p-2 rounded-full glass-panel bg-white/10 hover:bg-white/20 transition-all text-white backdrop-blur-md border border-white/20"
            aria-label="Toggle Theme"
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" weight="bold" />
            <Moon className="absolute top-2 left-2 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" weight="bold" />
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}
