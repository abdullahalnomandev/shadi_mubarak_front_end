"use client";
import React from 'react';
import {  Typography, Card, Row, Col } from 'antd';
import Header from '@/components/UI/Header';
import Footer from '@/components/UI/Footer';

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <Title level={2} className="text-center mb-16">
              Why Choose Shadi Mubarak?
            </Title>
            <Row gutter={[32, 32]}>
              {[
                {
                  title: "Verified Profiles",
                  description: "All profiles are manually verified for authenticity",
                  icon: "🔒"
                },
                {
                  title: "Privacy First",
                  description: "Your privacy is our top priority",
                  icon: "🛡️"
                },
                {
                  title: "Success Stories",
                  description: "Thousands of successful marriages",
                  icon: "💑"
                }
              ].map((feature, index) => (
                <Col xs={24} sm={8} key={index}>
                  <Card className="text-center h-full">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <Title level={4}>{feature.title}</Title>
                    <Paragraph>{feature.description}</Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;