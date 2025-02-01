import { Facebook, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import useView from "../Hooks/inview";
import { motion } from "framer-motion";

const Ceo = () => {
  const {
    ref,
    controls,
    cardVariant3,
    cardVariants2,
    containerVariants,
  } = useView();

  return (
    <motion.section
      className="py-11 flex flex-col lg:flex-row w-full items-center md:items-start  px-5"
      animate={controls}
      initial="hidden"
      variants={containerVariants}
      ref={ref}
    >
      <div className="lg:w-1/2 lg:pr-6 mb-6 lg:mb-0">
        <motion.h4
          className="text-[#FF840E] text-2xl md:text-3xl"
          variants={cardVariants2}
        >
          Meet Our CEO
        </motion.h4>
        <p className="leading-relaxed lg:text-xl xl:text-2xl">
          <motion.span variants={cardVariants2}>
            Avre Wilson is an entrepreneur, visionary leader, and the driving
            force behind EDAFEKIOJA, a leading provider of roofing, door, and
            window solutions. As the CEO of EDAFEKIOJA, Avre Wilson is deeply
            committed to delivering innovative and durable products that empower
            homes and businesses while enhancing their security and aesthetic
            appeal.{" "}
          </motion.span>
          <motion.span variants={cardVariants2} className="lg:block py-3">
            {" "}
            Driven by a foundation of faith, integrity, and an unwavering
            passion for excellence, Avre Wilson believes in the power of service
            and its impact on both people and businesses. With a heart for God
            and a dedication to uplifting others, he brings a unique perspective
            to the company, combining professional expertise with values that
            prioritize trust and client satisfaction.
          </motion.span>{" "}
          <motion.span variants={cardVariants2}>
            Under his leadership, EDAFEKIOJA has become synonymous with quality,
            reliability, and customer-focused solutions. Avre Wilson’s vision
            continues to inspire the team to set new standards in the industry
            while staying grounded in the principles of faith and service.
          </motion.span>
        </p>
      </div>
      <div className="lg:w-1/2 flex justify-center flex-col">
        <motion.img
          src="/About/ceo.jpg"
          alt="CEO Avre Wilson"
          className="w-full lg:w-auto rounded-lg shadow-inner lg:shadow-white"
          variants={cardVariant3}
        />
        <motion.h2 variants={cardVariant3} className="text-center">
          Avre wilson
        </motion.h2>
        <motion.div className="flex self-center gap-3" variants={cardVariant3}>
          <Link
            to="https://www.facebook.com/share/15ojKfEyt1/?mibextid=wwXIfr"
            target="_blank"
          >
            {" "}
            <Facebook className="size-8 text-black dark:text-white hover:fill-[#FF840E]" />
          </Link>
          <Link
            target="_blank"
            to="https://www.instagram.com/avrewilson?igsh=MWp2ZXY5Yndpc2szZQ=="
          >
            <Instagram className="size-8 text-black dark:text-white hover:fill-[#FF840E]" />{" "}
          </Link>
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/wilson-avre-5141222b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            <Linkedin className="size-8 text-black dark:text-white hover:fill-[#FF840E]" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Ceo;
