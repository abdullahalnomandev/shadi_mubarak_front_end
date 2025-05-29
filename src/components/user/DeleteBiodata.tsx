"use client";
import React, { useState } from "react";
import { Button, Card, Typography, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import AntModal from "@/components/UI/AntModal";

const { Title, Text } = Typography;

const DeleteBioData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async () => {
    try {
      // Add your delete logic here
      message.success("Biodata deleted successfully");
      setIsModalOpen(false);
    } catch (err: any) {
      message.error(err?.message || "Failed to delete biodata");
    }
  };

  const modalContent = (
    <>
      <p>Are you absolutely sure you want to delete your biodata?</p>
    </>
  );

  return (
    <div className='min-h-[calc(100vh-80px)] flex items-center w-full justify-center p-4'>
      <Card className='w-full max-w-lg shadow-md'>
        <div className='text-center mb-8'>
          <ExclamationCircleOutlined className='text-6xl text-red-500 mb-4' />
          <Title level={2} className='text-gray-800'>
            Delete Your Biodata
          </Title>
          <Text className='text-gray-600 block mb-6'>
            This action cannot be undone. Please be certain before proceeding.
          </Text>
          <Button
            danger
            type='primary'
            size='large'
            onClick={() => setIsModalOpen(true)}
            className='min-w-[200px]'>
            Delete Biodata
          </Button>
        </div>
      </Card>

      <AntModal
        title='Confirm Deletion'
        okText='Yes, Delete'
        cancelText='Cancel'
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        danger>
        {modalContent}
      </AntModal>
    </div>
  );
};

export default DeleteBioData;
