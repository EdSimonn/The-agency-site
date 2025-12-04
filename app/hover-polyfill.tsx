"use client";

import { useEffect } from "react";

export default function HoverPolyfill() {
  useEffect(() => {
    // Add hover class on touchstart
    const onTouchStart = (e: TouchEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      target.classList.add("hover");
    };

    // Remove hover class when user lifts their finger
    const onTouchEnd = () => {
      document.querySelectorAll(".hover").forEach((el) => {
        el.classList.remove("hover");
      });
    };

    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchend", onTouchEnd);

    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return null;
}
