import Link from "next/link";
import React from "react";

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-[#111]">
      {/* HERO SECTION 
         This mimics the image provided: Dark, Grayscale Mountain, Breadcrumbs
      */}
      <section className="relative h-[80vh] w-full flex items-center">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/hero1.jpg')", // Make sure to add an image here!
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%) brightness(0.6)", // Makes it black & white and darker
          }}
        />

        {/* Content Layer */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-10">
          {/* Breadcrumb */}
          <div className="text-sm md:text-base text-gray-300 mb-2 tracking-wide">
            <Link href={"/"}>Home</Link>
            <span className="mx-2">•</span>
            <span className="text-white">About</span>
          </div>

          {/* Big Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            About
          </h1>
        </div>

        {/* Fade Gradient at Bottom (Optional, for smooth transition) */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#111] to-transparent z-0" />
      </section>

      {/* REST OF PAGE CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 text-[#00FF7F]">Our Story</h2>
        <p className="text-gray-400 leading-relaxed text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Since our
          inception, we have been dedicated to pushing the boundaries of digital
          innovation...
        </p>
      </section>
    </main>
  );
}
