import CountUp from "react-countup";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useView from "../Hooks/inview";

const AboutUs = ({ item }) => {
  const pics = [
    "/About/about1.png",
    "/About/about.png",
    "/About/about2.jpg",
    "/About/about3.jpg",
  ];

  const navigate = useNavigate();

  const {
    ref,
    controls,
    cardVariant3,
    cardVariants1,
    cardVariants2,
    containerVariants,
    inView,
  } = useView();

  const [currentPicIndex, setCurrentPicIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPicIndex((prevIndex) => (prevIndex + 1) % pics.length);
    }, 6000); // Change the interval time as per your requirement (3000ms = 3 seconds)

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <section>
      {/* Hero Section */}

      {/* Content Section */}
      <motion.div
        className="flex flex-col lg:flex-row py-16 px-3"
        animate={controls}
        ref={ref}
        variants={containerVariants}
        initial="hidden"
      >
        {/* Text Section */}
        <div className="w-full lg:w-1/2  text-black dark:text-white">
          <motion.h4
            className="text-[#FF840E] text-2xl md:text-3xl"
            variants={cardVariants2}
          >
            OUR STORY
          </motion.h4>
          <motion.p
            className="mt-4 text-lg leading-relaxed"
            variants={cardVariants2}
          >
            Welcome to Edafekioja, We specialise in the supply and installation
            of all sorts of Roofing Sheets, Windows and Doors, and Felt Laying
            with Polyethylene Carpets. We have been in the business since 1999,
            that is over two decades. Our goal is to offer Quick, Solid, Neat
            and Satisfactory Jobs to our Clients. Our workers have undergone
            various training in our field of business and we are still upgrading
            as the need arises.
            <br />
            <br />
            <span className="font-bold text-xl">
              Shelter With Style, Strength With Service.
            </span>
            Choose Edafekioja—your trusted roofing and construction partner.
          </motion.p>
          {item && (
            <>
              <motion.div
                variants={containerVariants}
                className="flex sm:gap-16 gap-4 font-extrabold justify-center mt-8"
              >
                <motion.div variants={cardVariants2}>
                  <h1 className="text-6xl">
                    {inView ? <CountUp end={250} duration={10} /> : 0}+
                  </h1>
                  <p className="text-[#FF840E] text-xl">Successful Projects</p>
                </motion.div>
                <motion.div
                  className="border-r-4"
                  variants={cardVariants2}
                ></motion.div>
                <motion.div variants={cardVariants2}>
                  <h1 className="text-6xl">
                    {inView ? <CountUp end={100} duration={10} /> : 0}+
                  </h1>
                  <p className="text-[#FF840E] text-xl">Satisfied Clients</p>
                </motion.div>
              </motion.div>
              <div className=" w-full flex justify-center">
                <motion.button
                  className="mt-14  bg-[#FF840E] text-black font-bold flex justify-center px-7"
                  onClick={(e) => navigate("/about")}
                  variants={cardVariants1}
                >
                  {" "}
                  Read More
                </motion.button>
              </div>
            </>
          )}
        </div>

        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 mt-6 md:mt-0 py-6"
          variants={cardVariant3}
        >
          <img
            src={pics[currentPicIndex]}
            alt="Representation of our office"
            className="rounded-3xl px-3 shadow-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
