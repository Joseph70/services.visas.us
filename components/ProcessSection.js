const steps = [
  ["Agenda tu asesoria", "Conversamos sobre tu objetivo de viaje y el tipo de apoyo que necesitas."],
  ["Revisamos tu caso", "Identificamos informacion importante, posibles dudas y puntos de atencion."],
  ["Organizamos tus documentos", "Creamos una ruta de documentos y datos para presentar un proceso mas claro."],
  ["Te guiamos en el proceso", "Recibes orientacion para avanzar con mayor seguridad en cada etapa."],
  ["Das seguimiento con acompanamiento", "Mantenemos comunicacion para resolver inquietudes y revisar avances."],
];

export default function ProcessSection() {
  return (
    <section className="section" id="proceso" aria-labelledby="proceso-title">
      <div className="section-heading reveal">
        <p className="eyebrow">Nuestro proceso</p>
        <h2 id="proceso-title">Una ruta sencilla, humana y bien organizada</h2>
      </div>
      <div className="process-list">
        {steps.map(([title, text], index) => (
          <article className="process-card reveal" key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
