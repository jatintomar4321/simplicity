import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Sidebar({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const sidebarVariants = {
    closed: { clipPath: 'circle(5% at 110% 15%)' },
    open: { clipPath: 'circle(150% at 100% 0)' },
  };

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
      transition={{ type: "tween", duration: 0.5 }}
      className="fixed top-0 right-0 w-full h-full text-black bg-[#FFF350] z-40 overflow-y-auto"
    >
      <svg className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <clipPath id="sidebarClip" clipPathUnits="objectBoundingBox">
            <path d="M0.7,0 C0.3,0 0,0.3 0,0.7 V1 H1 V0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="min-h-screen flex flex-col p-6 pt-40">
        {/* Navigation Links */}
        <nav className="flex-1">
          <ul className="text-[2.5rem] font-semibold space-y-4">
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
          <div className="flex gap-2">
            <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity" aria-label="YouTube">
              <Youtube className="w-4 h-4" />
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

