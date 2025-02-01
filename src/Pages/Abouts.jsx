import AboutUs from "../Components/AboutUs";
import Values from "../Components/Values";
import Ceo from "../Components/Ceo";
import Testimonials from "../Components/Testimonials";
import { Link } from "react-router-dom";


const Abouts = () => {
  return (
    <main className="">
           <div className="h-[60vh] w-full flex items-center justify-center flex-col bg-[url('/abouthead.jpg')] bg-cover bg-center bg-black/50 bg-blend-darken">
        <h1 className="text-6xl md:text-7xl font-bold text-white">About</h1>
        <p className="font-extrabold pt-6 text-white">
        <Link to='/'> Home </Link> &gt; <span className="text-[#FF840E]">About</span>
        </p>
      </div>
        <AboutUs/>
        <Values/>
        <Ceo/>
        <Testimonials/>
        
    </main>
  )
}

export default Abouts