"use client";
import React from "react";
import { Typography, Card, Row, Col, Button } from "antd";
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
import { districts } from "@/constants/districts";
import { genderOptions, maritalStatusOptions } from "@/constants/global";
import Form from "../Forms/Form";
import FormSelectField from "../Forms/FormSelectField";

const { Title, Paragraph } = Typography;

const Home = () => {
  const onSubmit = (values: unknown) => {
    console.log("Search values:", values);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* Banner Section */}
        <section
          className="relative h-[600px] bg-gradient-to-r from-rose-50 to-rose-100"
          style={{
            backgroundImage: 'url("/images/wedding-banner.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center relative z-10">
            <div className="text-center max-w-2xl mb-8">
              <Title level={1} className="!text-white text-5xl font-bold mb-4">
                Find Your Perfect Life Partner
              </Title>
              <Paragraph className="text-xl text-gray-100">
                Begin your journey to a beautiful marriage with our trusted
                matrimonial service
              </Paragraph>
            </div>

            {/* Search Form */}
            <div className="w-full max-w-4xl bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-8">
              <Form 
                submitHandler={onSubmit}
              >
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={12} md={8}>
                    <FormSelectField
                      options={genderOptions}
                      name="gender"
                      label="Looking for"
                      placeholder="Select Gender"
                      size="large"
                    />
                  </Col>

                  <Col xs={24} sm={12} md={8}>
                    <FormSelectField
                      options={maritalStatusOptions}
                      name="maritalStatus"
                      label="Marital Status"
                      placeholder="Select Marital Status"
                      size="large"
                    />
                  </Col>

                  <Col xs={24} sm={12} md={8}>
                    <FormSelectField
                      options={Object.entries(districts).flatMap(([district, areas]) => [
                        { value: district.toLowerCase(), label: `All ${district}` },
                        ...areas.map((area) => ({
                          value: `${district.toLowerCase()}-${area.toLowerCase()}`,
                          label: `${area} (${district})`
                        }))
                      ])}
                      name="district"
                      label="District"
                      placeholder="Select District"
                      size="large"
                      showSearch={true}
                      filterOption={(input: string, option: unknown) => {
                        if (!option || typeof option !== 'object') return false;
                        const opt = option as { value?: string; label?: string };
                        const value = opt.value || "";
                        const label = opt.label || "";
                        const searchInput = input.toLowerCase();
                        return (
                          value.toLowerCase().includes(searchInput) ||
                          label.toLowerCase().includes(searchInput)
                        );
                      }}
                    />
                  </Col>

                  <Col xs={24}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      className="w-full bg-rose-600 hover:bg-rose-700"
                    >
                      Search Partners
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </section>

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
                  description:
                    "All profiles are manually verified for authenticity",
                  icon: "🔒",
                },
                {
                  title: "Privacy First",
                  description: "Your privacy is our top priority",
                  icon: "🛡️",
                },
                {
                  title: "Success Stories",
                  description: "Thousands of successful marriages",
                  icon: "💑",
                },
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
