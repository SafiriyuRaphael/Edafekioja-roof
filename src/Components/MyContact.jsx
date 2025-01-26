import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import useView from "../Hooks/inview";
import { motion } from "framer-motion";
import TikTokIcon from "../Icons/TikTokIcon";

const MyContact = () => {
  const {
    cardVariant3,
   
    cardVariants2,
    containerVariants,
  
    controls,
    ref,
  } = useView();

  return (
    <motion.section
      className="lg:flex gap-8 items-start justify-center px-6 md:px-3 w-full p-10 mx-auto text-white"
      initial="hidden"
      animate={controls}
      ref={ref}
      variants={containerVariants}
    >
      <div className="flex flex-col gap-7 lg:w-1/2">
        <div className="flex flex-col gap-5">
          <motion.h2
            variants={cardVariants2}
            className="text-4xl lg:text-5xl bg-gradient-to-r from-orange-500 via-green-300 to-pink-600 bg-clip-text text-transparent animate-gradient bg-[length:200%]"
          >
            Get in Touch With Us Today!
          </motion.h2>
          <motion.p
            variants={cardVariants2}
            className="text-base sm:text-lg lg:text-xl font-bold"
          >
            We're here to help with all your roofing, door, felt laying and
            window needs. Whether you need a quote, have a question, or want to
            discuss your next project, our team is ready to assist you.
          </motion.p>
        </div>
        <div className="flex flex-col gap-4 sm:w-[70%] lg:w-full ">
          <motion.div
            variants={cardVariants2}
            className="flex items-center gap-4"
          >
            <Phone size={24} aria-label="Phone icon" />
            <p>Phone:</p>
            <a
              href="tel:+2348035122042"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              +234-803-512-2042
            </a>
          </motion.div>
          <motion.div
            variants={cardVariants2}
            className="flex items-center gap-4"
          >
            <Mail size={24} /> <p>Email:</p>
            <a
              href="mailto:edafekioja06@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              edafekioja06@gmail.com
            </a>
          </motion.div>
          <motion.div
            variants={cardVariants2}
            className="flex items-center gap-4"
          >
            <img src="/whatsapp.png" alt="WhatsApp" className="h-6 w-6" />{" "}
            <p>WhatsApp:</p>
            <a
              href="https://wa.me/2348035122042"
              target="_blank"
              className="text-lg"
              rel="noopener noreferrer"
            >
              +234-803-512-2042
            </a>
          </motion.div>
          <motion.div
            variants={cardVariants2}
            className="flex items-center gap-4"
          >
            {" "}
            <Instagram /> <p>Instagram:</p>
            <a
              href="https://www.instagram.com/edafekioja_?igsh=MWE3ZTNmaW90eGF3ag=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4"
            >
              edafekioja_
            </a>
          </motion.div>

          <motion.div
            variants={cardVariants2}
            className="flex items-center gap-4"
          >
            {" "}
            <Facebook /> Facebook:
            <a
              href="https://www.facebook.com/share/18n4GGkUo5/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4"
            >
              Edafekioja
            </a>
          </motion.div>

          <motion.div
            variants={cardVariants2}
            className="flex items-center gap-4"
          >
            {" "}
            <TikTokIcon /> <p>Tiktok:</p>
            <a
              href="https://www.tiktok.com/@edafekioja?_t=ZM-8t5Ktw7DUCU&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4"
            >
              edafekioja
            </a>
          </motion.div>
        </div>
      </div>
      <motion.div className="mt-7 lg:mt-0 lg:w-1/2 w-full" variants={cardVariant3}>
        <img
          src="/contactus.jpg"
          alt="Contact Us"
          className="rounded-xl w-full object-cover"
        />
      </motion.div>
    </motion.section>
  );
};

export default MyContact;
