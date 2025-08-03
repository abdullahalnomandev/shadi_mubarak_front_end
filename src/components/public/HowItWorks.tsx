import works from "@/assets/cupple.png";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Create Biodata",
    description:
      "You can easily create a biodata on Niqah completely free of cost within some steps.",
    bgColor: "bg-pink-500",
  },
  {
    id: 2,
    title: "Search Biodata",
    description:
      "You can easily search biodata using many filters including age, profession, educational qualification, madhhab and more.",
    bgColor: "bg-violet-600",
  },
  {
    id: 3,
    title: "Contact with Guardians",
    description:
      "If someone likes your biodata or you like someone's biodata, you can directly contact their parents.",
    bgColor: "bg-violet-600",
  },
  {
    id: 4,
    title: "Get Married",
    description:
      "If you like the biodata and if the conversation is well, do your own inquiry & get married according to sunnah.",
    bgColor: "bg-pink-500",
  },
];

const HowItWorks = () => {
  return (
    <div className='container mx-auto px-4 sm:px-8 lg:px-20 py-16'>
      <div className='text-center pb-16'>
        <h2 className='text-3xl  font-bold mb-1 '>How it works?</h2>
        <p className='font-medium '>
          A very easy 4 step process to find your partner.
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
