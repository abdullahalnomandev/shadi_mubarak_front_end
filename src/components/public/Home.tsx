"use client";

import Banner from "./Banner";
import CreateAccountSection from "./CreateAccountSection";
import HowItWorks from "./HowItWorks";
import WhyYouChoose from "./WhyYouChoose";

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Banner />
      <CreateAccountSection />
      <HowItWorks />
      <WhyYouChoose />
    </div>
  );
};

export default Home;
