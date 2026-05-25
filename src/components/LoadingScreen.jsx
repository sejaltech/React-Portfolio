// Loading screen shown on initial page load — fades out after 1.6s
const LoadingScreen = ({ done }) => (
  <div
    style={{
      position: "fixed",
      inset: 0,
      background: "#050510",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 10000,
      transition: "opacity 0.5s, visibility 0.5s",
      opacity: done ? 0 : 1,
      visibility: done ? "hidden" : "visible",
    }}
  >
    <div style={{ textAlign: "center" }}>
      {/* Logo mark */}
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 16,
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          fontWeight: 800,
          color: "#fff",
          margin: "0 auto 20px",
          animation: "pulse 1s ease infinite",
        }}
      >
        S
      </div>

      {/* Bouncing dots */}
      <div style={{ display: "flex", gap: 6, justifyContent: "center" }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#6366f1",
              animation: `bounceDot 1.2s ease ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  </div>
);

export default LoadingScreen;
