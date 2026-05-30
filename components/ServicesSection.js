import { Icon } from "@/components/Icons";

export const services = [
  {
    icon: "visa",
    title: "Asesoria para visa americana",
    text: "Orientacion clara sobre requisitos, etapas y preparacion general del proceso.",
    href: "#detalle-visa-americana",
  },
  {
    icon: "document",
    title: "Organizacion de documentos",
    text: "Clasificamos la informacion de respaldo para que tengas un expediente mas ordenado.",
    href: "#detalle-documentos",
  },
  {
    icon: "interview",
    title: "Preparacion para entrevista",
    text: "Te guiamos con recomendaciones practicas para responder con seguridad y coherencia.",
    href: "#detalle-entrevista",
  },
  {
    icon: "plane",
    title: "Planificacion de viaje",
    text: "Apoyo para estructurar fechas, motivos de viaje y detalles importantes.",
    href: "#detalle-viaje",
  },
  {
    icon: "steps",
    title: "Seguimiento del proceso",
    text: "Acompanamiento durante las etapas principales para resolver dudas oportunamente.",
    href: "#detalle-seguimiento",
  },
  {
    icon: "compass",
    title: "Formularios y requisitos",
    text: "Orientacion para comprender informacion solicitada y evitar errores frecuentes.",
    href: "#detalle-formularios",
  },
];

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
          <a className="service-card service-link reveal" href={service.href} key={service.title}>
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
