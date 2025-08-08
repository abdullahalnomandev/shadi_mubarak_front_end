"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  FaArrowRight,
  FaCheckCircle,
  FaGlobe,
  FaHandsHelping,
  FaHeart,
  FaMosque,
  FaQuoteLeft,
  FaShieldAlt,
  FaStar,
  FaUsers,
} from "react-icons/fa";

const About = () => {
  const t = useTranslations("about");
  const stats = [
    {
      icon: <FaUsers className='w-6 h-6' />,
      label: t("stats.active_members.label"),
      value: t("stats.active_members.value"),
      description: t("stats.active_members.description"),
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <FaHeart className='w-6 h-6' />,
      label: t("stats.success_stories.label"),
      value: t("stats.success_stories.value"),
      description: t("stats.success_stories.description"),
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: <FaShieldAlt className='w-6 h-6' />,
      label: t("stats.trust_safety.label"),
      value: t("stats.trust_safety.value"),
      description: t("stats.trust_safety.description"),
      color: "from-green-500 to-green-600",
    },
    {
      icon: <FaMosque className='w-6 h-6' />,
      label: t("stats.islamic_values.label"),
      value: t("stats.islamic_values.value"),
      description: t("stats.islamic_values.description"),
      color: "from-purple-500 to-purple-600",
    },
  ];

  const values = [
    {
      icon: <FaMosque className='w-8 h-8' />,
      title: t("core_values.values.islamic_principles.title"),
      description: t("core_values.values.islamic_principles.description"),
      color: "text-purple-600",
    },
    {
      icon: <FaShieldAlt className='w-8 h-8' />,
      title: t("core_values.values.privacy_security.title"),
      description: t("core_values.values.privacy_security.description"),
      color: "text-green-600",
    },
    {
      icon: <FaHandsHelping className='w-8 h-8' />,
      title: t("core_values.values.personal_support.title"),
      description: t("core_values.values.personal_support.description"),
      color: "text-blue-600",
    },
  ];

  const features = t("features.list").split("\n");

  const testimonials = t("testimonials.stories")
    .split(";")
    .map((story) => {
      const [text, author, location] = story.split("|");
      return { text, author, location };
    });

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header Section with Bismillah */}
      <section className='relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800'>
        <div className='absolute inset-0 bg-black/10'></div>

        {/* Decorative Background */}
        <div className='absolute inset-0'>
          <div className='absolute top-20 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl'></div>
          <div className='absolute bottom-20 right-20 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl'></div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-300/5 rounded-full blur-3xl'></div>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28'>
          {/* Bismillah */}
          <div className='text-center mb-12'>
            <div className='inline-block p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl mb-8'>
              <p className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-relaxed'>
                {t("bismillah.arabic")}
              </p>
              <p className='text-white/90 text-sm sm:text-base font-medium'>
                {t("bismillah.translation")}
              </p>
            </div>
          </div>

          {/* Main Header */}
          <div className='text-center max-w-4xl mx-auto'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6'>
              <span className='bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent'>
                {t("header.title_highlight")}
              </span>
              <span className='sr-only'>-</span>
              {t("header.title_prefix")}{" "}
            </h1>
            <p className='text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed'>
              {t("header.subtitle")}
            </p>
            <p className='text-lg text-white/80 max-w-3xl mx-auto'>
              {t("header.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <div key={index} className='text-center group'>
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {stat.icon}
                </div>
                <div className='text-3xl font-bold text-gray-900 mb-2'>
                  {stat.value}
                </div>
                <div className='text-gray-700 font-semibold mb-1'>
                  {stat.label}
                </div>
                <div className='text-sm text-gray-500'>{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            <div>
              <div className='inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6'>
                <FaHeart className='w-4 h-4' />
                <span>{t("introduction.our_story_badge")}</span>
              </div>

              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-6'>
                {t("introduction.heading")}
              </h2>

              <div className='space-y-4 text-gray-600 leading-relaxed'>
                <p>{t("introduction.story_part1")}</p>
                <p>{t("introduction.story_part2")}</p>
              </div>

              <div className='mt-8'>
                <button className='inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300'>
                  {t("introduction.learn_more")}{" "}
                  <FaArrowRight className='w-4 h-4' />
                </button>
              </div>
            </div>

            <div className='bg-white rounded-3xl p-8 shadow-xl'>
              <h3 className='text-xl font-bold text-gray-900 mb-6'>
                {t("features.title")}
              </h3>
              <div className='space-y-4'>
                {features.map((feature, index) => (
                  <div key={index} className='flex items-start gap-3'>
                    <FaCheckCircle className='w-5 h-5 text-green-500 mt-0.5 flex-shrink-0' />
                    <span className='text-gray-600'>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
              {t("core_values.heading")}
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              {t("core_values.description")}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {values.map((value, index) => (
              <div
                key={index}
                className='bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 group border border-gray-100'>
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white ${value.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  {value.icon}
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  {value.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div className='bg-white rounded-3xl p-10 shadow-lg border border-gray-100'>
              <div className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white mb-6'>
                <FaStar className='w-8 h-8' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                {t("mission_vision.mission.title")}
              </h3>
              <p className='text-gray-700 text-lg leading-relaxed'>
                {t("mission_vision.mission.description")}
              </p>
            </div>

            <div className='bg-white rounded-3xl p-10 shadow-lg border border-gray-100'>
              <div className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 text-white mb-6'>
                <FaGlobe className='w-8 h-8' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                {t("mission_vision.vision.title")}
              </h3>
              <p className='text-gray-700 text-lg leading-relaxed'>
                {t("mission_vision.vision.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
              {t("testimonials.heading")}
            </h2>
            <p className='text-lg text-gray-600'>
              {t("testimonials.subheading")}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className='bg-gray-50 rounded-2xl p-8 border border-gray-100'>
                <FaQuoteLeft className='w-8 h-8 text-blue-500 mb-4' />
                <p className='text-gray-700 text-lg mb-6 leading-relaxed'>
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className='font-semibold text-gray-900'>
                    {testimonial.author}
                  </p>
                  <p className='text-sm text-gray-500'>
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='max-w-3xl mx-auto'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
              {t("cta.heading")}
            </h2>
            <p className='text-xl text-blue-100 mb-10 leading-relaxed'>
              {t("cta.description")}
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/register'>
                <button className='bg-white cursor-pointer text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl'>
                  {t("cta.create_profile")}
                </button>
              </Link>
              <Link href='/'>
                <button className='bg-transparent border-2 cursor-pointer border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300'>
                  {t("cta.browse_profiles")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
