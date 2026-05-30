import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollEffects from "@/components/ScrollEffects";
import { Icon } from "@/components/Icons";
import { WHATSAPP_URL } from "@/components/siteConfig";
import { getServiceBySlug, services } from "@/components/servicesData";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Servicio no encontrado | Services Visas US",
    };
  }

  return {
    title: `${service.title} | Services Visas US`,
    description: service.text,
  };
}

export default function ServicePage({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ScrollEffects />
      <Header whatsappUrl={WHATSAPP_URL} />
      <main>
        <section className="section service-page-hero">
          <a className="back-link" href="/#servicios">Volver a servicios</a>
          <div className="service-page-heading reveal">
            <span className="icon-badge"><Icon name={service.icon} /></span>
            <p className="eyebrow">Detalle del servicio</p>
            <h1>{service.title}</h1>
            <p>{service.text}</p>
          </div>
        </section>

        <section className="section service-page-details" aria-label={`Informacion de ${service.title}`}>
          <article className="detail-card detail-card-large reveal">
            <div className="detail-header">
              <span className="detail-kicker">Requisitos</span>
              <h2>Lo que necesitamos del cliente</h2>
              <p>
                Esta informacion nos permite revisar el caso con mayor claridad
                y organizar una ruta de trabajo adecuada.
              </p>
            </div>
            <ul className="detail-list detail-list-large">
              {service.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="detail-card detail-card-large reveal">
            <div className="detail-header">
              <span className="detail-kicker">Proceso</span>
              <h2>Como realizamos el servicio</h2>
              <p>
                Te acompanamos con orientacion ordenada, revision de informacion
                y recomendaciones practicas segun la etapa del tramite.
              </p>
            </div>
            <ol className="detail-list detail-list-large numbered-list">
              {service.process.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </article>

          <aside className="service-time-panel reveal">
            <span>Tiempo estimado</span>
            <p>{service.time}</p>
            <a className="btn" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Solicitar asesoria
            </a>
          </aside>
        </section>
      </main>
      <Footer whatsappUrl={WHATSAPP_URL} />
      <WhatsAppButton whatsappUrl={WHATSAPP_URL} />
    </>
  );
}
