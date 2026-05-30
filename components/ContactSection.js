"use client";

import { useState } from "react";
import { Icon } from "@/components/Icons";

export default function ContactSection({ whatsappUrl }) {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setStatus("Gracias. Tu solicitud fue registrada visualmente; te contactaremos pronto.");
    event.currentTarget.reset();
  }

  return (
    <section className="section contact" id="contacto" aria-labelledby="contacto-title">
      <div className="contact-copy reveal">
        <p className="eyebrow">Contacto</p>
        <h2 id="contacto-title">Conversemos sobre tu proceso</h2>
        <p>
          Completa el formulario o escribe directamente por WhatsApp para recibir
          una orientacion inicial con trato claro y profesional.
        </p>
        <a className="btn btn-secondary" href={whatsappUrl} target="_blank" rel="noreferrer">
          <Icon name="whatsapp" />
          Contactar por WhatsApp
        </a>
      </div>

      <form className="contact-form reveal delay-1" onSubmit={handleSubmit}>
        <label>
          Nombre
          <input name="name" type="text" placeholder="Tu nombre completo" required />
        </label>
        <label>
          Telefono
          <input name="phone" type="tel" placeholder="Tu numero de contacto" required />
        </label>
        <label>
          Correo
          <input name="email" type="email" placeholder="tu@email.com" required />
        </label>
        <label>
          Tipo de servicio
          <select name="service" defaultValue="" required>
            <option value="" disabled>Selecciona una opcion</option>
            <option>Asesoria para visa americana</option>
            <option>Organizacion de documentos</option>
            <option>Preparacion para entrevista</option>
            <option>Planificacion de viaje</option>
            <option>Seguimiento del proceso</option>
          </select>
        </label>
        <label className="full">
          Mensaje
          <textarea name="message" rows="5" placeholder="Cuentanos brevemente que necesitas" required />
        </label>
        <button className="btn full" type="submit">Enviar solicitud</button>
        {status && <p className="form-status" role="status">{status}</p>}
      </form>
    </section>
  );
}
