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

    const footer = document.querySelector(".footer");
    let lastParticleTime = 0;

    const handleFooterParticles = (event) => {
      if (!footer || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const now = window.performance.now();
      if (now - lastParticleTime < 26) {
        return;
      }
      lastParticleTime = now;

      const rect = footer.getBoundingClientRect();
      const particle = document.createElement("span");
      const size = 4 + Math.random() * 5;
      const driftX = (Math.random() - 0.5) * 54;
      const driftY = 20 + Math.random() * 46;
      const duration = 760 + Math.random() * 420;

      particle.className = "footer-particle";
      particle.style.left = `${event.clientX - rect.left}px`;
      particle.style.top = `${event.clientY - rect.top}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.setProperty("--particle-x", `${driftX}px`);
      particle.style.setProperty("--particle-y", `${driftY}px`);
      particle.style.setProperty("--particle-duration", `${duration}ms`);
      footer.appendChild(particle);

      const particles = footer.querySelectorAll(".footer-particle");
      if (particles.length > 70) {
        particles[0].remove();
      }

      particle.addEventListener("animationend", () => particle.remove(), { once: true });
    };

    footer?.addEventListener("mousemove", handleFooterParticles);

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
      footer?.removeEventListener("mousemove", handleFooterParticles);
      footer?.querySelectorAll(".footer-particle").forEach((particle) => particle.remove());
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
