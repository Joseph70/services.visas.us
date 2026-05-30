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

    const glowSelector = [
      ".info-card",
      ".service-card",
      ".detail-card",
      ".process-card",
      ".benefit-item",
      ".faq-item",
      ".contact-form",
      ".visual-card",
      ".travel-card",
      ".passport-card",
    ].join(",");

    const handleGlowMove = (event) => {
      const target = event.currentTarget;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
      target.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
    };

    const handleGlowLeave = (event) => {
      const target = event.currentTarget;
      const rect = target.getBoundingClientRect();
      const x = Math.min(rect.width, Math.max(0, event.clientX - rect.left));
      const y = Math.min(rect.height, Math.max(0, event.clientY - rect.top));
      target.style.setProperty("--glow-x", `${x}px`);
      target.style.setProperty("--glow-y", `${y}px`);
    };

    const glowElements = Array.from(document.querySelectorAll(glowSelector));
    glowElements.forEach((element) => {
      element.addEventListener("mousemove", handleGlowMove);
      element.addEventListener("mouseleave", handleGlowLeave);
    });

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      observer.disconnect();
      glowElements.forEach((element) => {
        element.removeEventListener("mousemove", handleGlowMove);
        element.removeEventListener("mouseleave", handleGlowLeave);
      });
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
