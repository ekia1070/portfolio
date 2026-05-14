import { skills } from "@/data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-6"
    >
      <h2 className="mb-10 text-3xl font-black text-[var(--foreground)]">
        Skills
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <SkillCard
          title="Main"
          items={skills.main}
        />

        <SkillCard
          title="Experienced"
          items={skills.experienced}
        />
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
    <div className="rounded-lg border border-[var(--line)] bg-white/80 p-6 shadow-[var(--shadow-soft)]">
      <h3 className="mb-4 text-xl font-black text-[var(--foreground)]">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-md bg-[var(--surface-muted)] px-3 py-1 text-sm font-semibold text-[var(--accent-strong)]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills
