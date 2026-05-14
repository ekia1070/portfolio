const Contacts = () => {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-6"
    >
      <h2 className="mb-8 flex items-center gap-3 text-3xl font-black text-[var(--foreground)]">
        <span className="h-px w-8 bg-[var(--accent)]" />
        Contact
      </h2>

      <div className="rounded-lg border border-[var(--accent-border)] bg-[var(--surface-muted)] p-6 shadow-[var(--shadow-soft)] sm:p-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-bold text-[var(--accent)]">
              Let's build something useful
            </p>
            <p className="mt-4 max-w-2xl text-2xl font-black leading-snug text-[var(--foreground)] sm:text-3xl">
              새로운 프로젝트와 협업 기회에 관심이 있습니다.
            </p>
            <p className="mt-4 leading-8 text-[var(--muted)]">
              프론트엔드 개발, 백엔드 개발, 프로젝트 협업 관련해
              아래 이메일로 편하게 연락 부탁드립니다.
            </p>
          </div>

          <a
            href="mailto:your-email@gmail.com"
            className="inline-flex rounded-md bg-[var(--accent-strong)] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[var(--accent-strong)]/20 transition hover:bg-[var(--accent)]"
          >
            이메일 보내기
          </a>
        </div>

        <div className="mt-8 grid gap-4 border-t border-[var(--line)] pt-6 text-sm text-[var(--muted)] sm:grid-cols-2">
          <p>
            Email
            <br />
            <a
              href="mailto:your-email@gmail.com"
              className="font-semibold text-[var(--foreground)] transition hover:text-[var(--accent)]"
            >
              ekia1070@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contacts
