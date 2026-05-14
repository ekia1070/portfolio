const OpenAIIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.677l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.843-3.369 2.02-1.168a.076.076 0 0 1 .071 0l4.83 2.782a4.5 4.5 0 0 1-.676 8.119v-5.677a.79.79 0 0 0-.402-.687zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
  </svg>
);

const AnthropicIcon = () => (
  <svg width="18" height="18" viewBox="0 0 100 100" fill="white" aria-hidden="true">
    <g transform="translate(50,66)">
      <rect x="-5.5" y="-42" width="11" height="42" rx="5.5" transform="rotate(-24)" />
      <rect x="-5.5" y="-42" width="11" height="42" rx="5.5" transform="rotate(-12)" />
      <rect x="-5.5" y="-42" width="11" height="42" rx="5.5" transform="rotate(0)"   />
      <rect x="-5.5" y="-42" width="11" height="42" rx="5.5" transform="rotate(12)"  />
      <rect x="-5.5" y="-42" width="11" height="42" rx="5.5" transform="rotate(24)"  />
    </g>
  </svg>
);

const Footer = () => (
  <footer className="border-t border-[var(--line)] bg-[var(--surface)]">
    <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6">

      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
        Built with AI assistance
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">

        <a
          href="https://chatgpt.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface-muted)] px-5 py-3 shadow-[var(--shadow-soft)] transition hover:border-[var(--accent-border)] hover:bg-[var(--surface)]"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0d0d0d]">
            <OpenAIIcon />
          </span>
          <div>
            <p className="text-[11px] leading-none text-[var(--muted)]">OpenAI</p>
            <p className="mt-1 text-sm font-bold text-[var(--foreground)]">Codex</p>
          </div>
        </a>

        <a
          href="https://chatlyai.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface-muted)] px-5 py-3 shadow-[var(--shadow-soft)] transition hover:border-[var(--accent-border)] hover:bg-[var(--surface)]"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#c96442]">
            <AnthropicIcon />
          </span>
          <div>
            <p className="text-[11px] leading-none text-[var(--muted)]">Anthropic</p>
            <p className="mt-1 text-sm font-bold text-[var(--foreground)]">Claude Code</p>
          </div>
        </a>

      </div>

      <p className="mt-8 text-center text-xs text-[var(--muted)]">
        © 2026 SeKwang.dev
      </p>

    </div>
  </footer>
);

export default Footer;
