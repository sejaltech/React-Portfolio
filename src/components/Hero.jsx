import { useTypingEffect } from "../hooks/useTypingEffect";
import { TYPED_WORDS } from "../constants/dats";

// Inline icon components
const ChevronDown = ({ size = 20, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M6 9l6 6 6-6"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Layers = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M12 2L1 7l11 5 9-4.09V17a2 2 0 0 1-2 2h-3"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 13l9 5 9-5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Mail = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M3 8l9 6 9-6"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 19H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Sparkles = ({ size = 13, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M12 3l1.5 3.5L17 8l-3.5 1.5L12 13l-1.5-3.5L7 8l3.5-1.5L12 3z"
      fill={color}
    />
  </svg>
);

const Hero = () => {
  const typed = useTypingEffect(TYPED_WORDS);

  const scroll = (id) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });

  return (
 <section
  id="home"
  style={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    padding: "80px 24px 40px",
    color: "#ffffff",
  }}
>
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,107,138,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "8%",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(135,206,235,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Main Content */}
      <div
        style={{
          maxWidth: 900,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Internship Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(255,107,138,0.12)",
            border: "1px solid rgba(255,107,138,0.28)",
            borderRadius: 100,
            padding: "8px 18px",
            marginBottom: 32,
            backdropFilter: "blur(10px)",
          }}
        >
          <Sparkles size={13} color="#ffd1dc" />

          <span
            style={{
              color: "#ffd1dc",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Open to Internship Opportunities
          </span>
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize: "clamp(52px,8vw,95px)",
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: 18,
            letterSpacing: "-0.03em",
            background:
              "linear-gradient(135deg,#ffffff,#FF6B8A,#87CEEB)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Sejal Singh
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: "#f3f4f6",
            fontSize: "clamp(16px,3vw,22px)",
            fontWeight: 500,
            marginBottom: 12,
          }}
        >
          B.Tech CSE Student · Aspiring Software Developer
        </p>

        {/* Typing Text */}
        <div
          style={{
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 28,
          }}
        >
          <span
            style={{
              fontSize: "clamp(14px,2.5vw,18px)",
              color: "#ffd1dc",
              fontWeight: 600,
            }}
          >
            {typed}
            <span
              style={{
                animation: "blink 1s step-end infinite",
              }}
            >
              |
            </span>
          </span>
        </div>

        {/* Description */}
        <p
          style={{
            color: "#d1d5db",
            fontSize: 17,
            lineHeight: 1.9,
            maxWidth: 720,
            margin: "0 auto 42px",
          }}
        >
          Passionate about building meaningful digital
          experiences — diving deep into web development,
          data structures & algorithms, and software
          engineering, one commit at a time.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: 18,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Projects Button */}
          <button
            onClick={() => scroll("projects")}
            style={{
              background:
                "linear-gradient(135deg,#FF6B8A,#87CEEB)",
              border: "none",
              color: "#ffffff",
              padding: "14px 30px",
              borderRadius: 14,
              cursor: "pointer",
              fontSize: 15,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: 8,
              boxShadow:
                "0 0 30px rgba(255,107,138,0.28)",
              fontFamily: "inherit",
              transition: "all .25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
            }}
          >
            <Layers size={16} />
            View Projects
          </button>

          {/* Contact Button */}
          <button
            onClick={() => scroll("contact")}
            style={{
              background: "rgba(255,255,255,0.08)",
              border:
                "1px solid rgba(255,255,255,0.18)",
              color: "#ffffff",
              padding: "14px 30px",
              borderRadius: 14,
              cursor: "pointer",
              fontSize: 15,
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "inherit",
              transition: "all .25s ease",
              backdropFilter: "blur(12px)",
              boxShadow:
                "0 0 25px rgba(255,107,138,0.15)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "rgba(255,107,138,0.12)";
              e.currentTarget.style.borderColor =
                "rgba(255,107,138,0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "rgba(255,255,255,0.08)";
              e.currentTarget.style.borderColor =
                "rgba(255,255,255,0.18)";
            }}
          >
            <Mail size={16} />
            Contact Me
          </button>
        </div>

        {/* Down Arrow */}
        <div
          style={{
            marginTop: 64,
            animation: "float 2.5s ease infinite",
          }}
        >
          <ChevronDown
            size={20}
            color="rgba(255,255,255,0.8)"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;