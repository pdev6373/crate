'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const faqs = [
  {
    question: 'Is food on Crate all no cost?',
    answer:
      'Yes. All food on Crate is free and exchangeable for points you earn in-app by interacting with short form video ads and shopping.',
  },
  {
    question: 'How do I earn points?',
    answer:
      'Earning points on Crate is easy. Every ad impression watched, which takes two seconds of video play, is one point or more. Every ad you click are additional points. When you buy a product from an ad you click on, you may receive additional points and rewards which can elevate your account status to a premium consumer where you can unlock even faster points.',
  },
  {
    question: 'How many points do meals cost?',
    answer: 'Meals are priced by Crate and can range in between 100-510 points',
  },
  {
    question: 'When can I spend my points?',
    answer:
      "Once you've accumulated enough points in your account, you can freely order any meal using your points by choosing a date and time reservation to pick up your food at any restaurant participating with Crate.",
  },
  {
    question: 'How many points can I earn?',
    answer:
      'There are no limits for how many points a consumer can earn as long as your impressions meet our valid traffic policies and comply with our terms of service',
  },
  {
    question: 'Are ads personalized?',
    answer:
      "We personalize ads so the products and services you see are the most relevant to you. You can manage your ad personalization preferences within your account settings under 'interests and Brands.' Crate personalizes ads based on what you give us in your account which also includes browsing habits...",
  },
  {
    question: 'What is Policy Center?',
    answer:
      "Policy Center is a tool that helps you ensure you're up-to-date and compliant with our valid traffic and terms of service policies...",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-8 pb-20 px-4 mt-4">
      <div className="text-center flex flex-col gap-5 lg:gap-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 md:gap-14"
        >
          <div className="h-1 w-20 sm:w-[80px] md:w-[130px] bg-[#0080ff]" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-extralight py-2">
            FAQs
          </h2>
          <div className="h-1 w-20 sm:w-[80px] md:w-[130px] bg-[#0080ff]" />
        </motion.div>
        <p className="text-lg sm:text-xl lg:text-2xl font-extralight">
          Get answers to frequently asked questions about Crate as a Consumer
        </p>
      </div>
      <div className="flex flex-col">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border-b border-[#ccc] overflow-hidden py-6 px-1"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full text-left px-4 py-3 flex justify-between items-center cursor-pointer"
            >
              <span className="font-semibold text-lg sm:text-xl">
                {faq.question}
              </span>
              <span className="text-2xl lg:text-3xl">
                {openIndex === i ? '−' : '+'}
              </span>
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="text-base sm:text-lg px-4 py-3 text-gray-700">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
