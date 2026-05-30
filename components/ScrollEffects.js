"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const updateProgress = () => {
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pageHeight > 0 ? window.scrollY / pageHeight : 0;
      document.documentElement.style.setProperty(
        "--scroll-progress",
        String(Math.min(1, Math.max(0, progress)))
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
