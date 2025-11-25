"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative bg-black text-white py-24 px-6 md:px-16 overflow-hidden">
      {/* Floating accents */}
      <motion.div
        className="absolute top-0 left-1/4 w-2 h-2 rounded-full border border-[#4EE1FF] opacity-30"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-1/3 w-3 h-3 rounded-full bg-[#4EE1FF] opacity-40"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 leading-snug"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Ready to take your digital presence <br /> to the next level?
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-10 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Partner with us to build fast, modern, and user-focused websites and apps
          that drive results for your business.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-md font-semibold text-black bg-gradient-to-r from-[#4EE1FF] to-[#0ED1FF] shadow-lg transition-all duration-300"
          >
            Get Started
          </motion.a>

          <motion.a
            href="#services"
            whileHover={{ x: 5 }}
            className="px-8 py-4 rounded-md font-semibold border border-gray-600 text-gray-300 hover:border-[#4EE1FF] hover:text-white transition-all duration-300"
          >
            Learn More
            <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0B0B] via-transparent to-[#111111] pointer-events-none" />
    </section>
  );
};

export default CTASection;




// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const CTASection = () => {
//   return (
//     <section className="relative overflow-hidden">
//       {/* Background image */}
//       <Image
//         src="/images/hero1.jpg"
//         alt="CTA Background"
//         fill
//         className="object-cover object-center grayscale"
//         priority
//       />

//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/75" />
//       {/* <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-30"> */}
//       <div className="max-w-7xl mx-auto text-center relative z-10 px-6 md:px-8 py-12 md:py-30 ">
//         {/* Content wrapper */}
//         <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
//           {/* Left content */}
//           <div className="relative flex-1 text-center md:text-left">
//             <h2 className="text-white font-bold text-4xl sm:text-5xl lg:text-5xl  leading-tight">
//               Looking for best web solutions?
//             </h2>
//           </div>

//           {/* Right button */}
//           <div className="mt-12 flex justify-center">
//             <Link href="/contact">
//               <button className="relative px-8 py-4 font-bold rounded overflow-hidden group w-max">
//                 {/* White background revealed underneath */}
//                 <span className="absolute inset-0 bg-white z-0 transition-colors duration-500"></span>

//                 {/* Left green half */}
//                 <span className="absolute inset-y-0 left-0 w-1/2 bg-[#00FF7F] origin-right transition-transform duration-500 group-hover:-translate-x-full group-hover:rotate-6"></span>

//                 {/* Right green half */}
//                 <span className="absolute inset-y-0 right-0 w-1/2 bg-[#00FF7F] origin-left transition-transform duration-500 group-hover:translate-x-full group-hover:-rotate-6"></span>

//                 {/* Button text */}
//                 <span className="relative z-10 text-white group-hover:text-[#00FF7F] transition-colors duration-500">
//                   Discover More
//                 </span>
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CTASection;

// import React from 'react'

// const CTASection = () => {
//   return (
//     <div>CTASection</div>
//   )
// }

// export default CTASection
