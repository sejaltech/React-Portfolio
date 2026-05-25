import { useRef, useState, useEffect } from "react";

/**
 * useScrollReveal — fires once when the element enters the viewport.
 * @param {number} threshold  — 0–1, portion of element visible before firing (default 0.12)
 * @returns {[React.RefObject, boolean]} [ref to attach, isVisible]
 */
export function useScrollReveal(threshold = 0.12) {
  const ref     = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
