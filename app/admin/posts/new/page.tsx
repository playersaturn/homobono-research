import { createPost } from '../../actions'

export default function NewPostPage() {
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-8">Criar Nova Dica</h1>

            <form action={createPost} className="space-y-6 bg-zinc-900/50 p-8 rounded-xl border border-zinc-800">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-zinc-300 mb-2">Título</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        className="w-full rounded-lg bg-zinc-800 border-zinc-700 text-white px-4 py-3 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Ex: Análise de BBAS3"
                    />
                </div>

                <div>
                    <label htmlFor="content" className="block text-sm font-medium text-zinc-300 mb-2">Conteúdo</label>
                    <textarea
                        id="content"
                        name="content"
                        required
                        rows={8}
                        className="w-full rounded-lg bg-zinc-800 border-zinc-700 text-white px-4 py-3 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Escreva sua análise aqui..."
                    ></textarea>
                </div>

                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        id="isPremium"
                        name="isPremium"
                        defaultChecked
                        className="w-5 h-5 rounded border-zinc-700 bg-zinc-800 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="isPremium" className="text-sm font-medium text-zinc-300">
                        Conteúdo Exclusivo (Premium)
                    </label>
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                        Publicar Dica
                    </button>
                </div>
            </form>
        </div>
    )
}
