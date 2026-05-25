import GlassCard from "./Ui/glassCard";
import Reveal from "./Ui/Reveal";
import SectionHeader from "./Ui/SectionHeader";
import { ABOUT_FACTS, INTERESTS } from "../constants/dats";

// Inline icon components
const Calendar = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path d="M7 11h5v5H7z" fill="currentColor" opacity="0.9" />
    <path
      d="M7 3v2M17 3v2M3 8h18M5 21h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2z"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MapPin = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path d="M12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor" />
    <path
      d="M12 21s8-6.5 8-11.5A8 8 0 0 0 4 9.5C4 15 12 21 12 21z"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Code2 = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M8.5 7.5L3 12l5.5 4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.5 7.5L21 12l-5.5 4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Star = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M12 17.3l-5.2 3.1 1.4-6.1L4 9.9l6.3-.5L12 3.5l1.7 5.9 6.3.5-4.2 4.4 1.4 6.1z"
      fill="currentColor"
    />
  </svg>
);

const GraduationCap = ({ size = 20, color = "currentColor" }) => (
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
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 13v6"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ICON_MAP = {
  Calendar: <Calendar size={18} />,
  MapPin: <MapPin size={18} />,
  Code2: <Code2 size={18} />,
  Star: <Star size={18} />,
};

const About = () => (
  <section
    id="about"
    style={{
      padding: "100px 24px",
      position: "relative",
      zIndex: 1,
    }}
  >
    <div style={{ maxWidth: 980, margin: "0 auto" }}>
      <SectionHeader label="Who I Am" title="About" highlight="Me" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: 28,
          alignItems: "start",
        }}
      >
        {/* Left Card */}
        <Reveal direction="left">
          <GlassCard style={{ padding: 28 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg,#8B0000,#FF6B8A,#87CEEB)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
                fontWeight: 800,
                color: "#fff",
                marginBottom: 18,
              }}
            >
              S
            </div>

            {/* NAME */}
            <h3
              style={{
                color: "#ffffff",
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 12,
              }}
            >
              Sejal Singh
            </h3>

            {/* PARAGRAPH 1 */}
            <p
              style={{
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.9,
                fontSize: 14,
                marginBottom: 14,
              }}
            >
              Hi! I'm a first-year B.Tech CSE student with a genuine passion
              for software development. I'm on an exciting learning journey
              exploring frontend development, DSA, and software engineering
              fundamentals.
            </p>

            {/* PARAGRAPH 2 */}
            <p
              style={{
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.9,
                fontSize: 13,
                marginBottom: 18,
              }}
            >
              Every problem has an elegant solution, and I'm here to find it.
              When not coding, I'm practising on competitive platforms and
              building projects that matter.
            </p>

            {/* INTEREST TAGS */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 7,
              }}
            >
              {INTERESTS.map((t) => (
                <span
                  key={t}
                  style={{
                    background: "rgba(255,107,138,0.12)",
                    border: "1px solid rgba(255,107,138,0.25)",
                    color: "#FF6B8A",
                    borderRadius: 100,
                    padding: "5px 12px",
                    fontSize: 12,
                    fontWeight: 500,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </GlassCard>
        </Reveal>

        {/* Right Side */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {/* Education Card */}
          <Reveal direction="right" delay={100}>
            <GlassCard style={{ padding: "20px 22px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 11,
                    background: "rgba(255,107,138,0.14)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <GraduationCap size={20} color="#FF6B8A" />
                </div>

                <div>
                  {/* TITLE */}
                  <div
                    style={{
                      color: "#ffffff",
                      fontSize: 15,
                      fontWeight: 700,
                    }}
                  >
                    B.Tech Computer Science Engineering
                  </div>

                  {/* YEAR */}
                  <div
                    style={{
                      color: "#FF6B8A",
                      fontSize: 12,
                      fontWeight: 600,
                      margin: "4px 0",
                    }}
                  >
                    1st Year · 2025–2029
                  </div>

                  {/* DESC */}
                  <div
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: 13,
                      lineHeight: 1.7,
                    }}
                  >
                    Building foundations in algorithms, systems & modern web
                    technologies.
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>

          {/* Fact Cards */}
          <Reveal direction="right" delay={200}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              {ABOUT_FACTS.map((f, i) => (
                <GlassCard
                  key={i}
                  style={{
                    padding: "14px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span style={{ color: "#FF6B8A" }}>
                    {ICON_MAP[f.iconName]}
                  </span>

                  <div>
                    {/* LABEL */}
                    <div
                      style={{
                        color: "#FF6B8A",
                        fontSize: 11,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {f.label}
                    </div>

                    {/* VALUE */}
                    <div
                      style={{
                        color: "#ffffff",
                        fontSize: 13,
                        fontWeight: 600,
                      }}
                    >
                      {f.value}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default About;
