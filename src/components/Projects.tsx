"use client";

import { useEffect, useState, type ReactNode } from "react";
import { projectDetails, type ProjectDetail } from "@/data/projectDetails";
import { projects } from "@/data/projects";

type Project = (typeof projects)[number];
type ProjectFilter = "All" | "FE" | "BE" | "Detail";

const INITIAL_ROLE_COUNT = 3;
const projectFilters: ProjectFilter[] = ["All", "FE", "BE", "Detail"];

const getOrganization = (project: Project) => {
  if ("customer" in project) {
    return project.customer;
  }

  if ("company" in project) {
    return project.company;
  }

  return undefined;
};

const getProjectType = (project: Project) => {
  return "type" in project ? project.type : undefined;
};

const getProjectDetailSeq = (project: Project) => {
  return "detailSeq" in project ? project.detailSeq : undefined;
};

const isProjectVisible = (project: Project, selectedFilter: ProjectFilter) => {
  if (selectedFilter === "All") {
    return true;
  }

  if (selectedFilter === "Detail") {
    return "hasDetail" in project && project.hasDetail === "Y";
  }

  const type = getProjectType(project);

  if (!type) {
    return true;
  }

  const segments = type.split("/");

  if (segments.length !== 2) {
    return true;
  }

  return segments[segments.length - 1].trim() === selectedFilter;
};

const ProjectDetailModal = ({
  detail,
  projectTitle,
  onClose,
}: {
  detail?: ProjectDetail;
  projectTitle: string;
  onClose: () => void;
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      role="presentation"
      className="fixed inset-0 z-[80] flex items-end justify-center bg-black/60 px-4 py-6 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-detail-title"
        className="max-h-[86vh] w-full max-w-3xl overflow-y-auto rounded-lg border border-[var(--line)] bg-[var(--surface)] shadow-[var(--shadow-soft)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-[var(--accent-border)] bg-[var(--surface-muted)] p-6">
          <div>
            <p className="text-sm font-bold text-[var(--accent)]">Project Detail</p>
            <h3
              id="project-detail-title"
              className="mt-2 text-2xl font-black leading-snug text-[var(--foreground)]"
            >
              {detail?.title ?? projectTitle}
            </h3>
          </div>

          <button
            type="button"
            aria-label="Close project detail"
            onClick={onClose}
            className="shrink-0 cursor-pointer rounded-md border border-[var(--line)] px-3 py-1.5 text-sm font-bold text-[var(--muted)] transition hover:border-[var(--accent-border)] hover:bg-[var(--surface-muted)] hover:text-[var(--foreground)]"
          >
            닫기
          </button>
        </div>

        {detail ? (
          <div className="space-y-8 p-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <DetailMeta label="기간" value={detail.period} />
              <DetailMeta label="고객사" value={detail.customer} />
              <DetailMeta label="역할" value={detail.role} />
            </div>

            <DetailSection title="사용 기술">
              <div className="flex flex-wrap gap-2">
                {detail.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-[var(--line)] bg-[var(--surface-muted)] px-3 py-1 text-sm font-semibold text-[var(--accent)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </DetailSection>

            <DetailSection title="개발환경">
              <span className="inline-flex rounded-md border border-[var(--line)] bg-[var(--surface-muted)] px-3 py-1 text-sm font-bold text-[var(--muted)]">
                {detail.environment}
              </span>
            </DetailSection>

            <DetailSection title="담당 기능">
              <DetailList items={detail.responsibilities} />
            </DetailSection>

            <DetailSection title="문제 해결 경험">
              <div className="space-y-5">
                <ProblemBlock title="문제 상황" items={detail.problemSolving.situation} />
                <ProblemBlock title="해결 방법" items={detail.problemSolving.solution} />
                <ProblemBlock title="결과" items={detail.problemSolving.result} />
              </div>
            </DetailSection>
          </div>
        ) : (
          <div className="p-6">
            <p className="rounded-lg border border-[var(--line)] bg-[var(--surface-muted)] p-5 leading-7 text-[var(--muted)]">
              이 프로젝트는 상세 표시 대상으로 설정되어 있습니다. 상세 데이터는
              `src/data/projectDetails.ts`에 detailSeq를 key로 추가하면 이 모달에
              자동으로 표시됩니다.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

const DetailMeta = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-lg border border-[var(--line)] bg-[var(--surface-muted)] p-4">
    <p className="text-xs font-black text-[var(--accent-warm)]">{label}</p>
    <p className="mt-2 font-bold leading-6 text-[var(--foreground)]">{value}</p>
  </div>
);

const DetailSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section>
    <h4 className="mb-3 text-lg font-black text-[var(--foreground)]">
      {title}
    </h4>
    {children}
  </section>
);

const DetailList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 text-sm leading-7 text-[var(--muted)]">
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const ProblemBlock = ({ title, items }: { title: string; items: string[] }) => (
  <div className="rounded-lg border border-[var(--line)] bg-[var(--surface-muted)] p-4">
    <p className="mb-2 text-sm font-black text-[var(--accent)]">
      {title}
    </p>
    <DetailList items={items} />
  </div>
);

const ProjectCard = ({
  project,
  onOpenDetail,
}: {
  project: Project;
  onOpenDetail: (project: Project) => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const organization = getOrganization(project);
  const type = "type" in project ? project.type : undefined;
  const hasDetail = "hasDetail" in project && project.hasDetail === "Y";
  const techStack = "techStack" in project ? project.techStack : [];
  const environment = "environment" in project ? project.environment : [];
  const hasMoreRoles = project.role.length > INITIAL_ROLE_COUNT;
  const visibleRoles = isExpanded
    ? project.role
    : project.role.slice(0, INITIAL_ROLE_COUNT);

  return (
    <article
      className={`rounded-lg border bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] transition duration-200 hover:-translate-y-1 hover:border-[var(--accent-border)] ${
        hasDetail ? "border-[var(--accent-border)]" : "border-[var(--line)]"
      }`}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          {project.period && (
            <p className="mb-3 text-xs font-black uppercase text-[var(--accent-warm)]">
              {project.period}
            </p>
          )}

          <h3 className="text-xl font-black leading-snug text-[var(--foreground)]">
            {project.title}
          </h3>
        </div>

        <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
          {hasDetail && (
            <span className="w-fit whitespace-nowrap rounded-md bg-[var(--accent-strong)] px-3 py-1 text-xs font-bold text-white">
              Detail
            </span>
          )}

          {type && (
            <span className="w-fit whitespace-nowrap rounded-md border border-[var(--line)] bg-[var(--surface-muted)] px-3 py-1 text-xs font-bold text-[var(--muted)]">
              {type}
            </span>
          )}
        </div>
      </div>

      {organization && (
        <p className="mt-3 text-sm font-semibold text-[var(--muted)]">
          {organization}
        </p>
      )}

      <ul className="mt-5 space-y-2 border-t border-[var(--line)] pt-5 text-sm leading-7 text-[var(--muted)]">
        {visibleRoles.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-3 min-h-8">
        {hasMoreRoles && (
          <button
            type="button"
            aria-expanded={isExpanded}
            onClick={() => setIsExpanded((current) => !current)}
            className="rounded-md border border-[var(--line)] bg-[var(--surface-muted)] px-3 py-1.5 text-xs font-bold text-[var(--accent)] transition hover:border-[var(--accent-border)]"
          >
            {isExpanded
              ? "접기"
              : `More +${project.role.length - INITIAL_ROLE_COUNT}`}
          </button>
        )}
      </div>

      {techStack.length > 0 && (
        <div className="mt-2">
          <p className="mb-2 text-xs font-black text-[var(--foreground)]">
            Tech Stack
          </p>
          <div className="flex min-h-[5rem] content-start flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-[var(--line)] bg-[var(--surface-muted)] px-3 py-1 text-sm font-semibold text-[var(--accent)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {environment.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {environment.map((item) => (
            <span
              key={item}
              className="rounded-md border border-[var(--line)] bg-[var(--surface-muted)] px-3 py-1 text-xs font-bold text-[var(--muted)]"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      {hasDetail && (
        <button
          type="button"
          onClick={() => onOpenDetail(project)}
          className="mt-5 w-full cursor-pointer rounded-md border border-[var(--accent-border)] bg-[var(--surface-muted)] px-4 py-2 text-sm font-bold text-[var(--accent)] transition hover:bg-[var(--accent-strong)] hover:text-white"
        >
          상세 보기
        </button>
      )}
    </article>
  );
};

const parseStartDate = (period: string) => {
  const match = period.match(/^(\d{4})\.(\d{2})/);
  if (!match) return 0;
  return parseInt(match[1]) * 100 + parseInt(match[2]);
};

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState<ProjectFilter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filteredProjects = projects
    .slice()
    .sort((a, b) => parseStartDate(b.period) - parseStartDate(a.period))
    .filter((project) => isProjectVisible(project, selectedFilter));
  const selectedDetailSeq = selectedProject
    ? getProjectDetailSeq(selectedProject)
    : undefined;
  const selectedDetail = selectedDetailSeq
    ? projectDetails[selectedDetailSeq]
    : undefined;

  return (
    <section id="projects" className="relative overflow-hidden">
      {/* Section glow — cool blue, top-center */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -top-40 h-[300px] w-[700px] -translate-x-1/2 bg-[var(--accent)] opacity-[0.04] blur-[80px]"
      />

      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="flex items-center gap-3 text-3xl font-black text-[var(--foreground)]">
          <span className="h-px w-8 bg-[var(--accent)]" />
          Projects
        </h2>

        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-sm font-bold text-[var(--muted)] shadow-sm">
            {filteredProjects.length} Projects
          </span>

          <fieldset
            aria-label="Project type filter"
            className="flex w-fit rounded-lg border border-[var(--line)] bg-[var(--surface)] p-1 shadow-sm"
          >
            {projectFilters.map((filter) => (
              <label
                key={filter}
                className={`cursor-pointer rounded-md px-4 py-2 text-sm font-bold transition ${
                  selectedFilter === filter
                    ? "bg-[var(--accent-strong)] text-white shadow-sm"
                    : "text-[var(--muted)] hover:text-[var(--accent)]"
                }`}
              >
                <input
                  type="radio"
                  name="project-filter"
                  value={filter}
                  checked={selectedFilter === filter}
                  onChange={() => setSelectedFilter(filter)}
                  className="sr-only"
                />
                {filter}
              </label>
            ))}
          </fieldset>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={`${project.title}-${project.period}`}
            project={project}
            onOpenDetail={setSelectedProject}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectDetailModal
          detail={selectedDetail}
          projectTitle={selectedProject.title}
          onClose={() => setSelectedProject(null)}
        />
      )}
      </div>
    </section>
  );
}

export default Projects
