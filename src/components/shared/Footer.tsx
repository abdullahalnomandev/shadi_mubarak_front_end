import React from 'react';
import { Layout, Row, Col, Typography, Space } from 'antd';
import Link from 'next/link';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Footer: AntFooter } = Layout;
const { Title, Text } = Typography;

const Footer = () => {
  return (
    <AntFooter className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto">
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="text-white">About Us</Title>
            <Text className="text-gray-400">
              Shadi Mubarak is your trusted partner in finding the perfect life partner. We believe in creating meaningful connections that last a lifetime.
            </Text>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="text-white">Quick Links</Title>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="text-white">Contact Info</Title>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@shadimubarak.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Wedding Street, Love City</li>
            </ul>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="text-white">Follow Us</Title>
            <Space size="large" className="text-gray-400">
              <FacebookOutlined className="text-2xl hover:text-white cursor-pointer" />
              <TwitterOutlined className="text-2xl hover:text-white cursor-pointer" />
              <InstagramOutlined className="text-2xl hover:text-white cursor-pointer" />
              <LinkedinOutlined className="text-2xl hover:text-white cursor-pointer" />
            </Space>
          </Col>
        </Row>
        
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <Text className="text-gray-400">
            © {new Date().getFullYear()} Shadi Mubarak. All rights reserved.
          </Text>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;