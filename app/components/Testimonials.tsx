// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight, Star, ArrowUpRight } from "lucide-react";

// // ====== Types ======
// interface Testimonial {
//   id: number;
//   name: string;
//   avatar: string;
//   text: string;
//   rating: number;
// }

// // ====== Data ======
// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: "Aleesha brown",
//     avatar: "/avatars/avatar2.jpg", // Replace with your actual image path
//     text: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy data foster to collaborative thinking.",
//     rating: 4.9,
//   },
//   {
//     id: 2,
//     name: "Donald hardson",
//     avatar: "/avatars/avatar1.jpg", // Replace with your actual image path
//     text: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy data foster to collaborative thinking.",
//     rating: 4.9,
//   },
//   {
//     id: 3,
//     name: "Rachel Meyers",
//     avatar: "/avatars/avatar3.jpg",
//     text: "Iterative approaches and collaborative thinking helped our team deliver top-tier product improvements. Highly recommended.",
//     rating: 4.8,
//   },
//   {
//     id: 4,
//     name: "John Smith",
//     avatar: "/avatars/avatar4.jpg",
//     text: "Professional and responsive — the results speak for themselves. Great to work with across the whole process.",
//     rating: 4.7,
//   },
// ];

// // ====== Stars Component ======
// const Stars: React.FC<{ rating?: number }> = ({ rating = 5 }) => {
//   return (
//     <div className="flex gap-1">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <Star
//           key={i}
//           size={14}
//           className="fill-amber-500 text-amber-500"
//         />
//       ))}
//     </div>
//   );
// };

// // ====== Main Component ======
// const Testimonials: React.FC = () => {
//   const [index, setIndex] = useState(0);
//   const [slidesPerView, setSlidesPerView] = useState(2);

//   const autoplayRef = useRef<(() => void) | null>(null);
//   const hoverRef = useRef(false);

//   // Responsive slides count
//   useEffect(() => {
//     const calcSlides = () => {
//       if (window.innerWidth < 1024) {
//         setSlidesPerView(1);
//       } else {
//         setSlidesPerView(2);
//       }
//     };
//     calcSlides();
//     window.addEventListener("resize", calcSlides);
//     return () => window.removeEventListener("resize", calcSlides);
//   }, []);

//   // Autoplay setup
//   useEffect(() => {
//     autoplayRef.current = () => {
//       // Logic for infinite circular loop appearance
//       setIndex((prev) => (prev + 1) % testimonials.length);
//     };

//     const tick = () => {
//       if (!hoverRef.current && autoplayRef.current) {
//         autoplayRef.current();
//       }
//     };

//     const interval = setInterval(tick, 5000); // Slower interval for reading
//     return () => clearInterval(interval);
//   }, []);

//   const prev = () => {
//     setIndex((i) => {
//         // Wrap around logic
//         return i === 0 ? testimonials.length - 1 : i - 1;
//     });
//   };

//   const next = () => {
//     setIndex((i) => {
//         return (i + 1) % testimonials.length;
//     });
//   };

//   return (
//     <section className="w-full bg-black text-white py-20 px-4 md:px-8 overflow-hidden font-sans relative">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 relative z-10">
//           <div className="max-w-2xl">
//             <div className="flex items-center gap-3 mb-4">
//               <span className="w-2 h-2 rounded-full bg-amber-500 inline-block shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
//               <span className="text-sm uppercase tracking-widest text-gray-400 font-medium">
//                 Our Clients Feedback
//               </span>
//             </div>
//             <h2 className="font-extrabold text-5xl md:text-6xl leading-[1.1] tracking-tight">
//               What they’re talking
//               <br />
//               about us
//             </h2>
//           </div>

//           {/* Navigation Buttons (Top Right) */}
//           <div className="flex gap-4 mt-8 md:mt-0">
//             <button
//               onClick={prev}
//               className="w-14 h-14 rounded-full bg-[#1a1a1a] hover:bg-[#252525] flex items-center justify-center transition-colors group"
//               aria-label="Previous"
//             >
//               <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-white" />
//             </button>
//             <button
//               onClick={next}
//               className="w-14 h-14 rounded-full bg-[#1a1a1a] hover:bg-[#252525] flex items-center justify-center transition-colors group"
//               aria-label="Next"
//             >
//               <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white" />
//             </button>
//           </div>
//         </div>

//         {/* Carousel Track */}
//         <div
//           className="relative"
//           onMouseEnter={() => (hoverRef.current = true)}
//           onMouseLeave={() => (hoverRef.current = false)}
//         >
//           <div className="overflow-hidden -mx-4"> 
//             <div
//               className="flex transition-transform duration-700 ease-out"
//               style={{
//                 transform: `translateX(-${index * (100 / slidesPerView)}%)`,
//               }}
//             >
//               {testimonials.map((t) => (
//                 <div
//                   key={t.id}
//                   style={{ width: `${100 / slidesPerView}%` }}
//                   className="px-4 flex-shrink-0"
//                 >
//                   {/* Custom "Notched" Card */}
//                   <div className="relative pt-10"> {/* pt-10 reserves space for the avatar overhang */}
                    
//                     {/* Content Container */}
//                     <div className="relative bg-transparent p-8 md:p-10 min-h-[280px] flex flex-col justify-between">
                      
//                       {/* === Custom Border Construction (The Notch) === */}
//                       {/* Left Border */}
//                       <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-gray-800" />
//                       {/* Bottom Border */}
//                       <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-800" />
//                       {/* Top Border (Partial) */}
//                       <div className="absolute top-0 left-0 right-[100px] h-[1px] bg-gray-800" />
//                       {/* Right Border (Partial - Bottom Up) */}
//                       <div className="absolute top-[100px] right-0 bottom-0 w-[1px] bg-gray-800" />
//                       {/* The Notch "Step Down" Border */}
//                       <div className="absolute top-0 right-[100px] h-[100px] w-[1px] bg-gray-800" />
//                       <div className="absolute top-[100px] right-0 w-[100px] h-[1px] bg-gray-800" />
//                       {/* ============================================ */}

//                       <div className="flex justify-between items-start h-full">
                        
//                         {/* Left Side: Name & Text */}
//                         <div className="pr-4 max-w-[70%]">
//                           <h3 className="text-white font-bold text-2xl mb-6">
//                             {t.name}
//                           </h3>
//                           <p className="text-gray-400 leading-relaxed text-lg">
//                             {t.text}
//                           </p>
//                         </div>

//                         {/* Right Side: Avatar & Rating (Positioned in the notch) */}
//                         <div className="absolute -top-8 right-6 flex flex-col items-center">
//                           {/* Avatar Wrapper */}
//                           <div className="relative mb-4">
//                             {/* White Ring */}
//                             <div className="rounded-full p-[2px] bg-white">
//                               {/* Orange Ring */}
//                               <div className="rounded-full p-[2px] border-2 border-amber-500 bg-black">
//                                 <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-800">
//                                    {/* Fallback image if path is broken */}
//                                   <Image
//                                     src={t.avatar}
//                                     alt={t.name}
//                                     fill
//                                     className="object-cover"
//                                   />
//                                 </div>
//                               </div>
//                             </div>
//                           </div>

//                           {/* Stars & Text */}
//                           <div className="flex flex-col items-center gap-1">
//                             <Stars rating={t.rating} />
//                             <span className="text-gray-500 text-sm mt-1">
//                               {t.rating} Reviews
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Bottom Floating Button */}
//         <div className="flex justify-end mt-8 md:mt-12 relative">
//           <div className="relative group cursor-pointer">
//              <div className="absolute inset-0 bg-amber-500 blur opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
//              <button className="relative w-16 h-16 rounded-full border border-amber-500 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-black transition-all duration-300">
//                 <ArrowUpRight size={28} />
//              </button>
             
//              {/* Partial Arc decoration (optional, simulating the image's partial circle) */}
//              <svg className="absolute -bottom-2 -right-2 w-10 h-10 text-amber-600 opacity-50 pointer-events-none" viewBox="0 0 100 100">
//                <path d="M 50,50 m 0,40 a 40,40 0 0,1 -40,-40" fill="none" stroke="currentColor" strokeWidth="2" />
//              </svg>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Testimonials;


// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Star,
//   Plus,
// } from "lucide-react"; // Lucide icons

// // ====== Types ======
// interface Testimonial {
//   id: number;
//   name: string;
//   avatar: string;
//   text: string;
//   rating: number;
// }

// // ====== Data ======
// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: "Donald hardson",
//     avatar: "/avatars/avatar1.jpg",
//     text: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy data foster to collaborative thinking.",
//     rating: 4.9,
//   },
//   {
//     id: 2,
//     name: "Aleesha brown",
//     avatar: "/avatars/avatar2.jpg",
//     text: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy data foster to collaborative thinking.",
//     rating: 4.9,
//   },
//   {
//     id: 3,
//     name: "Rachel Meyers",
//     avatar: "/avatars/avatar3.jpg",
//     text: "Iterative approaches and collaborative thinking helped our team deliver top-tier product improvements. Highly recommended.",
//     rating: 4.8,
//   },
//   {
//     id: 4,
//     name: "John Smith",
//     avatar: "/avatars/avatar4.jpg",
//     text: "Professional and responsive — the results speak for themselves. Great to work with across the whole process.",
//     rating: 4.7,
//   },
// ];

// // ====== Stars Component ======
// const Stars: React.FC<{ rating?: number }> = ({ rating = 5 }) => {
//   return (
//     <div className="text-amber-500 flex">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <Star
//           key={i}
//           size={16}
//           className="fill-amber-500 text-amber-500"
//         />
//       ))}
//     </div>
//   );
// };

// // ====== Main Component ======
// const Testimonials: React.FC = () => {
//   const [index, setIndex] = useState(0);
//   const [slidesPerView, setSlidesPerView] = useState(2);

//   const autoplayRef = useRef<(() => void) | null>(null);
//   const hoverRef = useRef(false);

//   // responsive slides count
//   useEffect(() => {
//     const calcSlides = () => {
//       if (window.innerWidth < 768) {
//         setSlidesPerView(1);
//       } else if (window.innerWidth < 1280) {
//         setSlidesPerView(1);
//       } else {
//         setSlidesPerView(2);
//       }
//     };
//     calcSlides();
//     window.addEventListener("resize", calcSlides);
//     return () => window.removeEventListener("resize", calcSlides);
//   }, []);

//   // autoplay setup
//   useEffect(() => {
//     autoplayRef.current = () => {
//       setIndex((prev) => (prev + 1) % testimonials.length);
//     };

//     const tick = () => {
//       if (!hoverRef.current && autoplayRef.current) {
//         autoplayRef.current();
//       }
//     };

//     const interval = setInterval(tick, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     setIndex((i) => {
//       const maxIndex = Math.max(0, testimonials.length - slidesPerView);
//       return i > maxIndex ? 0 : i;
//     });
//   }, [slidesPerView]);

//   const prev = () => {
//     setIndex((i) => {
//       const maxIndex = Math.max(0, testimonials.length - slidesPerView);
//       return i <= 0 ? maxIndex : i - 1;
//     });
//   };

//   const next = () => {
//     setIndex((i) => {
//       const maxIndex = Math.max(0, testimonials.length - slidesPerView);
//       return i >= maxIndex ? 0 : i + 1;
//     });
//   };

//   return (
//     <section className="w-full bg-black text-gray-300 py-12 border-t border-gray-800">
//       <div className="mx-auto px-6 max-w-6xl">
//         {/* Header */}
//         <div className="flex items-start justify-between">
//           {/* Left */}
//           <div className="max-w-lg">
//             <div className="flex items-center gap-3 mb-3">
//               <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
//               <span className="text-xs uppercase tracking-widest text-gray-400">
//                 Our Clients Feedback
//               </span>
//             </div>
//             <h2 className="text-white font-extrabold text-4xl sm:text-5xl leading-tight tracking-tight">
//               <span>What they’re talking</span>
//               <br />
//               <span>about us</span>
//             </h2>
//           </div>

//           {/* Right - Arrows */}
//           <div className="flex items-center gap-3">
//             <button
//               onClick={prev}
//               aria-label="Previous testimonials"
//               className="w-12 h-12 rounded-full bg-gray-900/40 border border-gray-800 flex items-center justify-center hover:bg-gray-800 transition"
//             >
//               <ChevronLeft className="w-5 h-5 text-gray-200" />
//             </button>

//             <button
//               onClick={next}
//               aria-label="Next testimonials"
//               className="w-12 h-12 rounded-full bg-gray-900/40 border border-gray-800 flex items-center justify-center hover:bg-gray-800 transition"
//             >
//               <ChevronRight className="w-5 h-5 text-gray-200" />
//             </button>
//           </div>
//         </div>

//         {/* Carousel */}
//         <div
//           className="relative mt-10"
//           onMouseEnter={() => (hoverRef.current = true)}
//           onMouseLeave={() => (hoverRef.current = false)}
//         >
//           <div className="overflow-hidden">
//             <div
//               className="flex transition-transform duration-700 ease-in-out"
//               style={{
//                 transform: `translateX(-${
//                   (index * 100) / testimonials.length
//                 }%)`,
//                 width: `${(testimonials.length / slidesPerView) * 100}%`,
//               }}
//             >
//               {testimonials.map((t) => (
//                 <div
//                   key={t.id}
//                   className="p-6"
//                   style={{
//                     width: `${100 / testimonials.length}%`,
//                     boxSizing: "border-box",
//                   }}
//                 >
//                   <article className="relative bg-transparent border border-gray-800 p-8 min-h-[180px]">
//                     {/* Avatar */}
//                     <div className="absolute -top-10 right-8">
//                       <div className="rounded-full bg-white p-1">
//                         <div className="rounded-full border-4 border-amber-500 p-0.5 bg-white">
//                           <div className="rounded-full overflow-hidden w-20 h-20">
//                             <Image
//                               src={t.avatar}
//                               alt={t.name}
//                               width={80}
//                               height={80}
//                               className="object-cover"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Name */}
//                     <h3 className="text-white font-bold text-lg mb-3">
//                       {t.name}
//                     </h3>

//                     {/* Text */}
//                     <p className="text-gray-400 leading-relaxed">{t.text}</p>

//                     {/* Stars */}
//                     <div className="mt-6 flex items-center gap-3">
//                       <Stars rating={t.rating} />
//                       <div className="text-sm text-gray-400">
//                         {t.rating} Reviews
//                       </div>
//                     </div>
//                   </article>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Bottom-right floating arrow */}
//           <div className="absolute right-2 bottom-[-24px]">
//             <button
//               onClick={next}
//               className="w-12 h-12 rounded-full border border-amber-500 flex items-center justify-center"
//               aria-label="scroll testimonials"
//             >
//               <Plus className="w-5 h-5 text-amber-500 rotate-45" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


// import React from 'react'

// const Testimonials = () => {
//   return (
//     <div>Testimonials</div>
//   )
// }

// export default Testimonials


// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight, Star, ArrowUpRight } from "lucide-react";

// // ====== Types ======
// interface Testimonial {
//   id: number;
//   name: string;
//   avatar: string;
//   text: string;
//   rating: number;
// }

// // ====== Data ======
// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: "Aleesha brown",
//     avatar: "/avatars/avatar2.jpg", // Replace with your actual image path
//     text: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy data foster to collaborative thinking.",
//     rating: 4.9,
//   },
//   {
//     id: 2,
//     name: "Donald hardson",
//     avatar: "/avatars/avatar1.jpg", // Replace with your actual image path
//     text: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy data foster to collaborative thinking.",
//     rating: 4.9,
//   },
//   {
//     id: 3,
//     name: "Rachel Meyers",
//     avatar: "/avatars/avatar3.jpg",
//     text: "Iterative approaches and collaborative thinking helped our team deliver top-tier product improvements. Highly recommended.",
//     rating: 4.8,
//   },
//   {
//     id: 4,
//     name: "John Smith",
//     avatar: "/avatars/avatar4.jpg",
//     text: "Professional and responsive — the results speak for themselves. Great to work with across the whole process.",
//     rating: 4.7,
//   },
// ];

// // ====== Stars Component ======
// const Stars: React.FC<{ rating?: number }> = ({ rating = 5 }) => {
//   return (
//     <div className="flex gap-1">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <Star
//           key={i}
//           size={14}
//           className="fill-amber-500 text-amber-500"
//         />
//       ))}
//     </div>
//   );
// };

// // ====== Main Component ======
// const Testimonials: React.FC = () => {
//   const [index, setIndex] = useState(0);
//   const [slidesPerView, setSlidesPerView] = useState(2);

//   const autoplayRef = useRef<(() => void) | null>(null);
//   const hoverRef = useRef(false);

//   // Responsive slides count
//   useEffect(() => {
//     const calcSlides = () => {
//       if (window.innerWidth < 1024) {
//         setSlidesPerView(1);
//       } else {
//         setSlidesPerView(2);
//       }
//     };
//     calcSlides();
//     window.addEventListener("resize", calcSlides);
//     return () => window.removeEventListener("resize", calcSlides);
//   }, []);

//   // Autoplay setup
//   useEffect(() => {
//     autoplayRef.current = () => {
//       // Logic for infinite circular loop appearance
//       setIndex((prev) => (prev + 1) % testimonials.length);
//     };

//     const tick = () => {
//       if (!hoverRef.current && autoplayRef.current) {
//         autoplayRef.current();
//       }
//     };

//     const interval = setInterval(tick, 5000); // Slower interval for reading
//     return () => clearInterval(interval);
//   }, []);

//   const prev = () => {
//     setIndex((i) => {
//         // Wrap around logic
//         return i === 0 ? testimonials.length - 1 : i - 1;
//     });
//   };

//   const next = () => {
//     setIndex((i) => {
//         return (i + 1) % testimonials.length;
//     });
//   };

//   return (
//     <section className="w-full bg-black text-white py-20 px-4 md:px-8 overflow-hidden font-sans relative">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 relative z-10">
//           <div className="max-w-2xl">
//             <div className="flex items-center gap-3 mb-4">
//               <span className="w-2 h-2 rounded-full bg-amber-500 inline-block shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
//               <span className="text-sm uppercase tracking-widest text-gray-400 font-medium">
//                 Our Clients Feedback
//               </span>
//             </div>
//             <h2 className="font-extrabold text-5xl md:text-6xl leading-[1.1] tracking-tight">
//               What they’re talking
//               <br />
//               about us
//             </h2>
//           </div>

//           {/* Navigation Buttons (Top Right) */}
//           <div className="flex gap-4 mt-8 md:mt-0">
//             <button
//               onClick={prev}
//               className="w-14 h-14 rounded-full bg-[#1a1a1a] hover:bg-[#252525] flex items-center justify-center transition-colors group"
//               aria-label="Previous"
//             >
//               <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-white" />
//             </button>
//             <button
//               onClick={next}
//               className="w-14 h-14 rounded-full bg-[#1a1a1a] hover:bg-[#252525] flex items-center justify-center transition-colors group"
//               aria-label="Next"
//             >
//               <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white" />
//             </button>
//           </div>
//         </div>

//         {/* Carousel Track */}
//         <div
//           className="relative"
//           onMouseEnter={() => (hoverRef.current = true)}
//           onMouseLeave={() => (hoverRef.current = false)}
//         >
//           <div className="overflow-hidden -mx-4"> 
//             <div
//               className="flex transition-transform duration-700 ease-out"
//               style={{
//                 transform: `translateX(-${index * (100 / slidesPerView)}%)`,
//               }}
//             >
//               {testimonials.map((t) => (
//                 <div
//                   key={t.id}
//                   style={{ width: `${100 / slidesPerView}%` }}
//                   className="px-4 flex-shrink-0"
//                 >
//                   {/* Custom "Notched" Card */}
//                   <div className="relative pt-10"> {/* pt-10 reserves space for the avatar overhang */}
                    
//                     {/* Content Container */}
//                     <div className="relative bg-transparent p-8 md:p-10 min-h-[280px] flex flex-col justify-between">
                      
//                       {/* === Custom Border Construction (The Notch) === */}
//                       {/* Left Border */}
//                       <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-gray-800" />
//                       {/* Bottom Border */}
//                       <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-800" />
//                       {/* Top Border (Partial) */}
//                       <div className="absolute top-0 left-0 right-[100px] h-[1px] bg-gray-800" />
//                       {/* Right Border (Partial - Bottom Up) */}
//                       <div className="absolute top-[100px] right-0 bottom-0 w-[1px] bg-gray-800" />
//                       {/* The Notch "Step Down" Border */}
//                       <div className="absolute top-0 right-[100px] h-[100px] w-[1px] bg-gray-800" />
//                       <div className="absolute top-[100px] right-0 w-[100px] h-[1px] bg-gray-800" />
//                       {/* ============================================ */}

//                       <div className="flex justify-between items-start h-full">
                        
//                         {/* Left Side: Name & Text */}
//                         <div className="pr-4 max-w-[70%]">
//                           <h3 className="text-white font-bold text-2xl mb-6">
//                             {t.name}
//                           </h3>
//                           <p className="text-gray-400 leading-relaxed text-lg">
//                             {t.text}
//                           </p>
//                         </div>

//                         {/* Right Side: Avatar & Rating (Positioned in the notch) */}
//                         <div className="absolute -top-8 right-6 flex flex-col items-center">
//                           {/* Avatar Wrapper */}
//                           <div className="relative mb-4">
//                             {/* White Ring */}
//                             <div className="rounded-full p-[2px] bg-white">
//                               {/* Orange Ring */}
//                               <div className="rounded-full p-[2px] border-2 border-amber-500 bg-black">
//                                 <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-800">
//                                    {/* Fallback image if path is broken */}
//                                   <Image
//                                     src={t.avatar}
//                                     alt={t.name}
//                                     fill
//                                     className="object-cover"
//                                   />
//                                 </div>
//                               </div>
//                             </div>
//                           </div>

//                           {/* Stars & Text */}
//                           <div className="flex flex-col items-center gap-1">
//                             <Stars rating={t.rating} />
//                             <span className="text-gray-500 text-sm mt-1">
//                               {t.rating} Reviews
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Bottom Floating Button */}
//         <div className="flex justify-end mt-8 md:mt-12 relative">
//           <div className="relative group cursor-pointer">
//              <div className="absolute inset-0 bg-amber-500 blur opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
//              <button className="relative w-16 h-16 rounded-full border border-amber-500 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-black transition-all duration-300">
//                 <ArrowUpRight size={28} />
//              </button>
             
//              {/* Partial Arc decoration (optional, simulating the image's partial circle) */}
//              <svg className="absolute -bottom-2 -right-2 w-10 h-10 text-amber-600 opacity-50 pointer-events-none" viewBox="0 0 100 100">
//                <path d="M 50,50 m 0,40 a 40,40 0 0,1 -40,-40" fill="none" stroke="currentColor" strokeWidth="2" />
//              </svg>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Testimonials;




 