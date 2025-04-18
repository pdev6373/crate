'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const locations = [
  {
    image: '/restaurant-one.png',
    name: 'The Cove on Castro',
    street: '434 Castro St',
    address: 'San Francisco, California 94110',
  },
  {
    image: '/restaurant-two.png',
    name: 'Tacos Del Barrio',
    street: '2817 24th St',
    address: 'San Francisco, California 94110',
  },
  {
    image: '/restaurant-three.png',
    name: 'Market Street Gyros',
    street: '1400 Market St',
    address: 'San Francisco, California 94102',
  },
];

const cities = [
  'Redwood City',
  'Santa Cruz',
  'Santa Monica',
  'West Hollywood',
  'Sherman Oaks',
  'Venice Beach',
  'Los Angeles',
  'Ocean Beach SD',
];

export default function Dining() {
  // Animation variants for consistent animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Improved threshold settings for better scroll triggers
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  const [bannerRef, bannerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [cardsRef, cardsInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: '-100px 0px',
  });

  const [citiesRef, citiesInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <div
      id="section-dining"
      className="py-4 md:py-8 max-w-5xl mx-auto text-center px-4 sm:px-6"
    >
      <motion.div
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? 'visible' : 'hidden'}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 md:gap-14 mb-8 sm:mb-12 md:mb-16"
      >
        <div className="h-1 w-20 sm:w-20 md:w-32 bg-[#0080ff] hidden sm:block" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-extralight py-2">
          Healthy Dining
        </h2>
        <div className="h-1 w-20 sm:w-20 md:w-32 bg-[#0080ff] hidden sm:block" />
      </motion.div>

      <motion.div
        ref={bannerRef}
        initial="hidden"
        animate={bannerInView ? 'visible' : 'hidden'}
        variants={fadeInUp}
        transition={{ duration: 0.7 }}
        className="flex flex-col mb-12 sm:mb-16 md:mb-24"
      >
        <div className="relative w-full h-56 sm:h-80 md:h-96 lg:h-[550px] flex justify-center items-center rounded-t-md overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />

          <Image
            src="/salad.png"
            alt="Healthy dining options"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
          />

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center px-4 sm:px-6 py-8 sm:py-10 md:py-16 text-white z-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-5 max-w-3xl">
              {`We're Committed To 50% Of Our Menu`}
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl">
              {`We're adding more Takeout Partners Regularly`}
            </p>
          </motion.div>
        </div>

        <div className="py-6 sm:py-8 lg:py-12 bg-[#0080ff] flex flex-col gap-4 items-center rounded-b-md px-4">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white">
            At Crate We Prioritize Health
          </h3>

          <p className="flex flex-wrap justify-center gap-2 sm:gap-4 items-center text-white text-base sm:text-lg lg:text-xl xl:text-2xl max-w-2xl font-light">
            Low Sodium, low added sugar, organic, high nutrient density food
            should be accessible to everyone
          </p>
        </div>
      </motion.div>

      <motion.div
        ref={cardsRef}
        initial="hidden"
        animate={cardsInView ? 'visible' : 'hidden'}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="mb-12 sm:mb-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-extralight py-2 mb-6 sm:mb-8">
          Available In
        </h2>

        <div className="flex flex-col gap-5 sm:gap-8">
          <div className="flex flex-col gap-1.5">
            <div className="bg-[#0080ff] text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-4 py-5 sm:py-7 rounded-lg">
              San Francisco (3)
            </div>
            <div className="relative w-full rounded-lg h-48 sm:h-64 md:h-80 lg:h-96">
              <Image
                src="/map.png"
                alt="San Francisco map"
                fill
                className="object-cover object-center rounded-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
              />
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={staggerChildren}
          >
            {locations.map((location, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
              >
                <div className="relative w-full pt-[60%]">
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </div>

                <div className="p-4 sm:p-6 bg-[#fafafa] flex flex-col justify-center items-center gap-2 flex-grow">
                  <h4 className="text-lg sm:text-xl font-semibold text-black">
                    {location.name}
                  </h4>

                  <div>
                    <p className="text-sm sm:text-base text-black">
                      {location.street}
                    </p>
                    <p className="text-sm sm:text-base text-black">
                      {location.address}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            ref={citiesRef}
            initial="hidden"
            animate={citiesInView ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="flex flex-col gap-6 sm:gap-8"
          >
            <div className="grid min-[390px]:grid-cols-2 sm:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4">
              {cities.map((city) => (
                <motion.div
                  key={city}
                  variants={fadeInUp}
                  transition={{ duration: 0.5 }}
                  className="bg-[#0080ff]/40 p-4 sm:p-6 lg:p-8 rounded-lg flex items-center justify-center"
                >
                  <p className="text-lg lg:text-xl text-white font-semibold">
                    {city}*
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="text-base sm:text-lg lg:text-xl font-extralight">
              * New locations coming soon
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
