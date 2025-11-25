"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Users, Code, Rocket } from "lucide-react"; // Icons reflecting the process steps

// --- Feature Data (Restored to 3 specific process steps) ---
const features = [
  {
    title: "Meeting",
    icon: Users,
    description: "We start with a detailed consultation to understand your business, goals, and vision. This ensures we align our strategy with your objectives.",
  },
  {
    title: "Development",
    icon: Code,
    description: "Our team builds high-quality websites, apps, and digital solutions, focusing on performance, usability, and seamless design.",
  },
  {
    title: "Delivery",
    icon: Rocket,
    description: "We launch your project and ensure it runs smoothly, providing support and guidance for continuous growth and improvement.",
  },
];

// --- Animation Variants (Preserving the Ripple Reveal style) ---

// Parent container for staggered entry
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

// Individual column animation (Fade and slight scale/lift)
const columnVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // Smooth custom ease
    },
  },
};

// Circle animation (Secondary reveal effect for the glow)
const circleVariants: Variants = {
  hidden: { scale: 0.7, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      delay: 0.6, // Delay after the column has positioned itself
    },
  },
};

const Process = () => {
  return (
    <section className="bg-[#0A0A0A] text-white py-20 md:py-32 px-4 overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <p className="text-gray-500 uppercase tracking-[0.2em] text-sm font-medium mb-3">
             Simple Work Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Check how we work in <br />
            <span className="text-[#4EE1FF]">3 easy steps</span>
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={columnVariants}
              className="flex flex-col items-center p-4"
            >
              {/* Icon & Circle Container */}
              <div className="relative mb-8">
                <motion.div
                  variants={circleVariants}
                  // Outer glowing circle border
                  className="absolute inset-0 rounded-full border border-[#4EE1FF] shadow-[0_0_15px_rgba(78,225,255,0.7)]"
                />
                
                {/* Inner black circle container */}
                <div className="relative w-40 h-40 rounded-full bg-[#0d0d0d] flex items-center justify-center border border-[#4EE1FF]/30 transition-transform duration-500 hover:scale-105">
                  <feature.icon className="w-12 h-12 text-[#4EE1FF] drop-shadow-[0_0_10px_rgba(78,225,255,0.8)]" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-base leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;

// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion, Variants } from "framer-motion";

// const Process = () => {
//   const steps = [
//     {
//       id: "01",
//       title: "Meeting",
//       description:
//         "We start with a detailed consultation to understand your business, goals, and vision. This ensures we align our strategy with your objectives.",
//       image:
//         "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     },
//     {
//       id: "02",
//       title: "Development",
//       description:
//         "Our team builds high-quality websites, apps, and digital solutions, focusing on performance, usability, and seamless design.",
//       image:
//         "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     },
//     {
//       id: "03",
//       title: "Delivery",
//       description:
//         "We launch your project and ensure it runs smoothly, providing support and guidance for continuous growth and improvement.",
//       image:
//         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     },
//   ];

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.3, delayChildren: 0.2 },
//     },
//   };
//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <section className="bg-black text-white py-20 px-4 overflow-hidden relative font-sans">
//       {/* Floating dots */}
//       <motion.div
//         animate={{ y: [0, -10, 0] }}
//         transition={{ duration: 4, repeat: Infinity }}
//         className="absolute top-20 left-1/4 w-2 h-2 rounded-full border border-[#4EE1FF] opacity-50"
//       />
//       <motion.div
//         animate={{ y: [0, 15, 0] }}
//         transition={{ duration: 5, repeat: Infinity }}
//         className="absolute top-10 left-[45%] w-1 h-1 bg-[#4EE1FF] rounded-full"
//       />

//       <div className="max-w-7xl mx-auto text-center relative z-10 px-6 py-4">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-50px" }}
//           transition={{ duration: 0.8 }}
//           className="mb-20"
//         >
//           <p className="text-gray-500 uppercase tracking-[0.2em] text-sm font-medium mb-3">
//             Simple Work Process
//           </p>
//           <h2 className="text-4xl md:text-5xl font-bold leading-tight">
//             Check how we work in <br />
//             <span className="text-[#4EE1FF]">3 easy steps</span>
//           </h2>
//         </motion.div>

//         {/* Steps */}
//         <motion.div
//           className="relative flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//         >
//           {/* Animated connecting line */}
//           <div className="hidden md:block absolute top-[calc(50%-64px)] left-0 w-full h-1 -z-10">
//             <motion.div
//               initial={{ scaleX: 0 }}
//               whileInView={{ scaleX: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1.5, ease: "easeInOut" }}
//               style={{ originX: 0 }}
//               className="w-full h-full bg-[#4EE1FF]/20 relative"
//             >
//               {steps.map((_, i) => (
//                 <motion.div
//                   key={i}
//                   animate={{ scale: [1, 1.5, 1] }}
//                   transition={{
//                     duration: 1.5,
//                     repeat: Infinity,
//                     delay: i * 0.5,
//                     ease: "easeInOut",
//                   }}
//                   className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#4EE1FF] shadow-[0_0_15px_rgba(78,225,255,0.5)]"
//                   style={{
//                     left: `${i * 50}%`,
//                     transform: "translateX(-50%) translateY(-50%)",
//                   }}
//                 />
//               ))}
//             </motion.div>
//           </div>

//           {steps.map((step) => (
//             <motion.div
//               key={step.id}
//               variants={itemVariants}
//               className="flex flex-col items-center w-full md:w-1/3 group"
//             >
//               <div className="relative mb-8">
//                 <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-[#4EE1FF]/30 p-1 bg-black relative z-10 transition-transform duration-500 group-hover:scale-105">
//                   <Image
//                     src={step.image}
//                     alt={step.title}
//                     fill
//                     sizes="(max-width: 768px) 100vw, 33vw"
//                     className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
//                   />
//                 </div>

//                 {/* Step Number */}
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 260,
//                     damping: 20,
//                     delay: 0.5,
//                   }}
//                   className="absolute -top-4 right-0 bg-[#4EE1FF] text-black w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl shadow-[0_0_25px_rgba(78,225,255,0.7)] animate-[pulse_3s_ease-in-out_infinite] z-30"
//                 >
//                   {step.id}
//                 </motion.div>
//               </div>

//               <h3 className="text-2xl font-bold mb-3 group-hover:text-[#4EE1FF] transition-colors duration-300">
//                 {step.title}
//               </h3>
//               <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
//                 {step.description}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Process;




// pls replace this code with the image provided, but maintain only the 3 steps in the code provided 

// "use client";

// import React from 'react';
// import Image from 'next/image';
// import { motion, Variants } from 'framer-motion';

// const Process = () => {
//   const steps = [
//     {
//       id: '01',
//       title: 'Meeting',
//       description: 'Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.',
//       image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//     },
//     {
//       id: '02',
//       title: 'Development',
//       description: 'Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.',
//       image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//     },
//     {
//       id: '03',
//       title: 'Delivery',
//       description: 'Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.',
//       image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//     }
//   ];

//   // Type: Variants added here
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   // Type: Variants added here
//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" }
//     },
//   };

//   return (
//     <section className="bg-black text-white py-20 px-4 overflow-hidden relative font-sans">

//       {/* Decorative Elements */}
//       <motion.div
//         animate={{ y: [0, -10, 0] }}
//         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-20 left-1/4 w-2 h-2 rounded-full border border-[#00FF7F] opacity-50"
//       />
//       <motion.div
//         animate={{ y: [0, 15, 0] }}
//         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-10 left-[45%] w-1 h-1 bg-[#00FF7F] rounded-full"
//       />

//       <div className="max-w-7xl mx-auto text-center relative z-10 px-6 py-4">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-50px" }} // Also tweaked this slightly for mobile
//           transition={{ duration: 0.8 }}
//           className="mb-20"
//         >
//           <p className="text-gray-500 uppercase tracking-[0.2em] text-sm font-medium mb-3">
//             Simple Work Process
//           </p>
//           <h2 className="text-4xl md:text-5xl font-bold leading-tight">
//             Check how we works in <br />
//             <span className="text-white">3 easy steps</span>
//           </h2>
//         </motion.div>

//         {/* Main Steps Container */}
//         <motion.div
//           className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           // UPDATED: Changed margin from "-100px" to "-50px"
//           // This makes it trigger earlier on scroll.
//           viewport={{ once: true, margin: "-50px" }}
//         >

//           {/* Connecting Line */}
//           <div className="hidden md:block absolute top-[100px] left-0 w-full h-[1px] -z-10">
//             <motion.div
//               initial={{ scaleX: 0 }}
//               whileInView={{ scaleX: 1 }}
//               viewport={{ once: true, margin: "-50px" }} // Synced with container
//               transition={{ duration: 1.5, ease: "easeInOut" }}
//               style={{ originX: 0 }}
//               className="w-full h-full bg-green-500/50"
//             />

//             <motion.div
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0, duration: 0.3 }}
//               className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#00FF7F] rounded-full"
//             />

//             <motion.div
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 1.5, duration: 0.3 }}
//               className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#00FF7F] rounded-full"
//             />
//           </div>

//           {/* Steps Loop */}
//           {steps.map((step) => (
//             <motion.div
//               key={step.id}
//               variants={itemVariants}
//               className="flex flex-col items-center w-full md:w-1/3 group"
//             >

//               <div className="relative mb-8">
//                 <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-green-500/30 p-1 bg-black relative z-10 transition-transform duration-300 group-hover:scale-105">
//                   <div className="relative w-full h-full rounded-full overflow-hidden">
//                     <Image
//                       src={step.image}
//                       alt={step.title}
//                       fill
//                       sizes="(max-width: 768px) 100vw, 33vw"
//                       className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
//                     />
//                   </div>
//                 </div>

//                 <motion.div
//                   initial={{ scale: 0, rotate: -180 }}
//                   whileInView={{ scale: 1, rotate: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
//                   className="absolute top-0 right-0 md:right-2 bg-[#00FF7F] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg border-4 border-black z-20"
//                 >
//                   {step.id}
//                 </motion.div>
//               </div>

//               <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
//               <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
//                 {step.description}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Process;

// "use client";

// import React from 'react';
// import Image from 'next/image';
// // 1. Import Variants here
// import { motion, Variants } from 'framer-motion';

// const Process = () => {
//   const steps = [
//     {
//       id: '01',
//       title: 'Meeting',
//       description: 'Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.',
//       image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//     },
//     {
//       id: '02',
//       title: 'Development',
//       description: 'Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.',
//       image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//     },
//     {
//       id: '03',
//       title: 'Finalizing',
//       description: 'Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.',
//       image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//     }
//   ];

//   // 2. Explicitly type the container variants
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   // 3. Explicitly type the item variants (This fixes the 'ease' error)
//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" }
//     },
//   };

//   return (
//     <section className="bg-black text-white py-20 px-4 overflow-hidden relative font-sans">

//       {/* Decorative Elements - Floating Animation */}
//       <motion.div
//         animate={{ y: [0, -10, 0] }}
//         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-20 left-1/4 w-2 h-2 rounded-full border border-[#00FF7F] opacity-50"
//       />
//       <motion.div
//         animate={{ y: [0, 15, 0] }}
//         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-10 left-[45%] w-1 h-1 bg-[#00FF7F] rounded-full"
//       />

//       <div className="max-w-7xl mx-auto text-center relative z-10 px-6 py-4">
//         {/* Header Animation */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-20"
//         >
//           <p className="text-gray-500 uppercase tracking-[0.2em] text-sm font-medium mb-3">
//             Simple Work Process
//           </p>
//           <h2 className="text-4xl md:text-5xl font-bold leading-tight">
//             Check how we works in <br />
//             <span className="text-white">3 easy steps</span>
//           </h2>
//         </motion.div>

//         {/* Main Steps Container */}
//         <motion.div
//           className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >

//           {/* Connecting Line Animation */}
//           <div className="hidden md:block absolute top-[100px] left-0 w-full h-[1px] -z-10">
//              {/* The Line itself */}
//             <motion.div
//               initial={{ scaleX: 0 }}
//               whileInView={{ scaleX: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1.5, ease: "easeInOut" }}
//               style={{ originX: 0 }}
//               className="w-full h-full bg-green-500/50"
//             />

//             {/* Left Dot */}
//             <motion.div
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0, duration: 0.3 }}
//               className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#00FF7F] rounded-full"
//             />

//             {/* Right Dot */}
//             <motion.div
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 1.5, duration: 0.3 }}
//               className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#00FF7F] rounded-full"
//             />
//           </div>

//           {/* Steps Loop */}
//           {steps.map((step) => (
//             <motion.div
//               key={step.id}
//               variants={itemVariants}
//               className="flex flex-col items-center w-full md:w-1/3 group"
//             >

//               <div className="relative mb-8">
//                 {/* Image Container */}
//                 <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-green-500/30 p-1 bg-black relative z-10 transition-transform duration-300 group-hover:scale-105">
//                   <div className="relative w-full h-full rounded-full overflow-hidden">
//                     <Image
//                       src={step.image}
//                       alt={step.title}
//                       fill
//                       sizes="(max-width: 768px) 100vw, 33vw"
//                       className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
//                     />
//                   </div>
//                 </div>

//                 {/* Number Badge */}
//                 <motion.div
//                   initial={{ scale: 0, rotate: -180 }}
//                   whileInView={{ scale: 1, rotate: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
//                   className="absolute top-0 right-0 md:right-2 bg-[#00FF7F] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg border-4 border-black z-20"
//                 >
//                   {step.id}
//                 </motion.div>
//               </div>

//               <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
//               <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
//                 {step.description}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Process;

// "use client"; // Required for Framer Motion in Next.js App Router

// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const Process = () => {
//   const steps = [
//     {
//       id: '01',
//       title: 'Meeting',
//       description: 'Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.',
//       image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//     },
//     {
//       id: '02',
//       title: 'Development',
//       description: 'Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.',
//       image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//     },
//     {
//       id: '03',
//       title: 'Finalizing',
//       description: 'Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.',
//       image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//     }
//   ];

//   // Animation Variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3, // Delay between each step appearing
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 }, // Start slightly down and invisible
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" }
//     },
//   };

//   return (
//     <section className="bg-black text-white py-20 px-4 overflow-hidden relative font-sans">

//       {/* Decorative Elements - Floating Animation */}
//       <motion.div
//         animate={{ y: [0, -10, 0] }}
//         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-20 left-1/4 w-2 h-2 rounded-full border border-[#00FF7F] opacity-50"
//       />
//       <motion.div
//         animate={{ y: [0, 15, 0] }}
//         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-10 left-[45%] w-1 h-1 bg-[#00FF7F] rounded-full"
//       />

//       <div className="max-w-7xl mx-auto text-center relative z-10 px-6 py-4">
//         {/* Header Animation */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-20"
//         >
//           <p className="text-gray-500 uppercase tracking-[0.2em] text-sm font-medium mb-3">
//             Simple Work Process
//           </p>
//           <h2 className="text-4xl md:text-5xl font-bold leading-tight">
//             Check how we works in <br />
//             <span className="text-white">3 easy steps</span>
//           </h2>
//         </motion.div>

//         {/* Main Steps Container */}
//         <motion.div
//           className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >

//           {/* Connecting Line Animation (Draws from left to right) */}
//           <div className="hidden md:block absolute top-[100px] left-0 w-full h-[1px] -z-10">
//              {/* The Line itself */}
//             <motion.div
//               initial={{ scaleX: 0 }}
//               whileInView={{ scaleX: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1.5, ease: "easeInOut" }} // Slower, smooth draw
//               style={{ originX: 0 }} // Ensures it grows from left
//               className="w-full h-full bg-green-500/50"
//             />

//             {/* Left Dot */}
//             <motion.div
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0, duration: 0.3 }}
//               className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#00FF7F] rounded-full"
//             />

//             {/* Right Dot */}
//             <motion.div
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 1.5, duration: 0.3 }} // Appears after line finishes drawing
//               className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#00FF7F] rounded-full"
//             />
//           </div>

//           {/* Steps Loop */}
//           {steps.map((step) => (
//             <motion.div
//               key={step.id}
//               variants={itemVariants}
//               className="flex flex-col items-center w-full md:w-1/3 group"
//             >

//               <div className="relative mb-8">
//                 {/* Image Container */}
//                 <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-green-500/30 p-1 bg-black relative z-10 transition-transform duration-300 group-hover:scale-105">
//                   <div className="relative w-full h-full rounded-full overflow-hidden">
//                     <Image
//                       src={step.image}
//                       alt={step.title}
//                       fill
//                       sizes="(max-width: 768px) 100vw, 33vw"
//                       className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
//                     />
//                   </div>
//                 </div>

//                 {/* Number Badge - Pop Animation */}
//                 <motion.div
//                   initial={{ scale: 0, rotate: -180 }}
//                   whileInView={{ scale: 1, rotate: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
//                   className="absolute top-0 right-0 md:right-2 bg-[#00FF7F] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg border-4 border-black z-20"
//                 >
//                   {step.id}
//                 </motion.div>
//               </div>

//               <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
//               <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
//                 {step.description}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Process

// import React from 'react'
// import Image from 'next/image' // 1. Import the Next.js Image component

// const Process = () => {
//   const steps = [
//     {
//       id: '01',
//       title: 'Meeting',
//       description: 'Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.',
//       image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//     },
//     {
//       id: '02',
//       title: 'Development',
//       description: 'Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.',
//       image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//     },
//     {
//       id: '03',
//       title: 'Finalizing',
//       description: 'Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.',
//       image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//     }
//   ];

//   return (
//     <section className="bg-black text-white py-20 px-4 overflow-hidden relative font-sans">

//       {/* Decorative Elements */}
//       <div className="absolute top-20 left-1/4 w-2 h-2 rounded-full border border-orange-500 opacity-50"></div>
//       <div className="absolute top-10 left-[45%] w-1 h-1 bg-orange-500 rounded-full"></div>

//       <div className="max-w-6xl mx-auto text-center relative z-10">
//         <div className="mb-20">
//           <p className="text-gray-500 uppercase tracking-[0.2em] text-sm font-medium mb-3">
//             Simple Work Process
//           </p>
//           <h2 className="text-4xl md:text-5xl font-bold leading-tight">
//             Check how we works in <br />
//             <span className="text-white">3 easy steps</span>
//           </h2>
//         </div>

//         <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4">

//           {/* Connecting Line */}
//           <div className="hidden md:block absolute top-[100px] left-0 w-full h-[1px] bg-orange-500/50 -z-10">
//             <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full"></div>
//             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full"></div>
//           </div>

//           {/* Steps Loop */}
//           {steps.map((step) => (
//             <div key={step.id} className="flex flex-col items-center w-full md:w-1/3 group">

//               <div className="relative mb-8">
//                 {/* Image Container */}
//                 <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-orange-500/30 p-1 bg-black relative z-10 transition-transform duration-300 group-hover:scale-105">
//                   {/* 2. Using Next/Image with 'fill' to fit the container */}
//                   <div className="relative w-full h-full rounded-full overflow-hidden">
//                     <Image
//                       src={step.image}
//                       alt={step.title}
//                       fill
//                       sizes="(max-width: 768px) 100vw, 33vw"
//                       className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
//                     />
//                   </div>
//                 </div>

//                 {/* Number Badge */}
//                 <div className="absolute top-0 right-0 md:right-2 bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg border-4 border-black z-20">
//                   {step.id}
//                 </div>
//               </div>

//               <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
//               <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
//                 {step.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Process

// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ArrowUp } from "lucide-react";

// const steps = [
//   {
//     id: "01",
//     title: "Meeting",
//     desc: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.",
//     image: "/images/hero1.jpg",
//   },
//   {
//     id: "02",
//     title: "Development",
//     desc: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.",
//     image: "/images/hero2.jpg",
//   },
//   {
//     id: "03",
//     title: "Finalizing",
//     desc: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.",
//     image: "/images/hero3.jpg",
//   },
// ];

// export default function Process() {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <section className="w-full bg-black text-white py-20 px-4 relative">
//                   {/* --- Header Section --- */}     {" "}
//       <div className="max-w-6xl mx-auto text-center mb-20 relative">
//         {/* Small orange dot above the header */}
//         <span className="absolute left-1/2 -top-4 transform -translate-x-1/2 w-2 h-2 bg-orange-500 rounded-full"></span>
//                {" "}
//         <p className="text-sm tracking-widest text-gray-400 mb-2">
//                     SIMPLE WORK PROCESS        {" "}
//         </p>
//                {" "}
//         <h2 className="text-4xl md:text-5xl font-bold leading-tight">
//                     Check how we works in <br /> 3 easy steps        {" "}
//         </h2>
//              {" "}
//       </div>
//             {/* --- Process Timeline Container --- */}     {" "}
//       <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-start">
//         {/* --- 1. Horizontal Timeline Line and End Dots --- */}
//         {/* The line position (top: 100px) is calculated to run directly through the center of the image circles (height 200px / 2) */}
//         <div className="absolute hidden md:block w-full h-[2px] top-[100px] left-0 bg-gray-700/50 -z-10">
//           {/* Left End Dot */}
//           <span className="absolute -left-1 -top-[9px] w-5 h-5 bg-black border-2 border-orange-500 rounded-full">
//             <span className="absolute inset-0 m-auto w-1 h-1 bg-orange-500 rounded-full"></span>
//           </span>

//           {/* Right End Dot */}
//           <span className="absolute -right-1 -top-[9px] w-5 h-5 bg-black border-2 border-orange-500 rounded-full">
//             <span className="absolute inset-0 m-auto w-1 h-1 bg-orange-500 rounded-full"></span>
//           </span>
//         </div>
//                 {/* --- 2. Process Steps --- */}       {" "}
//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center w-full md:w-1/3 px-4"
//           >
//
//             {/* Image Circle Container (Fixed size 200x200 to match line positioning) */}
//                          {" "}
//             <div className="relative w-[200px] h-[200px] rounded-full flex items-center justify-center overflow-hidden mb-12">
//                              {/* Image */}
//               <Image
//                 src={step.image}
//                 alt={step.title}
//                 fill // Adjust grayscale and contrast to mimic the black/white photo filter
//                 className="object-cover grayscale brightness-[.6] contrast-150"
//                 sizes="200px"
//               />
//               {/* Orange Circle Border (mimics the thicker orange border in the image) */}
//               <div className="absolute inset-0 rounded-full border-4 border-orange-500 shadow-inner z-10"></div>
//                              {" "}
//               {/* Orange Number Circle (positioned top center) */}
//                {" "}
//               <div
//                 className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2
//                                bg-orange-500 text-white w-14 h-14 flex items-center justify-center
//                                rounded-full font-bold text-lg shadow-xl ring-4 ring-black z-30"
//               >
//                                   {step.id}               {" "}
//               </div>
//               {/* Orange Connection Point (positioned at the line level on the right edge) */}
//               {/* This dot sits exactly on the timeline line */}
//               <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full ring-4 ring-black z-20"></div>
//                            {" "}
//             </div>
//                           {/* Text Content */}             {" "}
//             <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
//                  {" "}
//             <p className="text-base text-gray-400 max-w-sm px-4">{step.desc}</p>
//                      {" "}
//           </div>
//         ))}
//              {" "}
//       </div>
//       {/* Scroll to Top Button (Bottom Right - Added opacity 0.8 for subtle look) */}
//       <button
//         onClick={scrollToTop}
//         className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-orange-500 text-black flex items-center justify-center shadow-lg transition-colors opacity-80 hover:opacity-100 hover:bg-orange-600"
//       >
//         <ArrowUp size={24} />
//       </button>
//          {" "}
//     </section>
//   );
// }

// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const steps = [
//   {
//     id: "01",
//     title: "Meeting",
//     desc: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.",
//     image: "/images/hero1.jpg",
//   },
//   {
//     id: "02",
//     title: "Development",
//     desc: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.",
//     image: "/images/hero2.jpg",
//   },
//   {
//     id: "03",
//     title: "Finalizing",
//     desc: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.",
//     image: "/images/hero3.jpg",
//   },
// ];

// // Client Component
// export default function Process() {
//   return (
//     <section className="w-full bg-black text-white py-20 px-4">
//       <div className="max-w-6xl mx-auto text-center mb-12">
//         <p className="text-sm tracking-widest text-orange-400 mb-2">
//           SIMPLE WORK PROCESS
//         </p>
//         <h2 className="text-3xl md:text-5xl font-bold leading-tight">
//           Check how we works in <br /> 3 easy steps
//         </h2>
//       </div>

//       <div className="relative flex flex-col md:flex-row justify-between items-center gap-16 md:gap-4">
//         {/* Animated dotted wave line */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.2 }}
//           className="hidden md:block absolute top-1/2 left-0 right-0 -z-10 flex justify-between px-8"
//           // className="hidden md:block absolute top-1/2 left-0 right-0 -z-10 flex justify-between px-8"
//         >
//           {[...Array(20)].map((_, i) => (
//             <motion.span
//               key={i}
//               initial={{ y: 0, scale: 1 }}
//               animate={{ y: [0, -6, 0], scale: [1, 1.2, 1] }}
//               transition={{ repeat: Infinity, duration: 1.6, delay: i * 0.08, ease: "easeInOut" }}
//               className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(255,165,0,0.6)]"
//             />
//           ))}
//         </motion.div>

//         {steps.map((step, index) => (
//           <div key={index} className="flex flex-col items-center text-center w-full md:w-1/3">
//             <div className="relative w-48 h-48 rounded-full border-4 border-orange-500 flex items-center justify-center overflow-hidden mb-6">
//               <Image
//                 src={step.image}
//                 alt={step.title}
//                 fill
//                 className="object-cover grayscale"
//               />
//               <div className="absolute top-2 left-2 bg-orange-500 text-white w-14 h-14 flex items-center justify-center rounded-full font-bold text-lg shadow-lg">
//                 {step.id}
//               </div>
//             </div>

//             <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
//             <p className="text-sm text-gray-300 max-w-xs">{step.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const steps = [
//   {
//     id: "01",
//     title: "Meeting",
//     desc: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.",
//     image: "/images/step1.jpg",
//   },
//   {
//     id: "02",
//     title: "Development",
//     desc: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.",
//     image: "/images/step2.jpg",
//   },
//   {
//     id: "03",
//     title: "Finalizing",
//     desc: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.",
//     image: "/images/step3.jpg",
//   },
// ];

// // Client Component
// export default function Process() {
//   return (
//     <section className="w-full bg-black text-white py-20 px-4">
//       <div className="max-w-6xl mx-auto text-center mb-12">
//         <p className="text-sm tracking-widest text-orange-400 mb-2">
//           SIMPLE WORK PROCESS
//         </p>
//         <h2 className="text-3xl md:text-5xl font-bold leading-tight">
//           Check how we works in <br /> 3 easy steps
//         </h2>
//       </div>

//       <div className="relative flex flex-col md:flex-row justify-between items-center gap-16 md:gap-4">
//         {/* Animated dotted wave line */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.2 }}
//           className="hidden md:block absolute top-1/2 left-0 right-0 -z-10 flex justify-between px-8"
//         >
//           {[...Array(20)].map((_, i) => (
//             <motion.span
//               key={i}
//               initial={{ y: 0 }}
//               animate={{ y: [0, -4, 0] }}
//               transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
//               className="w-2 h-2 bg-orange-500 rounded-full"
//             />
//           ))}
//         </motion.div>

//         {steps.map((step, index) => (
//           <div key={index} className="flex flex-col items-center text-center w-full md:w-1/3">
//             <div className="relative w-48 h-48 rounded-full border-4 border-orange-500 flex items-center justify-center overflow-hidden mb-6">
//               <Image
//                 src={step.image}
//                 alt={step.title}
//                 fill
//                 className="object-cover grayscale"
//               />
//               <div className="absolute top-2 left-2 bg-orange-500 text-white w-14 h-14 flex items-center justify-center rounded-full font-bold text-lg shadow-lg">
//                 {step.id}
//               </div>
//             </div>

//             <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
//             <p className="text-sm text-gray-300 max-w-xs">{step.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import React from "react";
// import Image from "next/image";

// const steps = [
//   {
//     id: "01",
//     title: "Meeting",
//     desc: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.",
//     image: "/images/step1.jpg",
//   },
//   {
//     id: "02",
//     title: "Development",
//     desc: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.",
//     image: "/images/step2.jpg",
//   },
//   {
//     id: "03",
//     title: "Finalizing",
//     desc: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.",
//     image: "/images/step3.jpg",
//   },
// ];

// export default function Process() {
//   return (
//     <section className="w-full bg-black text-white py-20 px-4">
//       <div className="max-w-6xl mx-auto text-center mb-12">
//         <p className="text-sm tracking-widest text-orange-400 mb-2">
//           SIMPLE WORK PROCESS
//         </p>
//         <h2 className="text-3xl md:text-5xl font-bold leading-tight">
//           Check how we works in <br /> 3 easy steps
//         </h2>
//       </div>

//       <div className="relative flex flex-col md:flex-row justify-between items-center gap-16 md:gap-4">
//         {/* Horizontal line */}
//         <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-orange-500 -z-10"></div>

//         {steps.map((step, index) => (
//           <div key={index} className="flex flex-col items-center text-center w-full md:w-1/3">
//             <div className="relative w-48 h-48 rounded-full border-4 border-orange-500 flex items-center justify-center overflow-hidden mb-6">
//               <Image
//                 src={step.image}
//                 alt={step.title}
//                 fill
//                 className="object-cover grayscale"
//               />
//               <div className="absolute top-2 left-2 bg-orange-500 text-white w-14 h-14 flex items-center justify-center rounded-full font-bold text-lg shadow-lg">
//                 {step.id}
//               </div>
//             </div>

//             <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
//             <p className="text-sm text-gray-300 max-w-xs">{step.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import React from 'react'

// const Process = () => {
//   return (
//     <div>Process</div>
//   )
// }

// export default Process
