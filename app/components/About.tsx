"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FaUsers, FaGlobeAmericas } from "react-icons/fa";

// ---------- NEW ANIMATION VARIANTS (From Why Choose Us) ----------

// 1. Parent Controller for Right Side
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Sequence delay
      delayChildren: 0.4,   // Wait for image to start first
    },
  },
};

// 2. Text Slide Up Animation
const contentSlideUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// 3. The Line Drawing Animation
const lineDraw: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  show: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const About: React.FC = () => {
  return (
    <section className="w-full bg-[#050505] text-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: Image (Kept your original Wipe Animation) */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src="/images/2149311493.jpg"
                alt="Team working together"
                fill
                className="object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
                priority
              />
            </motion.div>

            <div className="absolute -z-10 top-4 left-4 w-full h-full border border-[#4EE1FF] rounded-sm hidden md:block" />
          </div>

          {/* RIGHT SIDE: Content (Updated to Stagger + Line Animation) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col justify-center"
          >
            {/* Subheading */}
            <motion.div variants={contentSlideUp} className="flex items-center gap-2">
              <span className="uppercase text-gray-400 text-sm tracking-widest mb-3">
                About Our Agency
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              variants={contentSlideUp}
              className="font-bold leading-tight mb-6 text-3xl md:text-5xl"
            >
              Building Simple, Modern & Scalable Digital Experiences
            </motion.h2>

            {/* Description - REMOVED CSS BORDER here */}
            <motion.p
              variants={contentSlideUp}
              className="text-gray-400 text-base md:text-lg leading-relaxed mb-8"
            >
              Hutch Web Solutions creates clean, fast, and user-focused digital
              products. We blend design and technology to help brands launch,
              grow, and stay ahead.
            </motion.p>

            {/* NEW: Animated Divider Line */}
            <motion.div 
              variants={lineDraw}
              className="h-[1px] w-full bg-gray-800 mb-10 origin-left"
            />

            {/* Features Grid */}
            <motion.div
              variants={contentSlideUp} // Apply stagger to the grid container
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Feature 1 */}
              <motion.div variants={contentSlideUp} className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 ">
                  <FaUsers className="w-12 h-12 text-[#4EE1FF] drop-shadow-[0_0_10px_rgba(78,225,255,0.8)]" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Custom Web Design
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Clean, modern, and responsive websites built for performance
                  and clarity.
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div variants={contentSlideUp} className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <FaGlobeAmericas className="w-12 h-12 text-[#4EE1FF] drop-shadow-[0_0_10px_rgba(78,225,255,0.8)]" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Experienced Team
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  A skilled team focused on quality, usability, and simple,
                  effective solutions.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion, Variants } from "framer-motion";
// import { FaUsers, FaGlobeAmericas } from "react-icons/fa";

// const container: Variants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.25,
//       delayChildren: 0.2,
//     },
//   },
// };

// const child: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       // use a cubic-bezier array instead of a string to satisfy the types
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// const About: React.FC = () => {
//   return (
//     <section className="w-full bg-[#050505] text-white py-16 md:py-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//           {/* LEFT SIDE: Image with "Wipe" Animation */}
//           <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
//             <motion.div
//               initial={{ clipPath: "inset(0 100% 0 0)" }}
//               whileInView={{ clipPath: "inset(0 0% 0 0)" }}
//               transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
//               viewport={{ once: true }}
//               className="absolute inset-0 w-full h-full"
//             >
//               <Image
//                 src="/images/hero1.jpg"
//                 alt="Team working together"
//                 fill
//                 className="object-cover rounded-sm"
//                 priority
//               />
//             </motion.div>

//             <div className="absolute -z-10 top-4 left-4 w-full h-full border border-[#4EE1FF] rounded-sm hidden md:block" />
//           </div>

//           {/* RIGHT SIDE: Content */}
//           <motion.div
//             variants={container}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="flex flex-col justify-center"
//           >
//             {/* Subheading */}
//             <motion.div variants={child} className="flex items-center gap-2">
//               <span className="uppercase text-gray-400 text-sm tracking-widest mb-3">
//                 About Our Agency
//               </span>
//             </motion.div>

//             {/* Main Heading */}
//             <motion.h2
//               variants={child}
//               className="font-bold leading-tight mb-6 text-3xl md:text-5xl"
//               //   className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
//             >
//               {/* Our Main Goal to <span className="text-gray-200">Satisfy</span>{" "}
//               <br />
//               Local & Global Clients */}
//               Building Simple, Modern & Scalable Digital Experiences
//             </motion.h2>

//             {/* Description */}
//             <motion.p
//               variants={child}
//               className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 border-b-1 border-gray-800 pb-8"
//             >
//               Hutch Web Solutions creates clean, fast, and user-focused digital
//               products. We blend design and technology to help brands launch,
//               grow, and stay ahead.
//             </motion.p>

//             {/* Features Grid */}
//             <motion.div
//               variants={child}
//               className="grid grid-cols-1 md:grid-cols-2 gap-8"
//             >
//               {/* Feature 1 */}
//               <motion.div variants={child} className="flex flex-col gap-3">
//                 <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 ">
//                   <FaUsers className="w-12 h-12 text-[#4EE1FF] drop-shadow-[0_0_10px_rgba(78,225,255,0.8)]" />
//                 </div>
//                 <h3 className="text-xl font-bold text-white">
//                   Custom Web Design
//                 </h3>
//                 <p className="text-sm text-gray-500 leading-relaxed">
//                   Clean, modern, and responsive websites built for performance
//                   and clarity.
//                 </p>
//               </motion.div>

//               {/* Feature 2 */}
//               <motion.div variants={child} className="flex flex-col gap-3">
//                 <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2">
//                   <FaGlobeAmericas className="w-12 h-12 text-[#4EE1FF] drop-shadow-[0_0_10px_rgba(78,225,255,0.8)]" />
//                 </div>
//                 <h3 className="text-xl font-bold text-white">
//                   Experienced Team
//                 </h3>
//                 <p className="text-sm text-gray-500 leading-relaxed">
//                   A skilled team focused on quality, usability, and simple,
//                   effective solutions.
//                 </p>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// import React from "react";

// const About = () => {
//   return <div>About</div>;
// };

// export default About;

// can you help me code this about section, pls make it responsive, pls use framer motion for animation and react-icons for icons not svg
// for the IMAGE, i need it to open or animate like it was scrolling or swipe starting from left to right (like imagine like you place your hard on the left edge of a note book then swipe and move your hand to the right edgeServerAppPaths, that is how i wan the image to animate )
// use tailwind  and use the correct Imgae tag for next js

// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion, Variants } from "framer-motion";
// import { FaUsers, FaGlobeAmericas } from "react-icons/fa";

// const container: Variants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.25,
//       delayChildren: 0.2,
//     },
//   },
// };

// const child: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       // use a cubic-bezier array instead of a string to satisfy the types
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// const About: React.FC = () => {
//   return (
//     <section className="w-full bg-[#050505] text-white py-16 md:py-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//           {/* LEFT SIDE: Image with "Wipe" Animation */}
//           <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
//             <motion.div
//               initial={{ clipPath: "inset(0 100% 0 0)" }}
//               whileInView={{ clipPath: "inset(0 0% 0 0)" }}
//               transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
//               viewport={{ once: true }}
//               className="absolute inset-0 w-full h-full"
//             >
//               <Image
//                 src="/images/hero1.jpg"
//                 alt="Team working together"
//                 fill
//                 className="object-cover rounded-sm"
//                 priority
//               />
//             </motion.div>

//             <div className="absolute -z-10 top-4 left-4 w-full h-full border border-[#4EE1FF] rounded-sm hidden md:block" />
//           </div>

//           {/* RIGHT SIDE: Content */}
//           <motion.div
//             variants={container}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="flex flex-col justify-center"
//           >
//             {/* Subheading */}
//             <motion.div
//               variants={child}
//               className="flex items-center gap-2"
//             >
//               <span className="uppercase text-gray-400 text-sm tracking-widest mb-3">
//                 About Our Agency
//               </span>
//             </motion.div>

//             {/* Main Heading */}
//             <motion.h2
//               variants={child}
//               className="font-bold leading-tight mb-6 text-3xl md:text-5xl"
//               //   className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
//             >
//               Our Main Goal to Satisfy Local & Global Clients

//               {/* Our Main Goal to <span className="text-gray-200">Satisfy</span>{" "} */}
//               {/* <br /> */}
//             </motion.h2>

//             {/* Description */}
//             <motion.p
//               variants={child}
//               className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 border-b-1 border-gray-800 pb-8"
//             >
//               Hutch Web Solutions, a beacon of creativity and functionality in
//               the digital realm. Our agency is your trusted partner in crafting
//               online experiences that resonate. With an unwavering commitment to
//               innovation.
//             </motion.p>

//             {/* Features Grid */}
//             <motion.div
//               variants={child}
//               className="grid grid-cols-1 md:grid-cols-2 gap-8"
//             >
//               {/* Feature 1 */}
//               <motion.div variants={child} className="flex flex-col gap-3">
//                 <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 ">
//                   <FaUsers className="w-12 h-12 text-[#4EE1FF] drop-shadow-[0_0_10px_rgba(78,225,255,0.8)]" />
//                 </div>
//                 <h3 className="text-xl font-bold text-white">
//                   Quality web design
//                 </h3>
//                 <p className="text-sm text-gray-500 leading-relaxed">
//                   Architectural Design & Planning Visual Facility Design Audio
//                   Facility Design Construction
//                 </p>
//               </motion.div>

//               {/* Feature 2 */}
//               <motion.div variants={child} className="flex flex-col gap-3">
//                 <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2">
//                   <FaGlobeAmericas className="w-12 h-12 text-[#4EE1FF] drop-shadow-[0_0_10px_rgba(78,225,255,0.8)]" />
//                 </div>
//                 <h3 className="text-xl font-bold text-white">
//                   Experienced Team
//                 </h3>
//                 <p className="text-sm text-gray-500 leading-relaxed">
//                   Architectural Design & Planning Visual Facility Design Audio
//                   Facility Design Construction
//                 </p>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
