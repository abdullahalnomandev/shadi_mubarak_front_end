"use client";
import { Button, Result } from "antd";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link href="/" passHref>
            <Button type="primary" size="large">
              Back Home
            </Button>
          </Link>
        }
      />
    </div>
  );
};

export default NotFound;