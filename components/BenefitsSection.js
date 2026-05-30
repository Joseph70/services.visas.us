import { Icon } from "@/components/Icons";

const benefits = [
  "Evitas errores comunes",
  "Ahorras tiempo",
  "Recibes orientacion clara",
  "Tienes acompanamiento humano",
  "Mejor organizacion del proceso",
  "Comunicacion directa",
];

export default function BenefitsSection() {
  return (
    <section className="section benefits" id="beneficios" aria-labelledby="beneficios-title">
      <div className="benefit-copy reveal">
        <p className="eyebrow">Beneficios</p>
        <h2 id="beneficios-title">Mas claridad para tomar decisiones con tranquilidad</h2>
        <p>
          Nuestro trabajo se centra en ayudarte a entender, ordenar y avanzar.
          La transparencia es parte del servicio desde el primer contacto.
        </p>
      </div>
      <div className="benefit-grid">
        {benefits.map((benefit) => (
          <div className="benefit-item reveal" key={benefit}>
            <Icon name="check" />
            <span>{benefit}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
