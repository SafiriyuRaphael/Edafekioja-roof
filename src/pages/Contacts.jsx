import GetAQuote from "../components/GetAQuote";
import MyContact from "../components/MyContact";
import { Link } from "react-router-dom";

const Contacts = () => {


  return (
    <section
 
      className="  pt-12 bg-black"
    >
      <div className="h-[60vh] w-full flex items-center justify-center flex-col bg-[url('/edafekioja4.jpg')] bg-cover bg-center bg-black/70 bg-blend-darken">
        <h1 className="text-6xl md:text-7xl font-bold text-white">
          Contact Us
        </h1>
        <p className="font-extrabold pt-6 text-white">
        <Link to='/'> Home </Link> &gt; <span className="text-[#FF840E]">Contacts</span>
        </p>
      </div>
      <div className=" ">
        <MyContact />
        <GetAQuote />
      </div>
    </section>
  );
};

export default Contacts;
