import Service from "../Components/Service"
import Installation from "../Components/Installation"
import { Link } from "react-router-dom"

const Services = () => {
  return (
    <main>
              <div className="h-[60vh] w-full flex items-center justify-center flex-col bg-[url('/edafekioja4.jpg')] bg-cover bg-center bg-black/70 bg-blend-darken">
        <h1 className="text-6xl md:text-7xl font-bold text-white">Services</h1>
        <p className="font-extrabold pt-6 text-white">
        <Link to='/'> Home </Link> &gt; <span className="text-[#FF840E]">Services</span>
        </p>
      </div>
        <Service/>
        <Installation/>
    </main>
  )
}

export default Services