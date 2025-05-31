"use client";
import { Steps, Typography } from "antd";

const { Title } = Typography;

const HowItWorksPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Title level={1} className="text-center mb-8 dark:text-white">
        How It Works
      </Title>
      <Steps
        direction="vertical"
        current={-1}
        items={[
          {
            title: "Create Your Profile",
            description: "Sign up and create your detailed profile",
          },
          {
            title: "Browse Matches",
            description: "Search and browse through potential matches",
          },
          {
            title: "Connect",
            description: "Start conversations with potential matches",
          },
        ]}
      />
    </div>
  );
};

export default HowItWorksPage;
