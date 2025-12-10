export default function Logo({ className = "" }: { className?: string }) {
    return (
        <div className={`flex flex-col items-center leading-none select-none ${className}`}>
            <span className="font-bold text-2xl tracking-tighter bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text uppercase">
                HOMOBONO
            </span>
            <span className="text-[0.6rem] font-bold tracking-[0.3em] text-zinc-400 uppercase mt-0.5 ml-0.5">
                Research
            </span>
        </div>
    )
}
