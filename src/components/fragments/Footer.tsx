import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="text-white py-12 bg-gradient-to-r from-[#4F2F16] to-[#FFCC33] w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Description */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Askha Jaya</h2>
            <p className="text-sm">
              We are a company dedicated to providing innovative solutions for
              our customers. Our mission is to make technology accessible and
              beneficial for everyone.
            </p>
          </div>

          {/* Menu */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-sm hover:text-gray-900 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm hover:text-gray-900 transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-sm hover:text-gray-900 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-sm hover:text-gray-900 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Media Icons */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Connect With Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-center">
          © {new Date().getFullYear()} AskhaJaya. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
