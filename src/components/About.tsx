'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const About = () => {
  const { ref, isVisible } = useScrollReveal();

  const strengths = [
    {
      title: "Full Process Experience",
      description:
        "요구사항 정의부터 공통 모듈 설계, 시스템 연계, 일정 관리까지 개발 전반을 폭넓게 경험했습니다.",
    },
    {
      title: "Frontend Growth",
      description:
        "React, Next.js, TypeScript 기반으로 사용자 흐름을 고려한 화면과 UI 로직 구현 역량을 강화하고 있습니다.",
    },
    {
      title: "Agile Friendly",
      description:
        "다양한 업무 시스템 구축 경험을 바탕으로 기능 간 연관성과 업무 흐름을 빠르게 이해합니다.",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-[var(--surface)]">
      {/* Section glow — indigo, top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[var(--accent-strong)] opacity-[0.06] blur-[120px]"
      />

      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6">
        <h2 className="mb-8 flex items-center gap-3 text-3xl font-black text-[var(--foreground)]">
          <span className="h-px w-8 bg-[var(--accent)]" />
          About
        </h2>

        <div ref={ref} className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className={`reveal${isVisible ? ' visible' : ''} rounded-lg border border-[var(--accent-border)] bg-[var(--surface-muted)] p-6 shadow-[var(--shadow-soft)] sm:p-8`}>
            <p className="text-sm font-bold text-[var(--accent)]">
              Backend foundation, frontend growth
            </p>
            <p className="mt-5 text-2xl font-black leading-snug text-[var(--foreground)] sm:text-3xl">
              업무를 이해하고, 사용자가 쓰기 편한 웹 서비스를 만듭니다.
            </p>
            <p className="mt-5 leading-8 text-[var(--muted)]">
              Java/Spring 기반 백엔드 경험을 바탕으로 다양한 기업 프로젝트를
              수행해왔고, 최근에는 React, Next.js, TypeScript 중심의
              프론트엔드 개발에 집중하고 있습니다.
            </p>
          </div>

          <div className="grid gap-4">
            {strengths.map((strength, i) => (
              <article
                key={strength.title}
                className={`reveal delay-${i + 1}${isVisible ? ' visible' : ''} rounded-lg border border-[var(--line)] bg-[var(--surface-muted)] p-6 shadow-[var(--shadow-soft)]`}
              >
                <h3 className="text-lg font-black text-[var(--foreground)]">
                  {strength.title}
                </h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">
                  {strength.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
