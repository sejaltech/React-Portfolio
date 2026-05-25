import { useState } from "react";
import GlassCard from "./Ui/glassCard";
import Reveal from "./Ui/Reveal";
import SectionHeader from "./Ui/SectionHeader";
import { SOCIAL_LINKS } from "../constants/dats";

// Inline icon components to avoid external dependency
const ArrowRight = ({ size = 13, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M5 12h14M13 5l6 7-6 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Award = ({ size = 15, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 2l2.09 4.26L19 7.27l-3.5 3.41.83 4.83L12 13.77 7.67 15.51l.83-4.83L5 7.27l4.91-.99L12 2z" fill={color} />
  </svg>
);
const Send = ({ size = 15, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M22 2L11 13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 2l-7 20  -4-9-9-4 20-7z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Github = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 .5C5.73.5.75 5.48.75 11.74c0 4.93 3.19 9.11 7.61 10.58.56.1.77-.24.77-.54 0-.27-.01-1.16-.02-2.1-3.09.67-3.74-1.49-3.74-1.49-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .17 1.57.92 1.57.92.99 1.7 2.6 1.21 3.24.93.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.21.43-2.2 1.14-2.97-.12-.28-.5-1.42.11-2.96 0 0 .93-.3 3.05 1.13.89-.25 1.85-.37 2.8-.37.95 0 1.91.12 2.8.37 2.11-1.43 3.04-1.13 3.04-1.13.62 1.54.24 2.68.12 2.96.71.77 1.14 1.76 1.14 2.97 0 4.27-2.61 5.22-5.09 5.5.4.35.75 1.04.75 2.1 0 1.52-.01 2.75-.01 3.12 0 .3.2.65.78.54C19.06 20.85 22.25 16.67 22.25 11.74 22.25 5.48 17.27.5 12 .5z" fill="currentColor" />
  </svg>
);
const Linkedin = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.48 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.84v2.16h.05c.54-1.02 1.86-2.1 3.83-2.1 4.1 0 4.86 2.7 4.86 6.22V24h-4V14.5c0-2.28-.04-5.21-3.18-5.21-3.18 0-3.66 2.48-3.66 5.04V24h-4V8z" fill="currentColor" />
  </svg>
);
const Mail = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
  </svg>
);

const ICON_MAP = { Mail: <Mail size={17} />, Github: <Github size={17} />, Linkedin: <Linkedin size={17} /> };

const inputStyle = { width:"100%", background:"rgba(255,255,255,0.8)", border:"1px solid rgba(255,107,138,0.2)", borderRadius:10, padding:"11px 14px", color:"#1a1a1a", fontSize:14, outline:"none", fontFamily:"inherit", boxSizing:"border-box", transition:"border-color .2s" };
const labelStyle = { color:"#333333", fontSize:12, fontWeight:600, display:"block", marginBottom:6 };

const Contact = () => {
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setForm({ name:"", email:"", message:"" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" style={{ padding:"100px 24px 60px", position:"relative", zIndex:1 }}>
      <div style={{ maxWidth:900, margin:"0 auto" }}>
        <SectionHeader label="Let's Talk" title="Get In" highlight="Touch" />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:28 }}>
          <Reveal direction="left">
            <div>
              <p style={{ color:"#475569", fontSize:14, lineHeight:1.8, marginBottom:28 }}>Always open to internship opportunities, collaborations, and learning. Drop me a message!</p>
              {SOCIAL_LINKS.map((s, i) => (
                <a key={i} href={s.href} style={{ display:"flex", alignItems:"center", gap:13, padding:"13px 16px", marginBottom:12, borderRadius:12, background:"rgba(255,255,255,0.6)", border:"1px solid rgba(255,107,138,0.15)", textDecoration:"none", transition:"all .2s" }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(255,107,138,0.4)";e.currentTarget.style.background="rgba(255,107,138,0.08)";}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,107,138,0.15)";e.currentTarget.style.background="rgba(255,255,255,0.6)";}}>
                  <span style={{ color:"#FF6B8A" }}>{ICON_MAP[s.iconName]}</span>
                  <span style={{ color:"#333333", fontSize:13 }}>{s.label}</span>
                  <ArrowRight size={13} color="#4b5563" style={{ marginLeft:"auto" }} />
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal direction="right">
            <GlassCard style={{ padding:26 }}>
              <div style={{ marginBottom:14 }}>
                <label style={labelStyle}>Name</label>
                <input style={inputStyle} placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} onFocus={e=>e.target.style.borderColor="rgba(255,107,138,0.6)"} onBlur={e=>e.target.style.borderColor="rgba(255,107,138,0.2)"} />
              </div>
              <div style={{ marginBottom:14 }}>
                <label style={labelStyle}>Email</label>
                <input style={inputStyle} type="email" placeholder="your@email.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} onFocus={e=>e.target.style.borderColor="rgba(255,107,138,0.6)"} onBlur={e=>e.target.style.borderColor="rgba(255,107,138,0.2)"} />
              </div>
              <div style={{ marginBottom:18 }}>
                <label style={labelStyle}>Message</label>
                <textarea style={{...inputStyle,resize:"vertical",minHeight:100}} placeholder="Your message..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})} onFocus={e=>e.target.style.borderColor="rgba(255,107,138,0.6)"} onBlur={e=>e.target.style.borderColor="rgba(255,107,138,0.2)"} />
              </div>
              <button onClick={handleSubmit} style={{ width:"100%", background:sent?"linear-gradient(135deg,#4ade80,#22c55e)":"linear-gradient(135deg,#8B0000,#FF6B8A)", border:"none", color:"#fff", padding:13, borderRadius:10, cursor:"pointer", fontSize:14, fontWeight:600, display:"flex", alignItems:"center", justifyContent:"center", gap:8, fontFamily:"inherit", transition:"all .3s", boxShadow:sent?"0 8px 24px rgba(74,222,128,0.3)":"0 8px 24px rgba(139,0,0,0.3)" }}>
                {sent ? <><Award size={15}/> Message Sent!</> : <><Send size={15}/> Send Message</>}
              </button>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
export default Contact;
