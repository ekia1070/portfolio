import { careers } from "@/data/career";

const Career = () => {
  return (
    <section
      id="career"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-6"
    >
      <h2 className="mb-10 flex items-center gap-3 text-3xl font-black text-[var(--foreground)]">
        <span className="h-px w-8 bg-[var(--accent)]" />
        Career
      </h2>

      <div className="space-y-6">
        {careers.map((career) => (
          <article
            key={career.company}
            className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] sm:p-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-2xl font-black text-[var(--foreground)]">
                  {career.company}
                </h3>

                <p className="mt-2 font-semibold text-[var(--accent)]">
                  {career.position}
                </p>
              </div>

              <p className="rounded-md bg-[var(--surface-muted)] px-3 py-1 text-sm font-bold text-[var(--muted)]">
                {career.period}
              </p>
            </div>

            <p className="mt-5 leading-7 text-[var(--muted)]">
              {career.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Career
