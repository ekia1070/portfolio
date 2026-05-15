import { skills } from "@/data/skills";

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden">
      {/* Section glow — purple, bottom-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 h-[450px] w-[450px] rounded-full bg-[var(--accent-strong)] opacity-[0.07] blur-[100px]"
      />

      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6">
        <h2 className="mb-10 flex items-center gap-3 text-3xl font-black text-[var(--foreground)]">
          <span className="h-px w-8 bg-[var(--accent)]" />
          Skills
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <SkillCard title="Main" items={skills.main} />
          <SkillCard title="Experienced" items={skills.experienced} />
        </div>
      </div>
    </section>
  );
}

const SkillCard = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => {
  return (
    <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]">
      <h3 className="mb-4 text-xl font-black text-[var(--foreground)]">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-[var(--line)] bg-[var(--surface-muted)] px-3 py-1 text-sm font-semibold text-[var(--accent)]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills
