import { Icon } from "@/components/Icons";

const trustItems = [
  ["user", "Asesoria personalizada", "Escuchamos tu caso y orientamos cada paso segun tus necesidades."],
  ["document", "Revision de documentos", "Te ayudamos a ordenar la informacion clave antes de avanzar."],
  ["steps", "Acompanamiento paso a paso", "Mantienes una ruta clara desde la primera asesoria hasta el seguimiento."],
  ["shield", "Atencion transparente", "Comunicacion honesta, sin promesas irreales ni letras pequenas."],
];

export default function TrustSection() {
  return (
    <section className="section compact" aria-labelledby="confianza-title">
      <div className="section-heading reveal">
        <p className="eyebrow">Confianza desde el primer contacto</p>
        <h2 id="confianza-title">Acompanar tambien es aclarar</h2>
      </div>
      <div className="grid four">
        {trustItems.map(([icon, title, text]) => (
          <article className="info-card reveal" key={title}>
            <span className="icon-badge"><Icon name={icon} /></span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
