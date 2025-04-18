'use client';
import Image from 'next/image';
import { useState } from 'react';

const features = [
  {
    icon: '/cart.svg',
    heading: 'Shop',
    body: 'Engage with branded short form video ads, where the more you buy, the faster you can earn points',
  },
  {
    icon: '/round.svg',
    heading: 'Personalized',
    body: "Engage with personalized content that's relevant to your interests and spending patterns",
  },
  {
    icon: '/burger.svg',
    heading: 'At no cost',
    body: "Whether it's Dim sum for dinner or Tacos for lunch, Crate has you covered",
  },
];

export default function Availability() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <div
      id="section-availability"
      className="max-w-5xl mx-auto text-center px-4 sm:px-6"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-extralight py-2 mb-6 sm:mb-8 md:mb-12 lg:mb-14">
        Take Full Advantage
      </h2>

      <div className="flex flex-col gap-4 sm:gap-6">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          {features.slice(0, 2).map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col justify-center items-center border rounded-lg py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-14 flex-1 transition-all duration-300 ${
                hoveredIndex === index
                  ? 'bg-[#0080ff] text-white'
                  : 'bg-[#fafafa] text-black'
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="mb-4 sm:mb-6">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto">
                  {hoveredIndex !== index ? (
                    <Image
                      src={feature.icon}
                      alt={`${feature.heading} icon`}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <Image
                      src={feature.icon}
                      alt={`${feature.heading} icon`}
                      fill
                      className="object-contain invert brightness-0"
                    />
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2 sm:mb-3">
                  {feature.heading}
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-extralight">
                  {feature.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`flex flex-col justify-center items-center border rounded-lg py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-14 transition-all duration-300 ${
            hoveredIndex === 2
              ? 'bg-[#0080ff] text-white'
              : 'bg-[#fafafa] text-black'
          }`}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="mb-4 sm:mb-6">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto">
              {hoveredIndex !== 2 ? (
                <Image
                  src={features[2].icon}
                  alt={`${features[2].heading} icon`}
                  fill
                  className="object-contain"
                />
              ) : (
                <Image
                  src={features[2].icon}
                  alt={`${features[2].heading} icon`}
                  fill
                  className="object-contain invert brightness-0"
                />
              )}
            </div>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2 sm:mb-3">
              {features[2].heading}
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-extralight">
              {features[2].body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
