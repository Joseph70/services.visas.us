import { Icon } from "@/components/Icons";
import { services } from "@/components/servicesData";

export default function ServicesSection() {
  return (
    <section className="section soft-band" id="servicios" aria-labelledby="servicios-title">
      <div className="section-heading reveal">
        <p className="eyebrow">Servicios</p>
        <h2 id="servicios-title">Soluciones claras para avanzar con orden</h2>
        <p>
          Un acompanamiento profesional para tomar mejores decisiones antes,
          durante y despues de iniciar tu tramite.
        </p>
      </div>
      <div className="grid three">
        {services.map((service) => (
          <a className="service-card service-link reveal" href={`/servicios/${service.slug}`} key={service.title}>
            <span className="icon-badge"><Icon name={service.icon} /></span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <span className="service-cta">Ver requisitos y tiempos</span>
          </a>
        ))}
      </div>
    </section>
  );
}
