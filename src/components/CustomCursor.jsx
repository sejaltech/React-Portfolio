import React from "react";

// Disable custom cursor: enforce browser default cursor
const CustomCursor = () => {
  React.useEffect(() => {
    const prevHtml = document.documentElement.style.cursor;
    const prevBody = document.body.style.cursor;
    document.documentElement.style.cursor = "auto";
    document.body.style.cursor = "auto";
    return () => {
      document.documentElement.style.cursor = prevHtml || "";
      document.body.style.cursor = prevBody || "";
    };
  }, []);

  return null; // no custom cursor DOM
};

export default CustomCursor;
