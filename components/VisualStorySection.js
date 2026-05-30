const visuals = [
  {
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1100&q=82",
    alt: "Pasaporte, mapa y accesorios de viaje organizados sobre una mesa",
    title: "Preparacion de viaje",
    text: "Orden visual y documental antes de avanzar.",
  },
  {
    src: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1100&q=82",
    alt: "Persona revisando documentos en una mesa de trabajo profesional",
    title: "Revision con criterio",
    text: "Informacion clara para tomar mejores decisiones.",
  },
  {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1100&q=82",
    alt: "Avion en pista relacionado con viajes internacionales",
    title: "Destino con acompanamiento",
    text: "Una ruta mas tranquila hacia Estados Unidos.",
  },
];

export default function VisualStorySection() {
  return (
    <section className="section visual-story" aria-label="Imagenes de viajes y documentacion">
      {visuals.map((item, index) => (
        <article className={`visual-card reveal ${index === 1 ? "is-featured" : ""}`} key={item.title}>
          <img src={item.src} alt={item.alt} loading="lazy" />
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
