import React from 'react';

const Github = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 .5C5.73.5.75 5.48.75 11.74c0 4.93 3.19 9.11 7.61 10.58.56.1.77-.24.77-.54 0-.27-.01-1.16-.02-2.1-3.09.67-3.74-1.49-3.74-1.49-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .17 1.57.92 1.57.92.99 1.7 2.6 1.21 3.24.93.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.21.43-2.2 1.14-2.97-.12-.28-.5-1.42.11-2.96 0 0 .93-.3 3.05 1.13.89-.25 1.85-.37 2.8-.37.95 0 1.91.12 2.8.37 2.11-1.43 3.04-1.13 3.04-1.13.62 1.54.24 2.68.12 2.96.71.77 1.14 1.76 1.14 2.97 0 4.27-2.61 5.22-5.09 5.5.4.35.75 1.04.75 2.1 0 1.52-.01 2.75-.01 3.12 0 .3.2.65.78.54C19.06 20.85 22.25 16.67 22.25 11.74 22.25 5.48 17.27.5 12 .5z" fill="currentColor" />
  </svg>
);

const Linkedin = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.48 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.84v2.16h.05c.54-1.02 1.86-2.1 3.83-2.1 4.1 0 4.86 2.7 4.86 6.22V24h-4V14.5c0-2.28-.04-5.21-3.18-5.21-3.18 0-3.66 2.48-3.66 5.04V24h-4V8z" fill="currentColor" />
  </svg>
);

const Mail = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
  </svg>
);

const SOCIALS = [
  { icon: <Github size={18} />, href: "#", label: "GitHub" },
  { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
  { icon: <Mail size={18} />, href: "#", label: "Email" },
];

const Footer = () => (
  <footer style={{ borderTop: "1px solid rgba(255,107,138,0.12)", padding: "22px 24px", textAlign: "center", position: "relative", zIndex: 1 }}>
    <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 12 }}>
      {SOCIALS.map((s, i) => (
        <a
          key={i}
          href={s.href}
          aria-label={s.label}
          style={{ color: "#333333", transition: "color .2s", display: "flex", alignItems: "center" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6B8A")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#333333")}
        >
          {s.icon}
        </a>
      ))}
    </div>
    <p style={{ color: "#333333", fontSize: 13 }}>
      Made with <span style={{ color: "#FF6B8A" }}></span> by {" "}
      <span style={{ color: "#8B0000", fontWeight: 600 }}>Sejal Singh</span>
    </p>
  </footer>
);

export default Footer;
