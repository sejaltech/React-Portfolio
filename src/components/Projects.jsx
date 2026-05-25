import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import GlassCard from "./Ui/glassCard";
import SectionHeader from "./Ui/SectionHeader";
import { PROJECTS } from "../constants/dats";

// Inline icons to avoid lucide-react dependency
const Github = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 .5C5.73.5.75 5.48.75 11.74c0 4.93 3.19 9.11 7.61 10.58.56.1.77-.24.77-.54 0-.27-.01-1.16-.02-2.1-3.09.67-3.74-1.49-3.74-1.49-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .17 1.57.92 1.57.92.99 1.7 2.6 1.21 3.24.93.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.21.43-2.2 1.14-2.97-.12-.28-.5-1.42.11-2.96 0 0 .93-.3 3.05 1.13.89-.25 1.85-.37 2.8-.37.95 0 1.91.12 2.8.37 2.11-1.43 3.04-1.13 3.04-1.13.62 1.54.24 2.68.12 2.96.71.77 1.14 1.76 1.14 2.97 0 4.27-2.61 5.22-5.09 5.5.4.35.75 1.04.75 2.1 0 1.52-.01 2.75-.01 3.12 0 .3.2.65.78.54C19.06 20.85 22.25 16.67 22.25 11.74 22.25 5.48 17.27.5 12 .5z" fill="currentColor" />
  </svg>
);
const ExternalLink = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M14 3h7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 14L21 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 21H3V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProjectCard = ({ project, index }) => {
  const [ref, visible] = useScrollReveal();
  const [hovered, setHovered] = useState(false);
  const c = project.color;
  return (
    <div ref={ref} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ opacity: visible?1:0, transform: visible?"none":"translateY(40px)", transition: `opacity .7s ease ${index*150}ms,transform .7s ease ${index*150}ms` }}>
      <GlassCard style={{ overflow: "hidden", height: "100%", transition: "all .3s", transform: hovered?"translateY(-6px) scale(1.01)":"none", borderColor: hovered?`${c}55`:"rgba(255,107,138,0.2)", boxShadow: hovered?`0 16px 48px ${c}22`:undefined }}>
        <div style={{ height: 150, background: `linear-gradient(135deg,${c}20,rgba(139,0,0,0.8))`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
          <svg style={{ position:"absolute",inset:0,opacity:.12 }} width="100%" height="100%">
            <defs><pattern id={`g${index}`} width="28" height="28" patternUnits="userSpaceOnUse"><path d="M 28 0 L 0 0 0 28" fill="none" stroke={c} strokeWidth=".6"/></pattern></defs>
            <rect width="100%" height="100%" fill={`url(#g${index})`} />
          </svg>
          <div style={{ width: 52, height: 52, borderRadius: 14, background: `${c}25`, border: `1px solid ${c}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, position: "relative" }}>💻</div>
        </div>
        <div style={{ padding: "22px" }}>
          <h3 style={{ color: "#1a1a1a", fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{project.title}</h3>
          <p style={{ color: "#475569", fontSize: 13, lineHeight: 1.7, marginBottom: 14 }}>{project.desc}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
            {project.tags.map(t => <span key={t} style={{ background: `${c}18`, border: `1px solid ${c}33`, color: c, borderRadius: 100, padding: "3px 10px", fontSize: 11, fontWeight: 600 }}>{t}</span>)}
          </div>
          <div style={{ display: "flex", gap: 9 }}>
            <a href={project.github} style={{ flex:1, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)", color:"#333333", padding:"9px 14px", borderRadius:10, cursor:"pointer", fontSize:12, fontWeight:600, display:"flex", alignItems:"center", justifyContent:"center", gap:6, textDecoration:"none", transition:"all .2s" }}
              onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.08)";e.currentTarget.style.color="#1a1a1a";}}
              onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.04)";e.currentTarget.style.color="#333333";}}>
              <Github size={13}/> GitHub
            </a>
            <a href={project.demo} style={{ flex:1, background:`${c}18`, border:`1px solid ${c}44`, color:c, padding:"9px 14px", borderRadius:10, cursor:"pointer", fontSize:12, fontWeight:600, display:"flex", alignItems:"center", justifyContent:"center", gap:6, textDecoration:"none", transition:"all .2s" }}
              onMouseEnter={e=>e.currentTarget.style.opacity="0.75"}
              onMouseLeave={e=>e.currentTarget.style.opacity="1"}>
              <ExternalLink size={13}/> Live Demo
            </a>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

const Projects = () => (
  <section id="projects" style={{ padding: "100px 24px", position: "relative", zIndex: 1 }}>
    <div style={{ maxWidth: 980, margin: "0 auto" }}>
      <SectionHeader label="What I've Built" title="Featured" highlight="Projects" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 22 }}>
        {PROJECTS.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
      </div>
    </div>
  </section>
);
export default Projects;
