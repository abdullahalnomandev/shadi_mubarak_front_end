import React, { useState } from "react";
import VideoPlayerButton from "../UI/VideoPlayerButton";
import AntModal from "../UI/AntModal";
import { message } from "antd";
import {
  useGetConnectionQuery,
  usePurchaseBiodataMutation,
} from "@/redux/api/purchaseBiodata";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

const ViewContact = ({ bioDataNo }: { bioDataNo: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [purchaseBiodata, { isLoading }] = usePurchaseBiodataMutation();
  const { data } = useGetConnectionQuery({});

  console.log("connections", data?.connections);

  const handleDelete = async () => {
    try {
      await purchaseBiodata({
        biodata_no: bioDataNo,
      });
      setIsModalOpen(false);
      message.success("Contact successfully unclocked");
    } catch (err: any) {
      message.error(err?.message || "Failed to delete biodata");
    }
  };
  const totalConnections = data?.connections?.total_connections ?? 0;

  const modalContent = (
    <div className='text-center space-y-4'>
      <p>
        Would you like to unlock this contact using 1 connection? This action
        will cost you 1 connection.
      </p>
    </div>
  );

  const noConnectionContent = (
    <div className='text-center max-w-md mx-auto p-6 rounded-2xl bg-white dark:bg-gray-900 space-y-6'>
      <h2 className='text-lg sm:text-xl font-semibold text-gray-800 dark:text-white'>
        Insufficient Connections
      </h2>
      <p className='text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed'>
        You don’t have enough connections to unlock this contact. To proceed,
        please purchase additional connections.
      </p>
      <Link href='/user/connection/details'>
        <button className='inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-md hover:from-purple-700 hover:to-indigo-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 cursor-pointer  focus:ring-offset-2 dark:focus:ring-offset-gray-900'>
          <FiShoppingCart className='w-5 h-5' />
          Purchase Connections
        </button>
      </Link>
    </div>
  );

  return (
    <table className='w-full border-t-3 border-gray-300 border-separate border-spacing-x-0 border-spacing-0.5 border rounded-sm border-t-gray-800 border-b-0 relative z-10'>
      <thead>
        <tr>
          <th
            className='w-full border-gray-300 dark:border-gray-600 py-2 text-center text-2xl font-medium'
            colSpan={2}>
            Contact
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className='not-odd:bg-gray-100'>
          <td className='w-1/2 text-center m-auto border-x-0 border border-gray-300 p-6 align-top'>
            <div className='space-y-4'>
              <h3 className='text-xl font-medium text-gray-900 dark:text-gray-100'>
                Premium Contact Access
              </h3>
              <p className='text-gray-600 dark:text-gray-300 max-w-md mx-auto'>
                To view the contact information of this biodatas parent, youll
                need to use 1 connection credit.
              </p>
              <button
                className='w-full sm:w-auto px-8 py-3 text-white font-medium rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transform transition-all duration-200 hover:scale-[1.02] focus:ring-2  focus:ring-offset-2 dark:focus:ring-offset-gray-800 cursor-pointer'
                onClick={() => setIsModalOpen(true)}>
                Unlock Contact Details
              </button>

              <AntModal
                title='Do you want to unlock this contact using 1 connection?'
                okText='Yes, Unlock'
                cancelText='Cancel'
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                confirmLoading={isLoading}
                onConfirm={handleDelete}
                {...(totalConnections > 0 ? {} : { footer: null })}>
                {totalConnections > 0 ? modalContent : noConnectionContent}
              </AntModal>
            </div>

            <div className='mt-10 text-center border-t border-gray-200 dark:border-gray-700 pt-6'>
              <h4 className='text-gray-700 dark:text-gray-300 font-medium mb-4'>
                Need help with connections?
              </h4>
              <VideoPlayerButton
                title='Learn How to unlock contact information'
                videoId='RHuVlgjwOHA'
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ViewContact;
