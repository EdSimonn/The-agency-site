"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  // { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [navSolid, setNavSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll for transparency effect
  useEffect(() => {
    const handleScroll = () => setNavSolid(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ backgroundColor: "rgba(0,0,0,0)" }}
        animate={{
          backgroundColor: navSolid ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0)",
          backdropFilter: navSolid ? "blur(10px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold">L</span>
            <span className="font-semibold tracking-wide">OGO</span>
          </Link>

          <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
            {navLinks.map((item) => (
              <li key={item.name} className="relative group cursor-pointer">
                <Link href={item.href}>{item.name}</Link>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#4EE1FF] drop-shadow-[0_0_10px_rgba(78,225,255,0.8)] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(true)}>
            <Menu size={26} />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU SIDEBAR */}
      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-64 h-full bg-black/95 z-[60] flex flex-col px-6 py-10 text-white"
          >
            <button className="self-end mb-8" onClick={() => setMenuOpen(false)}>
              <X size={26} />
            </button>
            <ul className="flex flex-col gap-6 text-lg tracking-wide uppercase">
              {navLinks.map((item) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="hover:text-[#4EE1FF] transition-all duration-500 cursor-pointer"
                >
                  <Link href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar 