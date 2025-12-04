"use client";

import { useAnimationFrame } from "framer-motion";
import React, { useRef, useState, useLayoutEffect } from "react";

const text = "Web design & development agency.";

export default function SlidingBanner() {
  const baseX = useRef(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  // Measure the width of the track ONCE after mount
  useLayoutEffect(() => {
    if (containerRef.current) {
      // scrollWidth exists because it's a div
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  // Continuous movement using animation frame
  useAnimationFrame((t, delta) => {
    if (!containerRef.current || width === 0) return;

    baseX.current -= (delta / 1000) * 100; // speed (150px/sec)

    // Reset only AFTER first half fully exits → no snapping
    if (baseX.current <= -width) {
      baseX.current = 0;
    }

    containerRef.current.style.transform = `translateX(${baseX.current}px)`;
  });

  return (
    <div className="overflow-hidden whitespace-nowrap bg-black py-6">
      <div ref={containerRef} className="flex will-change-transform">
        {/* First set */}
        <MarqueeText text={text} />
        <MarqueeText text={text} />
        <MarqueeText text={text} />

        {/* Second set for seamless loop */}
        <MarqueeText text={text} />
        <MarqueeText text={text} />
        <MarqueeText text={text} />
      </div>
    </div>
  );
}

const MarqueeText = ({ text }: { text: string }) => {
  const parts = text.split("&");

  return (
    <span className="text-white font-bold text-[16vw] tracking-tighter px-8">
      {parts[0]}
      <span className="text-[#4EE1FF]">&</span>
      {parts[1]}
    </span>
  );
};

// "use client";
// import React from "react";

// const SlidingBanner = () => {
//   return (
//     <div className="w-full overflow-hidden bg-black py-6">
//       {/* 1. w-max: Ensures the div is as wide as the text (doesn't wrap).
//         2. animate-infinite-scroll: Uses the config we defined above.
//       */}
//       <div className="flex w-max animate-infinite-scroll">

//         {/* FIRST COPY */}
//         <span className="text-white font-bold text-[16vw] uppercase leading-none tracking-tighter px-4">
//           Web design & development agency.
//         </span>

//         {/* SECOND COPY (Must be identical to the first for the loop to work) */}
//         <span className="text-white font-bold text-[16vw] uppercase leading-none tracking-tighter px-4">
//           Web design & development agency.
//         </span>

//       </div>
//     </div>
//   );
// };

// export default SlidingBanner;

// "use client";

// import React from "react";

// const SlidingBanner = () => {
//   return (
//     <div className="overflow-hidden whitespace-nowrap bg-black py-6">
//       {/* Track */}
//       <div className="flex animate-slider">
//         {/* Repeat text 3 times for seamless infinite loop */}
//         <span className="text-white font-bold text-[16vw] tracking-tighter px-8">
//           Web design & development agency.
//         </span>
//         <span className="text-white font-bold text-[16vw] tracking-tighter px-8">
//           Web design & development agency.
//         </span>
//         <span className="text-white font-bold text-[16vw] tracking-tighter px-8">
//           Web design & development agency.
//         </span>
//       </div>
//     </div>
//   );
// };

// export default SlidingBanner;

// "use client";
// import React from "react";

// const SlidingBanner = () => {
//   return (
//     <div className="overflow-hidden whitespace-nowrap bg-black py-6">
//       <div className="flex animate-slide">
//         <span className="text-white font-bold text-[16vw] tracking-tighter px-8">
//           Web design & development agency.
//         </span>

//         {/* Duplicate for infinite loop */}
//         <span className="text-white font-bold text-[18vw] tracking-tighter px-8">
//           Web design & development agency.
//         </span>
//       </div>
//     </div>
//   );
// };

// export default SlidingBanner;

// import React from 'react'

// const SlidingBanner = () => {
//   return (
//     <div>SlidingBanner</div>
//   )
// }

// export default SlidingBanner

// pls help me create this slider in the image provided, this is the full text Web design & development agency.  Web design & development agency.
