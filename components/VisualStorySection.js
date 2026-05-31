"use client";

import { useEffect, useState } from "react";

const slides = [
  [
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=85",
      alt: "Paisaje de montanas y lago al atardecer como destino de viaje",
      title: "Nuevos horizontes",
      text: "Viajes que empiezan con una decision bien acompanada.",
    },
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1100&q=85",
      alt: "Playa de aguas turquesas y arena clara",
      title: "Destinos memorables",
      text: "Claridad para avanzar hacia el viaje que imaginas.",
    },
    {
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1100&q=85",
      alt: "Carretera escenica entre montanas para inspirar viajes",
      title: "Ruta con proposito",
      text: "Organiza cada etapa con calma, orden y seguridad.",
    },
  ],
  [
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1100&q=85",
      alt: "Valle verde con montanas y luz dorada",
      title: "Experiencias que inspiran",
      text: "La preparacion correcta abre caminos mas tranquilos.",
    },
    {
      src: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1100&q=85",
      alt: "Vista urbana internacional con arquitectura moderna",
      title: "Ciudades por descubrir",
      text: "Viaja con un plan claro y documentacion organizada.",
    },
    {
      src: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1100&q=85",
      alt: "Vehiculo en ruta costera hacia un destino de viaje",
      title: "Aventura bien guiada",
      text: "Tu proceso puede sentirse mas simple cuando sabes el siguiente paso.",
    },
  ],
  [
    {
      src: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1100&q=85",
      alt: "Persona viajera observando un paisaje natural impactante",
      title: "Motivacion para viajar",
      text: "Convierte una meta de viaje en una ruta concreta.",
    },
    {
      src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1100&q=85",
      alt: "Lago tranquilo rodeado de montanas al amanecer",
      title: "Claridad antes de partir",
      text: "Menos dudas, mas orden y mejor acompanamiento.",
    },
    {
      src: "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1100&q=85",
      alt: "Maleta y elementos de viaje listos para abordar",
      title: "Listos para avanzar",
      text: "El viaje empieza con documentos y decisiones bien preparadas.",
    },
  ],
];

export default function VisualStorySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="section visual-story reveal" aria-label="Carrusel de destinos de viaje">
      <div className="visual-carousel">
        <div
          className="visual-carousel-track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((group, groupIndex) => (
            <div className="visual-slide" key={groupIndex}>
              {group.map((item, index) => (
                <article className={`visual-card ${index === 1 ? "is-featured" : ""}`} key={item.title}>
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-dots" aria-label="Indicadores del carrusel">
        {slides.map((_, index) => (
          <button
            type="button"
            key={index}
            className={activeIndex === index ? "is-active" : ""}
            aria-label={`Mostrar grupo ${index + 1}`}
            aria-current={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
