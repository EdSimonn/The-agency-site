"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const videos = ["/videos/hero1.mp4", "/videos/hero2.mp4"];

export default function HeroNav() {
  const [index, setIndex] = useState(0);
  const [slide, setSlide] = useState(false);
  const [isCtaHovered, setIsCtaHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % videos.length);
        setSlide(false);
      }, 700);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full text-white overflow-hidden">
      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* VIDEO WRAPPER (SLIDES LEFT/RIGHT) */}
        <div
          className={`absolute inset-0 w-[200%] h-full flex transition-transform duration-[700ms] ease-out ${
            slide ? "-translate-x-1/2" : "translate-x-0"
          }`}
        >
          {/* CURRENT VIDEO */}
          <video
            key={index}
            src={videos[index]}
            className="w-1/2 h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* NEXT VIDEO */}
          <video
            key={"next-" + index}
            src={videos[(index + 1) % videos.length]}
            className="w-1/2 h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center py-[24vh] px-4 md:px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="max-w-5xl text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-tight"
        >
          MORE THAN <br />
          JUST A{" "}
          <span className="mx-2 md:mx-3 text-[#4EE1FF] drop-shadow-[0_0_10px_rgba(78,225,255,0.8)]">
            TYPICAL
          </span>{" "}
          <br />
          <span className="inline-flex flex-wrap items-center justify-center gap-x-3 md:gap-x-5">
            <span>WEB AGENCY</span>

            <motion.button
              className={`
                w-12 h-12 md:w-16 md:h-16 rounded-full
                flex items-center justify-center
                transition-colors duration-300
                ${isCtaHovered ? "bg-[#3BC3E6]" : "bg-[#4EE1FF]"}
              `}
              onMouseEnter={() => setIsCtaHovered(true)}
              onMouseLeave={() => setIsCtaHovered(false)}
            >
              <motion.span
                animate={{
                  rotate: isCtaHovered ? 0 : 45,
                  textShadow: isCtaHovered
                    ? "0 0 8px rgba(78,225,255,0.8), 0 0 16px rgba(78,225,255,0.5)"
                    : "0 0 0 rgba(0,0,0,0)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex items-center justify-center"
              >
                <ArrowRight size={24} className="text-black md:w-7 md:h-7" />
              </motion.span>
            </motion.button>
          </span>
        </motion.h1>
      </div>

      {/* MARQUEE */}
      <div className="w-full border-t border-white/10 overflow-hidden absolute bottom-0">
        <motion.div
          className="flex whitespace-nowrap uppercase text-xs md:text-sm tracking-widest py-3 md:py-4 bg-black/25 backdrop-blur-sm"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[1, 2].map((i) => (
            <div key={i} className="flex">
              <span className="mx-4 md:mx-8">
                STRATEGY _ DESIGN _ BUILD _ DEPLOY
              </span>
              <span className="mx-4 md:mx-8 text-[#4EE1FF]">✦</span>
              <span className="mx-4 md:mx-8">
                ELEVATING YOUR DIGITAL PRESENCE
              </span>
              <span className="mx-4 md:mx-8 text-[#4EE1FF]">✦</span>
              <span className="mx-4 md:mx-8">
                DRIVING GROWTH THROUGH TECHNOLOGY
              </span>
              <span className="mx-4 md:mx-8 text-[#4EE1FF]">✦</span>
              <span className="mx-4 md:mx-8">
                FUTURE-PROOFING YOUR INVESTMENT
              </span>
              <span className="mx-4 md:mx-8 text-[#4EE1FF]">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// const videos = ["/videos/hero1.mp4", "/videos/hero2.mp4"];

// export default function HeroNav() {
//   const [index, setIndex] = useState(0);
//   const [fade, setFade] = useState(false);
//   const [hover, setHover] = useState(false);

//   // Video crossfade logic (optimized)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(true);
//       setTimeout(() => {
//         setIndex((prev) => (prev + 1) % videos.length);
//         setFade(false);
//       }, 700);
//     }, 8000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full text-white overflow-hidden">

//       {/* BACKGROUND VIDEO – ONLY ONE VIDEO LOADED AT A TIME */}
//       <div className="absolute inset-0 -z-10">
//         <motion.video
//           key={index}
//           src={videos[index]}
//           className="absolute inset-0 w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="metadata"
//           poster="/videos/poster.jpg"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: fade ? 0 : 1 }}
//           transition={{ duration: 0.7 }}
//         />
//         <div className="absolute inset-0 bg-black/50" />
//       </div>

//       {/* HERO CONTENT */}
//       <div className="relative z-20 flex flex-col items-center justify-center py-[24vh] px-4 text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           className="max-w-5xl text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-tight"
//         >
//           MORE THAN <br />
//           JUST A{" "}
//           <span className="mx-2 md:mx-3 text-[#4EE1FF] drop-shadow-[0_0_12px_rgba(78,225,255,0.8)]">
//             TYPICAL
//           </span>
//           <br />

//           {/* CTA BUBBLE */}
//           <span className="inline-flex items-center gap-x-3 md:gap-x-5">
//             <span>WEB AGENCY</span>

//             <motion.button
//               onMouseEnter={() => setHover(true)}
//               onMouseLeave={() => setHover(false)}
//               onClick={() => console.log("CTA Clicked")}
//               className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-colors duration-300 
//                 ${hover ? "bg-[#3BC3E6]" : "bg-[#4EE1FF]"}
//               `}
//             >
//               <motion.span
//                 animate={{ rotate: hover ? 0 : 45 }}
//                 transition={{ duration: 0.25 }}
//               >
//                 <ArrowRight className="text-black w-6 h-6 md:w-7 md:h-7" />
//               </motion.span>
//             </motion.button>
//           </span>
//         </motion.h1>
//       </div>

//       {/* MARQUEE */}
//       <div className="w-full border-t border-white/10 overflow-hidden absolute bottom-0">
//         <motion.div
//           className="flex whitespace-nowrap uppercase text-xs md:text-sm tracking-widest py-3 md:py-4 bg-black/25 backdrop-blur-sm"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
//         >
//           {[1, 2].map((i) => (
//             <div key={i} className="flex">
//               <span className="mx-4 md:mx-8">STRATEGY _ DESIGN _ BUILD _ DEPLOY</span>
//               <span className="mx-4 md:mx-8 text-[#4EE1FF]">✦</span>
//               <span className="mx-4 md:mx-8">ELEVATING YOUR DIGITAL PRESENCE</span>
//               <span className="mx-4 md:mx-8 text-[#4EE1FF]">✦</span>
//               <span className="mx-4 md:mx-8">DRIVING GROWTH THROUGH TECHNOLOGY</span>
//               <span className="mx-4 md:mx-8 text-[#4EE1FF]">✦</span>
//               <span className="mx-4 md:mx-8">FUTURE-PROOFING YOUR INVESTMENT</span>
//               <span className="mx-4 md:mx-8 text-[#4EE1FF]">✦</span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// const videos = [
//   "/videos/hero1.mp4",
//   "/videos/hero2.mp4",
// ];

// export default function HeroNav() {
//   const [index, setIndex] = useState(0);
//   const [fade, setFade] = useState(false);
//   const [isCtaHovered, setIsCtaHovered] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(true);
//       setTimeout(() => {
//         setIndex((prev) => (prev + 1) % videos.length);
//         setFade(false);
//       }, 800);
//     }, 8000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full text-white overflow-hidden">
//       {/* BACKGROUND VIDEOS */}
//       <div className="absolute inset-0 -z-10">
//         <video
//           key={index}
//           src={videos[index]}
//           className={`absolute w-full h-full object-cover transition-opacity duration-700 ${fade ? "opacity-0" : "opacity-100"}`}
//           autoPlay
//           muted
//           loop
//           playsInline
//         />
//         <video
//           key={"next-" + index}
//           src={videos[(index + 1) % videos.length]}
//           className={`absolute w-full h-full object-cover transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}
//           autoPlay
//           muted
//           loop
//           playsInline
//         />
//         <div className="absolute inset-0 bg-black/50" />
//       </div>

//       {/* HERO CONTENT */}
//       <div className="relative z-20 flex flex-col items-center justify-center py-[24vh] px-4 md:px-6 text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
//           className="max-w-5xl text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-tight"
//         >
//           MORE THAN <br />
//           JUST A{" "}
//           <span className="mx-2 md:mx-3 text-[#4EE1FF] drop-shadow-[0_0_10px_rgba(78,225,255,0.8)]">
//             TYPICAL
//           </span>{" "}
//           <br />
//           <span className="inline-flex flex-wrap items-center justify-center gap-x-3 md:gap-x-5">
//             <span>WEB AGENCY</span>

//             <motion.button
//               className={`
//                 w-12 h-12 md:w-16 md:h-16 rounded-full
//                 flex items-center justify-center
//                 transition-colors duration-300
//                 ${isCtaHovered ? "bg-[#3BC3E6]" : "bg-[#4EE1FF]"}
//               `}
//               onMouseEnter={() => setIsCtaHovered(true)}
//               onMouseLeave={() => setIsCtaHovered(false)}
//               onClick={() => console.log("Success CTA Clicked")}
//             >
//               <motion.span
//                 animate={{
//                   rotate: isCtaHovered ? 0 : 45,
//                   textShadow: isCtaHovered
//                     ? "0 0 8px rgba(78,225,255,0.8), 0 0 16px rgba(78,225,255,0.5)"
//                     : "0 0 0 rgba(0,0,0,0)",
//                 }}
//                 transition={{ duration: 0.3, ease: "easeOut" }}
//                 className="flex items-center justify-center"
//               >
//                 <ArrowRight size={24} className="text-black md:w-7 md:h-7" />
//               </motion.span>
//             </motion.button>
//           </span>
//         </motion.h1>
//       </div>

//       {/* MARQUEE */}
//       <div className="w-full border-t border-white/10 overflow-hidden absolute bottom-0">
//         <motion.div
//           className="flex whitespace-nowrap uppercase text-xs md:text-sm tracking-widest py-3 md:py-4 bg-black/25 backdrop-blur-sm"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
//         >
//           {[1, 2].map((i) => (
//             <div key={i} className="flex">
//               <span className="mx-4 md:mx-8">STRATEGY _ DESIGN _ BUILD _ DEPLOY</span>
//               <span className="mx-4 md:mx-8 text-[#4EE1FF]">✦</span>
//               <span className="mx-4 md:mx-8">ELEVATING YOUR DIGITAL PRESENCE</span>
//               <span className="mx-4 md:mx-8 text-[#4EE1FF]">✦</span>
//               <span className="mx-4 md:mx-8">DRIVING GROWTH THROUGH TECHNOLOGY</span>
//               <span className="mx-4 md:mx-8 text-[#4EE1FF]">✦</span>
//               <span className="mx-4 md:mx-8">FUTURE-PROOFING YOUR INVESTMENT</span>
//               <span className="mx-4 md:mx-8 text-[#4EE1FF]">✦</span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


// my site has images and videos as background or just part of the code and Layout, but when it loads the images and vieos do not load quickly and i need it to load snappy and quickly so my site bahaves professionally, not i am using next js tsx pls help me   

// "use client";
// import { motion } from "framer-motion";
// import { 
//   Code, 
//   Layout, 
//   Smartphone, 
//   Globe, 
//   Database, 
//   // Cpu is unused, removed for clean linting
// } from "lucide-react";
// import { ReactNode } from "react"; // Import ReactNode for the icon type

// // 1. Define the Shape of the Data
// interface ServiceItem {
//   title: string;
//   description: string;
//   icon: ReactNode; // This handles the JSX Icon component
//   colSpan: string;
// }

// const services: ServiceItem[] = [
//   {
//     title: "Web Architecture",
//     description: "High-performance websites built on Next.js. We prioritize SEO, speed, and scalability.",
//     icon: <Globe className="w-8 h-8" />,
//     colSpan: "md:col-span-2", 
//   },
//   {
//     title: "UI/UX Design",
//     description: "Crafting intuitive interfaces that convert visitors into loyal customers.",
//     icon: <Layout className="w-8 h-8" />,
//     colSpan: "md:col-span-1",
//   },
//   {
//     title: "Mobile Engineering",
//     description: "Native and cross-platform solutions for iOS and Android ecosystems.",
//     icon: <Smartphone className="w-8 h-8" />,
//     colSpan: "md:col-span-1",
//   },
//   {
//     title: "Backend Systems",
//     description: "Robust API development, database management, and cloud infrastructure.",
//     icon: <Database className="w-8 h-8" />,
//     colSpan: "md:col-span-2",
//   },
//   {
//     title: "Custom Software",
//     description: "Tailored algorithmic solutions to automate complex business logic.",
//     icon: <Code className="w-8 h-8" />,
//     colSpan: "md:col-span-3", 
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="relative w-full bg-black py-24 md:py-32 px-6">
      
//       {/* BACKGROUND GLOW */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-blue-900/20 blur-[120px] -z-10 opacity-50 pointer-events-none" />

//       <div className="max-w-7xl mx-auto">
        
//         {/* HEADER */}
//         <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-blue-500 font-medium tracking-widest text-sm uppercase mb-4">
//               Our Expertise
//             </h2>
//             <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
//               Engineering the <br />
//               <span className="text-zinc-500">Digital Future.</span>
//             </h3>
//           </motion.div>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-zinc-400 max-w-sm text-sm md:text-base leading-relaxed"
//           >
//             We don&apos;t just write code; we build digital assets that drive revenue and define brands.
//           </motion.p>
//         </div>

//         {/* BENTO GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <Card key={index} item={service} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // 2. Define the Props Interface
// interface CardProps {
//   item: ServiceItem;
//   index: number;
// }

// // 3. Apply the Interface to the Component
// function Card({ item, index }: CardProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       className={`
//         group relative p-8 rounded-3xl border border-white/10 bg-zinc-950/50 overflow-hidden
//         hover:border-blue-500/50 transition-colors duration-500
//         ${item.colSpan}
//       `}
//     >
//       {/* HOVER GRADIENT */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//       <div className="relative z-10 h-full flex flex-col justify-between gap-8">
//         {/* ICON */}
//         <div className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center border border-white/5 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-all duration-300">
//           <div className="text-zinc-400 group-hover:text-blue-400 transition-colors duration-300">
//             {item.icon}
//           </div>
//         </div>

//         {/* TEXT */}
//         <div>
//           <h4 className="text-2xl font-semibold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
//             {item.title}
//           </h4>
//           <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
//             {item.description}
//           </p>
//         </div>

//         {/* ARROW */}
//         <div className="absolute top-8 right-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-500">
//           <ArrowUpRight />
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// function ArrowUpRight() {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M7 17L17 7" />
//       <path d="M7 7h10v10" />
//     </svg>
//   );
// }



// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// const videos = ["/videos/hero1.mp4", "/videos/hero2.mp4"];

// export default function HeroNav() {
//   const [index, setIndex] = useState(0);
//   const [fade, setFade] = useState(false);
//   const [isCtaHovered, setIsCtaHovered] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(true);
//       setTimeout(() => {
//         setIndex((prev) => (prev + 1) % videos.length);
//         setFade(false);
//       }, 800);
//     }, 8000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full text-white overflow-hidden">
//       {/* BACKGROUND VIDEOS */}
//       <div className="absolute inset-0 -z-10">
//         <video
//           key={index}
//           src={videos[index]}
//           className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
//             fade ? "opacity-0" : "opacity-100"
//           }`}
//           autoPlay
//           muted
//           loop
//           playsInline
//         />
//         <video
//           key={"next-" + index}
//           src={videos[(index + 1) % videos.length]}
//           className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
//             fade ? "opacity-100" : "opacity-0"
//           }`}
//           autoPlay
//           muted
//           loop
//           playsInline
//         />
//         <div className="absolute inset-0 bg-black/50" />
//       </div>

//       {/* HERO CONTENT */}
//       <div className="relative z-20 flex flex-col items-center justify-center py-[24vh] px-4 md:px-6 text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
//           className="max-w-5xl text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-tight"
//         >
//           MORE THAN <br />
//           JUST A{" "}
//           <span className="mx-2 md:mx-3 text-[#4EE1FF] drop-shadow-[0_0_10px_rgba(78,225,255,0.8)]">
//             TYPICAL
//           </span>{" "}
//           <br />
//           <span className="inline-flex flex-wrap items-center justify-center gap-x-3 md:gap-x-5">
//             <span>WEB AGENCY</span>

//             <motion.button
//               className={`
//                 w-12 h-12 md:w-16 md:h-16 rounded-full
//                 flex items-center justify-center
//                 transition-colors duration-300
//                 ${isCtaHovered ? "bg-[#3BC3E6]" : "bg-[#4EE1FF]"}
//               `}
//               onMouseEnter={() => setIsCtaHovered(true)}
//               onMouseLeave={() => setIsCtaHovered(false)}
//               onClick={() => console.log("Success CTA Clicked")}
//             >
//               <motion.span
//                 animate={{ rotate: isCtaHovered ? 0 : 45 }}
//                 transition={{ duration: 0.3, ease: "easeOut" }}
//                 className="flex items-center justify-center"
//               >
//                 <ArrowRight size={24} className="text-black md:w-7 md:h-7" />
//               </motion.span>
//             </motion.button>
//           </span>
//         </motion.h1>
//       </div>

//       {/* MARQUEE */}
//       <div className="w-full border-t border-white/10 overflow-hidden absolute bottom-0">
//         <motion.div
//           className="flex whitespace-nowrap uppercase text-xs md:text-sm tracking-widest py-3 md:py-4 bg-black/25 backdrop-blur-sm"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
//         >
//           {[1, 2].map((i) => (
//             <div key={i} className="flex">
//               <span className="mx-4 md:mx-8">
//                 STRATEGY _ DESIGN _ BUILD _ DEPLOY
//               </span>
//               <span className="mx-4 md:mx-8 text-[#4EE1FF]">✦</span>
//               <span className="mx-4 md:mx-8">
//                 ELEVATING YOUR DIGITAL PRESENCE
//               </span>
//               <span className="mx-4 md:mx-8 text-[#4EE1FF]">✦</span>
//               <span className="mx-4 md:mx-8">
//                 DRIVING GROWTH THROUGH TECHNOLOGY
//               </span>
//               <span className="mx-4 md:mx-8 text-[#4EE1FF]">✦</span>
//               <span className="mx-4 md:mx-8">
//                 FUTURE-PROOFING YOUR INVESTMENT
//               </span>
//               <span className="mx-4 md:mx-8 text-[#4EE1FF]">✦</span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play, ArrowRight, Menu, X } from "lucide-react";
// import Link from "next/link";

// const videos = [
//   "/videos/hero1.mp4",
//   "/videos/hero2.mp4",
//   // "/videos/hero3.mp4",
// ];

// export default function HeroNav() {
//   const [index, setIndex] = useState(0);
//   const [fade, setFade] = useState(false);
//   // const [navSolid, setNavSolid] = useState(false);
//   // const [menuOpen, setMenuOpen] = useState(false);
//   const [isCtaHovered, setIsCtaHovered] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(true);
//       setTimeout(() => {
//         setIndex((prev) => (prev + 1) % videos.length);
//         setFade(false);
//       }, 800);
//     }, 8000);
//     return () => clearInterval(interval);
//   }, []);

//   // useEffect(() => {
//   //   const handleScroll = () => setNavSolid(window.scrollY > 50);
//   //   window.addEventListener("scroll", handleScroll);
//   //   return () => window.removeEventListener("scroll", handleScroll);
//   // }, []);

//   return (
//     <section className="relative w-full text-white overflow-hidden">
//       {/* NAV */}
//       {/* <motion.nav
//         initial={{ backgroundColor: "rgba(0,0,0,0)" }}
//         animate={{
//           backgroundColor: navSolid ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0)",
//           backdropFilter: navSolid ? "blur(10px)" : "blur(0px)",
//         }}
//         transition={{ duration: 0.3 }}
//         className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
//       >
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//           <div className="flex items-center gap-2">
//             <span className="text-2xl font-bold">✦</span>
//             <span className="font-semibold tracking-wide">LuxDev</span>
//           </div>

//           <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
//             {[
//               // "Home",
//               // "Services",
//               "About",
//               "Portfolio",
//               "Contact",
//               // "Awards",
//               // "Testimonials",
//               // "Blog",
//             ].map((item) => (
//               <li key={item} className="relative group cursor-pointer">
//                 <Link href={`/${item.toLowerCase()}`}>{item}</Link>
//                 <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00FF7F] transition-all duration-300 group-hover:w-full"></span>
//               </li>

//               // <li key={item} className="relative group cursor-pointer">
//               //   {item}
//               //   <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00FF7F]  transition-all duration-300 group-hover:w-full"></span>
//               // </li>
//             ))}
//           </ul>

//           <button
//             className="md:hidden text-white"
//             onClick={() => setMenuOpen(true)}
//           >
//             <Menu size={26} />
//           </button>
//         </div>
//       </motion.nav> */}

//       {/* MOBILE MENU */}
//       {/* <AnimatePresence>
//         {menuOpen && (
//           <motion.aside
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="fixed top-0 right-0 w-64 h-full bg-black/95 z-50 flex flex-col px-6 py-10"
//           >
//             <button
//               className="self-end mb-8 text-white"
//               onClick={() => setMenuOpen(false)}
//             >
//               <X size={26} />
//             </button>
//             <ul className="flex flex-col gap-6 text-lg tracking-wide uppercase">
//               {[
//                 // "Home",
//                 // "Services",
//                 "About",
//                 "Portfolio",
//                 "Contact",
//                 // "Awards",
//                 // "Testimonials",
//                 // "Blog",
//               ].map((item) => (
//                 <motion.li
//                   key={item}
//                   initial={{ opacity: 0, x: 40 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="hover:text-[#3882F6] cursor-pointer"
//                 >
//                   {item}
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.aside>
//         )}
//       </AnimatePresence> */}

//       {/* BACKGROUND VIDEOS */}
//       <div className="absolute inset-0 -z-10">
//         <video
//           key={index}
//           src={videos[index]}
//           className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
//             fade ? "opacity-0" : "opacity-100"
//           }`}
//           autoPlay
//           muted
//           loop
//           playsInline
//         />
//         <video
//           key={"next-" + index}
//           src={videos[(index + 1) % videos.length]}
//           className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
//             fade ? "opacity-100" : "opacity-0"
//           }`}
//           autoPlay
//           muted
//           loop
//           playsInline
//         />
//         <div className="absolute inset-0 bg-black/60" />
//       </div>

//       {/* HERO CONTENT */}
//       <div className="relative z-20 flex flex-col items-center justify-center py-[24vh] px-4 md:px-6 text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
//           className="max-w-5xl text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-tight"
//         >
//           MORE THAN <br />
//           JUST A <span className="mx-2 md:mx-3 text-[#00FF7F]">
//             TYPICAL
//           </span>{" "}
//           <br />
//           {/* Updated Line: Groups "WEB AGENCY" and Button together */}
//           <span className="inline-flex flex-wrap items-center justify-center gap-x-3 md:gap-x-5">
//             <span>WEB AGENCY</span>

//             <motion.button
//               className={`
//                 w-12 h-12 md:w-16 md:h-16 rounded-full
//                 flex items-center justify-center
//                 transition-colors duration-300
//                 ${isCtaHovered ? "bg-[#00FF7F]" : "bg-[#00FF7F]"}
//               `}
//               onMouseEnter={() => setIsCtaHovered(true)}
//               onMouseLeave={() => setIsCtaHovered(false)}
//               onClick={() => console.log("Success CTA Clicked")}
//             >
//               <motion.span
//                 animate={{ rotate: isCtaHovered ? 0 : 45 }}
//                 transition={{ duration: 0.3, ease: "easeOut" }}
//                 className="flex items-center justify-center"
//               >
//                 <ArrowRight size={24} className="text-white md:w-7 md:h-7" />
//               </motion.span>
//             </motion.button>
//           </span>
//         </motion.h1>
//       </div>

//       {/* MARQUEE */}
//       <div className="w-full border-t border-white/10 overflow-hidden absolute bottom-0">
//         <motion.div
//           className="flex whitespace-nowrap uppercase text-xs md:text-sm tracking-widest py-3 md:py-4 bg-black/20 backdrop-blur-sm"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{
//             repeat: Infinity,
//             ease: "linear",
//             duration: 20,
//           }}
//         >
//           {[1, 2].map((i) => (
//             <div key={i} className="flex">
//               <span className="mx-4 md:mx-8">
//                 STRATEGY _ DESIGN _ BUILD _ DEPLOY
//               </span>
//               <span className="mx-4 md:mx-8 text-[#00FF7F]">✦</span>
//               <span className="mx-4 md:mx-8">
//                 ELEVATING YOUR DIGITAL PRESENCE
//               </span>
//               <span className="mx-4 md:mx-8 text-[#00FF7F]">✦</span>
//               <span className="mx-4 md:mx-8">
//                 DRIVING GROWTH THROUGH TECHNOLOGY
//               </span>
//               <span className="mx-4 md:mx-8 text-[#00FF7F]">✦</span>
//               <span className="mx-4 md:mx-8">
//                 FUTURE-PROOFING YOUR INVESTMENT
//               </span>
//               <span className="mx-4 md:mx-8 text-[#00FF7F]">✦</span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// i do ot have a desinger, so my UI or color matcing skill is not as good, can you pls help me choose colors for this secton of my site
// then i will upload other section for you to customize

// this is my project structur in the image PiStarOfDavidDuotone, i want the navlinks to navigate to the pages i Clicker_Script, and how do i add the pages to my project structure

// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// // Only need ArrowRight from lucide-react now, as we'll rotate it.
// import { Play, ArrowRight, Menu, X } from "lucide-react";

// const videos = [
//   "/videos/hero1.mp4",
//   "/videos/hero2.mp4",
//   // "/videos/hero3.mp4",
// ];

// export default function HeroNav() {
//   const [index, setIndex] = useState(0);
//   const [fade, setFade] = useState(false);
//   const [navSolid, setNavSolid] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isCtaHovered, setIsCtaHovered] = useState(false); // State for button hover

//   // ... (rest of your useEffects and state management remain the same) ...
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(true);
//       setTimeout(() => {
//         setIndex((prev) => (prev + 1) % videos.length);
//         setFade(false);
//       }, 800); // fade duration
//     }, 8000); // time per video
//     return () => clearInterval(interval);
//   }, []);

//   // Navbar background on scroll
//   useEffect(() => {
//     const handleScroll = () => setNavSolid(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="relative w-full text-white overflow-hidden">
//       {/* NAV (Existing code) */}
//       <motion.nav
//         initial={{ backgroundColor: "rgba(0,0,0,0)" }}
//         animate={{
//           backgroundColor: navSolid ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0)",
//           backdropFilter: navSolid ? "blur(10px)" : "blur(0px)",
//         }}
//         transition={{ duration: 0.3 }}
//         className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
//       >
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <span className="text-2xl font-bold">✦</span>
//             <span className="font-semibold tracking-wide">LuxDev</span>
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
//             {[
//               "Home",
//               "Services",
//               "Portfolio",
//               "Awards",
//               "Testimonials",
//               "Blog",
//             ].map((item) => (
//               <li key={item} className="relative group cursor-pointer">
//                 {item}
//                 <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-white"
//             onClick={() => setMenuOpen(true)}
//           >
//             <Menu size={26} />
//           </button>
//         </div>
//       </motion.nav>

//       {/* MOBILE MENU (Existing code) */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.aside
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="fixed top-0 right-0 w-64 h-full bg-black/95 z-50 flex flex-col px-6 py-10"
//           >
//             <button
//               className="self-end mb-8 text-white"
//               onClick={() => setMenuOpen(false)}
//             >
//               <X size={26} />
//             </button>
//             <ul className="flex flex-col gap-6 text-lg tracking-wide uppercase">
//               {[
//                 "Home",
//                 "Services",
//                 "Portfolio",
//                 "Awards",
//                 "Testimonials",
//                 "Blog",
//               ].map((item) => (
//                 <motion.li
//                   key={item}
//                   initial={{ opacity: 0, x: 40 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="hover:text-orange-500 cursor-pointer"
//                 >
//                   {item}
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.aside>
//         )}
//       </AnimatePresence>

//       {/* BACKGROUND VIDEOS (Existing code) */}
//       <div className="absolute inset-0 -z-10">
//         <video
//           key={index}
//           src={videos[index]}
//           className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
//             fade ? "opacity-0" : "opacity-100"
//           }`}
//           autoPlay
//           muted
//           loop
//           playsInline
//         />
//         <video
//           key={"next-" + index}
//           src={videos[(index + 1) % videos.length]}
//           className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
//             fade ? "opacity-100" : "opacity-0"
//           }`}
//           autoPlay
//           muted
//           loop
//           playsInline
//         />
//         <div className="absolute inset-0 bg-black/60" />
//       </div>

//       {/* HERO CONTENT */}
//       <div className="relative z-20 flex flex-col items-center justify-center py-[24vh] px-6 text-center">
//         {/* Play Button (Existing code) */}
//         {/* <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="mb-6"
//         >
//           <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
//             <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center">
//               <Play size={20} />
//             </div>
//           </div>
//         </motion.div> */}

//         {/* Headline - MODIFIED FOR ROTATING ARROW */}
//         <motion.h1
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
//           className="max-w-5xl text-3xl md:text-6xl lg:text-7xl font-semibold md:font-bold lg:font-bold tracking-wider leading-tight"
//         >
//           {/* CROSSED <span className="mx-3">THE</span> LINE OF <br />
//           BUSINESS SUCCESS */}
//           {/* BUILD THE DIGITAL PLATFORM THAT TRANSFORMS YOUR FUTURE */}
//           MORE THAN <br/> JUST A<span className="mx-3">TYPICAL</span> <br/> WEB AGENCY  <br/>
//           {/* NEW BUTTON IMPLEMENTATION WITH ROTATION */}
//           <motion.button
//             className={`
//               w-12 h-12 md:w-16 md:h-16 rounded-full inline-flex items-center justify-center transition-colors duration-300
//               ml-3 md:ml-5 -mt-3 md:-mt-4 align-middle
//               ${isCtaHovered ? "bg-orange-600" : "bg-orange-500"}
//             `}
//             onMouseEnter={() => setIsCtaHovered(true)}
//             onMouseLeave={() => setIsCtaHovered(false)}
//             onClick={() => console.log("Success CTA Clicked")}
//           >
//             <motion.span
//               animate={{ rotate: isCtaHovered ? 0 : 45 }} // 0 degrees for East, 45 degrees for South-East
//               transition={{ duration: 0.3, ease: "easeOut" }}
//               className="flex items-center justify-center"
//             >
//               <ArrowRight size={28} className="text-white" />
//             </motion.span>
//           </motion.button>
//         </motion.h1>
//       </div>

//       {/* MARQUEE (Existing code) */}
//       <div className="w-full border-t border-white/10 overflow-hidden">
//         <motion.div
//           className="flex whitespace-nowrap uppercase text-sm tracking-widest py-3"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{
//             repeat: Infinity,
//             ease: "linear",
//             duration: 15,
//           }}
//         >
//           <span className="mx-8">STRATEGY _ DESIGN _ BUILD _ DEPLOY</span>
//           <span className="mx-8">* ELEVATING YOUR DIGITAL PRESENCE</span>
//           <span className="mx-8">DRIVING GROWTH THROUGH TECHNOLOGY</span>
//           <span className="mx-8">* FUTURE-PROOFING YOUR INVESTMENT</span>
//           <span className="mx-8">STRATEGY _ DESIGN _ BUILD _ DEPLOY</span>
//           <span className="mx-8">* ELEVATING YOUR DIGITAL PRESENCE</span>
//           <span className="mx-8">DRIVING GROWTH THROUGH TECHNOLOGY</span>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play, ArrowRight, Menu, X } from "lucide-react";

// const videos = [
//   "/videos/hero1.mp4",
//   "/videos/hero2.mp4",
//   // "/videos/hero3.mp4",
// ];

// export default function HeroNav() {
//   const [index, setIndex] = useState(0);
//   const [fade, setFade] = useState(false);
//   const [navSolid, setNavSolid] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Cycle videos
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(true);
//       setTimeout(() => {
//         setIndex((prev) => (prev + 1) % videos.length);
//         setFade(false);
//       }, 800); // fade duration
//     }, 8000); // time per video
//     return () => clearInterval(interval);
//   }, []);

//   // Navbar background on scroll
//   useEffect(() => {
//     const handleScroll = () => setNavSolid(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="relative w-full text-white overflow-hidden">
//       {/* NAV */}
//       <motion.nav
//         initial={{ backgroundColor: "rgba(0,0,0,0)" }}
//         animate={{
//           backgroundColor: navSolid ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0)",
//           backdropFilter: navSolid ? "blur(10px)" : "blur(0px)",
//         }}
//         transition={{ duration: 0.3 }}
//         className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
//       >
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <span className="text-2xl font-bold">✦</span>
//             <span className="font-semibold tracking-wide">LuxDev</span>
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
//             {["Home", "Services", "Portfolio", "Awards", "Testimonials", "Blog"].map(
//               (item) => (
//                 <li key={item} className="relative group cursor-pointer">
//                   {item}
//                   <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
//                 </li>
//               )
//             )}
//           </ul>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden text-white" onClick={() => setMenuOpen(true)}>
//             <Menu size={26} />
//           </button>
//         </div>
//       </motion.nav>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.aside
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="fixed top-0 right-0 w-64 h-full bg-black/95 z-50 flex flex-col px-6 py-10"
//           >
//             <button className="self-end mb-8 text-white" onClick={() => setMenuOpen(false)}>
//               <X size={26} />
//             </button>
//             <ul className="flex flex-col gap-6 text-lg tracking-wide uppercase">
//               {["Home", "Services", "Portfolio", "Awards", "Testimonials", "Blog"].map(
//                 (item) => (
//                   <motion.li
//                     key={item}
//                     initial={{ opacity: 0, x: 40 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="hover:text-orange-500 cursor-pointer"
//                   >
//                     {item}
//                   </motion.li>
//                 )
//               )}
//             </ul>
//           </motion.aside>
//         )}
//       </AnimatePresence>

//       {/* BACKGROUND VIDEOS */}
//       <div className="absolute inset-0 -z-10">
//         <video
//           key={index}
//           src={videos[index]}
//           className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
//             fade ? "opacity-0" : "opacity-100"
//           }`}
//           autoPlay
//           muted
//           loop
//           playsInline
//         />
//         <video
//           key={"next-" + index}
//           src={videos[(index + 1) % videos.length]}
//           className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
//             fade ? "opacity-100" : "opacity-0"
//           }`}
//           autoPlay
//           muted
//           loop
//           playsInline
//         />
//         <div className="absolute inset-0 bg-black/60" />
//       </div>

//       {/* HERO CONTENT */}
//       <div className="relative z-20 flex flex-col items-center justify-center py-[18vh] px-6 text-center">
//         {/* Play Button */}
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="mb-6"
//         >
//           <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
//             <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center">
//               <Play size={20} />
//             </div>
//           </div>
//         </motion.div>

//         {/* Headline */}
//         <motion.h1
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
//           className="max-w-5xl text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wider leading-tight"
//         >
//           CROSSED <span className="mx-3">THE</span> LINE OF <br />
//           BUSINESS SUCCESS
//         </motion.h1>

//         {/* CTA Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
//           className="mt-8"
//         >
//           <button className="flex items-center gap-4 px-6 py-3 border border-white/30 rounded-full hover:bg-white/10 transition">
//             <span className="uppercase tracking-wider text-sm">Explore</span>
//             <span className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
//               <ArrowRight size={20} className="text-white" />
//             </span>
//           </button>
//         </motion.div>
//       </div>

//       {/* MARQUEE */}
//       <div className="w-full border-t border-white/10 overflow-hidden">
//         <motion.div
//           className="flex whitespace-nowrap uppercase text-sm tracking-widest py-3"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{
//             repeat: Infinity,
//             ease: "linear",
//             duration: 15,
//           }}
//         >
//           <span className="mx-8">* Transform Ideas Into Reality</span>
//           <span className="mx-8">* Inspired With Creativity</span>
//           <span className="mx-8">* Design & Development Craft</span>
//           <span className="mx-8">* Unlock The Potential</span>
//           <span className="mx-8">* Transform Ideas Into Reality</span>
//           <span className="mx-8">* Inspired With Creativity</span>
//           <span className="mx-8">* Design & Development Craft</span>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// the code above have this explore button (
//           <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
//           className="mt-8"
//         >
//           <button className="flex items-center gap-4 px-6 py-3 border border-white/30 rounded-full hover:bg-white/10 transition">
//             <span className="uppercase tracking-wider text-sm">Explore</span>
//             <span className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
//               <ArrowRight size={20} className="text-white" />
//             </span>
//           </button>
//         </motion.div>
// )  i do not want that instead i want this yellow round button beside sucess with that arrow facing south east and when i hover on the button, the arrow adjusts and faces east while the bg color chnage

// pls help code this image provided using the code below, pls let it be responsive on all screens let it show all ty econent in the image
// what we’re offering
// Services we’re providing
// to our customers  and There are many variations of simply free text passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't slightly.
// and the cards toolbar

// import React from 'react'

// const Services = () => {
//   return (
//     <div>Services</div>
//   )
// }

// export default Services

// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play, ArrowRight, Menu, X } from "lucide-react";

// const images = [
//   "/images/hero1.jpg",
//   "/images/hero2.jpg",
//   // "/images/hero3.jpg",
// ];

// export default function HeroNav() {
//   const [index, setIndex] = useState(0);
//   const [fade, setFade] = useState(false);
//   const [navSolid, setNavSolid] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Cycle images
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(true);
//       setTimeout(() => {
//         setIndex((prev) => (prev + 1) % images.length);
//         setFade(false);
//       }, 800); // fade duration
//     }, 8000); // time per image
//     return () => clearInterval(interval);
//   }, []);

//   // Navbar background on scroll
//   useEffect(() => {
//     const handleScroll = () => setNavSolid(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="relative w-full text-white overflow-hidden">
//       {/* NAV */}
//       <motion.nav
//         initial={{ backgroundColor: "rgba(0,0,0,0)" }}
//         animate={{
//           backgroundColor: navSolid ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0)",
//           backdropFilter: navSolid ? "blur(10px)" : "blur(0px)",
//         }}
//         transition={{ duration: 0.3 }}
//         className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
//       >
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <span className="text-2xl font-bold">✦</span>
//             <span className="font-semibold tracking-wide">LuxDev</span>
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
//             {["Home", "Services", "Portfolio", "Awards", "Testimonials", "Blog"].map(
//               (item) => (
//                 <li key={item} className="relative group cursor-pointer">
//                   {item}
//                   <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
//                 </li>
//               )
//             )}
//           </ul>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden text-white" onClick={() => setMenuOpen(true)}>
//             <Menu size={26} />
//           </button>
//         </div>
//       </motion.nav>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.aside
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="fixed top-0 right-0 w-64 h-full bg-black/95 z-50 flex flex-col px-6 py-10"
//           >
//             <button className="self-end mb-8 text-white" onClick={() => setMenuOpen(false)}>
//               <X size={26} />
//             </button>
//             <ul className="flex flex-col gap-6 text-lg tracking-wide uppercase">
//               {["Home", "Services", "Portfolio", "Awards", "Testimonials", "Blog"].map(
//                 (item) => (
//                   <motion.li
//                     key={item}
//                     initial={{ opacity: 0, x: 40 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="hover:text-orange-500 cursor-pointer"
//                   >
//                     {item}
//                   </motion.li>
//                 )
//               )}
//             </ul>
//           </motion.aside>
//         )}
//       </AnimatePresence>

//       {/* BACKGROUND IMAGES */}
//       <div className="absolute inset-0 -z-10">
//         <motion.div
//           key={index}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: fade ? 0 : 1 }}
//           transition={{ duration: 0.8 }}
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${images[index]})` }}
//         />
//         <div className="absolute inset-0 bg-black/60" />
//       </div>

//       {/* HERO CONTENT */}
//       <div className="relative z-20 flex flex-col items-center justify-center py-[18vh] px-6 text-center">
//         {/* Play Button */}
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="mb-6"
//         >
//           <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
//             <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center">
//               <Play size={20} />
//             </div>
//           </div>
//         </motion.div>

//         {/* Headline */}
//         <motion.h1
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
//           className="max-w-5xl text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wider leading-tight"
//         >
//           CROSSED <span className="mx-3">THE</span> LINE OF <br />
//           BUSINESS SUCCESS
//         </motion.h1>

//         {/* CTA Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
//           className="mt-8"
//         >
//           <button className="flex items-center gap-4 px-6 py-3 border border-white/30 rounded-full hover:bg-white/10 transition">
//             <span className="uppercase tracking-wider text-sm">Explore</span>
//             <span className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
//               <ArrowRight size={20} className="text-white" />
//             </span>
//           </button>
//         </motion.div>
//       </div>

//       {/* MARQUEE */}
//       <div className="w-full border-t border-white/10 overflow-hidden">
//         <motion.div
//           className="flex whitespace-nowrap uppercase text-sm tracking-widest py-3"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{
//             repeat: Infinity,
//             ease: "linear",
//             duration: 15,
//           }}
//         >
//           <span className="mx-8">* Transform Ideas Into Reality</span>
//           <span className="mx-8">* Inspired With Creativity</span>
//           <span className="mx-8">* Design & Development Craft</span>
//           <span className="mx-8">* Unlock The Potential</span>
//           <span className="mx-8">* Transform Ideas Into Reality</span>
//           <span className="mx-8">* Inspired With Creativity</span>
//           <span className="mx-8">* Design & Development Craft</span>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play, ArrowRight, Menu, X } from "lucide-react";

// const videos = [
//   "/videos/hero1.mp4",
//   "/videos/hero2.mp4",
//   // "/videos/hero3.mp4",
// ];

// export default function HeroNav() {
//   const [index, setIndex] = useState(0);
//   const [fade, setFade] = useState(false);
//   const [navSolid, setNavSolid] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Cycle videos
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(true);
//       setTimeout(() => {
//         setIndex((prev) => (prev + 1) % videos.length);
//         setFade(false);
//       }, 800);
//     }, 8000);
//     return () => clearInterval(interval);
//   }, []);

//   // Navbar background on scroll
//   useEffect(() => {
//     const handleScroll = () => setNavSolid(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="relative w-full bg-black text-white overflow-hidden">
//       {/* NAV */}
//       <motion.nav
//         initial={{ backgroundColor: "rgba(0,0,0,0)" }}
//         animate={{
//           backgroundColor: navSolid ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0)",
//           backdropFilter: navSolid ? "blur(10px)" : "blur(0px)",
//         }}
//         transition={{ duration: 0.3 }}
//         className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
//       >
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <span className="text-2xl font-bold">✦</span>
//             <span className="font-semibold tracking-wide">LuxDev</span>
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
//             {["Home", "Services", "Portfolio", "Awards", "Testimonials", "Blog"].map(
//               (item) => (
//                 <li key={item} className="relative group cursor-pointer">
//                   {item}
//                   <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
//                 </li>
//               )
//             )}
//           </ul>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-white"
//             onClick={() => setMenuOpen(true)}
//           >
//             <Menu size={26} />
//           </button>
//         </div>
//       </motion.nav>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.aside
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="fixed top-0 right-0 w-64 h-full bg-black/95 z-50 flex flex-col px-6 py-10"
//           >
//             <button
//               className="self-end mb-8 text-white"
//               onClick={() => setMenuOpen(false)}
//             >
//               <X size={26} />
//             </button>
//             <ul className="flex flex-col gap-6 text-lg tracking-wide uppercase">
//               {["Home", "Services", "Portfolio", "Awards", "Testimonials", "Blog"].map(
//                 (item) => (
//                   <motion.li
//                     key={item}
//                     initial={{ opacity: 0, x: 40 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="hover:text-orange-500 cursor-pointer"
//                   >
//                     {item}
//                   </motion.li>
//                 )
//               )}
//             </ul>
//           </motion.aside>
//         )}
//       </AnimatePresence>

//       {/* BACKGROUND VIDEO */}
//       <div className="absolute inset-0 -z-10">
//         <video
//           key={index}
//           src={videos[index]}
//           className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
//             fade ? "opacity-0" : "opacity-100"
//           }`}
//           autoPlay
//           muted
//           loop
//           playsInline
//         />
//         <video
//           key={"next-" + index}
//           src={videos[(index + 1) % videos.length]}
//           className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
//             fade ? "opacity-100" : "opacity-0"
//           }`}
//           autoPlay
//           muted
//           loop
//           playsInline
//         />
//         <div className="absolute inset-0 bg-black/60" />
//       </div>

//       {/* HERO CONTENT */}
//       <div className="relative z-20 flex flex-col items-center justify-center py-[18vh] px-6 text-center">
//         {/* Play Button */}
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="mb-6"
//         >
//           <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
//             <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center">
//               <Play size={20} />
//             </div>
//           </div>
//         </motion.div>

//         {/* Headline */}
//         <motion.h1
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
//           className="max-w-5xl text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wider leading-tight"
//         >
//           CROSSED <span className="mx-3">THE</span> LINE OF <br />
//           BUSINESS SUCCESS
//         </motion.h1>

//         {/* CTA Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
//           className="mt-8"
//         >
//           <button className="flex items-center gap-4 px-6 py-3 border border-white/30 rounded-full hover:bg-white/10 transition">
//             <span className="uppercase tracking-wider text-sm">Explore</span>
//             <span className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
//               <ArrowRight size={20} className="text-white" />
//             </span>
//           </button>
//         </motion.div>
//       </div>

//       {/* MARQUEE */}
//       <div className="w-full border-t border-white/10 overflow-hidden">
//         <motion.div
//           className="flex whitespace-nowrap uppercase text-sm tracking-widest py-3"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{
//             repeat: Infinity,
//             ease: "linear",
//             duration: 15,
//           }}
//         >
//           <span className="mx-8">* Transform Ideas Into Reality</span>
//           <span className="mx-8">* Inspired With Creativity</span>
//           <span className="mx-8">* Design & Development Craft</span>
//           <span className="mx-8">* Unlock The Potential</span>
//           <span className="mx-8">* Transform Ideas Into Reality</span>
//           <span className="mx-8">* Inspired With Creativity</span>
//           <span className="mx-8">* Design & Development Craft</span>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play, ArrowRight, Menu, X } from "lucide-react";

// const videos = [
//   '/videos/hero1.mp4',
//   '/videos/hero2.mp4',
//   // "/videos/hero1.mp4",
//   // "/videos/hero2.mp4",
//   // "/videos/vid2.mp4",
//   // "/videos/vid3.mp4",
// ];

// export default function HeroNav() {
//   const [index, setIndex] = useState(0);
//   const [fade, setFade] = useState(false);
//   const [navSolid, setNavSolid] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Video cycling
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(true);
//       setTimeout(() => {
//         setIndex((prev) => (prev + 1) % videos.length);
//         setFade(false);
//       }, 800);
//     }, 8000);
//     return () => clearInterval(interval);
//   }, []);

//   // Nav background on scroll
//   useEffect(() => {
//     const handleScroll = () => setNavSolid(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="relative w-full bg-black text-white overflow-hidden">
//       {/* NAV */}
//       <motion.nav
//         initial={{ backgroundColor: "rgba(0,0,0,0)" }}
//         animate={{
//           backgroundColor: navSolid
//             ? "rgba(0,0,0,0.8)"
//             : "rgba(0,0,0,0)",
//           backdropFilter: navSolid ? "blur(10px)" : "blur(0px)",
//         }}
//         transition={{ duration: 0.3 }}
//         className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
//       >
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <span className="text-2xl font-bold">✦</span>
//             <span className="font-semibold tracking-wide">LuxDev</span>
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
//             {["Home", "Services", "Portfolio", "Award", "Testimonial", "Blog"].map(
//               (item) => (
//                 <li
//                   key={item}
//                   className="relative group cursor-pointer"
//                 >
//                   {item}
//                   <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
//                 </li>
//               )
//             )}
//           </ul>

//           {/* Mobile Toggle */}
//           <button
//             className="md:hidden text-white"
//             onClick={() => setMenuOpen(true)}
//           >
//             <Menu size={26} />
//           </button>
//         </div>
//       </motion.nav>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.aside
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="fixed top-0 right-0 w-64 h-full bg-black/95 z-50 flex flex-col px-6 py-10"
//           >
//             <button
//               className="self-end mb-8 text-white"
//               onClick={() => setMenuOpen(false)}
//             >
//               <X size={26} />
//             </button>
//             <ul className="flex flex-col gap-6 text-lg tracking-wide uppercase">
//               {["Home", "Services", "Portfolio", "Award", "Testimonial", "Blog"].map(
//                 (item) => (
//                   <motion.li
//                     key={item}
//                     initial={{ opacity: 0, x: 40 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="hover:text-orange-500 cursor-pointer"
//                   >
//                     {item}
//                   </motion.li>
//                 )
//               )}
//             </ul>
//           </motion.aside>
//         )}
//       </AnimatePresence>

//       {/* BACKGROUND VIDEO */}
//       <div className="absolute inset-0 -z-10">
//         <video
//           key={index}
//           src={videos[index]}
//           className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
//             fade ? "opacity-0" : "opacity-100"
//           }`}
//           autoPlay
//           muted
//           playsInline
//         />
//         <video
//           key={"next-" + index}
//           src={videos[(index + 1) % videos.length]}
//           className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
//             fade ? "opacity-100" : "opacity-0"
//           }`}
//           autoPlay
//           muted
//           playsInline
//         />
//         <div className="absolute inset-0 bg-black/60" />
//       </div>

//       {/* HERO CONTENT */}
//       <div className="relative z-20 flex flex-col items-center justify-center py-[18vh] px-6 text-center">
//         {/* Play Button */}
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="mb-6"
//         >
//           <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
//             <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center">
//               <Play size={20} />
//             </div>
//           </div>
//         </motion.div>

//         {/* Headline */}
//         <motion.h1
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
//           className="max-w-5xl text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wider leading-tight"
//         >
//           CROSSED <span className="mx-3">THE</span> LINE OF <br />
//           BUSINESS SUCCESS
//         </motion.h1>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
//           className="mt-8"
//         >
//           <button className="flex items-center gap-4 px-6 py-3 border border-white/30 rounded-full hover:bg-white/10 transition">
//             <span className="uppercase tracking-wider text-sm">Explore</span>
//             <span className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
//               <ArrowRight size={20} className="text-white" />
//             </span>
//           </button>
//         </motion.div>
//       </div>

//       {/* MARQUEE */}
//       <div className="w-full border-t border-white/10 overflow-hidden">
//         <motion.div
//           className="flex whitespace-nowrap uppercase text-sm tracking-widest py-3"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{
//             repeat: Infinity,
//             ease: "linear",
//             duration: 15,
//           }}
//         >
//           <span className="mx-8">* Transform Ideas Into Reality</span>
//           <span className="mx-8">* Inspired With Creativity</span>
//           <span className="mx-8">* Design & Development Craft</span>
//           <span className="mx-8">* Unlock The Potential</span>
//           <span className="mx-8">* Transform Ideas Into Reality</span>
//           <span className="mx-8">* Inspired With Creativity</span>
//           <span className="mx-8">* Design & Development Craft</span>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { useEffect, useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { Play, ArrowRight } from "lucide-react";

// const videos = [
//   "/videos/vid1.mp4",
//   "/videos/vid2.mp4",
//   "/videos/vid3.mp4",
// ];

// export default function HeroNav() {
//   const [index, setIndex] = useState(0);
//   const [fade, setFade] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(true);
//       setTimeout(() => {
//         setIndex((prev) => (prev + 1) % videos.length);
//         setFade(false);
//       }, 800);
//     }, 8000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full bg-black text-white overflow-hidden">
//       {/* NAV */}
//       <nav className="absolute top-0 left-0 right-0 z-30">
//         <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
//           <div className="flex items-center gap-5">
//             <div className="text-2xl font-bold tracking-wide">✦</div>
//             <ul className="hidden md:flex gap-6 text-sm uppercase tracking-wide opacity-80">
//               <li>Home</li>
//               <li>Services</li>
//               <li>Portfolio</li>
//               <li>Award</li>
//               <li>Testimonial</li>
//               <li>Blog</li>
//             </ul>
//           </div>
//           <div className="flex items-center gap-3 text-sm">
//             <button className="opacity-80">Search</button>
//           </div>
//         </div>
//       </nav>

//       {/* BACKGROUND VIDEOS */}
//       <div className="absolute inset-0 -z-10">
//         <video
//           key={index}
//           src={videos[index]}
//           className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
//             fade ? "opacity-0" : "opacity-100"
//           }`}
//           autoPlay
//           muted
//           playsInline
//         />
//         <video
//           key={"next-" + index}
//           src={videos[(index + 1) % videos.length]}
//           className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
//             fade ? "opacity-100" : "opacity-0"
//           }`}
//           autoPlay
//           muted
//           playsInline
//         />
//         <div className="absolute inset-0 bg-black/60" />
//       </div>

//       {/* HERO */}
//       <div className="relative z-20 flex flex-col items-center justify-center py-[15vh] px-6 text-center">
//         {/* Play button (animated from top) */}
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="mb-6"
//         >
//           <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
//             <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center">
//               <Play size={20} />
//             </div>
//           </div>
//         </motion.div>

//         {/* Headline (animated from bottom) */}
//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
//           className="max-w-5xl text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wider leading-tight"
//         >
//           CROSSED <span className="mx-3">THE</span> LINE OF <br />
//           BUSINESS SUCCESS
//         </motion.h1>

//         {/* Arrow Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
//           className="mt-8"
//         >
//           <button className="flex items-center gap-4 px-6 py-3 border border-white/30 rounded-full hover:bg-white/10 transition">
//             <span className="uppercase tracking-wider text-sm">Explore</span>
//             <span className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
//               <ArrowRight className="text-white" size={18} />
//             </span>
//           </button>
//         </motion.div>
//       </div>

//       {/* SCROLLING TEXT MARQUEE */}
//       <div className="w-full border-t border-white/10 overflow-hidden">
//         <motion.div
//           className="flex whitespace-nowrap uppercase text-sm tracking-widest py-3"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{
//             repeat: Infinity,
//             ease: "linear",
//             duration: 18,
//           }}
//         >
//           <span className="mx-8">* Transform Ideas Into Reality</span>
//           <span className="mx-8">* Inspired With Creativity</span>
//           <span className="mx-8">* Design & Development Craft</span>
//           <span className="mx-8">* Unlock The Potential</span>
//           <span className="mx-8">* Transform Ideas Into Reality</span>
//           <span className="mx-8">* Inspired With Creativity</span>
//           <span className="mx-8">* Design & Development Craft</span>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// // app/components/Hero.tsx
// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight, Menu, X } from "lucide-react";
// import Link from "next/link";

// const videoList = [
//   "/videos/hero1.mp4",
//   "/videos/hero2.mp4",
//   "/videos/hero3.mp4",
// ];

// export default function Hero() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % videoList.length);
//     }, 12000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-screen w-full text-white overflow-hidden font-sans">
//       {/* Background Videos */}
//       <div className="absolute inset-0">
//         <AnimatePresence>
//           <motion.video
//             key={videoList[currentIndex]}
//             className="absolute inset-0 w-full h-full object-cover"
//             src={videoList[currentIndex]}
//             autoPlay
//             loop
//             muted
//             playsInline
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 2.5, ease: "easeInOut" }}
//           />
//         </AnimatePresence>
//       </div>

//       {/* Gradient Overlay for top visibility */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />

//       {/* NAVBAR */}
//       <header className="relative z-20 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
//         <Link href="/" className="text-2xl font-serif font-bold text-[#d4af37]">
//           LuxeCraft<span className="text-white">Studio</span>
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex space-x-10 text-sm uppercase tracking-wide">
//           <Link href="#home" className="hover:text-[#d4af37] transition-colors">
//             Home
//           </Link>
//           <Link href="#services" className="hover:text-[#d4af37] transition-colors">
//             Services
//           </Link>
//           <Link href="#portfolio" className="hover:text-[#d4af37] transition-colors">
//             Portfolio
//           </Link>
//           <Link href="#about" className="hover:text-[#d4af37] transition-colors">
//             About
//           </Link>
//           <Link href="#contact" className="hover:text-[#d4af37] transition-colors">
//             Contact
//           </Link>
//         </nav>

//         {/* Mobile Menu Toggle */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden text-white"
//         >
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0 }}
//             className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md py-6 flex flex-col items-center space-y-4 md:hidden"
//           >
//             {["Home", "Services", "Portfolio", "About", "Contact"].map(
//               (item) => (
//                 <Link
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   onClick={() => setMenuOpen(false)}
//                   className="uppercase text-sm text-white hover:text-[#d4af37] transition-colors"
//                 >
//                   {item}
//                 </Link>
//               )
//             )}
//           </motion.div>
//         )}
//       </header>

//       {/* HERO TEXT */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 max-w-5xl mx-auto">
//         <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-white">
//           <span className="block mb-3 tracking-widest text-[1rem] text-[#d4af37] uppercase">
//             Branding · Design · Development
//           </span>
//           <span className="block text-white/90">
//             Crafting Digital Experiences for
//           </span>
//           <span className="block text-[#d4af37] italic">
//             Luxury & Legacy Brands
//           </span>
//         </h1>

//         {/* CTA */}
//         <div className="mt-12 flex justify-center">
//           <button className="flex items-center gap-3 bg-[#d4af37] hover:bg-[#c19b2e] text-black font-semibold px-8 py-3 rounded-full uppercase tracking-wide transition-all">
//             Start Your Project <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>
//       </div>

//       {/* BOTTOM SCROLLING TEXT */}
//       <div className="absolute bottom-0 w-full bg-black/40 py-3 overflow-hidden border-t border-[#d4af37]/30">
//         <div className="whitespace-nowrap animate-marquee text-sm uppercase tracking-[0.2em] text-[#d4af37]/90">
//           <span className="mx-8">*Timeless Design</span>
//           <span className="mx-8">*Strategic Branding</span>
//           <span className="mx-8">*Bespoke Development</span>
//           <span className="mx-8">*Digital Excellence</span>
//           <span className="mx-8">*Timeless Design</span>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-marquee {
//           display: inline-block;
//           animation: marquee 25s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }

// // app/components/Hero.tsx
// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// const videoList = [
//   "/videos/hero1.mp4",
//   "/videos/hero2.mp4",
//   "/videos/hero3.mp4",
// ];

// export default function Hero() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % videoList.length);
//     }, 12000); // slower rotation for a calmer luxury feel
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden font-sans">
//       {/* Background Videos with Crossfade */}
//       <div className="absolute inset-0">
//         <AnimatePresence>
//           <motion.video
//             key={videoList[currentIndex]}
//             className="absolute inset-0 w-full h-full object-cover"
//             src={videoList[currentIndex]}
//             autoPlay
//             loop
//             muted
//             playsInline
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 2.5, ease: "easeInOut" }}
//           />
//         </AnimatePresence>
//       </div>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/70" />

//       {/* Content */}
//       <div className="relative z-10 text-center px-4 max-w-5xl">
//         <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-white">
//           <span className="block mb-3 tracking-widest text-[1rem] text-[#d4af37] uppercase">
//             Branding · Design · Development
//           </span>
//           <span className="block text-white/90">
//             Crafting Digital Experiences for
//           </span>
//           <span className="block text-[#d4af37] italic">
//             Luxury & Legacy Brands
//           </span>
//         </h1>

//         {/* CTA */}
//         <div className="mt-12 flex justify-center">
//           <button className="flex items-center gap-3 bg-[#d4af37] hover:bg-[#c19b2e] text-black font-semibold px-8 py-3 rounded-full uppercase tracking-wide transition-all">
//             Start Your Project <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>
//       </div>

//       {/* Bottom Scrolling Text */}
//       <div className="absolute bottom-0 w-full bg-black/40 py-3 overflow-hidden border-t border-[#d4af37]/30">
//         <div className="whitespace-nowrap animate-marquee text-sm uppercase tracking-[0.2em] text-[#d4af37]/90">
//           <span className="mx-8">*Timeless Design</span>
//           <span className="mx-8">*Strategic Branding</span>
//           <span className="mx-8">*Bespoke Development</span>
//           <span className="mx-8">*Digital Excellence</span>
//           <span className="mx-8">*Timeless Design</span>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-marquee {
//           display: inline-block;
//           animation: marquee 25s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }

// using the image provided, pls help me code out this nav and hero Combo, i want the it together, with a video background (i want a list of videos i want to play continuously and it changes smoothly), see the two circles on top the center text
// pls replace it with a play button, just for asethetic, and also gimme the circled arrow button beside the text as is in the image, i want the play button
// coming from up to its position and the text coming from below to it positionalKeys, pls also use add the scrolling text button bar,
