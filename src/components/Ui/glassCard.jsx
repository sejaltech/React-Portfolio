// Reusable glassmorphism card component
const GlassCard = ({ children, style = {}, className = "" }) => (
  <div
    className={className}
    style={{
      background: "rgba(20,20,35,0.72)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 18,
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      boxShadow:
        "0 8px 32px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.05)",
      color: "#ffffff",
      ...style,
    }}
  >
    {children}
  </div>
);

export default GlassCard;