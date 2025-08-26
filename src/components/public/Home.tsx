"use client";

import { useLayoutEffect } from "react";
import Banner from "./Banner";
import CreateAccountSection from "./CreateAccountSection";
import HowItWorks from "./HowItWorks";
import WhyYouChoose from "./WhyYouChoose";

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  
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
