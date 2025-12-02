"use client";

import { useEffect, useState } from "react";

export function useSplitText(text: string) {
  const words = text.split(" ");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [offsets, setOffsets] = useState<any[][] | null>(null);

  // Generate random offsets AFTER mount → hydration safe
  useEffect(() => {
    const generated = words.map((word) =>
      word.split("").map(() => ({
        x: Math.random() * 40 - 20,
        y: Math.random() * 40 - 20,
        rotate: Math.random() * 15 - 7,
      }))
    );
    setOffsets(generated);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return { words, offsets };
}
