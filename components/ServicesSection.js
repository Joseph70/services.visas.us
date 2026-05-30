import { Icon } from "@/components/Icons";

const services = [
  ["visa", "Asesoria para visa americana", "Orientacion clara sobre requisitos, etapas y preparacion general del proceso."],
  ["document", "Organizacion de documentos", "Clasificamos la informacion de respaldo para que tengas un expediente mas ordenado."],
  ["interview", "Preparacion para entrevista", "Te guiamos con recomendaciones practicas para responder con seguridad y coherencia."],
  ["plane", "Planificacion de viaje", "Apoyo para estructurar fechas, motivos de viaje y detalles importantes."],
  ["steps", "Seguimiento del proceso", "Acompanamiento durante las etapas principales para resolver dudas oportunamente."],
  ["compass", "Formularios y requisitos", "Orientacion para comprender informacion solicitada y evitar errores frecuentes."],
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
        {services.map(([icon, title, text]) => (
          <article className="service-card reveal" key={title}>
            <span className="icon-badge"><Icon name={icon} /></span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
