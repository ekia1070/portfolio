const Header = () => {
    return (
        <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
            <a href="#" className="text-base font-black text-[var(--foreground)] sm:text-xl">
            SeKwang<span className="text-[var(--accent)]">.dev</span>
            </a>

            <nav className="hidden gap-6 text-sm font-semibold text-[var(--muted)] sm:flex">
            <a className="transition hover:text-[var(--accent)]" href="#about">About</a>
            <a className="transition hover:text-[var(--accent)]" href="#projects">Projects</a>
            <a className="transition hover:text-[var(--accent)]" href="#career">Career</a>
            <a className="transition hover:text-[var(--accent)]" href="#skills">Skills</a>
            <a className="transition hover:text-[var(--accent)]" href="#contact">Contact</a>
            </nav>
        </div>
        </header>
    );
}

export default Header
