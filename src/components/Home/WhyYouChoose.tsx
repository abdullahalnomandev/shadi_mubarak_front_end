import { Card, Col, Row, Typography } from "antd";
import { FaHeart, FaLock, FaUserShield } from "react-icons/fa";

const { Title, Paragraph } = Typography;

const features = [
  {
    title: "Verified Profiles",
    description:
      "All profiles undergo thorough verification process to ensure authenticity and security for our users.",
    icon: <FaUserShield className="text-violet-600 w-12 h-12" />,
  },
  {
    title: "Privacy First",
    description:
      "We prioritize your privacy with advanced security measures and strict data protection protocols.",
    icon: <FaLock className="text-pink-500 w-12 h-12" />,
  },
  {
    title: "Success Stories",
    description:
      "Join thousands of successful marriages. Our platform has helped countless couples find their perfect match.",
    icon: <FaHeart className="text-violet-600 w-12 h-12" />,
  },
];

const WhyYouChoose = () => {
  return (
    <section className="py-20 bg-gradient-to-b dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 dark:text-white">
            Why Choose Shadi Mubarak?
          </h2>
          <p className="max-w-2xl mx-auto dark:text-gray-300">
            Were dedicated to helping you find your perfect match while ensuring
            your journey is secure, private, and successful.
          </p>
        </div>

        <Row gutter={[32, 32]} className="items-stretch">
          {features.map((feature, index) => (
            <Col xs={24} sm={24} md={8} key={index}>
              <Card
                className="h-full transition-all duration-300 hover:shadow-lg shadow-sm border-2 dark:border-gray-700 [&_.ant-card-body]:dark:bg-gray-800 [&_.ant-card-body]:!p-0"
                style={{ padding: "2rem", backgroundColor: "transparent" }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 transform transition-transform duration-300 hover:scale-110">
                    {feature.icon}
                  </div>
                  <Title
                    level={4}
                    className="mb-4 text-xl font-bold dark:text-white !m-0"
                  >
                    {feature.title}
                  </Title>
                  <Paragraph className="mb-0 dark:text-gray-300">
                    {feature.description}
                  </Paragraph>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default WhyYouChoose;
