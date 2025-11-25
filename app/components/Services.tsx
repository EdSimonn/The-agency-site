"use client";

import { motion, Variants } from "framer-motion";
import { Code, Brush, Smartphone, Megaphone } from "lucide-react";

// --- Service Data ---
const services = [
  {
    title: "Website <br/> Development",
    icon: <Code className="w-12 h-12 text-[#4EE1FF] drop-shadow-[0_0_10px_rgba(78,225,255,0.8)]" />,
    description: "Build high-performing, visually stunning websites that drive results.",
  },
  {
    title: "Website <br/> Redesign",
    icon: <Brush className="w-12 h-12 text-[#4EE1FF] drop-shadow-[0_0_10px_rgba(78,225,255,0.8)]" />,
    description: "Creative and impactful design solutions for your brand.",
  },
  {
    title: "Branding",
    icon: <Smartphone className="w-12 h-12 text-[#4EE1FF] drop-shadow-[0_0_10px_rgba(78,225,255,0.8)]" />,
    description: "Intuitive and powerful mobile apps for iOS and Android.",
  },
  {
    title: "AI Workflow <br/> Automation",
    icon: <Megaphone className="w-12 h-12 text-[#4EE1FF] drop-shadow-[0_0_10px_rgba(78,225,255,0.8)]" />,
    description: "Strategies to boost your online presence and drive traffic.",
  },
];

// --- Framer Motion Variants ---
const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 15 } },
};

const iconVariants: Variants = {
  hidden: { rotate: -15, scale: 0.8, opacity: 0 },
  show: { rotate: 0, scale: 1, opacity: 1, transition: { type: "spring", stiffness: 120 } },
};

// -------------------- COMPONENT ------------------------
export default function Services() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 relative">
      {/* Decorative Floating Elements */}
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
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="w-full lg:w-5/8 relative">
            <p className="uppercase text-gray-400 text-sm tracking-widest mb-3">
              What we’re offering
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-snug">
              Services we’re providing to <br className="hidden sm:inline" /> our customers
            </h2>
          </div>
          <div className="w-full lg:w-3/8">
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              There are many variations of free text passages available, but most have
              suffered alteration in some form. We focus on crafting effective, visually
              appealing solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group relative bg-[#0d0d0d] p-10 pb-6 overflow-hidden border border-gray-800 rounded-none transition-all duration-500"
            variants={cardVariants}
            whileHover={{ y: -6, boxShadow: "0 0 25px rgba(78,225,255,0.4)" }}
          >
            {/* Animated Icon */}
            <motion.div variants={iconVariants} className="mb-6">
              {service.icon}
            </motion.div>

            {/* TITLE */}
            <h3
              className="text-xl font-bold mb-4 text-white leading-snug"
              dangerouslySetInnerHTML={{ __html: service.title }}
            />

            {/* DESCRIPTION */}
            <p className="text-gray-400 text-sm leading-relaxed mb-10">
              {service.description}
            </p>

            {/* Overlay Glow */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.05 }}
              transition={{ duration: 1.5, delay: index * 0.3 }}
            >
              <div className="absolute right-[-40%] top-0 w-[200%] h-[200%] rotate-[25deg] bg-gradient-to-r from-[#4EE1FF] to-transparent"></div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}



// "use client";
// import { motion } from "framer-motion";
// import { Code, Brush, Smartphone, Megaphone, ArrowRight } from "lucide-react";

// // --- Service Data ---
// const services = [
//   {
//     title: "Website <br/> development",
//     icon: <Code className="w-12 h-12 text-[#4EE1FF] drop-shadow-[0_0_10px_rgba(78,225,255,0.8)]" />,
//     description: "Build high-performing, visually stunning websites that drive results.",
//   },
//   {
//     title: "Website <br/> Redesign",
//     icon: <Brush className="w-12 h-12 text-[#4EE1FF] drop-shadow-[0_0_10px_rgba(78,225,255,0.8)]" />,
//     description: "Creative and impactful design solutions for your brand.",
//   },
//   {
//     title: "Branding",
//     icon: <Smartphone className="w-12 h-12 text-[#4EE1FF] drop-shadow-[0_0_10px_rgba(78,225,255,0.8)]" />,
//     description: "Intuitive and powerful mobile apps for iOS and Android.",
//   },
//   {
//     title: "AI workflow <br/> Automation",
//     icon: <Megaphone className="w-12 h-12 text-[#4EE1FF] drop-shadow-[0_0_10px_rgba(78,225,255,0.8)]" />,
//     description: "Strategies to boost your online presence and drive traffic.",
//   },
// ];

// export default function Services() {
//   return (
//     <section className="bg-black text-white py-20 px-6 md:px-16 relative">
//       {/* Decorative Floating Elements */}
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
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
//           <div className="w-full lg:w-5/8 relative">
//             <p className="uppercase text-gray-400 text-sm tracking-widest mb-3">
//               What we’re offering
//             </p>
//             <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-snug">
//               Services we’re providing to <br className="hidden sm:inline" /> our customers
//             </h2>
//           </div>
//           <div className="w-full lg:w-3/8">
//             <p className="text-gray-400 text-sm md:text-base leading-relaxed">
//               There are many variations of free text passages available, but the majority have
//               suffered alteration in some form by injected random words which don’t slightly match.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Service Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
//         {services.map((service, index) => (
//           <motion.div
//             key={index}
//             className="group relative bg-[#0d0d0d] p-10 pb-6 overflow-hidden border border-gray-800 rounded-none transition-all duration-500"
//             style={{ animationDelay: `${index * 0.3}s` }}
//             whileHover={{ y: -5, boxShadow: "0 0 20px rgba(78,225,255,0.4)" }}
//           >
//             {/* Angled overlay */}
//             <div className="absolute inset-0 opacity-10 pointer-events-none transition duration-500 group-hover:opacity-20">
//               <div className="absolute right-[-40%] top-0 w-[200%] h-[200%] rotate-[25deg] bg-black"></div>
//             </div>

//             {/* ICON */}
//             <div className="mb-6">{service.icon}</div>

//             {/* TITLE */}
//             <h3
//               className="text-xl font-bold mb-4 text-white leading-snug"
//               dangerouslySetInnerHTML={{ __html: service.title }}
//             />

//             {/* DESCRIPTION */}
//             <p className="text-gray-400 text-sm leading-relaxed mb-10">
//               {service.description}
//             </p>

//             {/* Right Arrow CTA */}
//             {/* <motion.div
//               className="absolute top-10 right-10 w-10 h-10 flex items-center justify-center bg-black border border-gray-700 rounded-full transition-all duration-500 group-hover:border-[#4EE1FF]"
//               initial={{ rotate: 45 }}
//               whileHover={{ rotate: 0, boxShadow: "0 0 10px rgba(78,225,255,0.6), 0 0 20px rgba(78,225,255,0.3)" }}
//               transition={{ duration: 0.2, ease: "easeOut" }}
//             >
//               <ArrowRight size={24} className="text-white" />
//             </motion.div> */}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }



// "use client";
// import { motion } from "framer-motion";

// import { Code, Brush, Smartphone, Megaphone, ArrowRight } from "lucide-react";

// // --- Service Data ---
// const services = [
//   {
//     title: "Website <br/> development",
//     icon: <Code className="w-12 h-12 text-[#00FF7F]" />,
//     description:
//       "Build high-performing, visually stunning websites that drive results.",
//   },
//   {
//     title: "Website <br/> Redesign",
//     icon: <Brush className="w-12 h-12 text-[#00FF7F]" />,
//     description: "Creative and impactful design solutions for your brand.",
//   },
//   {
//     title: "Branding",
//     icon: <Smartphone className="w-12 h-12 text-[#00FF7F]" />,
//     description: "Intuitive and powerful mobile apps for iOS and Android.",
//   },
//   {
//     title: "AI workflow <br/> Automation",
//     icon: <Megaphone className="w-12 h-12 text-[#00FF7F]" />,
//     description: "Strategies to boost your online presence and drive traffic.",
//   },
//   // {
//   //   title: "Digital <br/> marketing",
//   //   icon: <Megaphone className="w-12 h-12 text-[#00FF7F]" />,
//   //   description: "Strategies to boost your online presence and drive traffic.",
//   // },
//   // {
//   //   title: "Digital <br/> marketing",
//   //   icon: <Megaphone className="w-12 h-12 text-[#00FF7F]" />,
//   //   description: "Strategies to boost your online presence and drive traffic.",
//   // },
// ];

// export default function Services() {
//   return (
//     <section className="bg-black text-white py-20 px-6 md:px-16 relative">
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

//       {/* ---------------- HEADER (UNCHANGED) ---------------- */}
//       <div className="max-w-6xl mx-auto mb-16">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
//           <div className="w-full lg:w-5/8 relative">
//             {/* <span className="absolute -top-8 left-1 w-2 h-2 bg-[#00FF7F] rounded-full"></span> */}
//             <p className="uppercase text-gray-400 text-sm tracking-widest mb-3">
//               What we’re offering
//             </p>
//             <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-snug">
//               Services we’re providing to <br className="hidden sm:inline" />{" "}
//               our customers
//             </h2>
//           </div>
//           <div className="w-full lg:w-3/8">
//             <p className="text-gray-400 text-sm md:text-base leading-relaxed">
//               There are many variations of simply free text passages available,
//               but the majority have suffered alteration in some form, by
//               injected hum randomised words which don&apos;t slightly.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ---------------- SERVICE CARDS ---------------- */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="
//               group relative bg-[#0d0d0d] p-10 pb-6 overflow-hidden border border-gray-800
//               transition-all duration-500 rounded-none"
//             style={{
//               animationDelay: `${index * 0.3}s`,
//             }}
//           >
//             {/* <div
//             key={index}
//             className="
//               group relative bg-[#0d0d0d] p-10 overflow-hidden border border-gray-800
//               transition-all duration-500 rounded-none
//               hover:-translate-y-2 hover:border-yellow-500
//               hover:shadow-[0_0_25px_rgba(255,200,0,0.25)]
//               animate-[float_6s_ease-in-out_infinite]
//             "
//             style={{
//               animationDelay: `${index * 0.3}s`,
//             }}
//           > */}
//             {/* angled background overlay */}
//             <div className="absolute inset-0 opacity-10 pointer-events-none transition duration-500 group-hover:opacity-20">
//               <div className="absolute right-[-40%] top-0 w-[200%] h-[200%] rotate-[25deg] bg-black"></div>
//             </div>

//             {/* ICON */}
//             <div className="mb-6">{service.icon}</div>

//             {/* TITLE */}
//             <h3
//               className="text-xl font-bold mb-4 text-white leading-snug"
//               dangerouslySetInnerHTML={{ __html: service.title }}
//             />

//             {/* DESCRIPTION */}
//             <p className="text-gray-400 text-sm leading-relaxed mb-10">
//               {service.description}
//             </p>

//             {/* RIGHT ARROW BUTTON — ★ ONLY PART CHANGED ★ */}
//             <motion.div
//               className="
//     absolute top-10 right-10 w-10 h-10 p-8 flex items-center justify-center 
//     bg-black border border-gray-700 rounded-full
//     transition-all duration-500
//     group-hover:border-[#00FF7F]
//   "
//               initial={{ rotate: 45 }} // ↘ southeast
//               whileHover={{ rotate: 0 }} // → east
//               transition={{ duration: 0.1, ease: "easeOut" }}
//             >
//               <motion.div
//                 // initial={{ rotate: 45 }} // ↘ southeast
//                 // whileHover={{ rotate: 0 }} // → east
//                 // transition={{ duration: 0.3, ease: "easeOut" }}
//                 className="flex items-center justify-center"
//               >
//                 <ArrowRight size={24} className="text-white" />
//               </motion.div>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// i said i want when i hover the CardSim, the circe flips and shos this content like the one in the image provided, the second CardSim, but instaed you just flip the CardSim, whichis cool toolbar, but i do not want that cause what it currently does is reflect it like a mirrorEasing, instead i want the circle to smootly flip or transition and show this content [Graphic designing
// Lorem ipsum dolor sit amet, do consectetur adipiscing.

// Read More]

// i do not like the way this is stacking on small screen (              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
//                 Services we’re providing
//                 <br /> to our customers
//               </h2>)   pls help redo the whole thing i want the header section not not take the same width as the card section, let the crds be cloer to the edges of the screen

// pls help me code this service section just as it is in the image provided, using the code provided Bigelow_Rules, pls make it responsesive, it is next js
// pls let it be exactly as the image provided, i want the yellow dot on top of what we’re offering and just belwo it Services we’re providing
// to our customers
// as in the image and on the right side this content There are many variations of simply free text passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't slightly.

// i want the card part closer to the edges of the screen just like the ImageDown, pls let it be exactly like the image and also use framer motion for animation
