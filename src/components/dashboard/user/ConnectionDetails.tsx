"use client";
import { useGetPackagesQuery } from "@/redux/api/package";
import { IPackage } from "@/types";
import { Card, Row, Col, Button, Badge, Skeleton, message } from "antd";
import AntModal from "../../UI/AntModal";
import { useState } from "react";
// import nogod from "@/assets/nagad.png";
import bcash from "@/assets/bkash.png";
import Image from "next/image";
import { useCreatePaymentMutation } from "@/redux/api/purchaseBiodata";
import { useRouter } from "next/navigation";

const UserConnectionDetails = () => {
  const { data, isLoading } = useGetPackagesQuery({});
  const [createPayment, { isLoading: isPaymentLoading }] =
    useCreatePaymentMutation();

  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState({
    package_id: "",
    method: "bkash",
  });

  const packages: IPackage[] = Array.isArray(data?.packages)
    ? data?.packages
    : [];

  if (isLoading) {
    return (
      <div className='p-6 bg-gray-50 min-h-screen'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <Skeleton.Input active size='large' className='mb-4' />
            <Skeleton active paragraph={{ rows: 2 }} />
          </div>

          <Row gutter={[24, 24]} justify='center'>
            {[1, 2, 3].map((key) => (
              <Col xs={24} sm={12} lg={8} key={key}>
                <Card className='h-full' style={{ padding: "2rem" }}>
                  <Skeleton active>
                    <div className='text-center'>
                      <Skeleton.Input active size='large' className='mb-4' />
                      <Skeleton.Input active size='large' className='mb-6' />
                      <Skeleton active paragraph={{ rows: 2 }} />
                      <Skeleton.Button active size='large' className='w-full' />
                    </div>
                  </Skeleton>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }

  const handleCheckout = async () => {
    try {
      const payment = await createPayment(paymentInfo);

      if (payment?.data?.redirectUrl) {
        router.push(payment?.data?.redirectUrl);
      }
    } catch (error: any) {
      message.error(error?.message || "Payment failed. Please try again.");
    }
    setIsModalOpen(false);
  };

  const paymentMethods = [
    { id: "bkash", name: "bKash", logo: bcash },
    // { id: "nogod", name: "Nagad", logo: nogod },
  ];

  const modelContent = (
    <div className='space-y-6 text-center'>
      <div className='flex items-center justify-center  gap-4'>
        {paymentMethods.map((method) => (
          <label
            key={method.id}
            className={`!relative !flex !flex-col !items-center !justify-center !w-32 !h-24 !px-4 !py-2 !border !rounded-lg !cursor-pointer !transition-all !duration-200 ${
              paymentInfo.method === method.id
                ? "!border-pink-500 !shadow-lg"
                : "!border-gray-300"
            }`}>
            <input
              type='radio'
              name='payment'
              className='!absolute !top-2 !left-2'
              defaultChecked={paymentInfo.method === method.id}
              onChange={() =>
                setPaymentInfo({ ...paymentInfo, method: method.id })
              }
            />
            <Image
              src={method.logo}
              alt={method.name}
              className='w-16 h-auto'
            />
          </label>
        ))}
      </div>

      <button
        onClick={handleCheckout}
        disabled={isPaymentLoading}
        className='w-full max-w-xs mx-auto flex items-center justify-center gap-2 px-6 py-3 bg-pink-500 text-white font-semibold cursor-pointer rounded-md hover:bg-pink-600 transition duration-200 disabled:opacity-70 disabled:cursor-not-allowed'>
        {isPaymentLoading && (
          <svg
            className='animate-spin h-5 w-5 text-white'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'>
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z'></path>
          </svg>
        )}
        {isPaymentLoading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );

  return (
    <div className='p-6 bg-gray-50 min-h-screen'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-3xl font-bold text-gray-800 mb-4'>
            Choose Your Connection Package
          </h1>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Select the perfect package that suits your needs. Each package
            offers different numbers of connections to help you find your ideal
            match.
          </p>
        </div>

        <Row gutter={[24, 24]} justify='center'>
          {packages?.map((pkg: IPackage) => (
            <Col xs={24} sm={12} lg={8} key={pkg._id}>
              <Card
                className={`h-full hover:shadow-lg transition-all duration-300 ${
                  pkg.name === "popular" ? "border-2 border-blue-500" : ""
                }`}
                style={{ padding: "2rem" }}>
                {pkg.name === "popular" && (
                  <Badge.Ribbon text='Most Popular' color='blue' />
                )}
                <div className='text-center'>
                  <h3 className='text-xl font-bold text-gray-800 capitalize mb-2'>
                    {pkg.name}
                  </h3>
                  <div className='flex items-center justify-center gap-2 mb-6'>
                    <span className='text-4xl font-bold text-gray-900'>
                      ৳{pkg.effectivePrice}
                    </span>
                    {pkg.effectivePrice !== pkg.price && (
                      <span className='text-lg text-gray-500 line-through'>
                        ৳{pkg.price}
                      </span>
                    )}
                  </div>

                  <div className='mb-6'>
                    <div className='flex items-center justify-center gap-2 text-xl font-semibold !text-gray-700 mb-4'>
                      <span>{pkg.connections}</span>
                      <span>Connections</span>
                    </div>
                    <p className='text-gray-600 mb-6'>{pkg.description}</p>
                  </div>

                  <Button
                    type='primary'
                    size='large'
                    className={`w-full ${
                      pkg.name === "popular"
                        ? "!bg-blue-500 hover:!bg-blue-600"
                        : "!bg-gray-700 hover:!bg-gray-800"
                    }`}
                    onClick={() => {
                      setIsModalOpen(true);
                      setPaymentInfo({
                        ...paymentInfo,
                        package_id: pkg._id,
                      });
                    }}>
                    Buy Connection
                  </Button>
                  <AntModal
                    title='Continue to checkout'
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onConfirm={handleCheckout}
                    footer={null}>
                    {modelContent}
                  </AntModal>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <div className='mt-12 text-center'>
          <p className='text-gray-500'>
            Need help choosing? Contact our support team for guidance
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserConnectionDetails;
