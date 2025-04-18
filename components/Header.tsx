'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <nav
      id="global-nav"
      className={`w-full backdrop-blur-md shadow-sm px-4 lg:px-10 py-5 lg:py-6 flex justify-between items-center gap-6 sticky top-0 z-30 transition-all duration-300 ${
        scrollY > 20 ? 'bg-[#fafafaf2] shadow-md' : 'bg-[#fafafad6] shadow-sm'
      }`}
    >
      <a href="/" aria-label="Home page">
        <Image
          src={'/logo.svg'}
          alt="Crate Logo"
          width={150}
          height={34.5}
          className="w-[110px] lg:w-[150px]"
        />
      </a>

      <div className="hidden items-center gap-4 lg:flex">
        <motion.button
          className="bg-red-600 text-white rounded-full font-semibold px-4 py-1.5 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          For Advertisers
        </motion.button>
        <motion.button
          className="bg-red-600 text-white rounded-full font-semibold px-4 py-1.5 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          For Restaurants
        </motion.button>
        <motion.button
          className="bg-white border border-red-600 text-red-600 px-4 py-1.5 cursor-pointer rounded-full"
          whileHover={{
            scale: 1.05,
            backgroundColor: 'rgba(254, 226, 226, 0.5)',
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          Sign-up/Login
        </motion.button>
      </div>

      <button
        className="lg:hidden flex flex-col justify-center items-center z-50 px-4"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
      >
        <div className="relative w-6 h-4">
          <motion.span
            className="absolute h-0.5 bg-red-600 rounded w-6 transform origin-center"
            animate={{
              top: isMenuOpen ? '50%' : '0',
              rotate: isMenuOpen ? '45deg' : '0deg',
              y: isMenuOpen ? '-50%' : '0%',
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />

          <motion.span
            className="absolute h-0.5 bg-red-600 rounded w-6 transform top-1/2 -translate-y-1/2"
            animate={{
              opacity: isMenuOpen ? 0 : 1,
              x: isMenuOpen ? '100%' : '0%',
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />

          <motion.span
            className="absolute h-0.5 bg-red-600 rounded w-6 transform origin-center"
            animate={{
              bottom: isMenuOpen ? '50%' : '0',
              top: isMenuOpen ? 'auto' : 'auto',
              rotate: isMenuOpen ? '-45deg' : '0deg',
              y: isMenuOpen ? '50%' : '0%',
            }}
            style={{ bottom: isMenuOpen ? '50%' : '0' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
        </div>
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 h-screen bg-white z-40 lg:hidden overflow-hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div className="flex flex-col items-center mt-16     h-full px-6 py-8 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="w-full"
              >
                <motion.button
                  className="bg-red-600 text-white rounded-full font-semibold px-4 py-2.5 w-full"
                  whileTap={{ scale: 0.95 }}
                >
                  For Advertisers
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="w-full"
              >
                <motion.button
                  className="bg-red-600 text-white rounded-full font-semibold px-4 py-2.5 w-full"
                  whileTap={{ scale: 0.95 }}
                >
                  For Restaurants
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full"
              >
                <motion.button
                  className="bg-white border border-red-600 text-red-600 px-4 py-2 rounded-full w-full"
                  whileTap={{ scale: 0.95 }}
                >
                  Sign-up/Login
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
