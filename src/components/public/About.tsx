"use client";

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
  const stats = [
    {
      icon: <FaUsers className='w-6 h-6' />,
      label: "Active Members",
      value: "50,000+",
      description: "Verified profiles",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <FaHeart className='w-6 h-6' />,
      label: "Success Stories",
      value: "2,500+",
      description: "Happy marriages",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: <FaShieldAlt className='w-6 h-6' />,
      label: "Trust & Safety",
      value: "100%",
      description: "Secure platform",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <FaMosque className='w-6 h-6' />,
      label: "Islamic Values",
      value: "100%",
      description: "Shariah compliant",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const values = [
    {
      icon: <FaMosque className='w-8 h-8' />,
      title: "Islamic Principles",
      description:
        "We follow Islamic guidelines in every aspect of our matchmaking process, ensuring halal interactions and proper family involvement.",
      color: "text-purple-600",
    },
    {
      icon: <FaShieldAlt className='w-8 h-8' />,
      title: "Privacy & Security",
      description:
        "Your personal information is protected with advanced security measures. We maintain strict confidentiality throughout your journey.",
      color: "text-green-600",
    },
    {
      icon: <FaHandsHelping className='w-8 h-8' />,
      title: "Personal Support",
      description:
        "Our dedicated relationship managers provide personalized assistance to help you find your perfect match with care and understanding.",
      color: "text-blue-600",
    },
  ];

  const features = [
    "Advanced matching algorithm based on Islamic compatibility",
    "Family involvement and approval system",
    "Verified profiles with background checks",
    "Multi-language support (Bengali, English, Arabic)",
    "24/7 customer support and relationship guidance",
    "Mobile app for iOS and Android",
  ];

  const testimonials = [
    {
      text: "BiyerThikana helped us find our perfect match while respecting our Islamic values. The process was smooth and professional.",
      author: "Ahmed & Fatima",
      location: "Dhaka, Bangladesh",
    },
    {
      text: "The family involvement feature gave us confidence. We found our son's wife through this blessed platform.",
      author: "The Rahman Family",
      location: "Chittagong, Bangladesh",
    },
  ];

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
                بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
              </p>
              <p className='text-white/90 text-sm sm:text-base font-medium'>
                In the name of Allah, the Most Gracious, the Most Merciful
              </p>
            </div>
          </div>

          {/* Main Header */}
          <div className='text-center max-w-4xl mx-auto'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6'>
              About{" "}
              <span className='bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent'>
                BiyerThikana
              </span>
            </h1>
            <p className='text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed'>
              Bangladesh&apos;s Most Trusted Islamic Matrimony Platform
            </p>
            <p className='text-lg text-white/80 max-w-3xl mx-auto'>
              Connecting hearts, building families, and creating blessed unions
              through Islamic principles and modern technology
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
                <span>Our Story</span>
              </div>

              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-6'>
                Bringing Together Muslim Hearts Across Bangladesh
              </h2>

              <div className='space-y-4 text-gray-600 leading-relaxed'>
                <p>
                  BiyerThikana was born from a simple belief: every practicing
                  Muslim deserves to find their perfect life partner while
                  staying true to Islamic values and traditions. Founded in
                  2024, we have grown from a small initiative to
                  Bangladesh&apos;s most trusted Islamic matrimony platform.
                </p>
                <p>
                  Our platform bridges the gap between traditional matchmaking
                  and modern technology, creating a safe, secure, and halal
                  environment where Muslim families can find suitable matches
                  for their loved ones.
                </p>
              </div>

              <div className='mt-8'>
                <button className='inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300'>
                  Learn More <FaArrowRight className='w-4 h-4' />
                </button>
              </div>
            </div>

            <div className='bg-white rounded-3xl p-8 shadow-xl'>
              <h3 className='text-xl font-bold text-gray-900 mb-6'>
                Why Choose BiyerThikana?
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
              Our Core Values
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Everything we do is guided by Islamic principles and our
              commitment to helping Muslim families find happiness and
              compatibility.
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
                Our Mission
              </h3>
              <p className='text-gray-700 text-lg leading-relaxed'>
                To provide a trusted, secure, and Islamic platform where Muslim
                individuals and families can find compatible life partners while
                maintaining the highest standards of privacy, authenticity, and
                religious compliance.
              </p>
            </div>

            <div className='bg-white rounded-3xl p-10 shadow-lg border border-gray-100'>
              <div className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 text-white mb-6'>
                <FaGlobe className='w-8 h-8' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                Our Vision
              </h3>
              <p className='text-gray-700 text-lg leading-relaxed'>
                To become the leading Islamic matrimony platform globally, known
                for our commitment to Islamic values, successful matches, and
                the trust of Muslim families worldwide in helping them build
                blessed marriages.
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
              Success Stories
            </h2>
            <p className='text-lg text-gray-600'>
              Real families, real success stories
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
              Ready to Begin Your Journey?
            </h2>
            <p className='text-xl text-blue-100 mb-10 leading-relaxed'>
              Join thousands of Muslim families who have found their perfect
              matches through BiyerThikana. Your ideal partner might be just a
              click away.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/register'>
                <button className='bg-white cursor-pointer text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl'>
                  Create Your Profile
                </button>
              </Link>
              <Link href='/'>
                <button className='bg-transparent border-2 cursor-pointer border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300'>
                  Browse Profiles
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
