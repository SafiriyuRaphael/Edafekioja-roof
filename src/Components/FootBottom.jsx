import React from "react";
import { Link } from "react-router-dom";

const FootBottom = () => {
  return (
    <section className="bg-[#FF840E] flex items-center justify-between px-3 py-3 text-black flex-col sm:flex-row sm:justify-between">
      <p className="text-center sm:text-left">
        Copyright and Legal Information &copy; 2025 Edafekioja. <span className="whitespace-nowrap">All rights reserved.</span> 
      </p>
      <ul className="flex gap-2 sm:gap-3 m-0 mt-3 sm:mt-0 justify-center sm:justify-start">
        <li><Link to="/" className="text-black hover:text-white">Home</Link></li>
        <li><Link to="/about" className="text-black hover:text-white">About</Link></li>
        <li><Link to="/services" className="text-black hover:text-white">Services</Link></li>
        <li><Link to="/projects" className="text-black hover:text-white">Projects</Link></li>
        <li><Link to="/contacts" className="text-black hover:text-white white whitespace-nowrap">Contact Us</Link></li>
        <li><Link to="/faqs" className="text-black hover:text-white">FAQs</Link></li>
      </ul>
    </section>
  );
};

export default FootBottom;
