import Banner from "./Banner";
import CreateAccountSection from "./CreateAccountSection";
import HowItWorks from "./HowItWorks";
import WhyYouChoose from "./WhyYouChoose";
import SearchForm from "./SearchForm";

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Banner />
      <SearchForm />
      <CreateAccountSection />
      <HowItWorks />
      <WhyYouChoose />
    </div>
  );
};

export default Home;
