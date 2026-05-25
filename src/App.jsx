import { useState, useEffect } from "react";
import CustomCursor from "./components/CustomCursor";
import ParticleBackground from "./components/ParticleBackground";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <LoadingScreen done={loaded} />
      <CustomCursor />
      <ParticleBackground />
      {/* Ambient glow */}
      <div style={{ position:"fixed", inset:0, background:"radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,107,138,0.08), transparent)", pointerEvents:"none", zIndex:0 }} />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}
