import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useWindowSize from "../Hooks/useWindowSize";

const FirstSection = () => {
  const {width}= useWindowSize()
  const [smallScreen, setSmallScreen]= useState(false)

  useEffect(()=>{
    if (width < 750) {
      setSmallScreen(true)
    } else {
      setSmallScreen(false)
    }
  }, [width])

  const pic = [
    `${smallScreen ? "/edafekioja7.jpg" : "/edafekioja1.jpg"}`,
    "/edafekioja.jpg",
    "/edafekioja2.jpg",
    "/edafekioja3.jpg",
    "/edafekioja6.jpg",
    "/edafekioja5.jpg",
  ];
  const body = [
    {
      sentence: "Expert Roofing, Elegant Doors, Quality Windows",
      paragraph:
        "Your trusted partner for durable roofing, stylish doors and windows, and seamless installations. Bringing craftsmanship and excellence to every project",
    },
    {
      sentence: "Build Stronger, Live Better",
      paragraph:
        "We provide innovative solutions for modern homes and commercial spaces. Trust us to enhance durability, functionality, and aesthetics",
    },
    {
      sentence: "Transforming Spaces with Precision and Style",
      paragraph:
        "From roofs that protect to interiors that inspire, we deliver excellence in every detail. Your vision, our craftsmanship.",
    },
    {
      sentence: "Quality You Can Trust, Designs You'll Love",
      paragraph:
        "Reliable materials, expert installations, and timeless designs – everything you need to create a space that lasts.",
    },
  ];
  const [eachBody, setEachBody] = useState(0);
  const [pics, setPics] = useState(0);
  const [loadTime, setLoadTime] = useState(3000);

  const controls = useAnimation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        duration: 0.8,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
         ease: "easeInOut",
      },
    },
  };
  const cardVariants1 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  

  const navigate= useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setEachBody((prevIndex) => (prevIndex + 1) % body.length);
      setPics((prevIndex) => (prevIndex + 1) % pic.length);
    }, loadTime); // Change slide every 2 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, [loadTime, body.length]);

  useEffect(() => {
    const animate = async () => {
      await controls.start("hidden");
      await controls.start("visible");
    };
    animate();
  }, [eachBody, controls]);

  useEffect(() => {
    setLoadTime(pic[pics] === "/edafekioja1.jpg" || pic[pics] === "/edafekioja7.jpg" ? 3000 : 10000);
  }, [pics, pic]);

  return (
    <motion.div
      className="h-[100vh] flex flex-col items-center justify-center gap-4 relative "
      variants={containerVariants}
      animate={controls}
      initial="hidden"
    >
      <motion.div
        className="absolute inset-0 bg-black/80"
        style={{
          backgroundImage: `url(${pic[pics]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: pics === 0 ? "normal" : "darken",
          zIndex: pics === 0 ? 50 : -10,
        }}
        variants={cardVariants1}
      ></motion.div>
      <motion.p
        className="font-bold capitalize text-[15px] md:text-[20px] text-[#FF840E] text-center"
        variants={cardVariants}
      >
        {body[eachBody].sentence}
      </motion.p>
      <motion.h2
        variants={cardVariants}
        className="text-center text-2xl xl:px-44 xl:text-5xl md:px-10 md:text-4xl lg:5xl lg:px-24 uppercase leading-10 text-white"
      >
        {body[eachBody].paragraph}
      </motion.h2>
      <div>
        <motion.button
          variants={cardVariants}
          className="mt-10 p-5 font-extrabold bg-[#FF840E] text-black"
          onClick={(e)=>navigate('/contacts')}
        >
          CONTACT US
        </motion.button>{" "}
        <HashLink to="/#quotes" smooth className="text-black">
        <motion.button
          variants={cardVariants}
          className="mt-10 p-5 font-extrabold bg-[#FF840E] ml-4 text-black"
        >
         
          GET A QUOTE
        </motion.button>{" "}</HashLink>
      </div>
    </motion.div>
  );
};

export default FirstSection;
