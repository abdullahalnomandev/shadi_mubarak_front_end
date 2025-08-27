"use client";
import { Card, Col, Row, Typography } from "antd";
import { useTranslations } from "next-intl";
import React from "react";
import {
  FaCheckCircle,
  FaHeart,
  FaLock,
  FaStar,
  FaUsers,
  FaUserShield,
} from "react-icons/fa";

const { Title, Paragraph } = Typography;

const WhyYouChoose: React.FC = () => {
  const t = useTranslations("why_you_choose");

  const features = [
    {
      title: t("feature1_title"),
      description: t("feature1_description"),
      icon: <FaUserShield className='w-8 h-8' />,
      gradient: "from-blue-500 to-indigo-600",
      bgGradient:
        "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
      stats: t("feature1_stats"),
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      title: t("feature2_title"),
      description: t("feature2_description"),
      icon: <FaLock className='w-8 h-8' />,
      gradient: "from-rose-500 to-pink-600",
      bgGradient:
        "from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20",
      stats: t("feature2_stats"),
      color: "text-rose-600 dark:text-rose-400",
    },
    {
      title: t("feature3_title"),
      description: t("feature3_description"),
      icon: <FaHeart className='w-8 h-8' />,
      gradient: "from-purple-500 to-violet-600",
      bgGradient:
        "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20",
      stats: t("feature3_stats"),
      color: "text-purple-600 dark:text-purple-400",
    },
  ];

  const additionalFeatures = [
    { icon: <FaCheckCircle />, text: t("additional_feature1") },
    { icon: <FaUsers />, text: t("additional_feature2") },
    { icon: <FaStar />, text: t("additional_feature3") },
  ];

  return (
    <section className='relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 dark:from-blue-800/20 dark:to-purple-800/20 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-rose-200/30 to-pink-200/30 dark:from-rose-800/20 dark:to-pink-800/20 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-indigo-200/20 to-cyan-200/20 dark:from-indigo-800/10 dark:to-cyan-800/10 rounded-full blur-3xl'></div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* Header Section */}
        <div className='text-center mb-20'>
          {/* Badge */}
          <div className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-sm font-semibold text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-6'>
            <FaStar className='w-4 h-4 mr-2' />
            {t("trusted_badge")}
          </div>

          {/* Main Heading */}
          <h2 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent leading-tight'>
            {t("main_heading_part1")}
            <span className='block bg-gradient-to-r from-blue-600 via-purple-600 to-rose-600 bg-clip-text text-transparent'>
              {t("main_heading_part2")}
            </span>
          </h2>

          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            {t("description")}
          </p>
        </div>

        {/* Features Grid */}
        <Row gutter={[32, 32]} className='mb-16'>
          {features.map((feature, index) => (
            <Col xs={24} sm={24} lg={8} key={index}>
              <Card
                className='h-full group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 shadow-lg overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm'
                style={{ borderRadius: "24px" }}>
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className='relative z-10 p-8'>
                  {/* Icon with gradient background */}
                  <div className='relative mb-6'>
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <div className='text-white'>{feature.icon}</div>
                    </div>

                    {/* Stats badge */}
                    <div className='absolute -top-2 -right-2 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-lg border border-gray-200 dark:border-gray-700'>
                      <span className={`text-xs font-bold ${feature.color}`}>
                        {feature.stats}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className='text-center'>
                    <Title
                      level={3}
                      className='!mb-4 !text-2xl font-bold text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300'>
                      {feature.title}
                    </Title>

                    <Paragraph className='!mb-0 text-gray-600 dark:text-gray-300 text-base leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300'>
                      {feature.description}
                    </Paragraph>
                  </div>

                  {/* Hover effect indicator */}
                  <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Additional Features */}
        <div className='bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200/50 dark:border-gray-700/50'>
          <Row gutter={[32, 16]} align='middle'>
            <Col xs={24} lg={12}>
              <div className='text-center lg:text-left'>
                <h3 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                  {t("additional_feature_heading")}
                </h3>
                <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
                  {t("additional_feature_description")}
                </p>
              </div>
            </Col>

            <Col xs={24} lg={12}>
              <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4'>
                {additionalFeatures.map((item, index) => (
                  <div
                    key={index}
                    className='flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl hover:shadow-md transition-all duration-300 group cursor-pointer'>
                    <div className='text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300'>
                      {item.icon}
                    </div>
                    <span className='font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </div>

        {/* Bottom CTA */}
        <div className='text-center mt-16'>
          <div className='inline-flex items-center space-x-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group'>
            <div className='flex items-center space-x-2'>
              <FaHeart className='w-5 h-5 text-red-300 group-hover:animate-pulse' />
              <span className='font-semibold'>{t("cta_marriages")}</span>
            </div>
            <div className='w-px h-6 bg-white/30'></div>
            <div className='flex items-center space-x-2'>
              <FaStar className='w-5 h-5 text-yellow-300' />
              <span className='font-semibold'>{t("cta_rating")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyYouChoose;
