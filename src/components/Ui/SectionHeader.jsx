import Reveal from "./Reveal";

const SectionHeader = ({ label, title, highlight }) => (
  <Reveal>
    <div
      style={{
        textAlign: "center",
        marginBottom: 60,
      }}
    >
      {/* Small Label */}
      <span
        style={{
          color: "#FF6B8A",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          display: "block",
          marginBottom: 14,
        }}
      >
        {label}
      </span>

      {/* Main Heading */}
      <h2
        style={{
          fontSize: "clamp(42px, 7vw, 72px)",
          fontWeight: 800,
          margin: 0,
          lineHeight: 1.1,
          color: "#ffffff",
        }}
      >
        <span
          style={{
            color: "#ffffff",
          }}
        >
          {title}
        </span>{" "}

        <span
          style={{
            background:
              "linear-gradient(135deg, #FF6B8A, #C4B5FD, #87CEEB)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            display: "inline-block",
          }}
        >
          {highlight}
        </span>
      </h2>
    </div>
  </Reveal>
);

export default SectionHeader;