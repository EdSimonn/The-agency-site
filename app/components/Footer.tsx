"use client";

import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import { ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#0f0f0f] text-gray-300 py-24">
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 20px)",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          {/* Left Side - Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 border-2 border-[#4EE1FF] rounded-full flex items-center justify-center shadow-[0_0_15px_#4EE1FF]">
              <span className="text-2xl font-bold text-[#4EE1FF]">★</span>
            </div>
          </div>

          {/* Right Side - Social Icons */}
          <div className="flex gap-6 text-gray-200 text-2xl">
            {[FaTwitter, FaFacebookF, FaPinterestP, FaInstagram].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-12 h-12 rounded-full bg-black flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-[#4EE1FF]/60 hover:bg-[#0a0a0a] hover:text-[#4EE1FF]"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>

        {/* Horizontal line */}
        <div className="border-t border-gray-700/40 mt-10 mb-16"></div>

        {/* Middle Section */}
        <div className="mt-10 flex flex-col lg:flex-row justify-between gap-16">
          {/* Contact Info */}
          <div className="max-w-xl">
            <p className="text-gray-400 text-lg mb-4">Let’s start working together</p>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight hover:text-[#4EE1FF] transition-all duration-300">
              help@company.com
            </h2>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-gray-400 text-base">
            {/* Column 1 */}
            <div className="flex flex-col gap-2">
              {["About", "Meet the Team", "Our Projects", "News & Media", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="block py-1.5 hover:text-[#4EE1FF] transition-all duration-300"
                  >
                    {item}
                  </a>
                )
              )}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-2">
              {["Our FAQs", "Services", "Gallery", "Help"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block py-1.5 hover:text-[#4EE1FF] transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-sm text-gray-500">
          <p>© Copyright 2025 by Ogency Theme</p>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#4EE1FF] rounded-full flex items-center justify-center text-black shadow-[0_0_15px_#4EE1FF] hover:shadow-[#4EE1FF]/80 hover:bg-[#00d4ff] transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;


// "use client";

// import React from "react";
// import {
//   FaTwitter,
//   FaFacebookF,
//   FaPinterestP,
//   FaInstagram,
// } from "react-icons/fa";
// import { ArrowUp } from "lucide-react";

// const Footer: React.FC = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="relative overflow-hidden bg-[#0f0f0f] text-gray-300 py-24">
//       {/* Background pattern */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage:
//             "repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 20px)",
//         }}
//       ></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
//         {/* Top Section */}
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
//           {/* Left Side - Logo */}
//           <div className="flex items-center gap-3">
//             <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
//               <span className="text-2xl font-bold">★</span>
//             </div>
//           </div>

//           {/* Right Side - Social Icons with circular background */}
//           <div className="flex gap-6 text-gray-200 text-2xl">
//             <a
//               href="#"
//               className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:bg-[#00FF7F] hover:text-white transition"
//             >
//               <FaTwitter />
//             </a>
//             <a
//               href="#"
//               className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:bg-[#00FF7F] hover:text-white transition"
//             >
//               <FaFacebookF />
//             </a>
//             <a
//               href="#"
//               className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:bg-[#00FF7F] hover:text-white transition"
//             >
//               <FaPinterestP />
//             </a>
//             <a
//               href="#"
//               className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:bg-[#00FF7F] hover:text-white transition"
//             >
//               <FaInstagram />
//             </a>
//           </div>
//         </div>

//         {/* Horizontal line AFTER logo & icons */}
//         <div className="border-t border-gray-700/40 mt-10 mb-16"></div>

//         {/* Middle Section */}
//         <div className="mt-10 flex flex-col lg:flex-row justify-between gap-16">
//           {/* Contact Info */}
//           <div className="max-w-xl">
//             <p className="text-gray-400 text-lg mb-4">
//               Let’s start working together
//             </p>
//             <h2 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight hover:text-[#00FF7F] transition-all duration-300">
//               help@company.com
//             </h2>
//           </div>

//           {/* Links */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-gray-400 text-base">
//             {/* Column 1 */}
//             <div className="flex flex-col gap-2">
//               {[
//                 "About",
//                 "Meet the Team",
//                 "Our Projects",
//                 "News & Media",
//                 "Contact",
//               ].map((item) => (
//                 <a
//                   key={item}
//                   href="#"
//                   className="block py-1.5 hover:text-[#00FF7F] transition-all duration-300"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>

//             {/* Column 2 */}
//             <div className="flex flex-col gap-2">
//               {["Our FAQs", "Services", "Gallery", "Help"].map((item) => (
//                 <a
//                   key={item}
//                   href="#"
//                   className="block py-1.5 hover:text-[#00FF7F] transition-all duration-300"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="mt-20 text-sm text-gray-500">
//           <p>© Copyright 2025 by Ogency Theme</p>
//         </div>
//       </div>

//       {/* Scroll to top button */}
//       <button
//         onClick={scrollToTop}
//         className="fixed bottom-6 right-6 w-12 h-12 bg-[#00FF7F] rounded-full flex items-center justify-center text-white hover:bg-green-400 transition"
//         aria-label="Scroll to top"
//       >
//         <ArrowUp size={20} />
//       </button>
//     </footer>
//   );
// };

// export default Footer;


// // pls help code this layout in the image with next js , make it responsive and also use this code as starters 
// // import React from 'react'

// // const Testimonials = () => {
// //   return (
// //     <div>Testimonials</div>
// //   )
// // }

// // export default Testimonials