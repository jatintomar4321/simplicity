import { motion } from 'framer-motion';
import { Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Sidebar({ isOpen, onClose }) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed top-0 right-0 w-full h-full bg-[#FFF350] z-[100] overflow-y-auto"
    >
      <div className="min-h-screen flex flex-col p-6 pt-40">
        {/* Navigation Links */}
        <nav className="flex-1">
          <ul className=" text-[2.5rem] font-semibold">
            <li>
              <a href="/" className="hover:opacity-70 transition-opacity">
                Home
              </a>
            </li>
            <li>
              <a href="/coaching" className="hover:opacity-70 transition-opacity">
                Coaching
              </a>
            </li>
            <li>
              <a href="/resources" className="hover:opacity-70 transition-opacity">
                Resources
              </a>
            </li>
            <li>
              <a href="/about" className="hover:opacity-70 transition-opacity">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:opacity-70 transition-opacity">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <div className="mt-auto space-y-6">
          {/* Social Links */}
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
          {/* Copyright */}
          <div className="text-sm space-y-1">
            <p>The Simple Thing</p>
            <p>© 2024 All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

