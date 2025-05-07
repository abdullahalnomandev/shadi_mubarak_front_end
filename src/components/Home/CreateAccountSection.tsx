import profileMan from "@/assets/boy-create-1.jpg";
import niqab from "@/assets/girl.jpg";
import Image from "next/image";
import { useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import VideoModal from "../UI/VideoModal";

const CreateAccountSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <VideoModal isOpen={isOpen} setIsOpen={setIsOpen} videoId="RHuVlgjwOHA" />

      {/* Quote Section */}
      <div className="relative py-16 px-6 md:px-12 mx-4 max-w-4xl md:mx-auto text-center overflow-hidden">
        <span className="absolute top-4 left-4 text-3xl animate-pulse select-none">
          🌸
        </span>
        <span className="absolute bottom-4 right-4 text-3xl animate-pulse select-none">
          🌺
        </span>
        <p className="italic text-2xl md:text-3xl text-gray-800 font-serif leading-relaxed">
          &quot;Marry the single people from among you and the righteous slaves
          and slave-girls. If you are poor, Allah (SwT) will make you rich
          through His favour; and Allah (SwT) is Bountiful, All-Knowing.&quot;
        </p>
        <footer className="mt-6 text-gray-600 font-medium text-sm">
          — Quran (24:32)
        </footer>
      </div>

      {/* Create Profile Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow-md px-4 md:px-10 py-12 my-12 mx-4 max-w-6xl md:mx-auto gap-8">
        {/* Left: Profile Image & Card */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <Image
            src={profileMan}
            alt="Profile"
            width={400}
            height={500}
            className="rounded-2xl object-cover shadow-xl w-full md:w-[400px] lg:w-[450px] max-w-full"
            quality={90}
            placeholder="blur"
            priority
          />
          <div className="absolute top-4 left-0 md:left-6 bg-white/90 backdrop-blur-sm rounded-full shadow-lg px-4 py-1 flex items-center space-x-3 max-w-[260px]">
            <Image
              src={niqab}
              alt="Niqab"
              width={44}
              height={44}
              className="rounded-full border border-gray-200"
              quality={90}
              placeholder="blur"
              priority
            />
            <div className="flex flex-col">
              <div className="font-semibold text-gray-900 text-sm leading-tight">
                Fatema Binte Malek
              </div>
              <div className="text-blue-600 text-xs font-medium tracking-wide">
                BAN · 1999 · 5&apos;3&quot;
              </div>
            </div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Create Your Profile Today
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-6 max-w-md">
            Creating a biodata is 100% free. Quickly get started in a few steps
            and explore thousands of profiles using filters like age,
            profession, and education.
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-6">
            <button className="bg-violet-700 hover:bg-violet-800 text-white font-semibold hover:scale-110 cursor-pointer rounded-full px-8 py-3 delay-100 transition duration-300  shadow-md">
              Create Your Biodata
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-white border border-rose-700 text-rose-700 font-semibold rounded-full px-6 py-3  hover:scale-110 shadow-md flex items-center gap-2 cursor-pointer transition delay-100 duration-300"
            >
              <IoPlayCircleOutline className="text-rose-600 text-xl md:text-xl animate-scale-loop" />

              <span className="text-sm md:text-base font-medium">
                Watch How It Works
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccountSection;
