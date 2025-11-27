"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Project } from "../data/projects"; // Import the interface

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    // Optional: play video on hover only if you want
    // if (videoRef.current) videoRef.current.play();
  };

  return (
    <div
      className="group w-full cursor-pointer mb-16"
      onMouseEnter={handleMouseEnter}
    >
      {/* --- 1. MEDIA CONTAINER --- */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-sm bg-gray-900">
        {/* CONDITIONAL RENDERING LOGIC */}
        {project.video ? (
          // OPTION A: RENDER VIDEO
          <motion.video
            ref={videoRef}
            src={project.video}
            loop
            muted
            autoPlay
            playsInline // Important for mobile
            className="w-full h-full object-cover"
            initial={{ filter: "grayscale(100%)", scale: 1 }}
            whileHover={{ filter: "grayscale(0%)", scale: 1.05 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
        ) : (
          // OPTION B: RENDER IMAGE
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            initial={{ filter: "grayscale(100%)", scale: 1 }}
            whileHover={{ filter: "grayscale(0%)", scale: 1.05 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
        )}
      </div>

      {/* --- 2. INFO SECTION (Same as before) --- */}
      <div className="mt-6 flex justify-between items-start border-t border-white/10 pt-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-4 overflow-hidden">
            <h3 className="text-2xl md:text-3xl font-medium text-white group-hover:text-[#4EE1FF] transition-colors duration-300">
              {project.title}
            </h3>

            <motion.div className="text-[#4EE1FF] opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500 ease-out">
              <FaArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </motion.div>
          </div>
          <span className="text-gray-500 text-sm mt-1 tracking-wide uppercase">
            {project.category}
          </span>
        </div>

        <div className="hidden md:flex flex-col items-end">
          <span className="text-white/80 text-sm font-light text-right max-w-[150px]">
            {project.services}
          </span>
          <span className="text-gray-600 text-xs mt-2">
            {project.year || "2024"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

// "use client";

// import React, { useRef } from "react";
// import { motion } from "framer-motion";
// import { FaArrowRight } from "react-icons/fa";
// import { Project } from "../data/projects";

// interface ProjectCardProps {
//   project: Project;
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
//   // const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
//   const videoRef = useRef<HTMLVideoElement>(null); // Typed the ref as HTMLVideoElement

//   const handleMouseEnter = () => {
//     // Optional: Play on hover
//     // if (videoRef.current) videoRef.current.play();
//   };

//   const handleMouseLeave = () => {
//     // Optional: Pause on leave
//     // if (videoRef.current) videoRef.current.pause();
//   };

//   return (
//     <div
//       className="group w-full cursor-pointer mb-16"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       {/* --- 1. MEDIA CONTAINER --- */}
//       <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-sm bg-gray-900">
//         <motion.video
//           ref={videoRef}
//           src={project.videoUrl}
//           loop
//           muted
//           autoPlay
//           playsInline
//           className="w-full h-full object-cover"
//           initial={{ filter: "grayscale(100%)", scale: 1 }}
//           whileHover={{ filter: "grayscale(0%)", scale: 1.05 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//         />
//       </div>

//       {/* --- 2. INFO SECTION --- */}
//       <div className="mt-6 flex justify-between items-start border-t border-white/10 pt-4">
//         <div className="flex flex-col">
//           <div className="flex items-center gap-4 overflow-hidden">
//             <h3 className="text-2xl md:text-3xl font-medium text-white group-hover:text-blue-500 transition-colors duration-300">
//               {project.title}
//             </h3>

//             <motion.div className="text-blue-500 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500 ease-out">
//               <FaArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
//             </motion.div>
//           </div>

//           <span className="text-gray-500 text-sm mt-1 tracking-wide uppercase">
//             {project.category}
//           </span>
//         </div>

//         <div className="hidden md:flex flex-col items-end">
//           <span className="text-white/80 text-sm font-light text-right max-w-[150px]">
//             {project.services}
//           </span>
//           <span className="text-gray-600 text-xs mt-2">
//             {project.year || "2024"}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

// "use client";

// import React from "react";
// import { motion, Variants } from "framer-motion";
// import { Project } from "../data/projects";

// interface ProjectCardProps {
//   project: Project;
// }

// const overlayVariants: Variants = {
//   rest: { y: "-100%", opacity: 0 },
//   hover: {
//     y: "0%",
//     opacity: 1,
//     transition: { duration: 0.5, ease: "easeInOut" },
//   },
// };

// const contentVariants: Variants = {
//   rest: { y: "100%", opacity: 0 },
//   hover: {
//     y: "0%",
//     opacity: 1,
//     transition: { duration: 0.5, ease: "easeOut", delay: 0.15 },
//   },
// };

// const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
//   return (
//     <motion.div
//       initial="rest"
//       whileHover="hover"
//       animate="rest"
//       className="relative h-[100vh] w-full overflow-hidden cursor-pointer group"
//     >
//       <motion.img
//         src={project.image}
//         alt={project.title}
//         className="w-full h-full object-cover grayscale brightness-[0.85] contrast-100 group-hover:grayscale-0 group-hover:brightness-105 group-hover:contrast-110 group-hover:scale-105 transition-all duration-700 ease-out"
//       />
//       <motion.div
//         variants={overlayVariants}
//         className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/10 via-black/20 to-black/40 group-hover:from-black/30 group-hover:via-black/50 group-hover:to-black/70 transition-all duration-700 ease-out"
//       />
//       <motion.div
//         variants={contentVariants}
//         className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col items-start space-y-4 group-hover:translate-y-[-2px] group-hover:scale-[1.01] transition-all duration-500"
//       >
//         <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider inline-block">
//           {project.category}
//         </span>
//         <div className="bg-white text-black px-6 py-3 inline-block">
//           <h3 className="text-xl font-bold whitespace-nowrap group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-500">
//             {project.title}
//           </h3>
//         </div>
//         <p className="text-white/90 text-xs tracking-widest uppercase">
//           {project.services}
//         </p>
//         <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
//           {project.description}
//         </p>
//         <button className="mt-2 group flex items-center gap-2 text-white text-sm font-semibold">
//           <span className="relative">
//             {project.ctaText}
//             <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
//           </span>
//           <motion.span
//             initial={{ x: 0 }}
//             whileHover={{ x: 5 }}
//             transition={{ duration: 0.3 }}
//           >
//             →
//           </motion.span>
//         </button>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default ProjectCard;

// "use client";

// import React from "react";
// import { motion, Variants } from "framer-motion";
// import { Project } from "../data/projects";

// interface ProjectCardProps {
//   project: Project;
// }

// const overlayVariants: Variants = {
//   rest: { y: "-100%", opacity: 0 },
//   hover: {
//     y: "0%",
//     opacity: 1,
//     transition: { duration: 0.5, ease: "easeInOut" },
//   },
// };

// const contentVariants: Variants = {
//   rest: { y: "100%", opacity: 0 },
//   hover: {
//     y: "0%",
//     opacity: 1,
//     transition: { duration: 0.5, ease: "easeOut", delay: 0.15 },
//   },
// };

// const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
//   return (
//     <motion.div
//       initial="rest"
//       whileHover="hover"
//       animate="rest"
//       className="relative h-[100vh] w-full overflow-hidden cursor-pointer group"
//     >
//       <motion.img
//         src={project.image}
//         alt={project.title}
//         className="w-full h-full object-cover grayscale brightness-[0.85] contrast-100 group-hover:grayscale-0 group-hover:brightness-105 group-hover:contrast-110 group-hover:scale-105 transition-all duration-700 ease-out"
//       />
//       <motion.div
//         variants={overlayVariants}
//         className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/10 via-black/20 to-black/40 group-hover:from-black/30 group-hover:via-black/50 group-hover:to-black/70 transition-all duration-700 ease-out"
//       />
//       <motion.div
//         variants={contentVariants}
//         className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col items-start space-y-4 group-hover:translate-y-[-2px] group-hover:scale-[1.01] transition-all duration-500"
//       >
//         <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider inline-block">
//           {project.category}
//         </span>
//         <div className="bg-white text-black px-6 py-3 inline-block">
//           <h3 className="text-xl font-bold whitespace-nowrap group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-500">
//             {project.title}
//           </h3>
//         </div>
//         <p className="text-white/90 text-xs tracking-widest uppercase">
//           {project.services}
//         </p>
//         <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
//           {project.description}
//         </p>
//         <button className="mt-2 group flex items-center gap-2 text-white text-sm font-semibold">
//           <span className="relative">
//             {project.ctaText}
//             <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
//           </span>
//           <motion.span
//             initial={{ x: 0 }}
//             whileHover={{ x: 5 }}
//             transition={{ duration: 0.3 }}
//           >
//             →
//           </motion.span>
//         </button>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default ProjectCard;
