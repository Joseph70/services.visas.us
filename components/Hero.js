import Image from "next/image";
import { Icon } from "@/components/Icons";

export default function Hero({ whatsappUrl }) {
  return (
    <section className="hero section" id="inicio">
      <div className="hero-content reveal">
        <p className="eyebrow">Asesoria de viajes, documentos y visas</p>
        <h1>Viaja con seguridad, claridad y acompanamiento profesional</h1>
        <p className="hero-copy">
          En Services Visas US te guiamos paso a paso en tu proceso de viaje,
          documentacion y asesoria para visas.
        </p>
        <div className="hero-actions">
          <a className="btn" href={whatsappUrl} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" />
            Solicitar asesoria por WhatsApp
          </a>
          <a className="btn btn-secondary" href="#servicios">
            Ver servicios
          </a>
        </div>
      </div>

      <div className="hero-visual reveal delay-1" aria-label="Asesoria profesional de viaje">
        <img
          className="hero-photo"
          src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=82"
          alt="Documentos organizados para tramites de viaje y asesoria de visa"
        />
        <div className="travel-card main-card">
          <div>
            <span className="label">Caso activo</span>
            <strong>Revision documental</strong>
          </div>
          <Icon name="document" />
        </div>
        <div className="passport-card">
          <Image src="/logo.png" alt="Identidad Services Visas US" width={150} height={150} priority />
          <span>Services Visas US</span>
        </div>
        <div className="travel-card floating-card">
          <Icon name="plane" />
          <div>
            <span className="label">Destino</span>
            <strong>Estados Unidos</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
