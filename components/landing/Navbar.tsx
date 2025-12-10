import Link from 'next/link'
import Logo from '@/components/Logo'

export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Logo />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="#features" className="text-sm font-medium hover:text-white transition-colors">
                                Recursos
                            </Link>
                            <Link href="#pricing" className="text-sm font-medium hover:text-white transition-colors">
                                Planos
                            </Link>
                            <Link href="/login" className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-sm font-medium transition-all">
                                Entrar
                            </Link>
                            <Link href="/signup" className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-sm font-medium transition-all shadow-lg hover:shadow-blue-500/25">
                                Assinar Agora
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
