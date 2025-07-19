"use client";

import AntModal from "@/components/UI/AntModal";
import { BioDataStatus } from "@/constants/bioData";
import { useDeleteBioDataMutation } from "@/redux/api/biodata";
import { useGetUserQuery } from "@/redux/api/user";
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Button, Card, Typography, message } from "antd";
import Link from "next/link";
import { useState } from "react";

const { Title, Text } = Typography;

interface DeleteBioDataProps {
  bioDataNo: string;
}

const DeleteBioData = ({ bioDataNo }: DeleteBioDataProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteBioData, { isLoading }] = useDeleteBioDataMutation();
  const { data: userData } = useGetUserQuery();

  const handleDelete = async () => {
    try {
      await deleteBioData(bioDataNo).unwrap();
      message.success("Biodata deleted successfully");
      setIsModalOpen(false);
    } catch (err: any) {
      message.error(err?.data || "Failed to delete biodata");
    }
  };

  const isBioDataDeleted =
    userData?.user?.bioData?.profileStatus === BioDataStatus.NOT_STARTED;

  if (!userData) {
    return <div>Loading...</div>;
  }

  if (isBioDataDeleted) {
    return (
      <div className='min-h-[calc(100vh-80px)] flex items-center justify-center px-4 bg-gray-50'>
        <Card
          className='w-full max-w-lg shadow-xl rounded-xl text-center py-12 px-8 border-0'
          style={{
            background: "linear-gradient(to bottom, #ffffff, #f8f9fa)",
          }}>
          <div className='flex flex-col items-center gap-6'>
            <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2'>
              <CheckCircleOutlined className='text-3xl text-green-500' />
            </div>
            <Title level={3} className='text-green-600 m-0'>
              Biodata Successfully Deleted
            </Title>
            <Text className='text-gray-600 text-lg'>
              Your biodata has been removed from our system. You can now create
              a new profile whenever you&apos;re ready.
            </Text>
            <Link href='/user/dashboard' className='mt-4'>
              <Button
                type='primary'
                size='large'
                className='min-w-[200px] h-12 text-base font-medium rounded-lg shadow-md hover:scale-105 transition-transform'>
                Return to Dashboard
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className='min-h-[calc(100vh-80px)] flex items-center justify-center px-4'>
      <Card className='w-full max-w-lg shadow-md text-center py-10 px-6'>
        <ExclamationCircleOutlined className='text-6xl text-red-500 mb-4' />
        <Title level={2} className='text-gray-800'>
          Delete Your Biodata
        </Title>
        <Text className='text-gray-600 block mb-6'>
          This action cannot be undone. Are you sure you want to proceed?
        </Text>
        <Button
          danger
          type='primary'
          size='large'
          onClick={() => setIsModalOpen(true)}
          loading={isLoading}
          className='min-w-[200px]'>
          Delete Biodata
        </Button>
      </Card>

      <AntModal
        title='Confirm Deletion'
        okText='Yes, Delete'
        cancelText='Cancel'
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        confirmLoading={isLoading}
        danger>
        <p>
          Are you absolutely sure you want to delete your biodata? This action
          cannot be undone.
        </p>
      </AntModal>
    </div>
  );
};

export default DeleteBioData;
