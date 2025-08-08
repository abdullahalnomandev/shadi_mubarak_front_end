"use client";

import { Tooltip } from "antd";
import { useEffect, useRef, useState } from "react";
import {
  FaCommentDots,
  FaFacebookMessenger,
  FaPhone,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";

const MessengerWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className='fixed bottom-4 right-2 z-50 flex flex-col items-end'>
      {/* Action Buttons */}
      <div
        className={`flex flex-col items-center gap-3 transform transition duration-500 ease-in-out origin-bottom ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0 pointer-events-auto"
            : "scale-90 opacity-0 translate-y-4 pointer-events-none"
        }`}>
        <Tooltip title='Call Us' placement='left'>
          <a
            href='tel:+8801741581512'
            className='bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition'>
            <FaPhone className='text-xl' />
          </a>
        </Tooltip>

        <Tooltip title='Chat on WhatsApp' placement='left'>
          <a
            href='https://wa.me/+8801741581512'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-green-400 hover:bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition'>
            <FaWhatsapp className='text-xl' />
          </a>
        </Tooltip>

        <Tooltip title='Messenger' placement='left'>
          <a
            href='https://m.me/yourpageusername'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-blue-500 hover:bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition'>
            <FaFacebookMessenger className='text-xl' />
          </a>
        </Tooltip>

        <Tooltip title='Close' placement='left'>
          <button
            onClick={() => setIsOpen(false)}
            className='text-white bg-gradient-to-r from-pink-500 to-rose-500 border-transparent hover:from-pink-600 hover:to-rose-600 hover:shadow-xl hover:scale-[1.02] focus:ring-pink-500 active:scale-[0.98] shadow-lg cursor-pointer w-12 h-12 rounded-full flex items-center justify-center transition'>
            <FaTimes className='text-xl' />
          </button>
        </Tooltip>
      </div>

      {/* Toggle Button */}
      {!isOpen && (
        <Tooltip title='Contact Us' placement='left'>
          <button
            onClick={() => setIsOpen(true)}
            className='text-white bg-gradient-to-r from-pink-500 to-rose-500 border-transparent hover:from-pink-600 hover:to-rose-600 hover:shadow-xl hover:scale-[1.02] focus:ring-pink-500 active:scale-[0.98] shadow-lg cursor-pointer w-12 h-12 rounded-full flex items-center justify-center transition mt-3'>
            <FaCommentDots className='text-2xl' />
          </button>
        </Tooltip>
      )}
    </div>
  );
};

export default MessengerWidget;
