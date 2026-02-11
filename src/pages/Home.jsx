import FirstSection from "../components/FirstSection";
import SlidingProjects from "../components/SlidingProjects";
import AboutUs from "../components/AboutUs";
import OurProjects from "../components/OurProjects";
import Testimonials from "../components/Testimonials";
import Questions from "../components/Questions";
import GetAQuote from "../components/GetAQuote";
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
