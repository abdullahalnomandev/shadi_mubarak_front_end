"use client";
import { Card, Row, Col, Button, Badge } from "antd";
const UserConnectionDetails = () => {
  const packages = [
    {
      _id: "68037d5b2bd531ccb726c73f",
      name: "popular",
      connections: 1,
      description:
        "Most popular package with extended features and higher limits.",
      isSelected: true,
      price: 100,
      effectivePrice: 100,
    },
    {
      _id: "68037d712bd531ccb726c741",
      name: "basic",
      connections: 4,
      description: "Basic package ideal for individuals or small-scale use.",
      isSelected: false,
      price: 700,
      effectivePrice: 400,
    },
    {
      _id: "68037d982bd531ccb726c743",
      name: "standard",
      connections: 5,
      description: "Standard package suitable for small teams.",
      isSelected: true,
      price: 1000,
      effectivePrice: 900,
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Choose Your Connection Package
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the perfect package that suits your needs. Each package
            offers different numbers of connections to help you find your ideal
            match.
          </p>
        </div>

        <Row gutter={[24, 24]} justify="center">
          {packages.map((pkg) => (
            <Col xs={24} sm={12} lg={8} key={pkg._id}>
              <Card
                className={`h-full hover:shadow-lg transition-all duration-300 ${
                  pkg.name === "popular" ? "border-2 border-blue-500" : ""
                }`}
                style={{ padding: "2rem" }}
              >
                {pkg.name === "popular" && (
                  <Badge.Ribbon text="Most Popular" color="blue" />
                )}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 capitalize mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      ৳{pkg.effectivePrice}
                    </span>
                    {pkg.effectivePrice !== pkg.price && (
                      <span className="text-lg text-gray-500 line-through">
                        ৳{pkg.price}
                      </span>
                    )}
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-2 text-xl font-semibold !text-gray-700 mb-4">
                      <span>{pkg.connections}</span>
                      <span>Connections</span>
                    </div>
                    <p className="text-gray-600 mb-6">{pkg.description}</p>
                  </div>

                  <Button
                    type="primary"
                    size="large"
                    className={`w-full ${
                      pkg.name === "popular"
                        ? "!bg-blue-500 hover:!bg-blue-600"
                        : "!bg-gray-700 hover:!bg-gray-800"
                    }`}
                  >
                    Buy Connection
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Need help choosing? Contact our support team for guidance
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserConnectionDetails;
