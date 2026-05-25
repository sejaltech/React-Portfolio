import GlassCard from "./Ui/glassCard";
import Reveal from "./Ui/Reveal";
import SectionHeader from "./Ui/SectionHeader";
import { MILESTONES } from "../constants/dats";

// Inline icons to avoid external dependency
const Cpu = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.2" />
    <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const GraduationCap = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M2 8l10 5 10-5-10-5L2 8z" fill="currentColor" />
    <path d="M6 11v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Layers = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 13l9 5 9-5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 18l9 5 9-5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const TrendingUp = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M3 17l6-6 4 4 8-8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 7v6h-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Zap = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="currentColor" />
  </svg>
);

const ICON_MAP = { GraduationCap:<GraduationCap size={17}/>, Cpu:<Cpu size={17}/>, Zap:<Zap size={17}/>, Layers:<Layers size={17}/>, TrendingUp:<TrendingUp size={17}/> };

const Timeline = () => (
  <section style={{ padding: "100px 24px", position: "relative", zIndex: 1 }}>
    <div style={{ maxWidth: 680, margin: "0 auto" }}>
      <SectionHeader label="My Journey" title="Learning" highlight="Milestones" />
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: 19, top: 0, bottom: 0, width: 1, background: "linear-gradient(180deg,transparent,rgba(255,107,138,0.4) 20%,rgba(255,107,138,0.4) 80%,transparent)" }} />
        {MILESTONES.map((m, i) => (
          <Reveal key={i} delay={i * 100} direction="left">
            <div style={{ display: "flex", gap: 20, marginBottom: 24, paddingLeft: 4 }}>
              <div style={{ width: 38, height: 38, borderRadius: "50%", background: `${m.color}18`, border: `1px solid ${m.color}44`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: m.color, position: "relative", zIndex: 2 }}>
                {ICON_MAP[m.iconName]}
              </div>
              <GlassCard style={{ flex: 1, padding: "15px 18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 6, marginBottom: 5 }}>
                  <span style={{ color: "#1a1a1a", fontSize: 14, fontWeight: 700 }}>{m.title}</span>
                  <span style={{ background: `${m.color}18`, border: `1px solid ${m.color}30`, color: m.color, fontSize: 11, fontWeight: 600, padding: "2px 10px", borderRadius: 100 }}>{m.date}</span>
                </div>
                <p style={{ color: "#475569", fontSize: 13, lineHeight: 1.6 }}>{m.desc}</p>
              </GlassCard>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
export default Timeline;
