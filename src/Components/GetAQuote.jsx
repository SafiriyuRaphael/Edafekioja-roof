import useView from "../Hooks/inview";
import { motion } from "framer-motion";

const GetAQuote = () => {
  const { cardVariant3, cardVariants1 } = useView();
  return (
    <section className="py-16 bg-white px-7 mt-10  mx-0 flex flex-col-reverse lg:flex-row text-black bg-[url('/contact-left.png')]" id="quotes">
      <div className="lg:w-1/2  rounded-3xl">
      <h1 className="text-[#FF840E]">Get a quote</h1>
      <div className="sm:flex flex-col">
        <motion.p variants={cardVariant3} className="text-lg">
          At Edafekioja,We deliver top-quality roofing,door,and window solutions
          tailored to your needs.Whether building or upgrading, our expert team
          ensures reliable,affordable services.
          <span className="block font-bold mt-1">
            Request your quote today!
          </span>
        </motion.p>
        <motion.form
          variants={cardVariants1}
          action="https://formspree.io/f/xblleadl"
          method="POST"
        >
          <label htmlFor="name" className="sr-only">
            name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            id="name"
            name="name"
            required
            className="m-4 border-b-2 border-white focus:outline-none focus:border-b-8 ring-2 ring-black dark:text-white placeholder:text-black dark:placeholder:text-gray-300/50"
          />
          <label htmlFor="email" className="sr-only">
            Last name
          </label>
          <input
            type="email"
            placeholder="Email Address"
            id="email"
            name="email"
            className="m-4 border-b-2 border-white focus:outline-none focus:border-b-8 ring-2 ring-black dark:text-white placeholder:text-black dark:placeholder:text-gray-300/50 "
            required
          />
          <br />
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <input
            type="tel"
            placeholder="Phone Number"
            id="phone"
            name="phone"
            className="m-4 border-b-2 border-white focus:outline-none focus:border-b-8 ring-2 ring-black dark:text-white placeholder:text-black dark:placeholder:text-gray-300/50"
          />
          <label htmlFor="site_addr" className="sr-only">
            Phone number
          </label>
          <input
            type="text"
            placeholder="Site Address"
            id="site_addr"
            name="site_addr"
            className="m-4 border-b-2 border-white focus:outline-none focus:border-b-8 ring-2 ring-black dark:text-white placeholder:text-black dark:placeholder:text-gray-300/50 "
          />
          <br />
          <label htmlFor="services" className="sr-only">
            Service Needed:
          </label>
          <select
            name="services"
            id="services"
            className="m-4 border-b-2 border-white focus:outline-none focus:border-b-8 ring-2 ring-black dark:text-white placeholder:text-black dark:placeholder:text-gray-300/50 ml-4 mr-2"
          >
            <option value="" disabled selected hidden>
              Service Needed:
            </option>
            <option value="Roofing">Roofing</option>
            <option value="Doors">Doors</option>
            <option value="Windows">Windows</option>
            <option value="Felt Laying">Felt Laying</option>
            <option value="Renovations">Renovations</option>
            <option value="Others">Others</option>
          </select>
          <br />
          <textarea
            placeholder="Project Details/Comments"
            className="m-4 border-b-2 border-white focus:outline-none focus:border-b-8 ring-2 ring-black dark:text-white placeholder:text-black dark:placeholder:text-gray-300/50  w-1/2 h-24"
            required
            name="project/comment"
          />
          <br />
          <button
            type="submit"
            className="m-4 bg-[#FF840E] hover:bg-[#ff9800] focus:outline-none focus:ring-2 focus:ring-[#fca311] text-black px-6 py-2 font-bold"
          >
            Submit Request
          </button>
        </motion.form>
      </div>
      </div>
      <div className="lg:w-1/2 lg:h-full lg:pt-16">
      <img src="/contact-right.png" alt="" />
      </div>
    </section>
  );
};

export default GetAQuote;
