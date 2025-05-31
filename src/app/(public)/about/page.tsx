"use client";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Title level={1} className="text-center mb-8 dark:text-white">
        About Shadi Mubarak
      </Title>
      <div className="max-w-3xl mx-auto">
        <Paragraph className="text-lg mb-6 dark:text-gray-300">
          Shadi Mubarak is a trusted matrimonial platform dedicated to helping Muslim individuals find their perfect life partners.
        </Paragraph>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default AboutPage;