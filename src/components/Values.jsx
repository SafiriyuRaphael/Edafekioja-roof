import useView from "../hooks/inview";
import { motion } from "framer-motion";

const Values = () => {
  const {
    ref,
    controls,
    cardVariant3,
    cardVariants1,
    cardVariants2,
    containerVariants,
    cardVariants4,
  } = useView();
  return (
    <motion.section
      className="py-16 bg-gray-800 text-white"
      animate={controls}
      initial="hidden"
      ref={ref}
      variants={containerVariants}
    >
      <motion.h4
        className="grid place-content-center text-[#FF840E] text-lg uppercase tracking-wide overflow-x-hidden"
        variants={cardVariants4}
      >
        Core Values
      </motion.h4>

      <motion.h2
        className="text-center text-4xl sm:text-6xl font-bold mt-4"
        variants={cardVariants4}
      >
        Unveiling our{" "}
        <span className="text-[#FF840E] font-serif">core values</span>
        <br /> for lasting impact
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 px-6">
        {/* Mission */}
        <motion.article
          className="flex flex-col items-center gap-5 bg-gray-900 p-7 rounded-xl shadon"
          variants={cardVariants2}
        >
          <h3 className="text-2xl font-semibold">Mission</h3>
          <p className="text-center">
            Our mission is to provide durable, high-quality materials and
            services with integrity and professionalism, ensuring customer
            satisfaction while fostering a safe and sustainable community.
          </p>
        </motion.article>

        {/* Vision */}
        <motion.article
          className="flex flex-col items-center gap-5 bg-gray-900 p-7 rounded-xl shadon"
          variants={cardVariants1}
        >
          <h3 className="text-2xl font-semibold">Vision</h3>
          <p className="text-center">
            To be the trusted leader in roofing solutions, delivering
            exceptional quality, innovation, and long-lasting protection for
            homes and businesses.
          </p>
        </motion.article>

        {/* Trusted Services */}
        <motion.article
          className="flex flex-col items-center gap-5 bg-gray-900 p-7 rounded-xl shadon"
          variants={cardVariant3}
        >
          <h3 className="text-2xl font-semibold">Trusted Services</h3>
          <p className="text-center">
            Your satisfaction is our priority. We are committed to delivering
            dependable solutions that stand the test of time. With a focus on
            quality, professionalism, and customer care, we ensure that every
            roofing, door, and window project meets and exceeds expectations.
            Trust us to secure and beautify your home or business with services
            tailored to your needs.
          </p>
        </motion.article>
      </div>
      <div className="flex items-center justify-center">
        <motion.button
          className="mt-10 p-5 font-extrabold bg-[#FF840E]"
          variants={cardVariants1}
        >
          CONTACT US
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Values;
