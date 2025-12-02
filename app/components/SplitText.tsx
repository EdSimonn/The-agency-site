"use client";

import { motion, Variants } from "framer-motion";
import { useSplitText } from "../hooks/useSplitText";
// import { useSplitText } from "@/hooks/useSplitText";

export const SplitText = ({ text, }: { text: string }) => {
  const { words, offsets } = useSplitText(text);

  // Before hydration: show plain text (prevents mismatch)
  if (!offsets) return <span>{text}</span>;

  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.03 } },
  };

  const letterVariants: Variants = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hidden: (offset: any) => ({
      opacity: 0,
      x: offset.x,
      y: offset.y,
      rotate: offset.rotate,
    }),
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="inline-block"
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap mr-2">
          {word.split("").map((char, li) => (
            <motion.span
              key={li}
              custom={offsets[wi][li]}
              variants={letterVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
};
