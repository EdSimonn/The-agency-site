"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { LifeBuoy, Workflow } from "lucide-react";

// ---------- VARIANTS ----------

// 1. Parent wrapper for the Left Side (Images) to stagger them
const imagesContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each image starting
    },
  },
};

// 2. The "Wipe" effect for individual images
const imageReveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" }, // Hidden (masked completely)
  show: {
    clipPath: "inset(0 0% 0 0)", // Fully visible
    transition: {
      duration: 2,
      ease: [0.22, 1, 0.36, 1], // Cubic bezier for smooth "luxury" feel
    },
  },
};

// 3. Parent wrapper for the Right Side (Text) to stagger them
const contentContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between text items
      delayChildren: 0.5, // Wait a bit until images start appearing
    },
  },
};

// 4. Text floating up from bottom
const itemVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// 5. The Border Line drawing animation
const lineVariant: Variants = {
  hidden: { scaleX: 0, originX: 0 }, // Start with 0 width, anchored to left
  show: {
    scaleX: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-6 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Decorative Elements - Floating Animation */}
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* ================= LEFT SIDE: IMAGES ================= */}
          {/* We wrap the whole grid in a motion.div to control the Stagger */}
          <motion.div
            variants={imagesContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }} // Starts when 20% visible
            className="order-1 lg:order-1 grid md:grid-cols-2 grid-cols-1 gap-4 items-center"
          >
            {/* Column 1: Two Stacked Images */}
            <div className="flex flex-col gap-4">
              {/* Image 1: Top Left */}
              <motion.div
                variants={imageReveal}
                className="h-48 md:h-64 w-full rounded-md overflow-hidden relative"
              >
                <Image
                  src="/images/w-c-u-img-2.png"
                  alt="wireframe planning"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>

              {/* Image 2: Bottom Left */}
              <motion.div
                variants={imageReveal}
                className="h-48 md:h-64 w-full rounded-md overflow-hidden relative"
              >
                <Image
                  src="/images/w-c-u-img-3.png"
                  alt="laptop working"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            </div>

            {/* Column 2: One Tall Image (Right) */}
            <motion.div
              variants={imageReveal}
              className="h-[420px] w-full rounded-md overflow-hidden relative flex items-center"
            >
              <Image
                src="/images/w-c-u-img-1.png"
                alt="person on phone"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </motion.div>

          {/* ================= RIGHT SIDE: CONTENT ================= */}
          <motion.div
            className="order-2 lg:order-2 flex flex-col justify-center"
            variants={contentContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* 1. Subheading */}
            <motion.div variants={itemVariant}>
              <p className="uppercase text-gray-400 text-sm tracking-widest mb-3">
                WHY CHOOSE US
              </p>
            </motion.div>

            {/* 2. Heading */}
            <motion.h2
              variants={itemVariant}
              className="text-3xl md:text-5xl font-bold leading-tight mb-6"
            >
              Why choose our agency?
            </motion.h2>

            {/* 3. Description Paragraph */}
            <motion.p
              variants={itemVariant}
              className="text-gray-300 leading-relaxed max-w-xl mb-8"
            >
              Our process is built around transparency and structure, making
              every stage easy to understand. We take time to refine each
              step—planning, designing, and developing with focus—so your
              project is delivered with consistency, clarity, and a polished
              final result.
            </motion.p>

            {/* 4. Animated Divider Line (Replaces border-b) */}
            <motion.div
              variants={lineVariant}
              className="h-[1px] w-full bg-gray-800 mb-10 origin-left"
            />

            {/* 5. Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <motion.div
                variants={itemVariant}
                className="flex items-center gap-4"
              >
                <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-md bg-black border border-gray-800">
                  <Workflow className="w-10 h-10 text-[#4EE1FF] drop-shadow-[0_0_8px_rgba(78,225,255,0.6)]" />
                </div>
                <div>
                  <p className="font-semibold text-xl">
                    Clear <br /> Process
                  </p>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                variants={itemVariant}
                className="flex items-center gap-4"
              >
                <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-md bg-black border border-gray-800">
                  <LifeBuoy className="w-10 h-10 text-[#4EE1FF] drop-shadow-[0_0_8px_rgba(78,225,255,0.6)]" />
                </div>
                <div>
                  <p className="font-semibold text-xl">
                    Reliable <br /> Support
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion, Variants } from "framer-motion";
// // import { motion, Variants, TargetAndTransition } from "framer-motion";
// import { Code, Layers, LifeBuoy, Sidebar, Workflow } from "lucide-react";

// // ---------- FIXED TYPES ----------
// // type Resolver = (i: number) => TargetAndTransition;

// // interface ImageVariant extends Variants {
// //   offscreen: TargetAndTransition;
// //   onscreen: TargetAndTransition | Resolver;
// // }

// // ---------- VARIANTS ----------
// const containerVariants: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { staggerChildren: 0.12, when: "beforeChildren" },
//   },
// };

// const textItem: Variants = {
//   hidden: { opacity: 0, y: 12 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
// };

// // const imageVariants: ImageVariant = {
// //   offscreen: { opacity: 0, y: 40 },
// //   onscreen: (i = 0) => ({
// //     opacity: 1,
// //     y: 0,
// //     transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
// //   }),
// // };

// // -------------------- COMPONENT ------------------------
// const WhyChooseUs = () => {
//   return (
//     <section className="py-20 px-6 bg-black text-white relative">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 ">
//         {/* Decorative Elements - Floating Animation */}
//         <motion.div
//           animate={{ y: [0, -10, 0] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//           // Changed border-[#00FF7F] to border-[#4EE1FF]
//           className="absolute top-20 left-1/4 w-2 h-2 rounded-full border border-[#4EE1FF] opacity-50"
//         />
//         <motion.div
//           animate={{ y: [0, 15, 0] }}
//           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//           // Changed bg-[#00FF7F] to bg-[#4EE1FF]
//           className="absolute top-10 left-[45%] w-1 h-1 bg-[#4EE1FF] rounded-full"
//         />
//         <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-12 lg:gap-8 xl:gap-20 items-start">
//           {/* LEFT — IMAGES (STACKS ABOVE CONTENT ON SMALL SCREENS) */}
//           <div className="order-1 lg:order-1">
//             <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
//               {/* LEFT 2 stacked images */}
//               <div className="flex flex-col gap-4">
//                 {/* Top left */}
//                 <motion.div
//                   initial={{ clipPath: "inset(0 100% 0 0)" }}
//                   whileInView={{ clipPath: "inset(0 0% 0 0)" }}
//                   transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
//                   viewport={{ once: true }}
//                   // className="absolute inset-0 w-full h-full"
//                   className="h-48 md:h-64 w-[280px] md:w-full rounded-md overflow-hidden"
//                 >
//                   <Image
//                     src="/images/hero1.jpg"
//                     alt="wireframe planning"
//                     width={700}
//                     height={700}
//                     // className=""
//                     className="w-full h-full object-cover grayscale-100"
//                   />
//                 </motion.div>

//                 {/* Bottom left */}
//                 <motion.div
//                   initial={{ clipPath: "inset(0 100% 0 0)" }}
//                   whileInView={{ clipPath: "inset(0 0% 0 0)" }}
//                   transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
//                   viewport={{ once: true }}
//                   className="h-48 md:h-64 w-[280px] md:w-full rounded-md overflow-hidden grayscale-100"
//                 >
//                   <Image
//                     src="/images/hero3.jpg"
//                     alt="laptop working"
//                     width={700}
//                     height={700}
//                     className="w-full h-full object-cover grayscale-100"
//                   />
//                 </motion.div>
//               </div>

//               {/* RIGHT tall image (slightly shorter — gap above & below) */}
//               <motion.div
//                 initial={{ clipPath: "inset(0 100% 0 0)" }}
//                 whileInView={{ clipPath: "inset(0 0% 0 0)" }}
//                 transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
//                 viewport={{ once: true }}
//                 className="h-[420px] w-[280px] md:w-full rounded-md overflow-hidden flex items-center"
//               >
//                 <Image
//                   src="/images/hero2.jpg"
//                   alt="person on phone"
//                   width={900}
//                   height={1200}
//                   className="w-full h-full object-cover grayscale-100"
//                 />
//               </motion.div>
//             </div>
//           </div>

//           {/* RIGHT — CONTENT */}
//           <motion.div
//             className="order-2 lg:order-2"
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.25 }}
//             variants={containerVariants}
//           >
//             <motion.p
//               variants={textItem}
//               // Changed text-[#00FF7F] to text-[#4EE1FF]
//               className="uppercase text-gray-400 text-sm tracking-widest mb-3"
//             >
//               WHY CHOOSE US
//             </motion.p>

//             <motion.h2
//               variants={textItem}
//               className="text-3xl md:text-5xl font-bold leading-tight mb-6"
//             >
//               {/* Why should choose agency? */}
//               Why choose our agency?
//             </motion.h2>

//             <motion.p
//               variants={textItem}
//               className="text-gray-300 leading-relaxed max-w-xl mb-10 border-b-1 border-gray-800 pb-8"
//             >
//               Our process is built around transparency and structure, making
//               every stage easy to understand. We take time to refine each
//               step—planning, designing, and developing with focus—so your
//               project is delivered with consistency, clarity, and a polished
//               final result.
//             </motion.p>

//             {/* FEATURES */}
//             <motion.div
//               variants={textItem}
//               className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10"
//             >
//               {/* Feature 1 */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.85 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.45, type: "spring", stiffness: 120 }}
//                 className="flex items-center gap-4"
//               >
//                 {/* Changed from-green-400 to from-[#4EE1FF] and to-green-600 to to-cyan-600 */}
//                 <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-md">
//                   <Workflow className="w-12 h-12 text-[#4EE1FF] drop-shadow-[0_0_10px_rgba(78,225,255,0.8)] " />
//                 </div>
//                 <div>
//                   <p className="font-semibold text-xl">
//                     Clear <br /> Process
//                   </p>
//                 </div>
//               </motion.div>

//               {/* Feature 2 */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.85 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   delay: 0.1,
//                   duration: 0.45,
//                   type: "spring",
//                   stiffness: 120,
//                 }}
//                 className="flex items-center gap-4"
//               >
//                 {/* Changed from-green-400 to from-[#4EE1FF] and to-green-600 to to-cyan-600 */}
//                 <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-md">
//                   <LifeBuoy className="w-12 h-12 text-[#4EE1FF] drop-shadow-[0_0_10px_rgba(78,225,255,0.8)]" />
//                 </div>
//                 <div>
//                   <p className="font-semibold text-xl">
//                     Reliable <br /> Support
//                   </p>
//                 </div>
//               </motion.div>
//             </motion.div>

//             {/* CTA Buttons */}
//             {/* <motion.div variants={textItem} className="flex items-center gap-6">
//               <motion.button
//                 whileHover={{ scale: 1.04 }}
//                 whileTap={{ scale: 0.96 }}
//                 className="px-6 py-3 rounded-md font-semibold text-black shadow-md bg-gradient-to-r from-orange-400 to-orange-600"
//               >
//                 Discover More
//               </motion.button>

//               <motion.a
//                 href="#"
//                 className="text-gray-300 text-sm hover:text-white"
//                 whileHover={{ x: 5 }}
//               >
//                 Learn more →
//               </motion.a>
//             </motion.div> */}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

// see the way the images opendirSync, i want it like that but one after another not all at once, and in the right Sidebar, one by one too, from bottom up even the feature and the border animates seperately

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Code, Layers } from "lucide-react";

// const WhyChooseUs = () => {
//   const containerVariants = {
//     hidden: { opacity: 0, y: 20 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: { staggerChildren: 0.12, when: "beforeChildren" },
//     },
//   };

//   const textItem = {
//     hidden: { opacity: 0, y: 12 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
//   };

//   const imageVariants = {
//     offscreen: { opacity: 0, y: 40 },
//     onscreen: (i = 0) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   return (
//     <section className="py-20 px-6 bg-black text-white">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//         {/* LEFT — IMAGES */}
//         <div className="order-2 lg:order-1">
//           <div className="w-full grid grid-cols-2 grid-rows-3 gap-4 max-w-[700px] mx-auto">

//             {/* TOP LEFT */}
//             <motion.div
//               custom={0}
//               initial="offscreen"
//               whileInView="onscreen"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={imageVariants}
//               className="col-span-1 row-span-1 h-48 md:h-60 overflow-hidden rounded-md"
//             >
//               <Image
//                 src="/images/hero1.jpg"
//                 alt="wireframe planning"
//                 width={800}
//                 height={800}
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>

//             {/* LARGE CENTER IMAGE */}
//             <motion.div
//               custom={1}
//               initial="offscreen"
//               whileInView="onscreen"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={imageVariants}
//               className="col-span-1 row-span-3 h-[420px] md:h-[560px] overflow-hidden rounded-md"
//             >
//               <Image
//                 src="/images/hero2.jpg"
//                 alt="person on phone"
//                 width={800}
//                 height={800}
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>

//             {/* BOTTOM LEFT */}
//             <motion.div
//               custom={2}
//               initial="offscreen"
//               whileInView="onscreen"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={imageVariants}
//               className="col-span-1 row-span-1 h-48 md:h-60 overflow-hidden rounded-md"
//             >
//               <Image
//                 src="/images/hero3.jpg"
//                 alt="laptop working"
//                 width={800}
//                 height={800}
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//           </div>
//         </div>

//         {/* RIGHT — CONTENT */}
//         <motion.div
//           className="order-1 lg:order-2"
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.25 }}
//           variants={containerVariants}
//         >
//           <motion.p
//             variants={textItem}
//             className="text-orange-400 text-sm tracking-wider font-medium mb-3"
//           >
//             WHY CHOOSE US
//           </motion.p>

//           <motion.h2
//             variants={textItem}
//             className="text-[2.2rem] md:text-5xl font-extrabold leading-tight mb-6"
//           >
//             Why should choose <br /> agency?
//           </motion.h2>

//           <motion.p
//             variants={textItem}
//             className="text-gray-300 leading-relaxed max-w-xl mb-10"
//           >
//             There are many variations of passages of available but most have
//             suffered alteration. We focus on crafting reliable, accessible,
//             and beautifully engineered digital products.
//           </motion.p>

//           {/* FEATURES */}
//           <motion.div
//             variants={textItem}
//             className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10"
//           >
//             {/* FEATURE 1 */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.85 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.45, type: "spring", stiffness: 120 }}
//               className="flex items-center gap-4"
//             >
//               <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-md">
//                 <Layers className="w-7 h-7 text-black" />
//               </div>
//               <div>
//                 <p className="font-semibold text-lg">Quality development</p>
//                 <p className="text-sm text-gray-400">Scalable & maintainable</p>
//               </div>
//             </motion.div>

//             {/* FEATURE 2 */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.85 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1, duration: 0.45, type: "spring", stiffness: 120 }}
//               className="flex items-center gap-4"
//             >
//               <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-md">
//                 <Code className="w-7 h-7 text-black" />
//               </div>
//               <div>
//                 <p className="font-semibold text-lg">Powerful backend</p>
//                 <p className="text-sm text-gray-400">Robust APIs & infra</p>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* BUTTON + LINK */}
//           <motion.div variants={textItem} className="flex items-center gap-6">
//             <motion.button
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.96 }}
//               className="px-6 py-3 rounded-md font-semibold text-black shadow-md bg-gradient-to-r from-orange-400 to-orange-600"
//             >
//               Discover More
//             </motion.button>

//             <motion.a
//               href="#"
//               className="text-gray-300 text-sm hover:text-white"
//               whileHover={{ x: 5 }}
//             >
//               Learn more →
//             </motion.a>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   ShieldCheck,
//   Users,
//   Rocket,
//   CheckCircle2,
// } from "lucide-react";

// const WhyChooseUs = () => {
//   return (
//     <section className="relative py-20 px-6 md:px-12 bg-[#0D0D0D] text-white overflow-hidden">
//       {/* Decorative Gradient Glow */}
//       <div className="absolute inset-0 -z-10 opacity-40">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-600/30 to-pink-500/20 rounded-full blur-[140px]" />
//       </div>

//       {/* Section Container */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="max-w-5xl mx-auto text-center"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//           Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Us</span>?
//         </h2>
//         <p className="text-gray-300 max-w-2xl mx-auto text-lg">
//           We combine innovation, speed, and reliability to deliver outstanding results.
//         </p>
//       </motion.div>

//       {/* Features Grid */}
//       <motion.div
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         variants={{
//           hidden: { opacity: 0 },
//           show: {
//             opacity: 1,
//             transition: { staggerChildren: 0.2 },
//           },
//         }}
//         className="mt-14 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
//       >
//         {/* Item 1 */}
//         <motion.div
//           variants={{
//             hidden: { opacity: 0, y: 40 },
//             show: { opacity: 1, y: 0 },
//           }}
//           className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:bg-white/10 transition"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             transition={{ type: "spring", stiffness: 120 }}
//             className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 mx-auto mb-6"
//           >
//             <ShieldCheck className="w-8 h-8 text-white" />
//           </motion.div>
//           <h3 className="text-xl font-semibold mb-3">Trusted & Reliable</h3>
//           <p className="text-gray-300 text-base">
//             Your business is safe with us. We prioritize top-tier security and reliability.
//           </p>
//         </motion.div>

//         {/* Item 2 */}
//         <motion.div
//           variants={{
//             hidden: { opacity: 0, y: 40 },
//             show: { opacity: 1, y: 0 },
//           }}
//           className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:bg-white/10 transition"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             transition={{ type: "spring", stiffness: 120 }}
//             className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 mx-auto mb-6"
//           >
//             <Users className="w-8 h-8 text-white" />
//           </motion.div>
//           <h3 className="text-xl font-semibold mb-3">Client-Focused</h3>
//           <p className="text-gray-300 text-base">
//             We design and deliver solutions tailored to your goals and business needs.
//           </p>
//         </motion.div>

//         {/* Item 3 */}
//         <motion.div
//           variants={{
//             hidden: { opacity: 0, y: 40 },
//             show: { opacity: 1, y: 0 },
//           }}
//           className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:bg-white/10 transition"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             transition={{ type: "spring", stiffness: 120 }}
//             className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 mx-auto mb-6"
//           >
//             <Rocket className="w-8 h-8 text-white" />
//           </motion.div>
//           <h3 className="text-xl font-semibold mb-3">Fast Execution</h3>
//           <p className="text-gray-300 text-base">
//             We move quickly — delivering high-quality results without delay.
//           </p>
//         </motion.div>
//       </motion.div>

//       {/* CTA Button */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4, duration: 0.7 }}
//         viewport={{ once: true }}
//         className="mt-16 flex justify-center"
//       >
//         <motion.a
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           href="#contact"
//           className="px-8 py-4 rounded-xl text-lg font-medium bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
//         >
//           Get Started
//         </motion.a>
//       </motion.div>
//     </section>
//   );
// };

// export default WhyChooseUs;

// import React from 'react'

// const WhyChooseUs = () => {
//   return (
//     <div>WhyChooseUs</div>
//   )
// }

// export default WhyChooseUs
