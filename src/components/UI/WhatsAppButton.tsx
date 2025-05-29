"use client";

import { FaWhatsapp } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { Input } from "antd";
import { useState, useRef, useEffect } from "react";
import classNames from "classnames";

const MessengerWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!message.trim()) return;
    setMessages((prev) => [...prev, message.trim()]);
    const encoded = encodeURIComponent(message.trim());
    window.open(`https://wa.me/+8801741581512?text=${encoded}`, "_blank");
    setMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={toggleChat}
        className='fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white w-10 h-10 cursor-pointer rounded-full shadow-lg z-50 flex items-center justify-center transition-all'
        aria-label='Open WhatsApp Chat'>
        <FaWhatsapp className='text-2xl' />
      </button>

      {/* WhatsApp Chat Panel */}
      <div
        className={classNames(
          "fixed bottom-20 right-4 w-80 bg-white shadow-xl rounded-lg flex flex-col overflow-hidden transition-all duration-300 z-50",
          {
            "opacity-100 translate-y-0": isOpen,
            "opacity-0 translate-y-4 pointer-events-none": !isOpen,
          }
        )}>
        {/* Header */}
        <div className='bg-green-500 text-white p-3 font-semibold flex justify-between items-center'>
          <span>WhatsApp Support</span>
          <button
            onClick={toggleChat}
            className='text-white text-sm cursor-pointer'>
            ✕
          </button>
        </div>

        {/* Chat Body */}
        <div className='flex-1 bg-gray-100 p-3 space-y-2 overflow-y-auto h-64 text-sm'>
          {messages.map((msg, index) => (
            <div
              key={index}
              className='bg-green-100 self-end max-w-[80%] p-2 px-3 rounded-xl ml-auto shadow-sm'>
              {msg}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Footer */}
        <div className='bg-white border-t border-gray-200 p-2 flex items-center gap-2'>
          <Input.TextArea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            autoSize={{ minRows: 1, maxRows: 3 }}
            placeholder='Type a message...'
            className='flex-1 px-4 py-1 rounded-full resize-none border border-gray-300'
          />
          <button
            onClick={handleSend}
            className='text-green-600 text-2xl hover:scale-110 transition-transform cursor-pointer'>
            <IoSend />
          </button>
        </div>
      </div>
    </>
  );
};

export default MessengerWidget;
