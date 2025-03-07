'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full flex justify-center">
      <div className="bg-white rounded-lg border border-gray-200 max-w-3xl mx-auto my-4">
        <div className="flex justify-between items-center h-14 px-6 gap-6">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary flex items-center gap-2">
              <Image src="/logo.png" alt="ABC Consulting" width={64} height={52} />
            
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#services" className="text-gray-700 hover:text-primary transition duration-300">
              Services
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-primary transition duration-300">
              About
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-primary transition duration-300">
              Contact
            </Link>
            <Link
              href="#contact"
              className="bg-primary text-white px-5 py-1.5 rounded-full hover:bg-primary-hover transition duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-b-full border-t border-gray-100">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link
                href="#services"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-secondary/10 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#about"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-secondary/10 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-secondary/10 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 rounded-md bg-primary text-white hover:bg-primary-hover transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 