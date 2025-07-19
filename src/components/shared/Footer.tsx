import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Col, Layout, Row, Space, Typography } from "antd";
import Link from "next/link";

const { Footer: AntFooter } = Layout;
const { Title, Text } = Typography;

const Footer = () => {
  return (
    <AntFooter
      style={{ background: "none" }}
      className='!dark:bg-gray-800 pt-16 pb-8'>
      <div className='container mx-auto'>
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} className='!dark:text-white !text-gray-800'>
              About Us
            </Title>
            <Text className='!dark:text-gray-400 !text-gray-600'>
              Shadi Mubarak is your trusted partner in finding the perfect life
              partner. We believe in creating meaningful connections that last a
              lifetime.
            </Text>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Title level={4} className='!dark:text-white !text-gray-800'>
              Quick Links
            </Title>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/about'
                  className='!dark:text-gray-400 !dark:hover:text-white !text-gray-600 hover:text-gray-800'>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='!dark:text-gray-400 !dark:hover:text-white !text-gray-600 hover:text-gray-800'>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='/privacy'
                  className='!dark:text-gray-400 !dark:hover:text-white !text-gray-600 hover:text-gray-800'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/terms'
                  className='!dark:text-gray-400 !dark:hover:text-white !text-gray-600 hover:text-gray-800'>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Title level={4} className='!dark:text-white !text-gray-800'>
              Contact Info
            </Title>
            <ul className='space-y-2 !dark:text-gray-400 !text-gray-600'>
              <li>Email: info@shadimubarak.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Wedding Street, Love City</li>
            </ul>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Title level={4} className='!dark:text-white !text-gray-800'>
              Follow Us
            </Title>
            <Space size='large' className='!dark:text-gray-400 text-gray-600'>
              <FacebookOutlined className='text-2xl !dark:hover:text-white hover:text-gray-800 cursor-pointer' />
              <TwitterOutlined className='text-2xl !dark:hover:text-white hover:text-gray-800 cursor-pointer' />
              <InstagramOutlined className='text-2xl !dark:hover:text-white hover:text-gray-800 cursor-pointer' />
              <LinkedinOutlined className='text-2xl !dark:hover:text-white hover:text-gray-800 cursor-pointer' />
            </Space>
          </Col>
        </Row>

        <div className='text-center mt-8 pt-8 border-t !dark:border-gray-700 border-gray-200'>
          <Text className='!dark:text-gray-400 text-gray-600'>
            © {new Date().getFullYear()} Shadi Mubarak. All rights reserved.
          </Text>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;
