"use client";

import Link from "next/link";
import { useTranslations } from 'next-intl';
import { useState } from "react";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

const FAQ = () => {
  const t = useTranslations('faq');

  // Get the items directly as they are already an array in the translation files
  const faqData: FAQItem[] = t.raw('items').map((item: any, index: number) => ({
    id: index + 1,
    question: item.question,
    answer: item.answer,
    category: 'general'
  }));
  
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className='w-full pb-16 lg:pb-24 pt-12 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6'>
            <FaHeart className='w-4 h-4' />
            <span>{t('badge')}</span>
          </div>

          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
            {t('header.title')}
          </h1>

          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            {t('header.description')}
          </p>
        </div>

        {/* FAQ Items */}
        <div className='max-w-4xl mx-auto'>
          <div className='space-y-4'>
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className='bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden'>
                <button
                  onClick={() => toggleItem(faq.id)}
                  className='w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors duration-200'>
                  <h3 className='text-lg font-semibold cursor-pointer text-gray-900 dark:text-white pr-4 leading-relaxed'>
                    {faq.question}
                  </h3>
                  <div
                    className='flex-shrink-0 ml-4 transition-transform duration-300'
                    style={{
                      transform: openItems.includes(faq.id)
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}>
                    {openItems.includes(faq.id) ? (
                      <FaMinus className='w-5 h-5 text-blue-600 dark:text-blue-400' />
                    ) : (
                      <FaPlus className='w-5 h-5 text-blue-600 dark:text-blue-400' />
                    )}
                  </div>
                </button>

                <div
                  className='overflow-hidden transition-all duration-300'
                  style={{
                    maxHeight: openItems.includes(faq.id) ? "500px" : "0",
                    opacity: openItems.includes(faq.id) ? 1 : 0,
                  }}>
                  <div className='px-6 pb-6'>
                    <div className='pt-2 border-t border-gray-100 dark:border-gray-700'>
                      <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-base'>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Call to Action */}
        <div className='mt-16 text-center'>
          <div className='bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 sm:p-12 text-white'>
            <h3 className='text-2xl sm:text-3xl font-bold mb-4'>
              {t('cta.title')}
            </h3>
            <p className='text-blue-100 mb-8 text-lg max-w-2xl mx-auto'>
              {t('cta.description')}
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/contact'>
                <button className='bg-white text-blue-600 cursor-pointer font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl'>
                  {t('cta.contact_support')}
                </button>
              </Link>

              <Link href='/register'>
                <button className='bg-transparent border-2 cursor-pointer border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300'>
                  {t('cta.create_biodata')}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
