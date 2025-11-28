"use client";

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
        className="absolute top-20 left-1/4 w-2 h-2 rounded-full border border-[#4EE1FF] opacity-50"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-[45%] w-1 h-1 bg-[#4EE1FF] rounded-full"
      />
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-gray-500 uppercase tracking-[0.2em] text-sm font-medium mb-3">
            Simple Work Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Do not hesitate to get in <br />
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
              className=" group relative overflow-hidden w-full md:w-auto px-12 py-4 text-lg font-semibold text-black bg-[#4EE1FF] transition duration-300 "
            >
              <span className="relative z-10">Send a Message</span>
              <span className="absolute inset-0 bg-white scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
            </button>

            {/* <div className="group">
              <button className="w-full md:w-auto relative overflow-hidden px-12 py-4 text-lg font-semibold text-black bg-[#4EE1FF] transition-all duration-300">
                <span className="relative z-10">Send a Message</span>
                <span className="absolute inset-0 bg-white scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
            </div> */}
          </div>
        </form>
      </div>
    </section>
  );
};
// ------------------------------------

// 1. Import Oswald font (it is naturally condensed/tall)
import { Oswald } from "next/font/google";

// 2. Configure font to be extra bold
const oswald = Oswald({
  subsets: ["latin"],
  weight: "700",
});
const ContactPage = () => {
  return (
    <main className="w-full min-h-screen bg-[#111]">
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[40vh] lg:h-[70vh] xl:h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/page-banner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%) brightness(0.6)",
          }}
        />

        {/* Container for the text */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-10 flex flex-col justify-center">
          {/* Breadcrumb - Aligned to start/left */}
          <div className="text-sm md:text-base text-gray-300 mb-0 tracking-wide self-start">
            <Link href={"/"} className="text-[#4EE1FF]">
              Home
            </Link>
            <span className="mx-2">•</span>
            <span className="text-white">Contact</span>
          </div>

          {/* UPDATED HEADER:
             1. text-[17.5vw]: This sets the font size to 17.5% of the screen width. 
                It effectively forces the text to span the width dynamically.
             2. scale-y-125: Stretches the height by 25% to get that tall look.
             3. leading-none: Removes vertical gaps.
          */}
          <h1
            className={`${oswald.className} text-white uppercase text-[17.5vw] leading-none tracking-tighter text-center font-bold transform scale-y-125 origin-center mt-0 pt-4`}
          >
            CONTACT
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#111] to-transparent z-0" />
      </section>

      {/* --- CONTACT FORM SECTION --- */}
      <ContactForm />
    </main>
  );
};

export default ContactPage;
