import logo from "@/assets/logo.png";
import {
  EnvironmentOutlined,
  FacebookOutlined,
  HeartFilled,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Col, Divider, Layout, Row, Space, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";

const { Footer: AntFooter } = Layout;
const { Title, Text, Paragraph } = Typography;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FacebookOutlined, href: "#", label: "Facebook" },
    { icon: TwitterOutlined, href: "#", label: "Twitter" },
    { icon: InstagramOutlined, href: "#", label: "Instagram" },
    { icon: LinkedinOutlined, href: "#", label: "LinkedIn" },
  ];

  const linkSections = [
    {
      title: "Quick Links",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/how-it-works", label: "How It Works" },
        { href: "/blog", label: "Blog" },
        { href: "/faq", label: "FAQ" },
        { href: "/contact", label: "Contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { href: "/help-center", label: "Help Center" },
        { href: "/customer-support", label: "Customer Support" },
        { href: "/safety-tips", label: "Safety Tips" },
        { href: "/success-stories", label: "Success Stories" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/terms-conditions", label: "Terms & Conditions" },
        { href: "/cookie-policy", label: "Cookie Policy" },
        { href: "/refund-policy", label: "Refund Policy" },
      ],
    },
  ];

  return (
    <AntFooter className='!bg-gray-50 dark:!bg-gray-900 !p-0 mt-20'>
      <footer className='max-w-7xl mx-auto'>
        <div className='px-6 py-16'>
          <Row gutter={[48, 32]}>
            {/* Brand & Contact */}
            <Col xs={24} lg={8}>
              <Link href='/' className='flex items-center gap-3 mb-4'>
                <Image
                  src={logo}
                  alt='Shadi Mubarak Logo'
                  width={40}
                  height={40}
                />
                <Title
                  level={3}
                  className='!m-0 !text-gray-800 dark:!text-white'>
                  Shadi Mubarak
                </Title>
              </Link>
              <Paragraph className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                Your trusted partner in finding meaningful connections. We help
                create lasting relationships built on trust, compatibility, and
                love.
              </Paragraph>

              <div className='space-y-3 mt-6'>
                <ContactInfo
                  icon={MailOutlined}
                  text='support@shadimubarak.com'
                />
                <ContactInfo icon={PhoneOutlined} text='+88 01700-000000' />
                <ContactInfo
                  icon={EnvironmentOutlined}
                  text='Dhaka, Bangladesh'
                />
              </div>
            </Col>

            {/* Dynamic Link Sections */}
            {linkSections.map((section, idx) => (
              <Col xs={12} sm={8} lg={4} key={idx}>
                <Title
                  level={5}
                  className='!text-gray-800 dark:!text-white !mb-6'>
                  {section.title}
                </Title>
                <nav>
                  <ul className='space-y-3'>
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <Link
                          href={link.href}
                          className='text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </Col>
            ))}

            {/* Social & Credibility */}
            <Col xs={24} lg={4}>
              <Title
                level={5}
                className='!text-gray-800 dark:!text-white !mb-6'>
                Stay Connected
              </Title>
              <Paragraph className='text-gray-600 dark:text-gray-300 mb-4'>
                Follow us for updates and success stories
              </Paragraph>
              <Space size='large' className='mb-6'>
                {socialLinks.map(({ icon: Icon, href, label }, index) => (
                  <Link
                    key={index}
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={label}
                    className='text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200'>
                    <Icon className='text-xl' />
                  </Link>
                ))}
              </Space>
              <div className='flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400'>
                <HeartFilled className='text-red-500' />
                <span>Trusted by 50,000+ couples</span>
              </div>
            </Col>
          </Row>
        </div>

        {/* Divider */}
        <Divider className='!m-0 !border-gray-200 dark:!border-gray-700' />

        {/* Bottom Footer */}
        <div className='px-6 py-6'>
          <Row justify='space-between' align='middle' gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Text className='text-gray-500 dark:text-gray-400 text-sm'>
                © {currentYear} Shadi Mubarak. All rights reserved.
              </Text>
            </Col>
            <Col xs={24} md={12} className='text-right max-md:text-left'>
              <Space
                split={
                  <span className='text-gray-300 dark:text-gray-600'>|</span>
                }>
                {["/sitemap", "/accessibility", "/careers"].map((href, i) => (
                  <Link
                    key={i}
                    href={href}
                    className='text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors'>
                    {href
                      .replace("/", "")
                      .replace("-", " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase())}
                  </Link>
                ))}
              </Space>
            </Col>
          </Row>
        </div>
      </footer>
    </AntFooter>
  );
};

// Reusable contact info row
const ContactInfo = ({ icon: Icon, text }: { icon: any; text: string }) => (
  <div className='flex items-center gap-3 text-gray-600 dark:text-gray-300'>
    <Icon className='text-blue-600 dark:text-blue-400' />
    <Text className='text-gray-600 dark:text-gray-300'>{text}</Text>
  </div>
);

export default Footer;
