"use client";

import Link from "next/link";
import { useState } from "react";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is BiyerThikana and how does it work?",
    answer:
      "BiyerThikana is a trusted Bangladeshi Islamic matrimony platform that helps practicing Muslim individuals find their life partners. Our platform allows you to create detailed biodata, search for compatible matches based on Islamic values, and connect with potential partners through their guardians. We follow Islamic principles throughout the matchmaking process.",
    category: "general",
  },
  {
    id: 2,
    question: "How much does it cost to create and submit biodata?",
    answer:
      "Creating a basic biodata on BiyerThikana is completely FREE! You can browse profiles, create your biodata, and receive match suggestions without any cost. We offer premium membership plans starting from ৳500/month for advanced features like unlimited messaging, priority profile visibility, and enhanced search filters.",
    category: "pricing",
  },
  {
    id: 3,
    question: "Is BiyerThikana open to everyone?",
    answer:
      "BiyerThikana is exclusively designed for practicing Muslims who are seriously looking for marriage. We welcome Bangladeshi Muslims from all backgrounds, whether living in Bangladesh or abroad. All users must be 18+ years old and have genuine matrimonial intentions. We maintain strict verification processes to ensure authenticity.",
    category: "eligibility",
  },
  {
    id: 4,
    question: "What are the special requirements for creating biodata?",
    answer:
      "To create biodata on BiyerThikana, you need: Valid phone number and email for verification, Recent clear photograph (following Islamic guidelines), Educational and professional details, Family information, Religious practice details, and Guardian/family contact information. All information must be truthful and verifiable.",
    category: "requirements",
  },
  {
    id: 5,
    question:
      "How confidential is my information? What will be published publicly?",
    answer:
      "Your privacy is our top priority. Only basic information like age, education, location, and profession appears in search results. Personal details like phone numbers, exact address, and family specifics are only shared when you approve a match request. You have full control over what information to display and can hide your profile anytime.",
    category: "privacy",
  },
  {
    id: 6,
    question: "How do I search for suitable matches on BiyerThikana?",
    answer:
      "Our advanced search system allows filtering by age, education, location, profession, family background, religious practice level, and more. You can save searches, receive daily match suggestions, and use our compatibility algorithm to find the most suitable partners. Premium members get access to enhanced search features.",
    category: "matching",
  },
  {
    id: 7,
    question: "What happens after I find someone interesting?",
    answer:
      "When you find a potential match, you can express interest through our platform. If both parties show mutual interest, we facilitate initial communication through guardians/family members following Islamic protocols. Our relationship managers can also assist in the introduction process to ensure proper Islamic guidelines are followed.",
    category: "process",
  },
  {
    id: 8,
    question: "Do you verify the authenticity of profiles?",
    answer:
      "Yes! We have a comprehensive verification process including phone/email verification, document verification for education and profession, and manual profile review by our team. Verified profiles get special badges. We continuously monitor for fake profiles and take strict action against fraudulent accounts.",
    category: "security",
  },
  {
    id: 9,
    question: "Can I get assistance in the matchmaking process?",
    answer:
      "Absolutely! Our experienced relationship managers provide personalized matchmaking assistance, help in profile optimization, guide through Islamic marriage protocols, and offer counseling support throughout your journey. Premium members get dedicated relationship manager support.",
    category: "support",
  },
  {
    id: 10,
    question: "What makes BiyerThikana different from other matrimony sites?",
    answer:
      "BiyerThikana stands out with our strict Islamic values adherence, Bangladeshi cultural understanding, comprehensive verification system, guardian involvement in the process, personalized matchmaking assistance, and affordable pricing. We focus on quality matches rather than quantity, ensuring serious matrimonial intentions.",
    category: "difference",
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  //   const stats = [
  //     {
  //       icon: <FaUsers className='w-8 h-8' />,
  //       label: "Happy Couples",
  //       value: "100+",
  //     },
  //     {
  //       icon: <FaHeart className='w-8 h-8' />,
  //       label: "Success Stories",
  //       value: "10+",
  //     },
  //     {
  //       icon: <FaShieldAlt className='w-8 h-8' />,
  //       label: "Verified Profiles",
  //       value: "100%",
  //     },
  //   ];

  return (
    <section className='w-full pb-16 lg:pb-24 pt-12 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6'>
            <FaHeart className='w-4 h-4' />
            <span>Frequently Asked Questions</span>
          </div>

          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
            Everything You Need to Know About{" "}
            <span className='bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>
              BiyerThikana
            </span>
          </h1>

          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            BiyerThikana is Bangladesh&apos;s premier Islamic matrimony
            platform, helping thousands of practicing Muslims find their perfect
            life partners while maintaining Islamic values and traditions.
          </p>
        </div>

        {/* Stats Section */}
        {/* <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='bg-white dark:bg-slate-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700'>
              <div className='text-blue-600 dark:text-blue-400 mb-4 flex justify-center'>
                {stat.icon}
              </div>
              <div className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
                {stat.value}
              </div>
              <div className='text-gray-600 dark:text-gray-300 font-medium'>
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}

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
              Still Have Questions?
            </h3>
            <p className='text-blue-100 mb-8 text-lg max-w-2xl mx-auto'>
              Our friendly support team is here to help you find your perfect
              match. Get in touch with us anytime!
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/contact'>
                <button className='bg-white text-blue-600 cursor-pointer font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl'>
                  Contact Support
                </button>
              </Link>

              <Link href='/register'>
                <button className='bg-transparent border-2 cursor-pointer border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300'>
                  Create Your Biodata
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
