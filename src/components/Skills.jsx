import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import GlassCard from "./Ui/glassCard";
import SectionHeader from "./Ui/SectionHeader";
import { SKILLS } from "../constants/dats";

const PythonLogo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect width="64" height="64" rx="10" fill="transparent" />
    <path d="M32 4c-7 0-10 3-10 3v6s3 3 10 3h8v6c0 7-3 10-3 10h-8v-6h-6c-7 0-10 3-10 3v8c0 7 3 10 3 10h8s3-3 10-3 10 3 10 3v-8s-3-3-10-3h-8v-6h8c7 0 10-3 10-3V7s-3-3-10-3z" fill="#306998" />
    <circle cx="22" cy="18" r="2" fill="#FFD43B" />
    <circle cx="42" cy="46" r="2" fill="#FFD43B" />
  </svg>
);

const SkillCard = ({ skill, index }) => {
  const [ref, visible] = useScrollReveal();
  const [hovered, setHovered] = useState(false);
  return (
    <div ref={ref} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(30px)", transition: `opacity .6s ease ${index*80}ms,transform .6s ease ${index*80}ms` }}>
      <GlassCard style={{ padding: "22px 18px", transition: "all .3s", transform: hovered ? "translateY(-6px)" : "none", borderColor: hovered ? `${skill.color}55` : "rgba(255,107,138,0.2)", boxShadow: hovered ? `0 12px 36px ${skill.color}22` : undefined }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
          <div>
            <span style={{ fontSize: 28 }}>{skill.name === 'Python' ? <PythonLogo size={36} /> : skill.emoji}</span>
            <h3 style={{ color: "#1a1a1a", fontSize: 15, fontWeight: 700, marginTop: 7 }}>{skill.name}</h3>
            <span style={{ fontSize: 11, color: skill.color, fontWeight: 600, background: `${skill.color}18`, padding: "2px 8px", borderRadius: 100, border: `1px solid ${skill.color}33` }}>{skill.cat}</span>
          </div>
          <span style={{ color: skill.color, fontWeight: 800, fontSize: 18 }}>{skill.level}%</span>
        </div>
        <div style={{ height: 5, borderRadius: 100, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
          <div style={{ height: "100%", borderRadius: 100, background: `linear-gradient(90deg,${skill.color}88,${skill.color})`, width: visible ? `${skill.level}%` : "0%", transition: `width 1.3s cubic-bezier(.4,0,.2,1) ${index*100+400}ms`, boxShadow: `0 0 8px ${skill.color}66` }} />
        </div>
      </GlassCard>
    </div>
  );
};

const Skills = () => (
  <section id="skills" style={{ padding: "100px 24px", position: "relative", zIndex: 1 }}>
    <div style={{ maxWidth: 980, margin: "0 auto" }}>
      <SectionHeader label="What I Know" title="My" highlight="Skills" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(210px,1fr))", gap: 14 }}>
        {SKILLS.map((s, i) => <SkillCard key={s.name} skill={s} index={i} />)}
      </div>
    </div>
  </section>
);
export default Skills;
