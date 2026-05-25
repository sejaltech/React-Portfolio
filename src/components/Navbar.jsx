// Sticky navbar — transparent on top, glass blur when scrolled
import { useState, useEffect } from "react";
import { NAV_LINKS } from "../constants/dats";

// Inline icon components
const Download = ({ size = 15 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M12 3v10"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 11l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 21H3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Menu = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M3 6h18M3 12h18M3 18h18"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const X = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M6 6l12 12M18 6L6 18"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () =>
      setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const scrollToSection = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });

    setMenuOpen(false);
  };

  const handleResumeClick = () => {
    setToastVisible(true);

    setTimeout(() => {
      setToastVisible(false);
    }, 2500);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled
  ? "rgba(10, 10, 25, 0.96)"
  : "rgba(10,10,20,0.45)",
        backdropFilter: scrolled
          ? "blur(20px)"
          : "none",
        WebkitBackdropFilter: scrolled
          ? "blur(20px)"
          : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,107,138,0.15)"
          : "none",
        padding: "0 34px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 82,
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  cursor: "pointer",
  color: "#ffffff",
  fontSize: 18,
  fontWeight: 700,
  padding: "14px 30px",
  borderRadius: 18,
  transition: "all 0.3s ease",
  fontFamily: "inherit",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  boxShadow: "0 0 12px rgba(255,255,255,0.04)",
}}
          >
            S
          </div>

          <span
            style={{
              color: "#ffffff",
              fontWeight: 800,
              fontSize: 34,
              letterSpacing: "-0.03em",
            }}
          >
            Sejal Singh
            <span style={{ color: "#FF6B8A" }}>
              .
            </span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() =>
                scrollToSection(link)
              }
              style={{
                background:
                  "rgba(255,255,255,0.05)",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                cursor: "pointer",
                color: "#ffffff",
                fontSize: 18,
                fontWeight: 700,
                padding: "14px 28px",
                borderRadius: 18,
                transition: "all 0.3s ease",
                fontFamily: "inherit",
                backdropFilter: "blur(12px)",
              }}
              onMouseEnter={(e) => {
  e.currentTarget.style.background =
    "linear-gradient(135deg,#FF6B8A,#C084FC)";

  e.currentTarget.style.color = "#ffffff";

  e.currentTarget.style.transform =
    "translateY(-2px) scale(1.03)";

  e.currentTarget.style.boxShadow =
    "0 0 28px rgba(255,107,138,0.35)";
}}
            >
              {link}
            </button>
          ))}

          {/* Resume Button */}
          <button
            onClick={handleResumeClick}
            style={{
              background:
  "linear-gradient(135deg,#FF6B8A,#8B5CF6)",
              border: "none",
              color: "#fff",
              padding: "15px 30px",
              borderRadius: 18,
              cursor: "pointer",
              fontSize: 17,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginLeft: 10,
              fontFamily: "inherit",
              boxShadow:
                "0 0 30px rgba(255,107,138,0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-2px) scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "none";
            }}
          >
            <Download size={15} />
            Resume
          </button>
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() =>
            setMenuOpen((o) => !o)
          }
          className="mobile-toggle"
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#ffffff",
            display: "none",
            alignItems: "center",
          }}
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          style={{
           background:
  "rgba(12,12,28,0.98)",
            padding: "18px 24px 24px",
            borderTop:
              "1px solid rgba(255,107,138,0.2)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() =>
                scrollToSection(link)
              }
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                borderBottom:
                  "1px solid rgba(255,255,255,0.08)",
                cursor: "pointer",
                color: "#ffffff",
                fontSize: 18,
                padding: "16px 0",
                fontWeight: 600,
                fontFamily: "inherit",
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}

      {/* Toast */}
      {toastVisible && (
        <div
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(135deg,#FF6B8A,#8B0000)",
              color: "#fff",
              padding: "12px 18px",
              borderRadius: 14,
              boxShadow:
                "0 8px 28px rgba(152, 107, 117, 0.3)",
              fontWeight: 600,
            }}
          >
            Your resume downloaded
          </div>
        </div>
      )}

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }

          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;