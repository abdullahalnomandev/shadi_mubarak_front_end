import profileMan from "@/assets/boy-create-1.jpg";
import niqab from "@/assets/girl.jpg";
import Image from "next/image";
import Link from "next/link";
import VideoPlayerButton from "../UI/VideoPlayerButton";
import { useTranslations } from "next-intl";

const CreateAccountSection = () => {
  const t = useTranslations("create_account_section");
  return (
    <>
      {/* Quote Section */}
      <div className='relative py-16 px-6 md:px-12 mx-4 max-w-4xl md:mx-auto text-center overflow-hidden'>
        <span className='absolute top-4 left-4 text-3xl animate-pulse select-none'>
          🌸
        </span>
        <span className='absolute bottom-4 right-4 text-3xl animate-pulse select-none'>
          🌺
        </span>
        <p className='italic text-2xl md:text-3xl text-gray-800 dark:text-slate-100 font-serif leading-relaxed'>
          {t("quote")}
        </p>
        <footer className='mt-6 text-gray-600 font-medium text-sm'>
          — {t("quote_source")}
        </footer>
      </div>

      {/* Create Profile Section */}
      <div className='flex flex-col md:flex-row items-center justify-between rounded-2xl shadow-md px-4 md:px-10 py-12 my-12 mx-4 max-w-6xl md:mx-auto gap-8'>
        {/* Left: Profile Image & Card */}
        <div className='relative w-full md:w-1/2 flex justify-center'>
          <Image
            src={profileMan}
            alt='Profile'
            width={400}
            height={500}
            className='rounded-2xl object-cover shadow-xl w-full md:w-[400px] lg:w-[450px] max-w-full'
            quality={90}
            placeholder='blur'
            priority
          />
          <div className='absolute top-2 left-0 md:left-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg px-2 py-1 flex items-center space-x-3 max-w-[260px]'>
            <div className='w-10 h-10 rounded-full border border-white-200 overflow-hidden'>
              <Image
                src={niqab}
                alt='Niqab'
                width={40}
                height={40}
                quality={90}
                placeholder='blur'
                priority
              />
            </div>

            <div className='flex flex-col'>
              <div className='font-semibold text-gray-900 text-sm leading-tight'>
                Fatema Binte Malek
              </div>
              <div className='text-blue-600 text-xs font-medium tracking-wide'>
                BAN · 1999 · 5&apos;3&quot;
              </div>
            </div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className='w-full lg:w-1/2 text-center lg:text-left space-y-8'>
          {/* Badge */}
          <div className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30 rounded-full text-sm font-semibold text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800'>
            {t("free_registration_badge")}
          </div>

          {/* Main heading */}
          <div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent leading-tight mb-6'>
              {t("main_heading_part1")}
              <span className='block bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent'>
                {t("main_heading_part2")}
              </span>
            </h2>

            <p className='text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8'>
              {t("description")}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4'>
            <Link href='/register' className='w-full sm:w-auto'>
              <button className='px-8 py-3 text-lg font-semibold bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-white rounded-lg w-full cursor-pointer'>
                {t("create_biodata_button")}
              </button>
            </Link>
            <VideoPlayerButton
              title={t("video_button_title")}
              videoId='RHuVlgjwOHA'
              variant='outline'
            />
          </div>

          {/* Trust indicators */}
          <div className='flex items-center justify-center lg:justify-start gap-6 pt-6 text-sm text-gray-500 dark:text-gray-400'>
            <div className='flex items-center gap-2'>
              <div className='flex -space-x-1'>
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className='w-6 h-6 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 border-2 border-white dark:border-slate-800'></div>
                ))}
              </div>
              <span className='font-medium'>{t("success_stories")}</span>
            </div>
            <div className='flex items-center gap-1'>
              <span>⭐</span>
              <span className='font-semibold'>{t("rating")}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccountSection;
