// Scroll-reveal animation wrapper
// Wraps any child and fades/slides it in when it enters the viewport.
import { useScrollReveal } from "../../hooks/useScrollReveal";

const TRANSFORMS = {
  up:    "translateY(40px)",
  down:  "translateY(-40px)",
  left:  "translateX(-40px)",
  right: "translateX(40px)",
};

const Reveal = ({ children, delay = 0, direction = "up" }) => {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : TRANSFORMS[direction],
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
