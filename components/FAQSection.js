"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Services Visas US garantiza la aprobacion de una visa?",
    answer:
      "No. Services Visas US brinda asesoria privada, revision y acompanamiento, pero no garantiza aprobaciones. La decision final depende exclusivamente de las autoridades correspondientes.",
  },
  {
    question: "La asesoria incluye revision de documentos?",
    answer:
      "Si. Podemos revisar y ayudarte a organizar documentos relevantes segun tu caso, para que avances con mayor claridad y orden.",
  },
  {
    question: "Puedo recibir atencion online?",
    answer:
      "Si. Ofrecemos atencion online para que puedas recibir orientacion desde donde te encuentres.",
  },
  {
    question: "Que necesito para iniciar?",
    answer:
      "Necesitas compartir tu objetivo de viaje, informacion general de tu caso y los documentos disponibles para una primera revision.",
  },
  {
    question: "Atienden procesos para viajes a Estados Unidos?",
    answer:
      "Si. Nuestro enfoque principal es orientar a personas interesadas en viajar a Estados Unidos y preparar mejor su documentacion.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section soft-band" id="preguntas" aria-labelledby="faq-title">
      <div className="section-heading reveal">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2 id="faq-title">Respuestas honestas antes de iniciar</h2>
      </div>
      <div className="faq-list reveal">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div className="faq-item" key={faq.question}>
              <button
                type="button"
                className="faq-question"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span aria-hidden="true">{isOpen ? "-" : "+"}</span>
              </button>
              <div className={`faq-answer ${isOpen ? "is-open" : ""}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
