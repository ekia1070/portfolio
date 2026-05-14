"use client";

import { useEffect, useState } from "react";

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-md border border-[var(--line)] bg-[var(--surface-muted)] text-[var(--foreground)] shadow-[var(--shadow-soft)] transition duration-200 hover:-translate-y-1 hover:border-[var(--accent-border)] hover:bg-[var(--accent-strong)] hover:text-white focus-visible:outline-[var(--accent)] sm:bottom-8 sm:right-8 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <span className="text-xl font-black leading-none">↑</span>
    </button>
  );
};

export default ScrollTopButton;
