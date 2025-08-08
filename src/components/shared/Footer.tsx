// Simple Professional SVG Icons
const MailIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    className={className}>
    <path
      d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'
      stroke='currentColor'
      strokeWidth='2'
    />
    <polyline points='22,6 12,13 2,6' stroke='currentColor' strokeWidth='2' />
  </svg>
);

const PhoneIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    className={className}>
    <path
      d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'
      stroke='currentColor'
      strokeWidth='2'
    />
  </svg>
);

const LocationIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    className={className}>
    <path
      d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'
      stroke='currentColor'
      strokeWidth='2'
    />
    <circle cx='12' cy='10' r='3' stroke='currentColor' strokeWidth='2' />
  </svg>
);

const FacebookIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='currentColor'
    className={className}>
    <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
  </svg>
);

const TwitterIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='currentColor'
    className={className}>
    <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
  </svg>
);

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='currentColor'
    className={className}>
    <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
  </svg>
);

const LinkedInIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='currentColor'
    className={className}>
    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
  </svg>
);

const HeartIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='currentColor'
    className={className}>
    <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
  </svg>
);

const ChevronUpIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    className={className}>
    <polyline points='18,15 12,9 6,15' stroke='currentColor' strokeWidth='2' />
  </svg>
);

import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FacebookIcon, href: "#", label: "Facebook" },
    { icon: TwitterIcon, href: "#", label: "Twitter" },
    { icon: InstagramIcon, href: "#", label: "Instagram" },
    { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  ];

  const linkSections = [
    {
      title: t("quick_links"),
      links: [
        { href: "/about", label: t("about_us") },
        { href: "/contact", label: t("contact_us") },
        { href: "/privacy-policy", label: t("privacy_policy") },
        { href: "/terms-of-service", label: t("terms_of_service") },
        { href: "/support", label: t("support") },
        { href: "/faq", label: t("faq") },
      ],
    },
    {
      title: t("support"),
      links: [
        { href: "/help-center", label: t("help_center") },
        { href: "/customer-support", label: t("customer_support") },
        { href: "/safety-tips", label: t("safety_tips") },
        { href: "/success-stories", label: t("success_stories") },
      ],
    },
    {
      title: t("legal"),
      links: [
        { href: "/privacy-policy", label: t("privacy_policy") },
        { href: "/terms-conditions", label: t("terms_conditions") },
        { href: "/cookie-policy", label: t("cookie_policy") },
        { href: "/refund-policy", label: t("refund_policy") },
      ],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <footer className='bg-gray-50 dark:bg-gray-900 mt-4'>
        <div className='max-w-7xl mx-auto'>
          {/* Main Footer Content */}
          <div className='px-6 py-16'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
              {/* Brand & Contact */}
              <div className='lg:col-span-4'>
                <div className='mb-6'>
                  <h2 className='text-xl font-bold tracking-tight bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent'>
                    {t("brandName")}
                  </h2>
                  <p className='text-gray-600 dark:text-gray-300 mt-4 leading-relaxed'>
                    {t("description")}
                  </p>
                </div>

                {/* Contact Info */}
                <div className='space-y-3'>
                  <div className='flex items-center gap-3 text-gray-600 dark:text-gray-300'>
                    <MailIcon
                      className='text-blue-600 dark:text-blue-400'
                      size={18}
                    />
                    <span>{t("contact_email")}</span>
                  </div>
                  <div className='flex items-center gap-3 text-gray-600 dark:text-gray-300'>
                    <PhoneIcon
                      className='text-blue-600 dark:text-blue-400'
                      size={18}
                    />
                    <span>{t("contact_phone")}</span>
                  </div>
                  <div className='flex items-center gap-3 text-gray-600 dark:text-gray-300'>
                    <LocationIcon
                      className='text-blue-600 dark:text-blue-400'
                      size={18}
                    />
                    <span>{t("contact_address")}</span>
                  </div>
                </div>
              </div>

              {/* Links Sections */}
              <div className='lg:col-span-8'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                  {linkSections.map((section, idx) => (
                    <div key={idx}>
                      <h3 className='text-lg font-semibold text-gray-800 dark:text-white mb-4'>
                        {section.title}
                      </h3>
                      <ul className='space-y-3'>
                        {section.links.map((link, i) => (
                          <li key={i}>
                            <a
                              href={link.href}
                              className='text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'>
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className='border-t border-gray-200 dark:border-gray-700'></div>

          {/* Bottom Footer */}
          <div className='px-6 py-6'>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-6'>
              <div className='flex flex-col lg:flex-row items-center gap-4'>
                <p className='text-gray-500 dark:text-gray-400 text-sm'>
                  {t("copyright").replace("{{year}}", currentYear)}
                </p>
                <div className='flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400'>
                  <HeartIcon className='text-red-500' size={14} />
                  <span>{t("terms_conditions")}</span>
                </div>
              </div>

              <div className='flex items-center gap-6'>
                {/* Social Links */}
                <div className='flex items-center gap-4'>
                  {socialLinks.map(({ icon: Icon, href, label }, index) => (
                    <a
                      key={index}
                      href={href}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={label}
                      className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'>
                      <Icon size={20} />
                    </a>
                  ))}
                </div>

                {/* Back to Top */}
                <button
                  onClick={scrollToTop}
                  className='p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors'
                  aria-label={t("refund_policy")}>
                  <ChevronUpIcon size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
