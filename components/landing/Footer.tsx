import Logo from '@/components/Logo'

export default function Footer() {
    return (
        <footer className="bg-black border-t border-zinc-900 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <Logo className="items-start" />
                        <p className="mt-4 text-xs text-zinc-500">
                            Simplificando o mundo dos investimentos para você.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Plataforma</h4>
                        <ul className="space-y-2 text-sm text-zinc-500">
                            <li><a href="#" className="hover:text-white transition-colors">Login</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Assinar</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-zinc-500">
                            <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Contato</h4>
                        <p className="text-sm text-zinc-500">suporte@investtips.com</p>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-zinc-900">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-zinc-500 text-sm mb-4 md:mb-0">
                            © {new Date().getFullYear()} HOMOBONO Research. Todos os direitos reservados.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                            </a>
                            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 3.808-.06h.63zm1.616 1.967c-.234-.006-.472-.009-.724-.009s-.49.003-.724.009c-2.583.08-3.955.334-4.881.694-.652.253-1.124.551-1.618 1.045-.494.494-.792.966-1.045 1.618-.36.926-.614 2.298-.694 4.881-.006.234-.009.472-.009.724s.003.49.009.724c.08 2.583.334 3.955.694 4.881.253.652.551 1.124 1.045 1.618.494.494.966.792 1.618 1.045.926.36 2.298.614 4.881.694.234.006.472.009.724.009s.49-.003.724-.009c2.583-.08 3.955-.334 4.881-.694.652-.253 1.124-.551 1.618-1.045.494-.494.792-.966 1.045-1.618.36-.926.614-2.298.694-4.881.006-.234.009-.472.009-.724 0-.252-.003-.49-.009-.724-.08-2.583-.334-3.955-.694-4.881-.253-.652-.551-1.124-1.045-1.618-.494-.494-.966-.792-1.618-1.045-.926-.36-2.298-.614-4.881-.694zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
