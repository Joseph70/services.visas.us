import Image from "next/image";
import { navItems } from "@/components/siteConfig";

export default function Footer({ whatsappUrl }) {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <Image className="footer-logo-mark" src="/logo-symbol.png" alt="Logo Services Visas US" width={96} height={96} />
        <p>
          Services Visas US acompana a personas que buscan viajar con mayor
          claridad, orden documental y orientacion profesional.
        </p>
      </div>
      <div>
        <h2>Links rapidos</h2>
        <nav className="footer-links" aria-label="Links rapidos">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
      </div>
      <div>
        <h2>Contacto</h2>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp directo</a>
        <p>Atencion online para asesoria de viajes y visas.</p>
      </div>
      <p className="legal">
        Services Visas US es una agencia privada de asesoria y acompanamiento.
        No pertenece ni representa a ninguna entidad gubernamental, embajada o
        consulado. La aprobacion de visas depende exclusivamente de las
        autoridades correspondientes.
      </p>
    </footer>
  );
}
