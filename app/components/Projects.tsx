"use client";

import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { motion, Variants } from "framer-motion";
import { SplitText } from "./SplitText";

// -------------------- HEADER TEXT ANIMATION ------------------------


// Simple slide-in animation for <p> tags
const slideInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// -------------------- COMPONENT ------------------------
const ProjectsSection = () => {
  const displayProjects = projects.slice(0, 2);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-black min-h-screen relative">
      {/* Decorative Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-1/4 w-2 h-2 rounded-full border border-[#4EE1FF] opacity-50"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-[45%] w-1 h-1 bg-[#4EE1FF] rounded-full"
      />

      {/* Header */}
      <motion.div
        className="max-w-6xl mx-auto mb-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="w-full lg:w-5/8">
            {/* Top P tag with slide-in */}
            <motion.p
              className="uppercase text-gray-400 text-sm tracking-widest mb-3"
              variants={slideInUp}
            >
              Our Projects
            </motion.p>

            {/* H2 with Split Text unravel animation */}
            <h2 className="text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-bold text-white leading-snug">
              <SplitText text="Explore some of the impactful" />
              <br className="hidden sm:inline" />
              <SplitText text="work we’ve built" />
            </h2>
          </div>
          <div className="w-full lg:w-3/8">
            {/* Description P tag with slide-in */}
            <motion.p
              className="text-gray-400 text-sm md:text-base leading-relaxed"
              variants={slideInUp}
              transition={{ delay: 0.1 }}
            >
              A collection of unique website builds, creative landing pages, and
              fully interactive user experiences — each crafted with precision
              and purpose.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
        {displayProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;



// "use client";

// import React from "react";
// import { projects } from "../data/projects";
// import ProjectCard from "./ProjectCard";
// import { motion } from "framer-motion";

// const ProjectsSection = () => {
//   const displayProjects = projects.slice(0, 2);

//   return (
//     <section className="py-24 px-6 md:px-12 lg:px-20 bg-black min-h-screen relative">
//       {/* Decorative Elements */}
//       <motion.div
//         animate={{ y: [0, -10, 0] }}
//         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-20 left-1/4 w-2 h-2 rounded-full border border-[#4EE1FF] opacity-50"
//       />
//       <motion.div
//         animate={{ y: [0, 15, 0] }}
//         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-10 left-[45%] w-1 h-1 bg-[#4EE1FF] rounded-full"
//       />

//       {/* Header */}
//       <div className="max-w-6xl mx-auto mb-16">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
//           <div className="w-full lg:w-5/8">
//             <p className="uppercase text-gray-400 text-sm tracking-widest mb-3">
//               Our Projects
//             </p>
//             <h2 className="text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-bold text-white">
//               Explore some of the impactful work we’ve built
//             </h2>
//           </div>
//           <div className="w-full lg:w-3/8">
//             <p className="text-gray-400 text-sm md:text-base leading-relaxed">
//               A collection of unique website builds, creative landing pages, and
//               fully interactive user experiences — each crafted with precision
//               and purpose.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Grid */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
//         {displayProjects.map((project, idx) => (
//           <ProjectCard key={idx} project={project} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;

// // "use client";

// // import React from "react";
// // import { motion } from "framer-motion";

// // const Projects = () => {
// //   const projects = [
// //     {
// //       title: "Asus Marketing",
// //       services: "Web Design — Development",
// //       description:
// //         "A comprehensive digital overhaul focusing on user engagement and brand fidelity for the global tech giant.",
// //       image:
// //         "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
// //     },
// //     {
// //       title: "Urban Shadows",
// //       services: "Photography — Art Direction",
// //       description:
// //         "Capturing the raw, unfiltered essence of city life through a monochromatic lens and stark contrasts.",
// //       image:
// //         "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
// //     },
// //     {
// //       title: "Neon Dreams",
// //       services: "UI/UX — Landing Page",
// //       description:
// //         "A futuristic landing page experience designed to convert visitors through immersive storytelling.",
// //       image:
// //         "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
// //     },
// //   ];

// //   // Overlay drops from Top
// //   const overlayVariants = {
// //     rest: {
// //       y: "-100%",
// //       opacity: 0,
// //     },
// //     hover: {
// //       y: "0%",
// //       opacity: 1,
// //       transition: {
// //         duration: 0.5,
// //         ease: "easeInOut",
// //       },
// //     },
// //   };

// //   // Content rises from Bottom
// //   // Note: The container is at bottom-0, so y: "100%" pushes it perfectly out of view
// //   const contentVariants = {
// //     rest: {
// //       y: "100%",
// //       opacity: 0,
// //     },
// //     hover: {
// //       y: "0%",
// //       opacity: 1,
// //       transition: {
// //         duration: 0.5,
// //         ease: "easeOut",
// //         delay: 0.15,
// //       },
// //     },
// //   };

// //   return (
// //     <section className="py-24 px-6 md:px-12 lg:px-20 bg-black min-h-screen relative">
// //       {/* Decorative Elements */}
// //       <motion.div
// //         animate={{ y: [0, -10, 0] }}
// //         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
// //         className="absolute top-20 left-1/4 w-2 h-2 rounded-full border border-[#00FF7F] opacity-50"
// //       />

// //       {/* Header */}
// //       <div className="max-w-6xl mx-auto mb-16">
// //         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
// //           <div className="w-full lg:w-5/8 relative">
// //             <p className="uppercase text-gray-400 text-sm tracking-widest mb-3">
// //               Our Projects
// //             </p>
// //             <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-snug text-white">
// //               Explore some of the impactful work we’ve built
// //             </h2>
// //           </div>
// //           <div className="w-full lg:w-3/8">
// //             <p className="text-gray-400 text-sm md:text-base leading-relaxed">
// //               A collection of unique website builds, creative landing pages, and
// //               fully interactive user experiences.
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Grid Layout */}
// //       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //         {projects.map((project, index) => (
// //           <motion.div
// //             key={index}
// //             initial="rest"
// //             whileHover="hover"
// //             animate="rest"
// //             className="relative h-[75vh] w-full overflow-hidden cursor-pointer group"
// //           >
// //             {/* Background Image */}
// //             <motion.img
// //               src={project.image}
// //               alt={project.title}
// //               className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700 ease-out"
// //             />

// //             {/* Dark Overlay */}
// //             <motion.div
// //               variants={overlayVariants}
// //               className="absolute inset-0 bg-black/60 pointer-events-none z-10"
// //             />

// //             {/* Bottom Content Container */}
// //             <motion.div
// //               variants={contentVariants}
// //               className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col items-start"
// //             >
// //               {/* 1. Services (Top Line) */}
// //               <span className="text-orange-500 font-mono text-xs font-bold uppercase tracking-widest mb-3">
// //                 {project.services}
// //               </span>

// //               {/* 2. Project Title (White Box) */}
// //               <div className="bg-white text-black px-6 py-3 mb-4 inline-block">
// //                 <h3 className="text-2xl font-bold whitespace-nowrap">
// //                   {project.title}
// //                 </h3>
// //               </div>

// //               {/* 3. Brief Description */}
// //               <p className="text-gray-300 text-sm leading-relaxed max-w-[90%] mb-8 border-l-2 border-gray-600 pl-4">
// //                 {project.description}
// //               </p>

// //               {/* 4. Creative 'View Project' Button */}
// //               <div className="flex items-center gap-4 group/btn">
// //                 <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:border-white transition-all duration-300">
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     fill="none"
// //                     viewBox="0 0 24 24"
// //                     strokeWidth={2}
// //                     stroke="currentColor"
// //                     className="w-5 h-5 text-white group-hover/btn:text-black -rotate-45 group-hover/btn:rotate-0 transition-transform duration-300"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
// //                     />
// //                   </svg>
// //                 </div>
// //                 <span className="text-white text-sm font-semibold tracking-wide group-hover/btn:text-orange-500 transition-colors duration-300">
// //                   View Case Study
// //                 </span>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Projects;

// // "use client";

// // import React from "react";
// // // 1. IMPORT Variants here
// // import { motion, Variants } from "framer-motion";

// // const Projects = () => {
// //   // 1. UPDATE: Add services, description, and ctaText to the project objects
// //   const projects = [
// //     {
// //       title: "Asus Marketing",
// //       category: "Digital, Agency",
// //       image:
// //         "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
// //       services: "Branding • Web Design • Web Development",
// //       description:
// //         "A custom-crafted digital experience designed to elevate the brand and create meaningful user engagement.",
// //       ctaText: "View Case Study", // Example of dynamic CTA text
// //     },
// //     {
// //       title: "Urban Shadows",
// //       category: "Photography",
// //       image:
// //         "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
// //       services: "Art Direction • Editorial • Print",
// //       description:
// //         "A showcase of evocative photographic work, focusing on urban landscape and contrast.",
// //       ctaText: "Explore Collection",
// //     },
// //     {
// //       title: "Neon Dreams",
// //       category: "Landing Page",
// //       image:
// //         "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
// //       services: "UI/UX Design • Motion Graphics • Development",
// //       description:
// //         "A high-conversion landing page designed with vibrant, modern aesthetics and smooth user flow.",
// //       ctaText: "Discover Live Site",
// //     },
// //   ];

// //   // 2. Apply the : Variants type explicitly
// //   const overlayVariants: Variants = {
// //     rest: { y: "-100%", opacity: 0 },
// //     hover: {
// //       y: "0%",
// //       opacity: 1,
// //       transition: { duration: 0.5, ease: "easeInOut" },
// //     },
// //   };

// //   // 3. Apply the : Variants type explicitly here too
// //   const contentVariants: Variants = {
// //     rest: { y: "100%", opacity: 0 },
// //     hover: {
// //       y: "0%",
// //       opacity: 1,
// //       transition: { duration: 0.5, ease: "easeOut", delay: 0.15 },
// //     },
// //   };

// //   return (
// //     <section className="py-24 px-6 md:px-12 lg:px-20 bg-black min-h-screen relative">
// //       {/* Header */}
// //       <div className="max-w-6xl mx-auto mb-16">
// //         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
// //           <div className="w-full lg:w-5/8">
// //             <p className="uppercase text-gray-400 text-sm tracking-widest mb-3">
// //               Our Projects
// //             </p>
// //             <h2 className="text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-bold text-white">
// //               Explore some of the impactful work we’ve built
// //             </h2>
// //           </div>

// //           <div className="w-full lg:w-3/8">
// //             <p className="text-gray-400 text-sm md:text-base leading-relaxed">
// //               A collection of unique website builds, creative landing pages, and
// //               fully interactive user experiences — each crafted with precision
// //               and purpose.
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Grid */}
// //       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //         {projects.map((project, index) => (
// //           <motion.div
// //             key={index}
// //             initial="rest"
// //             whileHover="hover"
// //             animate="rest"
// //             className="relative h-[80vh] w-full overflow-hidden cursor-pointer group"
// //           >
// //             {/* Background Image (Dynamic) */}
// //             <motion.img
// //               src={project.image}
// //               alt={project.title}
// //               className="
// //                 w-full h-full object-cover
// //                 grayscale brightness-[0.85] contrast-100
// //                 group-hover:grayscale-0 group-hover:brightness-105 group-hover:contrast-110
// //                 group-hover:scale-105
// //                 transition-all duration-700 ease-out
// //               "
// //             />

// //             {/* Gradient Overlay */}
// //             <motion.div
// //               variants={overlayVariants}
// //               className="
// //                 absolute inset-0 z-10 pointer-events-none
// //                 bg-gradient-to-b from-black/10 via-black/20 to-black/40
// //                 group-hover:from-black/30 group-hover:via-black/50 group-hover:to-black/70
// //                 transition-all duration-700 ease-out
// //               "
// //             />

// //             {/* Content */}
// //             <motion.div
// //               variants={contentVariants}
// //               className="
// //                 absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col items-start space-y-4
// //                 group-hover:translate-y-[-2px] group-hover:scale-[1.01]
// //                 transition-all duration-500
// //               "
// //             >
// //               {/* Category (Dynamic) */}
// //               <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider inline-block">
// //                 {project.category}
// //               </span>

// //               {/* Title (Dynamic) */}
// //               <div className="bg-white text-black px-6 py-3 inline-block">
// //                 <h3
// //                   className="
// //                     text-xl font-bold whitespace-nowrap
// //                     group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]
// //                     transition-all duration-500
// //                   "
// //                 >
// //                   {project.title}
// //                 </h3>
// //               </div>

// //               {/* Services (Now Dynamic) */}
// //               <p className="text-white/90 text-xs tracking-widest uppercase">
// //                 {project.services}
// //               </p>

// //               {/* Short description (Now Dynamic) */}
// //               <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
// //                 {project.description}
// //               </p>

// //               {/* View Project CTA (Now Dynamic) */}
// //               <button className="mt-2 group flex items-center gap-2 text-white text-sm font-semibold">
// //                 <span className="relative">
// //                   {project.ctaText}
// //                   <span
// //                     className="
// //                       absolute left-0 bottom-0 w-full h-[1px] bg-white
// //                       scale-x-0 group-hover:scale-x-100
// //                       transition-transform duration-300 origin-left
// //                     "
// //                   ></span>
// //                 </span>

// //                 <motion.span
// //                   initial={{ x: 0 }}
// //                   whileHover={{ x: 5 }}
// //                   transition={{ duration: 0.3 }}
// //                 >
// //                   →
// //                 </motion.span>
// //               </button>
// //             </motion.div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Projects;

// // "use client";

// // import React from "react";
// // import { motion } from "framer-motion";

// // const Projects = () => {
// //   const projects = [
// //     {
// //       title: "Asus Marketing",
// //       category: "Digital, Agency",
// //       image:
// //         "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
// //     },
// //     {
// //       title: "Urban Shadows",
// //       category: "Photography",
// //       image:
// //         "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
// //     },
// //     {
// //       title: "Neon Dreams",
// //       category: "Landing Page",
// //       image:
// //         "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
// //     },
// //   ];

// //   // Overlay drops from Top
// //   const overlayVariants = {
// //     rest: { y: "-100%", opacity: 0 },
// //     hover: {
// //       y: "0%",
// //       opacity: 1,
// //       transition: { duration: 0.5, ease: "easeInOut" },
// //     },
// //   };

// //   // Bottom content rises up
// //   const contentVariants = {
// //     rest: { y: "100%", opacity: 0 },
// //     hover: {
// //       y: "0%",
// //       opacity: 1,
// //       transition: { duration: 0.5, ease: "easeOut", delay: 0.15 },
// //     },
// //   };

// //   return (
// //     <section className="py-24 px-6 md:px-12 lg:px-20 bg-black min-h-screen relative">
// //       {/* Floating Decorative Elements */}
// //       <motion.div
// //         animate={{ y: [0, -10, 0] }}
// //         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
// //         className="absolute top-20 left-1/4 w-2 h-2 rounded-full border border-[#00FF7F] opacity-50"
// //       />
// //       <motion.div
// //         animate={{ y: [0, 15, 0] }}
// //         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
// //         className="absolute top-10 left-[45%] w-1 h-1 bg-[#00FF7F] rounded-full"
// //       />

// //       {/* Header */}
// //       <div className="max-w-6xl mx-auto mb-16">
// //         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
// //           <div className="w-full lg:w-5/8 relative">
// //             <p className="uppercase text-gray-400 text-sm tracking-widest mb-3">
// //               Our Projects
// //             </p>
// //             <h2 className="text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-bold leading-snug text-white">
// //               Explore some of the impactful work we’ve built
// //             </h2>
// //           </div>

// //           <div className="w-full lg:w-3/8">
// //             <p className="text-gray-400 text-sm md:text-base leading-relaxed">
// //               A collection of unique website builds, creative landing pages,
// //               and fully interactive user experiences — each crafted with
// //               precision and purpose.
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Grid */}
// //       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //         {projects.map((project, index) => (
// //           <motion.div
// //             key={index}
// //             initial="rest"
// //             whileHover="hover"
// //             animate="rest"
// //             className="relative h-[80vh] w-full overflow-hidden cursor-pointer group"
// //           >
// //             {/* Background Image */}
// //             <motion.img
// //               src={project.image}
// //               alt={project.title}
// //               // className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700 ease-out"
// //               className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"

// //             />

// //             {/* Top Overlay */}
// //             <motion.div
// //               variants={overlayVariants}
// //               className="absolute inset-0 bg-black/40 pointer-events-none z-10"
// //             />

// //             {/* Bottom Content */}
// //             <motion.div
// //               variants={contentVariants}
// //               className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col items-start space-y-4"
// //             >
// //               {/* Category */}
// //               <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider inline-block">
// //                 {project.category}
// //               </span>

// //               {/* Project Title */}
// //               <div className="bg-white text-black px-6 py-3 inline-block">
// //                 <h3 className="text-xl font-bold whitespace-nowrap">
// //                   {project.title}
// //                 </h3>
// //               </div>

// //               {/* Services Provided */}
// //               <p className="text-white/90 text-xs tracking-widest uppercase">
// //                 Branding • Web Design • Web Development
// //               </p>

// //               {/* Small Description */}
// //               <p className="text-white text-sm leading-relaxed max-w-xs">
// //                 A custom-crafted digital experience designed to elevate the
// //                 brand and create meaningful user engagement.
// //               </p>

// //               {/* View Button */}
// //               <button className="mt-2 group flex items-center gap-2 text-white text-sm font-semibold">
// //                 <span className="relative">
// //                   View Project
// //                   <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
// //                 </span>

// //                 {/* Arrow */}
// //                 <motion.span
// //                   initial={{ x: 0 }}
// //                   whileHover={{ x: 5 }}
// //                   transition={{ duration: 0.3 }}
// //                 >
// //                   →
// //                 </motion.span>
// //               </button>
// //             </motion.div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Projects;

// // "use client";

// // import React from "react";
// // import { motion } from "framer-motion";

// // const Projects = () => {
// //   const projects = [
// //     {
// //       title: "Asus Marketing",
// //       category: "Digital, Agency",
// //       image:
// //         "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
// //     },
// //     {
// //       title: "Urban Shadows",
// //       category: "Photography",
// //       image:
// //         "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
// //     },
// //     {
// //       title: "Neon Dreams",
// //       category: "Landing Page",
// //       image:
// //         "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
// //     },
// //   ];

// //   // Overlay drops from Top
// //   const overlayVariants = {
// //     rest: {
// //       y: "-100%",
// //       opacity: 0,
// //     },
// //     hover: {
// //       y: "0%",
// //       opacity: 1,
// //       transition: {
// //         duration: 0.5,
// //         ease: "easeInOut",
// //       },
// //     },
// //   };

// //   // Text rises from Bottom (starts strictly below the viewable area)
// //   const contentVariants = {
// //     rest: {
// //       y: "100%",
// //       opacity: 0,
// //     },
// //     hover: {
// //       y: "0%",
// //       opacity: 1,
// //       transition: {
// //         duration: 0.5,
// //         ease: "easeOut",
// //         delay: 0.15, // Slight delay to let overlay start first
// //       },
// //     },
// //   };

// //   return (
// //     <section className="py-24 px-6 md:px-12 lg:px-20 bg-black min-h-screen relative">
// //       {/* Decorative Elements - Floating Animation */}
// //       <motion.div
// //         animate={{ y: [0, -10, 0] }}
// //         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
// //         className="absolute top-20 left-1/4 w-2 h-2 rounded-full border border-[#00FF7F] opacity-50"
// //       />
// //       <motion.div
// //         animate={{ y: [0, 15, 0] }}
// //         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
// //         className="absolute top-10 left-[45%] w-1 h-1 bg-[#00FF7F] rounded-full"
// //       />

// //       {/* Header */}
// //       <div className="max-w-6xl mx-auto mb-16">
// //         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
// //           <div className="w-full lg:w-5/8 relative">
// //             {/* <span className="absolute -top-8 left-1 w-2 h-2 bg-yellow-400 rounded-full"></span> */}
// //             <p className="uppercase text-gray-400 text-sm tracking-widest mb-3">
// //               Our Projects
// //             </p>
// //             <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-snug text-white">
// //               Explore some of the impactful work we’ve built
// //             </h2>
// //           </div>
// //           <div className="w-full lg:w-3/8">
// //             <p className="text-gray-400 text-sm md:text-base leading-relaxed">
// //               A collection of unique website builds, creative landing pages, and
// //               fully interactive user experiences — each crafted with precision
// //               and purpose.
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Grid Layout */}
// //       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //         {projects.map((project, index) => (
// //           <motion.div
// //             key={index}
// //             initial="rest"
// //             whileHover="hover"
// //             animate="rest"
// //             // 1. Set height to 70vh
// //             // 2. overflow-hidden is CRITICAL here. It acts as the mask.
// //             //    If this is missing, the text will be visible "outside" the box before animating in.
// //             className="relative h-[80vh] w-full overflow-hidden cursor-pointer group"
// //           >
// //             {/* Background Image */}
// //             <motion.img
// //               src={project.image}
// //               alt={project.title}
// //               className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700 ease-out"
// //             />

// //             {/* Top Overlay (Drops Down) */}
// //             <motion.div
// //               variants={overlayVariants}
// //               className="absolute inset-0 bg-black/40 pointer-events-none z-10"
// //             />

// //             {/* Bottom Content (Rises Up) */}
// //             <motion.div
// //               variants={contentVariants}
// //               // Positioned absolute at the bottom, constrained by the parent's overflow-hidden
// //               className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col items-start"
// //             >
// //                    {/* Orange Category Tag */}
// //               <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider mb-0 inline-block">
// //                 {project.category}
// //               </span>
// //               {/* White Title Box */}
// //               <div className="bg-white text-black px-6 py-3 inline-block">
// //                 <h3 className="text-xl font-bold whitespace-nowrap">
// //                   {project.title}
// //                 </h3>
// //               </div>

// //               {/* Orange Category Tag */}
// //               <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider mb-0 inline-block">
// //                 {project.category}
// //               </span>
// //             </motion.div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Projects;

// // "use client";

// // import React from "react";
// // import { motion } from "framer-motion";

// // const Projects = () => {
// //   const projects = [
// //     {
// //       title: "Asus Marketing",
// //       category: "Digital, Agency",
// //       image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", // Placeholder office img
// //     },
// //     {
// //       title: "Urban Shadows",
// //       category: "Photography",
// //       image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", // Placeholder office img
// //     },
// //     {
// //       title: "Neon Dreams",
// //       category: "Landing Page",
// //       image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", // Placeholder office img
// //     },
// //   ];

// //   // Animation Variants
// //   const cardVariants = {
// //     rest: {},
// //     hover: {},
// //   };

// //   // Overlay drops from Top
// //   const overlayVariants = {
// //     rest: {
// //       y: "-100%",
// //       opacity: 0,
// //     },
// //     hover: {
// //       y: "0%",
// //       opacity: 1,
// //       transition: {
// //         duration: 0.4,
// //         ease: "easeInOut"
// //       }
// //     },
// //   };

// //   // Text rises from Bottom
// //   const contentVariants = {
// //     rest: {
// //       y: "100%",
// //       opacity: 0
// //     },
// //     hover: {
// //       y: "0%",
// //       opacity: 1,
// //       transition: {
// //         duration: 0.6,
// //         ease: "easeOut",
// //         delay: 0.3 // Waits slightly for overlay to start dropping
// //       }
// //     },
// //   };

// //   return (
// //     <section className="py-24 px-6 md:px-12 lg:px-20 bg-black min-h-screen">

// //       {/* Header (Kept exactly as requested) */}
// //       <div className="max-w-6xl mx-auto mb-16">
// //         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
// //           <div className="w-full lg:w-5/8 relative">
// //             <span className="absolute -top-8 left-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
// //             <p className="uppercase text-gray-400 text-sm tracking-widest mb-3">
// //               Our Projects
// //             </p>
// //             <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-snug text-white">
// //               Explore some of the impactful work we’ve built
// //             </h2>
// //           </div>
// //           <div className="w-full lg:w-3/8">
// //             <p className="text-gray-400 text-sm md:text-base leading-relaxed">
// //               A collection of unique website builds, creative landing pages, and
// //               fully interactive user experiences — each crafted with precision
// //               and purpose.
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Grid Layout (Matches the 3 vertical columns in was1.jpg) */}
// //       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //         {projects.map((project, index) => (
// //           <motion.div
// //             key={index}
// //             initial="rest"
// //             whileHover="hover"
// //             animate="rest"
// //             variants={cardVariants}
// //             className="relative h-[600px] w-full overflow-hidden cursor-pointer group"
// //           >
// //             {/* Background Image */}
// //             {/* Added grayscale to match the aesthetic of was1.jpg */}
// //             <motion.img
// //               src={project.image}
// //               alt={project.title}
// //               className="w-full h-[70vh] object-cover grayscale group-hover:scale-105 transition-transform duration-700 ease-out"
// //             />

// //             {/* Top Overlay (Drops Down) */}
// //             <motion.div
// //               variants={overlayVariants}
// //               className="absolute inset-0 bg-black/40 pointer-events-none z-10"
// //             />

// //             {/* Bottom Content (Rises Up) */}
// //             <motion.div
// //               variants={contentVariants}
// //               className="absolute bottom-18 left-8 z-20 flex flex-col items-start"
// //             >
// //               {/* Orange Category Tag */}
// //               <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider mb-0">
// //                 {project.category}
// //               </span>

// //               {/* White Title Box */}
// //               <div className="bg-white text-black px-6 py-3">
// //                 <h3 className="text-xl font-bold whitespace-nowrap">
// //                   {project.title}
// //                 </h3>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Projects;

// // "use client";

// // import React from "react";
// // import Masonry from "react-masonry-css";
// // import { motion } from "framer-motion";

// // const Projects = () => {
// //   const projects = [
// //     {
// //       title: "Trippy Roadtrip",
// //       category: "Commission",
// //       image: "/images/hero1.jpg",
// //       large: true,
// //     },
// //     {
// //       title: "Aidan Summer 21",
// //       category: "Editorial",
// //       image: "/images/hero1.jpg",
// //       large: false,
// //     },
// //     {
// //       title: "Urban Shadows",
// //       category: "Photography",
// //       image: "/images/hero1.jpg",
// //       large: false,
// //     },
// //     {
// //       title: "Neon Dreams",
// //       category: "Landing Page",
// //       image: "/images/hero1.jpg",
// //       large: true,
// //     },
// //     // {
// //     //   title: "Bold Typography",
// //     //   category: "UI/UX",
// //     //   image: "/images/hero1.jpg",
// //     //   large: true,
// //     // },
// //     // {
// //     //   title: "Minimal Studio",
// //     //   category: "Branding",
// //     //   image: "/images/hero1.jpg",
// //     //   large: false,

// //     // },
// //   ];

// //   const breakpointColumnsObj = {
// //     default: 2,
// //     768: 1,
// //   };

// //   return (
// //     <section className="py-24 px-6 md:px-12 lg:px-20">
// //       <div className="max-w-6xl mx-auto mb-16">
// //         {/* Header */}
// //         <div className="max-w-6xl mx-auto mb-16">
// //           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
// //             <div className="w-full lg:w-5/8 relative">
// //               <span className="absolute -top-8 left-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
// //               <p className="uppercase text-gray-400 text-sm tracking-widest mb-3">
// //                 Our Projects
// //               </p>
// //               <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-snug">
// //                 Explore some of the impactful work we’ve built
// //               </h2>
// //             </div>

// //             <div className="w-full lg:w-3/8">
// //               <p className="text-gray-400 text-sm md:text-base leading-relaxed">
// //                 A collection of unique website builds, creative landing pages,
// //                 and fully interactive user experiences — each crafted with
// //                 precision and purpose.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <Masonry
// //         breakpointCols={breakpointColumnsObj}
// //         className="flex gap-8"
// //         columnClassName="flex flex-col gap-8"
// //       >
// //         {projects.map((project, index) => (
// //           <motion.div
// //             key={index}
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, ease: "easeOut" }}
// //             viewport={{ once: true }}
// //             className="group cursor-pointer"
// //           >
// //             <div
// //               className={`overflow-hidden rounded-none ${
// //                 project.large ? "h-[700px]" : "h-[350px]"
// //               }`}
// //             >
// //               <motion.img
// //                 src={project.image}
// //                 alt={project.title}
// //                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
// //               />
// //             </div>

// //             <div className="mt-4">
// //               <h3 className="text-xl font-semibold">{project.title}</h3>
// //               <p className="text-gray-500 text-sm">/{project.category}</p>
// //             </div>
// //           </motion.div>
// //         ))}
// //       </Masonry>
// //     </section>
// //   );
// // };

// // export default Projects;

// // "use client";

// // import React from "react";
// // import { motion } from "framer-motion";

// // const Projects = () => {
// //   const projects = [
// //     { title: "Trippy Roadtrip", category: "Commission", image: "/images/hero1.jpg", large: true },
// //     { title: "Aidan Summer 21", category: "Editorial", image: "/images/hero1.jpg", large: false },
// //     { title: "Urban Shadows", category: "Photography", image: "/images/hero1.jpg", large: false },
// //     { title: "Neon Dreams", category: "Landing Page", image: "/images/hero1.jpg", large: true },
// //     { title: "Bold Typography", category: "UI/UX", image: "/images/hero1.jpg", large: false },
// //     { title: "Minimal Studio", category: "Branding", image: "/images/hero1.jpg", large: true },
// //   ];

// //   return (
// //     <section className="py-24 px-6 md:px-12 lg:px-20">
// //       {/* Header */}
// //       <div className="max-w-6xl mx-auto mb-16">
// //         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
// //           <div className="w-full lg:w-5/8 relative">
// //             <span className="absolute -top-8 left-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
// //             <p className="uppercase text-gray-400 text-sm tracking-widest mb-3">
// //               Our Projects
// //             </p>
// //             <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-snug">
// //               Explore some of the impactful <br className="hidden sm:inline" /> work we’ve built
// //             </h2>
// //           </div>

// //           <div className="w-full lg:w-3/8">
// //             <p className="text-gray-400 text-sm md:text-base leading-relaxed">
// //               A collection of unique website builds, creative landing pages, and fully interactive user experiences — each crafted with precision and purpose.
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Grid Layout */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
// //         {projects.map((project, index) => {
// //           // Pattern for alternating small|big / big|small
// //           const heightClass = project.large ? "h-[500px]" : "h-[350px]";

// //           return (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, ease: "easeOut" }}
// //               viewport={{ once: true }}
// //               className="group cursor-pointer flex flex-col"
// //             >
// //               <div className={`overflow-hidden rounded-none ${heightClass}`}>
// //                 <motion.img
// //                   src={project.image}
// //                   alt={project.title}
// //                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
// //                 />
// //               </div>

// //               <div className="mt-4">
// //                 <h3 className="text-xl font-semibold">{project.title}</h3>
// //                 <p className="text-gray-500 text-sm">/{project.category}</p>
// //               </div>
// //             </motion.div>
// //           );
// //         })}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Projects;

// // "use client";

// // import React from "react";
// // import { motion } from "framer-motion";

// // const Projects = () => {
// //   const projects = [
// //     {
// //       title: "Trippy Roadtrip",
// //       category: "Commission",

// //       image: "/images/hero1.jpg",
// //       large: true,
// //     },
// //     {
// //       title: "Aidan Summer 21",
// //       category: "Editorial",

// //       image: "/images/hero1.jpg",
// //       large: false,
// //     },
// //     {
// //       title: "Urban Shadows",
// //       category: "Photography",

// //       image: "/images/hero1.jpg",
// //       large: false,
// //     },
// //     {
// //       title: "Neon Dreams",
// //       category: "Landing Page",

// //       image: "/images/hero1.jpg",
// //       large: true,
// //     },
// //     {
// //       title: "Bold Typography",
// //       category: "UI/UX",

// //       image: "/images/hero1.jpg",
// //       large: false,
// //     },
// //     {
// //       title: "Minimal Studio",
// //       category: "Branding",

// //       image: "/images/hero1.jpg",
// //       large: true,
// //     },
// //   ];

// //   return (
// //     <section className="py-24 px-6 md:px-12 lg:px-20">
// //       {/* Header */}
// //       <div className="max-w-6xl mx-auto mb-16">
// //         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
// //           <div className="w-full lg:w-5/8 relative">
// //             <span className="absolute -top-8 left-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
// //             <p className="uppercase text-gray-400 text-sm tracking-widest mb-3">
// //               Our Projects
// //             </p>
// //             <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-snug">
// //               Explore some of the impactful <br className="hidden sm:inline" />{" "}
// //               work we’ve built
// //             </h2>
// //           </div>

// //           <div className="w-full lg:w-3/8">
// //             <p className="text-gray-400 text-sm md:text-base leading-relaxed">
// //               A collection of unique website builds, creative landing pages, and
// //               fully interactive user experiences — each crafted with precision
// //               and purpose.
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Masonry Layout */}
// //       <div className="columns-1 md:columns-2 gap-8 max-w-6xl mx-auto [column-fill:_balance]">
// //         {projects.map((project, index) => (
// //           <motion.div
// //             key={index}
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, ease: "easeOut" }}
// //             viewport={{ once: true }}
// //             className="break-inside-avoid mb-12 group cursor-pointer"
// //           >
// //             <div
// //               className={`overflow-hidden rounded-none ${
// //                 project.large ? "h-[500px]" : "h-[350px]"
// //               }`}
// //             >
// //               <motion.img
// //                 src={project.image}
// //                 alt={project.title}
// //                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
// //               />
// //             </div>

// //             <div className="mt-4">
// //               <h3 className="text-xl font-semibold">{project.title}</h3>
// //               <p className="text-gray-500 text-sm">/{project.category}</p>
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Projects;

// // 'use client'

// // import React from "react";
// // import { motion } from "framer-motion";

// // const Projects = () => {
// //   const projects = [
// //     {
// //       title: "Trippy Roadtrip",
// //       category: "Commission",
// //       image: "/images/hero1.jpg",
// //       large: true,
// //     },
// //     {
// //       title: "Aidan Summer 21",
// //       category: "Editorial",
// //       image: "/images/hero2.jpg",
// //       large: false,
// //     },
// //     {
// //       title: "Urban Shadows",
// //       category: "Photography",
// //       image: "/images/hero3.jpg",
// //       large: false,
// //     },
// //     {
// //       title: "Neon Dreams",
// //       category: "Landing Page",
// //       image: "/images/hero2.jpg",
// //       large: true,
// //     },
// //     {
// //       title: "Bold Typography",
// //       category: "UI/UX",
// //       image: "/images/hero3.jpg",
// //       large: false,
// //     },
// //     {
// //       title: "Minimal Studio",
// //       category: "Branding",
// //       image: "/images/hero1.jpg",
// //       large: true,
// //     },
// //   ];

// //   return (
// //     <section className="py-24 px-6 md:px-12 lg:px-20">
// //       {/* Header */}
// //       <div className="max-w-6xl mx-auto mb-16">
// //         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
// //           <div className="w-full lg:w-5/8 relative">
// //             <span className="absolute -top-8 left-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
// //             <p className="uppercase text-gray-400 text-sm tracking-widest mb-3">
// //               Our Projects
// //             </p>
// //             <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-snug">
// //               Explore some of the impactful <br className="hidden sm:inline" /> work we’ve built
// //             </h2>
// //           </div>

// //           <div className="w-full lg:w-3/8">
// //             <p className="text-gray-400 text-sm md:text-base leading-relaxed">
// //               A collection of unique website builds, creative landing pages, and fully interactive user experiences — each crafted with precision and purpose.
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Masonry Layout */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
// //         {projects.map((project, index) => (
// //           <motion.div
// //             key={index}
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, ease: "easeOut" }}
// //             viewport={{ once: true }}
// //             className={`group cursor-pointer ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
// //           >
// //             <div
// //               className={`overflow-hidden rounded-xl ${
// //                 index % 2 === 0 ? "h-[350px]" : "h-[500px]"
// //               }`}
// //             >
// //               <motion.img
// //                 src={project.image}
// //                 alt={project.title}
// //                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
// //               />
// //             </div>

// //             <div className="mt-4">
// //               <h3 className="text-xl font-semibold">{project.title}</h3>
// //               <p className="text-gray-500 text-sm">/{project.category}</p>
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Projects;

// // 'use client'

// // import React from "react";
// // import Image from "next/image";
// // import { motion } from "framer-motion";

// // const Projects = () => {
// //   return (
// //     <section className="py-24">
// //       {/* Header Section */}
// //       <div className="max-w-6xl mx-auto mb-16">
// //         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
// //           <div className="w-full lg:w-5/8 relative">
// //             <span className="absolute -top-8 left-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
// //             <p className="uppercase text-gray-400 text-sm tracking-widest mb-3">
// //               Our Projects
// //             </p>
// //             <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-snug">
// //               Explore some of the impactful <br className="hidden sm:inline" /> work we’ve built
// //             </h2>
// //           </div>

// //           <div className="w-full lg:w-3/8">
// //             <p className="text-gray-400 text-sm md:text-base leading-relaxed">
// //               A collection of unique website builds, creative landing pages, and fully
// //               interactive user experiences — each crafted with precision and purpose.
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Masonry Projects Section */}
// //       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {/* Big Card */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 40 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="relative rounded-2xl overflow-hidden col-span-1 md:col-span-2 h-[420px] group shadow-lg"
// //         >
// //           <Image
// //             src="/images/project1.gif"
// //             alt="Project Preview"
// //             fill
// //             className="object-cover group-hover:scale-105 transition-all duration-700"
// //           />
// //           <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>
// //           <div className="absolute bottom-6 left-6 text-white">
// //             <h3 className="text-2xl font-bold mb-2">Moteling — Hotel Booking App</h3>
// //             <p className="text-sm text-gray-200 max-w-xs">A full‑stack reservation platform with real‑time availability and CMS integration.</p>
// //           </div>
// //         </motion.div>

// //         {/* Small Card */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 40 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="relative rounded-2xl overflow-hidden h-[350px] group shadow-lg"
// //         >
// //           <Image
// //             src="/images/project2.gif"
// //             alt="Project Preview"
// //             fill
// //             className="object-cover group-hover:scale-105 transition-all duration-700"
// //           />
// //           <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>
// //           <div className="absolute bottom-6 left-6 text-white">
// //             <h3 className="text-xl font-bold">3D Studioz Landing Page</h3>
// //           </div>
// //         </motion.div>

// //         {/* Vertical Card */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 40 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="relative rounded-2xl overflow-hidden h-[500px] group shadow-lg"
// //         >
// //           <Image
// //             src="/images/project3.gif"
// //             alt="Project Preview"
// //             fill
// //             className="object-cover group-hover:scale-105 transition-all duration-700"
// //           />
// //           <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>
// //           <div className="absolute bottom-6 left-6 text-white">
// //             <h3 className="text-xl font-bold">E‑commerce UI Concept</h3>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Projects;

// // "use client";
// // import React from 'react';
// // import Image from 'next/image';
// // import { motion } from 'framer-motion';

// // // --- Project Data ---
// // // The 'size' property determines the grid span (tall/wide/standard)
// // const projects = [
// //   {
// //     title: "E-Commerce Platform Redesign",
// //     image: "/images/hero1.jpg", // Use .gif for moving preview
// //     tags: ["React", "Tailwind CSS", "Next.js"],
// //     size: "tall", // Spans 2 rows
// //     link: "#",
// //   },
// //   {
// //     title: "SaaS Dashboard Concept",
// //     image: "/images/hero2.jpg",
// //     tags: ["UI/UX", "Figma", "Redux"],
// //     size: "standard", // Spans 1 row
// //     link: "#",
// //   },
// //   {
// //     title: "Creative Agency Landing Page",
// //     image: "/images/hero3.jpg",
// //     tags: ["Framer Motion", "Gatsby"],
// //     size: "wide", // Spans 2 columns
// //     link: "#",
// //   },
// //   {
// //     title: "Mobile App MVP",
// //     image: "/images/hero2.jpg",
// //     tags: ["React Native", "Firebase"],
// //     size: "standard",
// //     link: "#",
// //   },
// //   {
// //     title: "FinTech Data Visualization",
// //     image: "/images/hero3.jpg",
// //     tags: ["D3.js", "Vite", "TypeScript"],
// //     size: "standard",
// //     link: "#",
// //   },
// //   {
// //     title: "Travel Blog Rebrand",
// //     image: "/images/hero1.jpg",
// //     tags: ["Contentful", "SEO"],
// //     size: "standard",
// //     link: "#",
// //   },
// // ];

// // const Projects = () => {
// //   return (
// //     <section className="bg-black text-white py-20 px-6 md:px-16">

// //       {/* --- Header Section (Edited for Projects) --- */}
// //       <div className="max-w-6xl mx-auto mb-16">
// //         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
// //           <div className="w-full lg:w-5/8 relative">
// //             <span className="absolute -top-8 left-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
// //             <p className="uppercase text-gray-400 text-sm tracking-widest mb-3">
// //               Our Latest Creations
// //             </p>
// //             <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-snug">
// //               Projects we&apos;ve delivered <br className="hidden sm:inline" />{" "}
// //               for our happy clients
// //             </h2>
// //           </div>
// //           <div className="w-full lg:w-3/8">
// //             <p className="text-gray-400 text-sm md:text-base leading-relaxed">
// //               We leverage modern technology and creative design to build unique,
// //               high-performing digital experiences that truly stand out in the market.
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* --- Projects Grid (Custom Masonry Layout) --- */}
// //       <div className="max-w-7xl mx-auto">
// //         {/*
// //           We use a standard 3-column grid structure, and then use
// //           `col-span-2` and `row-span-2` for the large/masonry effect.
// //           The `grid-auto-rows-min` helps the masonry effect with varying row spans.
// //         */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(150px,_min-content)] md:auto-rows-min">
// //           {projects.map((project, index) => (
// //             <motion.a
// //               key={index}
// //               href={project.link}
// //               className={`
// //                 relative block group overflow-hidden rounded-xl shadow-2xl cursor-pointer
// //                 ${project.size === 'tall' ? 'row-span-2' : ''}
// //                 ${project.size === 'wide' ? 'md:col-span-2 md:h-[400px]' : 'h-[350px]'}
// //                 ${project.size === 'standard' ? 'h-[350px]' : ''}
// //               `}
// //               whileHover={{ scale: 1.02 }}
// //               transition={{ type: "spring", stiffness: 400, damping: 10 }}
// //             >

// //               {/* Image / GIF Container */}
// //               <Image
// //                 src={project.image}
// //                 alt={project.title}
// //                 fill
// //                 className="object-cover transition-transform duration-500 group-hover:scale-105"
// //                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
// //               />

// //               {/* Hover Overlay */}
// //               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-300 flex flex-col justify-end p-6">

// //                 {/* Tags */}
// //                 <div className="flex flex-wrap gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                   {project.tags.map((tag, tagIndex) => (
// //                     <span key={tagIndex} className="text-xs font-medium text-yellow-400 border border-yellow-400 px-3 py-1 rounded-full">
// //                       {tag}
// //                     </span>
// //                   ))}
// //                 </div>

// //                 {/* Title */}
// //                 <h3 className="text-2xl font-bold leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
// //                   {project.title}
// //                 </h3>

// //                 {/* View Project Link (Only visible on hover) */}
// //                 <span className="mt-2 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                   View Project &rarr;
// //                 </span>
// //               </div>
// //             </motion.a>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Projects;

// // import React from 'react'

// // const Projects = () => {
// //   return (
// //     <div>Projects</div>
// //   )
// // }

// // export default Projects

// //  want to create a unique project section with a cool masonary like display where its one big one small image with details or not
// //  something like a huge card small and big that has like a moving gif or picture of the full website all be it a landing page

// //  pls use this code as starter as also use the same type of headeer sction   (
// //       {/* Header Section (Unchanged) */}
// //       <div className="max-w-6xl mx-auto mb-16">
// //         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
// //           <div className="w-full lg:w-5/8 relative">
// //             <span className="absolute -top-8 left-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
// //             <p className="uppercase text-gray-400 text-sm tracking-widest mb-3">
// //               What we’re offering
// //             </p>
// //             <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-snug">
// //               Services we’re providing to <br className="hidden sm:inline" />{" "}
// //               our customers
// //             </h2>
// //           </div>
// //           <div className="w-full lg:w-3/8">
// //             <p className="text-gray-400 text-sm md:text-base leading-relaxed">
// //               There are many variations of simply free text passages available,
// //               but the majority have suffered alteration in some form, by injected
// //               hum randomised words which don&apos;t slightly.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //  ) but pls edit it to mach the project sectoon
