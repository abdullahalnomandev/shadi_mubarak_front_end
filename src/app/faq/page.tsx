"use client";
import { Collapse, Typography } from "antd";

const { Title } = Typography;

const FAQPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Title level={1} className="text-center mb-8 dark:text-white">
        Frequently Asked Questions
      </Title>
      <Collapse className="max-w-3xl mx-auto">{/* Add FAQ items */}</Collapse>
    </div>
  );
};

export default FAQPage;
