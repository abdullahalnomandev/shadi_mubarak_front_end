import works from "@/assets/cupple.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

const HowItWorks = () => {
  const t = useTranslations("how_it_works");

  const steps = [
    {
      id: 1,
      title: t("step1_title"),
      description: t("step1_description"),
      bgColor: "bg-pink-500",
    },
    {
      id: 2,
      title: t("step2_title"),
      description: t("step2_description"),
      bgColor: "bg-violet-600",
    },
    {
      id: 3,
      title: t("step3_title"),
      description: t("step3_description"),
      bgColor: "bg-violet-600",
    },
    {
      id: 4,
      title: t("step4_title"),
      description: t("step4_description"),
      bgColor: "bg-pink-500",
    },
  ];

  return (
    <div className='container mx-auto px-4 sm:px-8 lg:px-20 py-16'>
      <div className='text-center pb-16'>
        <h2 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent leading-tight'>
          <span className='text-gray-700 dark:text-white'>{t("heading_part1")}</span>
          <span className='block bg-gradient-to-r from-blue-600 via-purple-600 to-rose-600 bg-clip-text text-transparent'>
            {t("heading_part2")}
          </span>
        </h2>
        <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
          {t("description")}
        </p>
      </div>
      <div className='flex flex-col md:flex-row gap-8 items-start'>
        {/* Column 1: Steps 1 & 2 */}
        <div className='w-full md:w-1/3 space-y-8'>
          {steps.slice(0, 2).map((step) => (
            <StepCard key={step.id} {...step} />
          ))}
        </div>

        {/* Column 2: Image */}
        <div className='w-full md:w-1/3 relative mb-4 md:mb-0'>
          <Image
            src={works}
            alt='Muslim Wedding'
            width={400}
            height={500}
            className=' mx-auto'
            priority
          />

          {/* Decorative Background - only on md+ */}
          <div className='hidden md:block absolute -z-10 top-4 right-4 w-full h-full  rounded-2xl'></div>
          <div className='hidden md:block absolute top-0 left-0 w-full h-full'>
            <div className='absolute -top-4 -left-4 w-20 h-20  rounded-full'></div>
            <div className='absolute -bottom-4 -right-4 w-16 h-16 rounded-full'></div>
          </div>
        </div>

        {/* Column 3: Steps 3 & 4 */}
        <div className='w-full md:w-1/3 space-y-8'>
          {steps.slice(2).map((step) => (
            <StepCard key={step.id} {...step} />
          ))}
        </div>
      </div>
    </div>
  );
};

const StepCard = ({
  id,
  title,
  description,
  bgColor,
}: {
  id: number;
  title: string;
  description: string;
  bgColor: string;
}) => {
  return (
    <div className='flex items-start gap-4'>
      <div
        className={`flex-shrink-0 ${bgColor} text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold`}>
        {id}
      </div>
      <div>
        <h3 className='text-xl font-bold  mb-2'>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HowItWorks;
