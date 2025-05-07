"use client";
import { Row, Typography } from "antd";

const { Title } = Typography;

const PricingPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Title level={1} className="text-center mb-8 dark:text-white">
        Pricing Plans
      </Title>
      <Row gutter={[24, 24]} className="max-w-5xl mx-auto">
        {/* Add pricing cards */}
      </Row>
    </div>
  );
};

export default PricingPage;
