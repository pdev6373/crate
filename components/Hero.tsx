'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Fredoka } from 'next/font/google';
const fredoka = Fredoka({ subsets: ['latin'], weight: ['400', '600', '700'] });

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const bubbleWord = {
  hidden: { opacity: 0, scale: 0.3, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
      mass: 1.2,
    },
  },
};

export default function Hero() {
  const headline = '🎉 Welcome to Crate!';
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        style={{
          y: scrollY * 0.15,
          translateY: 0,
        }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="/hero.png"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60 z-10"
      />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div className="mb-6 flex flex-col items-center">
          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg flex flex-wrap justify-center gap-2"
          >
            {headline.split(' ').map((word, i) => (
              <motion.span
                key={i}
                variants={bubbleWord}
                className={`${fredoka.className} inline-block`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: 'easeOut' }}
          className="text-lg md:text-2xl max-w-2xl text-white/90 mb-10 drop-shadow-md"
        >
          Watch fun ads, earn points, and get delicious food totally free from
          our restaurant partners!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <motion.button
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="px-8 py-3 bg-white/70 border border-red-600 text-red-600 font-bold rounded-full text-lg md:text-xl shadow-lg cursor-pointer hover:scale-[101%] transition-all"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
