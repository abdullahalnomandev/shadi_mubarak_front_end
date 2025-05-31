"use client";
import { Form, Input, Typography } from "antd";

const { Title } = Typography;

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Title level={1} className="text-center mb-8 dark:text-white">
        Contact Us
      </Title>
      <Form className="max-w-lg mx-auto">
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Your Name" size="large" />
        </Form.Item>
        {/* Add more form fields */}
      </Form>
    </div>
  );
};

export default ContactPage;
