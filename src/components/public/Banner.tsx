import banner from "@/assets/main3.jpg";
import SearchForm from "./SearchForm";
import { useTranslations } from "next-intl";

const Banner = () => {
  const t = useTranslations("banner");
  return (
    <div className='relative w-full'>
      {/* Background Image Container */}
      <div
        className='relative sm:mx-2 md:mx-8 mt-2 md:mt-5  md:rounded-2xl overflow-hidden shadow-2xl'
        style={{ minHeight: "100vh" }}>
        {/* Background Image */}
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: `url(${banner.src})`,
            backgroundAttachment: "fixed",
          }}
        />

        {/* Enhanced Overlay Gradients */}
        <div className='absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/50 to-black/60' />
        <div className='absolute inset-0 bg-gradient-to-t from-rose-900/50 via-transparent to-purple-900/30 mix-blend-overlay' />
        <div className='absolute inset-0 bg-gradient-to-r from-rose-500/10 via-pink-500/5 to-purple-500/10 mix-blend-soft-light' />

        {/* Optional noise texture for softness */}
        {/* <div className='absolute inset-0 bg-[url("/noise.svg")] opacity-5 mix-blend-overlay' /> */}

        {/* Animated Decorative Blur Circles */}
        <div className='absolute top-20 left-10 w-32 h-32 bg-rose-400/10 rounded-full blur-3xl animate-pulse' />
        <div className='absolute top-40 right-16 w-24 h-24 bg-pink-400/10 rounded-full blur-2xl animate-pulse delay-300' />
        <div className='absolute bottom-32 left-1/4 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-700' />

        {/* Main Content */}
        <div className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col'>
          <div className='flex-1 flex flex-col justify-center items-center pt-16 '>
            {/* Trust Badge */}
            <div className='mb-6 md:mb-8'>
              <div className='inline-flex items-center px-6 py-3 bg-white/15 backdrop-blur-md rounded-full border border-white/25 shadow-lg'>
                <span className='text-sm md:text-base text-white font-medium flex items-center gap-2'>
                  <span className='text-lg'>🤝</span>
                  {t("trust_badge")}
                </span>
              </div>
            </div>

            {/* Heading */}
            <div className='text-center max-w-5xl mb-8 md:mb-12'>
              <h1 className='text-white font-extrabold mb-6 md:mb-8 py-4 leading-tight'>
                <span className='block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3'>
                  <span className='bg-gradient-to-r from-rose-300 via-pink-200 to-rose-300 bg-clip-text text-transparent font-extrabold drop-shadow-lg'>
                    {t("heading_part1")}
                  </span>
                </span>
                <span className='block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>
                  <span className='relative inline-block group'>
                    <span className='bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-lg'>
                      {t("heading_part2")}
                    </span>
                    <span className='absolute -bottom-2 md:-bottom-3 left-0 right-0 h-1 md:h-2 bg-gradient-to-r from-rose-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out rounded-full shadow-lg' />
                  </span>
                </span>
              </h1>

              <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100 font-light leading-relaxed max-w-4xl mx-auto mb-8 drop-shadow-lg'>
                {t("description")}
              </p>

              {/* Trust Indicators */}
              <div className='flex flex-wrap justify-center items-center gap-6 md:gap-10 pt-4 text-white/90'>
                {[
                  { label: t("verified_profiles"), color: "green" },
                  { label: t("privacy_protected"), color: "blue" },
                  { label: t("islamic_values"), color: "purple" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className='flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20'>
                    <div
                      className={
                        item.color === "green"
                          ? "w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"
                          : item.color === "blue"
                          ? "w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-lg"
                          : "w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-lg"
                      }
                    />
                    <span className='text-sm md:text-base font-medium'>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Search Form */}
          {/* <div className='relative -mb-16 md:-mb-20'>
            <div className='w-full max-w-6xl mx-auto'> */}
          <SearchForm />

          {/* </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
