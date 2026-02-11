import FaqsLine from "./FaqsLine";
import { useNavigate } from "react-router-dom";

const Questions = ({ item }) => {
  const faqs = [
    {
      question: "What types of roofing services do you offer?",
      answer:
        "We offer a comprehensive range of roofing services, including roof installation, roof repairs, roof replacement, and maintenance for both residential and commercial buildings.",
    },
    {
      question: "What materials do you use for roofing?",
      answer:
        "We use high-quality materials, including metal roofing sheets, shingles, tiles, and other durable materials suitable for different climates and architectural designs.",
    },
    {
      question: "How can I tell if my roof needs repair or replacement?",
      answer:
        "Signs that your roof may need repair or replacement include water leaks, missing or damaged shingles, sagging roofs, and visible wear and tear. We can schedule an inspection to assess your roof’s condition and recommend the best solution.",
    },
    {
      question: "Do you provide warranty coverage on your services?",
      answer:
        "Yes, we offer warranty coverage on both materials and workmanship. The specific warranty terms depend on the product and service provided.",
    },
    {
      question: "How long does a typical roofing installation take?",
      answer:
        "The timeline for a roofing project depends on the size and complexity of the project. On average, most installations are completed within 1 to 3 days for residential properties.",
    },
    {
      question: "What types of doors do you supply and install?",
      answer:
        "We supply and install a wide range of doors, including security doors, steel doors, and glass doors for both interior and exterior use.",
    },
    {
      question: "Can you customize windows to fit unique designs?",
      answer:
        "Yes, we offer custom window solutions tailored to your specifications. Our team can design and install windows that match your desired style and size.",
    },
    {
      question:
        "What maintenance services do you provide for doors and windows?",
      answer:
        "We offer maintenance services, including lubrication of hinges, weatherproofing, and repairs for locks, handles, and frames to ensure your doors and windows remain functional and secure.",
    },
    {
      question: "How can I schedule a consultation or request a quote?",
      answer:
        "You can schedule a consultation or request a quote by contacting us through our website, phone, or email. Our team will get in touch to discuss your project needs and provide detailed information.",
    },
    {
      question:
        "Why should I choose Edafekioja for my roofing, doors, and windows needs?",
      answer:
        "We pride ourselves on delivering quality craftsmanship, premium materials, and exceptional customer service. Our experienced professionals are committed to ensuring your satisfaction with every project.",
    },
  ];

  const navigate = useNavigate();

  return (
    <section className="w-screen">
      <div className="flex flex-col gap-8">
        {item && (
          <>
            <h2 className="text-center py-11 px-[10%] lg:text-[25px] text-xl">
              Here are some frequently asked questions, with answers to help you
               make informed decisions about your roofing, doors and
              windows needs
            </h2>
            <div className="flex flex-col gap-8">
              {faqs.slice(0, 3).map((faq, i) => (
                <FaqsLine faq={faq} index={i} key={i} />
              ))}
            </div>
            <button
              className="mt-14  bg-[#FF840E] text-black font-bold flex self-center px-7"
              onClick={() => navigate("/faqs")}
            >
              {" "}
              Read More
            </button>
          </>
        )}
        {!item &&
          faqs.map((faq, index) => (
            <FaqsLine key={faq.question ?? index} faq={faq} index={index} />
          ))}
      </div>
    </section>
  );
};

export default Questions;
