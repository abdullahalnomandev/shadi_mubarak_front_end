import Banner from "./Banner";
import CreateAccountSection from "./CreateAccountSection";
import HowItWorks from "./HowItWorks";
import WhyYouChoose from "./WhyYouChoose";
import SearchForm from "./SearchForm";

const Home = () => {
  return (
    <>
    <Banner />
    <div className='min-h-screen flex flex-col max-w-7xl m-auto'>
      <SearchForm />
      <CreateAccountSection />
      <HowItWorks />
    </div>
    <WhyYouChoose />
    </>
  );
};

export default Home;
