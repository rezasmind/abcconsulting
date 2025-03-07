"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Hero } from "@/components/ui/animated-hero";
import { Feature as ExperienceFeature } from "@/components/ui/feature-with-image-carousel";
import { Feature as ServicesFeature } from "@/components/ui/feature-with-advantages";
import { BentoGridGalleryDemo } from "@/components/blocks/interactive-bento-gallery-demo";
import { AboutPedram } from "@/components/blocks/about-pedram";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { ArrowRight, Award, CheckCircle, Clock, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div className="p-4 sm:p-6 rounded-lg bg-white/10 backdrop-blur-sm transform hover:scale-105 transition duration-300">
              <div className="flex justify-center mb-3 sm:mb-4">
                <Users className="h-8 w-8 sm:h-10 sm:w-10 text-secondary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">500+</h3>
              <p className="text-sm sm:text-base text-white/80">Satisfied Clients</p>
            </div>
            <div className="p-4 sm:p-6 rounded-lg bg-white/10 backdrop-blur-sm transform hover:scale-105 transition duration-300">
              <div className="flex justify-center mb-3 sm:mb-4">
                <Award className="h-8 w-8 sm:h-10 sm:w-10 text-secondary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">20+</h3>
              <p className="text-sm sm:text-base text-white/80">Years Experience</p>
            </div>
            <div className="p-4 sm:p-6 rounded-lg bg-white/10 backdrop-blur-sm transform hover:scale-105 transition duration-300">
              <div className="flex justify-center mb-3 sm:mb-4">
                <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-secondary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">100%</h3>
              <p className="text-sm sm:text-base text-white/80">Success Rate</p>
            </div>
            <div className="p-4 sm:p-6 rounded-lg bg-white/10 backdrop-blur-sm transform hover:scale-105 transition duration-300">
              <div className="flex justify-center mb-3 sm:mb-4">
                <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-secondary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">24/7</h3>
              <p className="text-sm sm:text-base text-white/80">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <ExperienceFeature />

      {/* Services Section */}
      <ServicesFeature />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-2xl border border-secondary/20 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="w-full md:w-2/3">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Ready to Transform Your Career?
                </h2>
                <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                  Take the first step towards your professional success. Our team of experts is ready to guide you through every step of the licensing process.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3 group">
                    <div className="bg-primary/10 p-1.5 sm:p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <span className="text-gray-700 text-base sm:text-lg">Personalized consultation and assessment</span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="bg-primary/10 p-1.5 sm:p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <span className="text-gray-700 text-base sm:text-lg">Streamlined application process</span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="bg-primary/10 p-1.5 sm:p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <span className="text-gray-700 text-base sm:text-lg">Ongoing support and resources</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 flex flex-col gap-4 mt-8 md:mt-0">
                <Link 
                  href="#contact" 
                  className="group relative overflow-hidden inline-flex items-center justify-center gap-2 sm:gap-3 w-full bg-primary text-white py-4 sm:py-5 px-6 sm:px-8 rounded-xl hover:bg-primary/90 transition-all duration-300 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl"
                >
                  <span className="relative z-10">Schedule a Free Consultation</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-hover to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                <p className="text-center text-xs sm:text-sm text-gray-500">
                  No obligations • Free initial consultation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative">
        <AboutPedram />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
       
        <BentoGridGalleryDemo />
      </section>


      {/* Footer */}
      <StackedCircularFooter />
    </div>
  );
}
