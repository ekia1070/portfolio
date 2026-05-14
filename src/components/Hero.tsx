const Hero = () => {
    return (
        <section className="px-5 py-24 sm:px-6 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
            <p className="mb-4 inline-flex rounded-md border border-[var(--line)] bg-white/70 px-3 py-1 text-sm font-bold text-[var(--accent)] shadow-sm">
            Frontend & Backend Developer
            </p>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.08] text-[var(--foreground)] sm:text-6xl">
            React와 Java 기반의
            <br />
            사용자 중심 웹 서비스를 개발합니다
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Java 백엔드 개발 경험을 기반으로
            최근에는 React, Next.js, TypeScript 중심의<br />
            프론트엔드 개발 역량을 강화하며
            다양한 구축 프로젝트를 수행했습니다.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
                href="#projects"
                className="rounded-md bg-[var(--accent)] px-6 py-3 text-center text-sm font-bold text-white shadow-lg shadow-teal-900/10 transition hover:bg-[var(--accent-strong)]"
            >
                프로젝트 보기
            </a>

            <a
                href="#contact"
                className="rounded-md border border-[var(--line)] bg-white/80 px-6 py-3 text-center text-sm font-bold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
                연락하기
            </a>
            </div>
            </div>

            <div className="rounded-lg border border-[var(--line)] bg-[var(--foreground)] p-5 text-sm text-white shadow-[var(--shadow-soft)]">
            <div className="mb-5 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ef4444]" />
                <span className="h-3 w-3 rounded-full bg-[#f59e0b]" />
                <span className="h-3 w-3 rounded-full bg-[#10b981]" />
                <span className="ml-3 font-mono text-xs text-white/50">portfolio.ts</span>
            </div>
            <pre className="overflow-x-auto font-mono leading-7 text-white/90">
{`const developer = {
  stack: ["React", "Next.js", "Java"],
  focus: "usable UI and reliable systems",
  experience: "enterprise projects",
};`}
            </pre>
            </div>
        </div>
        </section>
    );
}

export default Hero
