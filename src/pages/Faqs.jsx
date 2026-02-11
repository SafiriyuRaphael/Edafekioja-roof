import { Link } from "react-router-dom";
import Questions from "../components/Questions";

const Faqs = () => {
  return (
    <main>
      <div className="h-[60vh] w-full flex items-center justify-center flex-col bg-[url('/edafekioja3.jpg')] bg-cover bg-center bg-black/70 bg-blend-darken">
        <h1 className="text-6xl md:text-7xl font-bold text-white">FAQ&apos;s</h1>
        <p className="font-extrabold pt-6 text-white">
         <Link to='/'> Home </Link> &gt; <span className="text-[#FF840E]">FAQs</span>
        </p>
      </div>
      <h2 className="text-center py-11 px-[10%] lg:text-[25px] text-xl">
        Here are some frequently asked questions, with answers to help you
        roofing make informed decisions about your roofing, doors and windows
        needs
      </h2>

      <Questions />
    </main>
  );
};

export default Faqs;
