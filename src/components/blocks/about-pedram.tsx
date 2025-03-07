"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import Floating, { FloatingElement } from "../ui/parallax-floating";
import { TextRotate } from "../ui/text-rotate";

export function AboutPedram() {
  const images = [
    "/pedro/1.jpg",
    "/pedro/2.jpg",
    "/pedro/3.jpg",
    "/pedro/4.jpg",
    "/pedro/5.jpg",
  ];
  
  return (
    <section className="w-full min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-b from-white via-gray-50 to-white py-12 md:py-20">
      <Floating sensitivity={0.5} className="h-full">
        {/* Mobile: Hide some images on small screens */}
        <FloatingElement
          depth={0.5}
          className="hidden sm:block top-[15%] left-[2%] md:top-[25%] md:left-[5%]"
        >
          <motion.img
            src={images[0]}
            alt="Salon Image 1"
            className="w-32 md:w-40 h-28 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-lg rounded-xl border border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[5%] right-[5%] md:top-[15%] md:right-[11%]"
        >
          <motion.img
            src={images[1]}
            alt="Salon Image 2"
            className="w-64 md:w-48 h-28 md:h-36 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rotate-6 shadow-lg rounded-xl border border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={0.8}
          className="hidden sm:block bottom-[10%] left-[6%] md:bottom-[20%] md:left-[8%]"
        >
          <motion.img
            src={images[2]}
            alt="Salon Image 3"
            className="w-36 md:w-44 h-36 md:h-44 object-cover -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-lg rounded-xl border border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1.2}
          className="bottom-[8%] right-[55%] md:bottom-[25%] md:right-[8%]"
        >
          <motion.img
            src={images[3]}
            alt="Salon Image 4"
            className="w-52 md:w-40 h-28 md:h-36 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-lg rotate-[8deg] rounded-xl border border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={0.6}
          className="hidden sm:block top-[40%] right-[15%] md:top-[50%] md:right-[20%]"
        >
          <motion.img
            src={images[4]}
            alt="Salon Image 5"
            className="w-28 md:w-36 h-28 md:h-36 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-lg -rotate-[12deg] rounded-xl border border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
        </FloatingElement>
      </Floating>

      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center max-w-4xl mx-auto px-4 py-8 md:py-0"
      >
        <motion.h2 
          className="font-bold text-2xl sm:text-3xl md:text-5xl text-center text-gray-800 py-2 md:py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Meet{" "}
          <TextRotate
            texts={[
              "Pedram",
              "Your Guide",
              "Your Mentor",
              "Your Partner",
            ]}
            mainClassName="text-[#004ea4] inline-block"
            staggerDuration={0.03}
            staggerFrom="last"
            rotationInterval={3000}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          />
        </motion.h2>
        
        <motion.div 
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto my-4 md:my-6 rounded-full overflow-hidden shadow-lg border-2 border-[#004ea4]/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <img
            src="/pedro/1.jpg"
            alt="Pedram"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.p 
          className="text-base sm:text-lg md:text-xl text-center text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          With over two decades of experience in the beauty industry, I've helped countless professionals 
          achieve their dreams of working legally and successfully in the United States. My mission is to 
          simplify the complex process of obtaining your beauty license and setting up your business.
        </motion.p>

        <Link href="#contact">
          <motion.button 
            className="px-5 py-2.5 sm:px-6 sm:py-3 bg-[#004ea4] text-white mx-auto text-center rounded-full relative mt-6 md:mt-8 hover:bg-[#003d83] transition-colors shadow-md text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get in Touch →</span>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-white/20 to-transparent" />
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
} 