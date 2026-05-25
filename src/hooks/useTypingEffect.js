import { useState, useEffect } from "react";

/**
 * useTypingEffect — cycles through an array of words with a typewriter animation.
 * @param {string[]} words  — list of words to cycle through
 * @param {number}   speed  — ms per character when typing  (default 80)
 * @param {number}   pause  — ms to hold the completed word (default 1800)
 * @returns {string} the currently displayed text
 */
export function useTypingEffect(words, speed = 80, pause = 1800) {
  const [display,  setDisplay]  = useState("");
  const [wordIdx,  setWordIdx]  = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx % words.length];
    let timeout;

    if (!deleting && display.length < word.length) {
      // Still typing
      timeout = setTimeout(
        () => setDisplay(word.slice(0, display.length + 1)),
        speed
      );
    } else if (!deleting && display.length === word.length) {
      // Finished typing — pause then start deleting
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && display.length > 0) {
      // Deleting characters
      timeout = setTimeout(
        () => setDisplay(display.slice(0, -1)),
        speed / 2
      );
    } else {
      // Deleted everything — move to next word
      setDeleting(false);
      setWordIdx((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [display, deleting, wordIdx, words, speed, pause]);

  return display;
}
