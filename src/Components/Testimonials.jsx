import { motion } from "framer-motion";
import { Star } from "lucide-react";
import useView from "../Hooks/inview";

const Testimonials = () => {

  const {
    ref,
    controls,
    cardVariant3,
    cardVariants1,
    cardVariants2,
    containerVariants,
    cardVariants4,
    inView, opacity
  } = useView();

  const testimonials = [
    {
      comments:
        "I couldn’t be happier with the roofing solution provided by Edafekioja. The team was professional, timely, and delivered exactly what they promised. My new home looks stunning, and I feel confident knowing my investment is protected for years to come.",
      Name: "Mrs. Grace O.",
    },
    {
      comments:
        "When I needed new doors for my business, Edafekioja came highly recommended. Their team designed and installed doors that perfectly matched the modern style I wanted. The quality and attention to detail were beyond impressive.",
      Name: "Mr. Samuel E.",
    },
    {
      comments:
        "After a major storm damaged my roof, I was worried about finding a reliable company to fix it. Edafekioja didn’t just repair the damage—they gave me a stronger and more durable roof. I’m so grateful for their exceptional service!",
      Name: "Mrs. Blessing T.",
    },
    {
      comments:
        "The aluminum windows and doors we purchased from Edafekioja were top-notch. They’ve made our office more secure while adding a touch of elegance. I’ll definitely recommend them to anyone looking for quality work.",
      Name: "Mr. Adewale K.",
    },
    {
      comments:
        "Edafekioja transformed my home with their roofing and window services. The team was friendly, professional, and delivered outstanding results. It’s rare to find a company that values customer satisfaction as much as they do!",
      Name: "Project Manager, Contemporary Properties Ltd",
    },
    {
      comments:
        "As our roofing contractor, EDAFEKIOJA has been instrumental in delivering top-quality roofing solutions for our construction projects. Their professionalism, timely delivery, and attention to detail have made them a reliable partner for our projects.",
      Name: "Lead Engineer, Coleman Technical Industries Ltd",
    },
  ];

  return (
    <motion.section className="py-12 bg-gray-400" initial="hidden" animate={controls} ref={ref} variants={containerVariants}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 className="text-2xl font-bold text-center mb-8 text-gray-800" variants={cardVariants4}>
          What Our Customers Are Saying
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-gray-800"
              key={index}
              variants={opacity}
             
            >
              <p className="italic mb-4 text-sm">{item.comments}</p>
              <h3 className="text-lg font-bold text-gray-900">{item.Name}</h3>
              <div className="flex ">
              {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="fill-yellow-400/50 bg-contain size-5 " />
                  ))}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
