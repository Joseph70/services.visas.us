import { Icon } from "@/components/Icons";

export default function WhatsAppButton({ whatsappUrl }) {
  return (
    <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Hablar por WhatsApp">
      <Icon name="whatsapp" />
    </a>
  );
}
