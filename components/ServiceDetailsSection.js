import { services } from "@/components/ServicesSection";

const serviceDetails = {
  "#detalle-visa-americana": {
    time: "Revision inicial: 24 a 48 horas. Preparacion completa: 3 a 7 dias habiles, segun la informacion entregada por el cliente.",
    requirements: [
      "Pasaporte vigente.",
      "Informacion personal, laboral, familiar y economica actualizada.",
      "Motivo del viaje, fechas tentativas y lugar de estadia.",
      "Historial de viajes anteriores, si aplica.",
      "Documentos de respaldo segun el perfil del solicitante.",
    ],
    process: [
      "Analisis inicial del caso y objetivo de viaje.",
      "Revision de informacion y documentos de soporte.",
      "Orientacion para completar datos del formulario correspondiente.",
      "Preparacion general para la entrevista consular.",
      "Seguimiento hasta que el cliente tenga claridad sobre los siguientes pasos.",
    ],
  },
  "#detalle-documentos": {
    time: "Organizacion base: 24 a 72 horas. Casos con mayor volumen documental: 3 a 5 dias habiles.",
    requirements: [
      "Documento de identidad y pasaporte, si aplica.",
      "Comprobantes laborales, comerciales o academicos disponibles.",
      "Soportes financieros recientes.",
      "Documentos familiares o de arraigo, cuando sean relevantes.",
      "Cualquier documento relacionado con el motivo del tramite.",
    ],
    process: [
      "Recepcion de documentos disponibles.",
      "Clasificacion por tipo de soporte y relevancia.",
      "Identificacion de documentos faltantes o confusos.",
      "Entrega de una guia organizada para completar el expediente.",
    ],
  },
  "#detalle-entrevista": {
    time: "Sesion de preparacion: 60 a 90 minutos. Preparacion con simulacion: 1 a 2 dias habiles.",
    requirements: [
      "Resumen claro del motivo de viaje.",
      "Informacion sobre empleo, estudios, negocio o actividad actual.",
      "Datos sobre familiares, estadia y fechas tentativas.",
      "Documentos principales que respalden el caso.",
    ],
    process: [
      "Revision de puntos fuertes y dudas del caso.",
      "Practica de preguntas frecuentes.",
      "Recomendaciones para responder con claridad y coherencia.",
      "Retroalimentacion sobre seguridad, orden y consistencia.",
    ],
  },
  "#detalle-viaje": {
    time: "Plan basico: 24 a 48 horas. Itinerario mas detallado: 2 a 4 dias habiles.",
    requirements: [
      "Objetivo principal del viaje.",
      "Ciudad o ciudades de destino.",
      "Fechas tentativas de salida y regreso.",
      "Datos de hospedaje o contacto en destino, si existen.",
      "Presupuesto estimado y acompanantes, si aplica.",
    ],
    process: [
      "Definicion del motivo y ruta de viaje.",
      "Revision de fechas y coherencia del itinerario.",
      "Organizacion de informacion de hospedaje y actividades.",
      "Alineacion del plan con la informacion del tramite.",
    ],
  },
  "#detalle-seguimiento": {
    time: "Respuesta a consultas: 24 a 48 horas habiles. Seguimiento activo durante las etapas acordadas del servicio.",
    requirements: [
      "Estado actual del tramite.",
      "Comprobantes, confirmaciones o comunicaciones recibidas.",
      "Fechas importantes del proceso.",
      "Dudas puntuales para revisar.",
    ],
    process: [
      "Revision del avance reportado por el cliente.",
      "Aclaracion de dudas segun la etapa del proceso.",
      "Recordatorio de pasos pendientes.",
      "Acompanamiento por los canales acordados.",
    ],
  },
  "#detalle-formularios": {
    time: "Revision de datos: 24 a 72 horas. Formularios extensos o casos familiares: 3 a 6 dias habiles.",
    requirements: [
      "Datos personales completos y actualizados.",
      "Historial laboral, academico y de viajes.",
      "Informacion familiar y de contacto.",
      "Datos del viaje o tramite a realizar.",
      "Documentos de soporte para validar informacion clave.",
    ],
    process: [
      "Revision de la informacion solicitada.",
      "Identificacion de datos incompletos o inconsistentes.",
      "Orientacion para completar campos relevantes.",
      "Revision final antes de avanzar a la siguiente etapa.",
    ],
  },
};

export default function ServiceDetailsSection() {
  return (
    <section className="section service-details" id="detalles-servicios" aria-labelledby="detalles-servicios-title">
      <div className="section-heading reveal">
        <p className="eyebrow">Detalles por servicio</p>
        <h2 id="detalles-servicios-title">Requisitos, proceso y tiempos estimados</h2>
        <p>
          Cada servicio tiene una ruta de trabajo distinta. Los tiempos pueden variar segun
          la rapidez de entrega de informacion, disponibilidad de citas y condiciones externas.
        </p>
      </div>
      <div className="service-details-grid">
        {services.map((service) => {
          const details = serviceDetails[service.href];
          return (
            <article className="detail-card reveal" id={service.href.slice(1)} key={service.href}>
              <div className="detail-header">
                <span className="detail-kicker">Servicio</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
              <div className="detail-columns">
                <div>
                  <h4>Requisitos del cliente</h4>
                  <ul className="detail-list">
                    {details.requirements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Proceso que realizamos</h4>
                  <ul className="detail-list">
                    {details.process.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="detail-time">
                <strong>Tiempo estimado</strong>
                <span>{details.time}</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
