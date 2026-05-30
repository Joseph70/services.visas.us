import { Icon } from "@/components/Icons";

export default function CTASection({ whatsappUrl }) {
  return (
    <section className="section cta-section" aria-label="Llamada a la accion">
      <div className="cta-box reveal">
        <div>
          <p className="eyebrow">Agenda tu orientacion</p>
          <h2>Empieza tu proceso con una asesoria clara y profesional</h2>
        </div>
        <a className="btn btn-light" href={whatsappUrl} target="_blank" rel="noreferrer">
          <Icon name="whatsapp" />
          Hablar por WhatsApp
        </a>
      </div>
    </section>
  );
}
