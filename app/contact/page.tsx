'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

// --- NEW COMPONENT: ContactForm ---
const ContactForm = () => {
  const serviceOptions = [
    "Web Design & Development",
    "Digital Marketing",
    "Branding & Strategy",
    "Photography",
    "Other Inquiry",
  ];

  return (
    <section className="bg-black py-20 px-6 sm:px-12 md:px-20 relative">
            {/* Decorative Elements */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-1/4 w-2 h-2 rounded-full border border-[#00FF7F] opacity-50"
      />
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-[45%] w-1 h-1 bg-[#00FF7F] rounded-full"
      />
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-gray-500 uppercase tracking-[0.2em] text-sm font-medium mb-3">
            Simple Work Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Do not hesitate to get in  <br />
            <span className="text-white">touch with us</span>
          </h2>
        </div>

        {/* Form Grid */}
        <form className="space-y-6">
          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-4 bg-[#1e1e1e] text-gray-300 placeholder-gray-500 border-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 rounded-none appearance-none"
              aria-label="Your Name"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-4 bg-[#1e1e1e] text-gray-300 placeholder-gray-500 border-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 rounded-none appearance-none"
              aria-label="Email Address"
            />
          </div>

          {/* Row 2: Phone and Service */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-4 bg-[#1e1e1e] text-gray-300 placeholder-gray-500 border-none rounded-none appearance-none"
              aria-label="Phone Number"
            />
            <div className="relative">
              <select
                className="w-full p-4 bg-[#1e1e1e] text-gray-300 placeholder-gray-500 border-none rounded-none appearance-none cursor-pointer"
                defaultValue=""
                aria-label="Select Service"
              >
                <option value="" disabled>
                  Select service
                </option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-500">
                {/* <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg> */}
              </div>
            </div>
          </div>

          {/* Row 3: Comment/Textarea */}
          <div>
            <textarea
              placeholder="Write Comment"
              rows={6}
              className="w-full p-4 bg-[#1e1e1e] text-gray-300 placeholder-gray-500 border-none focus:ring-1 focus:ring-[#00FF7F] focus:border-green-500 rounded-none appearance-none resize-y"
              aria-label="Your Comment"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex justify-center">
            <button
              type="submit"
              className="w-full md:w-auto px-12 py-4 text-lg font-semibold text-black bg-[#00FF7F] hover:bg-green-600 transition duration-300 shadow-lg shadow-green-500/50"
            >
              Send a Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
// ------------------------------------

const ContactPage = () => {
  return (
    <main className="w-full min-h-screen bg-[#111]">
      {/* HERO SECTION */}
      <section className="relative h-[80vh] w-full flex items-center">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/hero1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%) brightness(0.6)",
          }}
        />

        {/* Content Layer */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-10">
          {/* Breadcrumb */}
          <div className="text-sm md:text-base text-gray-300 mb-2 tracking-wide">
            <Link href={"/"}>Home</Link>
            <span className="mx-2">•</span>
            <span className="text-white">Contact</span>
          </div>

          {/* Big Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Contact
          </h1>
        </div>

        {/* Fade Gradient at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#111] to-transparent z-0" />
      </section>

      {/* --- CONTACT FORM SECTION --- */}
      <ContactForm />
    </main>
  );
};

export default ContactPage;

// import Link from 'next/link'
// import React from 'react'

// const ContactPage = () => {
//   return (
//     <main className="w-full min-h-screen bg-[#111]">
//       {/* HERO SECTION
//          This mimics the image provided: Dark, Grayscale Mountain, Breadcrumbs
//       */}
//       <section className="relative h-[80vh] w-full flex items-center">
//         {/* Background Image Layer */}
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage: "url('/images/hero1.jpg')", // Make sure to add an image here!
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             filter: "grayscale(100%) brightness(0.6)", // Makes it black & white and darker
//           }}
//         />

//         {/* Content Layer */}
//         <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-10">
//           {/* Breadcrumb */}
//           <div className="text-sm md:text-base text-gray-300 mb-2 tracking-wide">
//             <Link href={"/"}>Home</Link>
//             <span className="mx-2">•</span>
//             <span className="text-white">Contact</span>
//           </div>

//           {/* Big Title */}
//           <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
//             Contact
//           </h1>
//         </div>

//         {/* Fade Gradient at Bottom (Optional, for smooth transition) */}
//         <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#111] to-transparent z-0" />
//       </section>

//       {/* REST OF PAGE CONTENT */}
//       <section className="max-w-4xl mx-auto px-6 py-20">
//         <h2 className="text-3xl font-bold mb-6 text-[#00FF7F]">Our Story</h2>
//         <p className="text-gray-400 leading-relaxed text-lg">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Since our
//           inception, we have been dedicated to pushing the boundaries of digital
//           innovation...
//         </p>
//       </section>
//     </main>
//   )
// }

// export default ContactPage
