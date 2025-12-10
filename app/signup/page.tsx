import Link from 'next/link'
import { signup } from '@/app/auth/actions'
import AuthBackdrop from '@/components/auth/AuthBackdrop'
import Logo from '@/components/Logo'

export default async function SignupPage(props: { searchParams: Promise<{ error?: string; message?: string }> }) {
    const searchParams = await props.searchParams
    const error = searchParams.error
    const message = searchParams.message

    return (
        <AuthBackdrop>
            <div className="space-y-8 bg-zinc-900/80 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
                <div className="flex flex-col items-center text-center">
                    <Link href="/">
                        <Logo />
                    </Link>
                    <h2 className="mt-6 text-2xl font-bold text-white">Crie sua conta</h2>
                    <p className="mt-2 text-sm text-zinc-400">Comece sua jornada de investimentos</p>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 text-sm text-red-500 text-center">
                        {error}
                    </div>
                )}

                {message && (
                    <div className="bg-emerald-500/10 border border-emerald-500/50 rounded-lg p-4 text-sm text-emerald-500 text-center">
                        {message}
                    </div>
                )}

                <form className="mt-8 space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-zinc-300">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="mt-1 block w-full rounded-lg bg-zinc-800/50 border-zinc-700 text-white focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-4 py-3 placeholder-zinc-500 transition-colors"
                                placeholder="seu@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-zinc-300">Senha</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="mt-1 block w-full rounded-lg bg-zinc-800/50 border-zinc-700 text-white focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-4 py-3 placeholder-zinc-500 transition-colors"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <button
                        formAction={signup}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg shadow-emerald-500/20 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all hover:scale-[1.02]"
                    >
                        Criar Conta
                    </button>
                    <p className="text-xs text-center text-zinc-500">
                        Ao se registrar, você concorda com nossos Termos de Uso.
                    </p>
                </form>

                <div className="text-center">
                    <p className="text-sm text-zinc-400">
                        Já tem uma conta?{' '}
                        <Link href="/login" className="font-medium text-blue-400 hover:text-blue-300 transition-colors">
                            Faça login
                        </Link>
                    </p>
                </div>
            </div>
        </AuthBackdrop>
    )
}
