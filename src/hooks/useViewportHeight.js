import { useState, useEffect } from "react";

export const useViewportHeight = () => {
  const [height, setHeight] = useState(
    typeof window !== "undefined"
      ? window.visualViewport?.height ?? window.innerHeight
      : 0
  );

  useEffect(() => {
    const updateHeight = () =>
      setHeight(window.visualViewport?.height ?? window.innerHeight);

    window.visualViewport?.addEventListener("resize", updateHeight);
    window.addEventListener("orientationchange", updateHeight);

    return () => {
      window.visualViewport?.removeEventListener("resize", updateHeight);
      window.removeEventListener("orientationchange", updateHeight);
    };
  }, []);

  return height;
};
