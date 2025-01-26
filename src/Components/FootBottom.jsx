import React from "react";
import { Link } from "react-router-dom";

const FootBottom = () => {
  return (
    <section className="bg-[#FF840E] flex items-center justify-between px-3 py-3 text-black flex-col sm:flex-row sm:justify-between">
      <p className="text-center sm:text-left">
        Copyright and Legal Information &copy; 2025 Edafekioja. <span className="whitespace-nowrap">All rights reserved.</span> 
      </p>
      <ul className="flex gap-3 m-0 mt-3 sm:mt-0 justify-center sm:justify-start">
        <li><Link to="/" className="text-black">Home</Link></li>
        <li><Link to="/abouts" className="text-black">About</Link></li>
        <li><Link to="/services" className="text-black">Services</Link></li>
        <li><Link to="/projects" className="text-black">Projects</Link></li>
        <li><Link to="/contacts" className="text-black white whitespace-nowrap">Contact Us</Link></li>
        <li><Link to="/faqs" className="text-black">FAQs</Link></li>
      </ul>
    </section>
  );
};

export default FootBottom;
