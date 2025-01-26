import FirstSection from "../Components/FirstSection";
import SlidingProjects from "../Components/SlidingProjects";
import AboutUs from "../Components/AboutUs";
import OurProjects from "../Components/OurProjects";
import Testimonials from "../Components/Testimonials";
import Questions from "../Components/Questions";
import GetAQuote from "../Components/GetAQuote";
import { useEffect, useState } from "react";

const Home = () => {
  const [item, setItem] = useState(false);
  useEffect(() => {
    setItem(true);
  }, []);

  return (
    <div>
      <FirstSection />

      <AboutUs item={item} />
      <div className="px-4">
        <OurProjects item={item} />
        <SlidingProjects />
        <div className="my-20">
          <Testimonials />
        </div>
      </div>
      <Questions item={item} />
      <GetAQuote />
    </div>
  );
};

export default Home;
