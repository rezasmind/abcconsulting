import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Link from "next/link"

function StackedCircularFooter() {
  return (
    <footer className="bg-gradient-to-b from-white to-primary/5 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {/* Company Info */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-primary">ABC</span>
              <span className="text-xl font-bold text-secondary">Consulting</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Helping beauty professionals obtain their licenses efficiently and start their legitimate business journey with comprehensive support services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary/20 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-primary/10 p-2 rounded-full text-primary hover:bg-primary/20 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-600 hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                <MapPin className="text-secondary flex-shrink-0" size={18} />
                <span className="text-gray-600">123 Business Avenue, Suite 100, New York, NY 10001</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                <Phone className="text-secondary flex-shrink-0" size={18} />
                <span className="text-gray-600">(555) 123-4567</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                <Mail className="text-secondary flex-shrink-0" size={18} />
                <span className="text-gray-600">info@abcconsulting.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              © 2026 ABC Consulting. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter } 