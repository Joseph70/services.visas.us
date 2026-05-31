export function Icon({ name }) {
  const icons = {
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c1.6-4 4.2-6 8-6s6.4 2 8 6" />
      </>
    ),
    document: (
      <>
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M14 3v5h5" />
        <path d="M10 13h6" />
        <path d="M10 17h4" />
      </>
    ),
    steps: (
      <>
        <path d="M5 6h4v4H5z" />
        <path d="M15 14h4v4h-4z" />
        <path d="M9 8h2.5a3 3 0 0 1 3 3v5" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v5c0 4.3 2.7 8.1 7 10 4.3-1.9 7-5.7 7-10V6z" />
        <path d="m9.5 12 1.8 1.8 3.7-4" />
      </>
    ),
    visa: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M7 10h10" />
        <path d="M7 14h4" />
        <path d="M14 14h3" />
      </>
    ),
    plane: (
      <>
        <path d="M3 11 21 4l-7 17-3-7z" />
        <path d="m11 14 10-10" />
      </>
    ),
    interview: (
      <>
        <path d="M5 5h14v10H8l-3 3z" />
        <path d="M9 9h6" />
        <path d="M9 12h4" />
      </>
    ),
    compass: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="m15 9-2 5-5 2 2-5z" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.5 2.5L16 9" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="M6 6l12 12" />
        <path d="M18 6 6 18" />
      </>
    ),
    whatsapp: (
      <>
        <path
          fill="currentColor"
          stroke="none"
          d="M12.03 3.2a8.75 8.75 0 0 0-7.4 13.42L3.7 20.8l4.27-1a8.74 8.74 0 1 0 4.06-16.6Zm0 1.72a7.02 7.02 0 1 1-3.58 13.06l-.3-.18-2.15.5.47-2.1-.2-.31a7.02 7.02 0 0 1 5.76-10.97Z"
        />
        <path
          fill="currentColor"
          stroke="none"
          d="M9.63 8.2c-.16-.36-.33-.37-.48-.38h-.41c-.14 0-.37.05-.57.27-.2.22-.75.73-.75 1.78 0 1.05.77 2.07.88 2.21.11.15 1.5 2.38 3.7 3.24 1.83.72 2.2.58 2.6.54.4-.04 1.28-.52 1.46-1.02.18-.5.18-.94.13-1.03-.05-.09-.2-.15-.42-.26l-1.24-.61c-.22-.11-.38-.16-.54.11-.16.27-.62.77-.76.93-.14.16-.28.18-.5.06-.22-.11-.95-.35-1.81-1.12-.67-.6-1.12-1.34-1.25-1.56-.13-.23-.01-.35.1-.46.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39l-.67-1.55Z"
        />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.9 4.9 1.4 1.4" />
        <path d="m17.7 17.7 1.4 1.4" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m4.9 19.1 1.4-1.4" />
        <path d="m17.7 6.3 1.4-1.4" />
      </>
    ),
    moon: (
      <>
        <path d="M20 14.4A7.8 7.8 0 0 1 9.6 4a8.5 8.5 0 1 0 10.4 10.4z" />
      </>
    ),
  };

  return (
    <svg
      className={`icon icon-${name}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name] || icons.check}
    </svg>
  );
}
