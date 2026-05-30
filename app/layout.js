import "./globals.css";

export const metadata = {
  title: "Services Visas US | Asesoria de viajes y visas",
  description:
    "Asesoria profesional para viajes, visas, documentos y acompanamiento claro para procesos hacia Estados Unidos.",
  openGraph: {
    title: "Services Visas US",
    description:
      "Viaja con seguridad, claridad y acompanamiento profesional.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
