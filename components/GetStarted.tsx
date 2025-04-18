'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const content = [
  {
    topImage: '/food.png',
    topContent: 'Explore new restaurants daily on Crate',
    heading: 'Engage',
    content:
      'Earn points by watching promotional ad content and trade them in for restaurant food anywhere partnered with us',
    bottomImage: '/guy.png',
    bottomContent: 'Earn Points for every real ad impression watched',
  },
  {
    topImage: '/balloon.png',
    topContent: 'Follow Brands And Influencers',
    heading: 'Make Your Day',
    content: 'Find funny, relevant, relatable brand content on Crate',
    bottomImage: '/socks.png',
    bottomContent: 'Shop Amazing Deals On Crate',
  },
];

export default function GetStarted() {
  // Refs for scroll animations
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [bannerRef, bannerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [cardsRef, cardsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Set consistent height for all image containers
  const imageHeight = 'h-[500px]'; // Using a fixed height class that works for all cards

  return (
    <div
      id="section-getting-started"
      className="py-8 sm:py-12 md:py-16 max-w-4xl mx-auto text-center px-4"
    >
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 md:gap-14 mb-8 sm:mb-12 md:mb-16"
      >
        <div className="h-1 w-20 sm:w-[80px] md:w-[130px] bg-[#0080ff] hidden sm:block" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-extralight py-2">
          Getting Started
        </h2>
        <div className="h-1 w-20 sm:w-[80px] md:w-[130px] bg-[#0080ff] hidden sm:block" />
      </motion.div>

      <motion.div
        ref={bannerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={bannerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex flex-col mb-12 sm:mb-16 md:mb-24"
      >
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[550px] flex justify-center items-center rounded-t-md overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />

          <Image
            src="/eat.png"
            alt="Eliminate your Food Budget"
            fill
            className="object-cover object-center"
            priority
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center px-4 sm:px-6 py-8 sm:py-16 md:py-24 text-white z-10"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">
              Eliminate your Food Budget
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl max-w-xl">
              Make the most of your savings by shopping for what you love on
              Crate
            </p>
          </motion.div>
        </div>

        <div className="py-6 sm:py-8 md:py-10 bg-[#fafafa] flex flex-col gap-4 md:gap-6 items-center rounded-b-md shadow-sm">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black">
            Download Crate On Mobile
          </h3>

          <div className="flex gap-4 items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-10 sm:h-12"
              />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-10 sm:h-12"
              />
            </motion.a>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={cardsRef}
        initial={{ opacity: 0 }}
        animate={cardsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              {/* Top Image Container with fixed height */}
              <div className={`relative w-full ${imageHeight}`}>
                <Image
                  src={item.topImage}
                  alt={item.topContent}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="absolute inset-0 flex justify-center items-center">
                  <h3 className="text-white text-2xl md:text-3xl font-bold max-w-[300px] z-10 px-4">
                    {item.topContent}
                  </h3>
                </div>
              </div>

              <motion.div
                whileHover={{ backgroundColor: '#0070e0' }}
                transition={{ duration: 0.3 }}
                className="p-4 sm:p-6 bg-[#0080FF] flex flex-col justify-center items-center gap-3 min-h-52"
              >
                <h4 className="text-xl sm:text-2xl font-semibold text-white">
                  {item.heading}
                </h4>
                <p className="text-base sm:text-lg text-white">
                  {item.content}
                </p>
              </motion.div>

              <div className={`relative w-full ${imageHeight}`}>
                <Image
                  src={item.bottomImage}
                  alt={item.bottomContent}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="absolute inset-0 flex justify-center items-center">
                  <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold max-w-[300px] z-10 px-4">
                    {item.bottomContent}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
