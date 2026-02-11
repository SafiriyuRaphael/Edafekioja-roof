import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const SlidingProjects = () => {
  const slides = useMemo(
    () => [
      { img: "/Projects/normalscape (2).jpg" },
      { img: "/Projects/LP (22).jpg" },
      { img: "/Projects/normalscape (11).jpg" },
      { img: "/Projects/normalscape (14).jpg" },
      { img: "/Projects/normalscape (16).jpg" },
      { img: "/Projects/normalscape (22).jpg" },
      { img: "/Projects/normalscape (23).jpg" },
      { img: "/Projects/normalscape (31).jpg" },
      { img: "/Projects/normalscape (34).jpg" },
      { img: "/Projects/LP (21).jpg" },
    ],
    []
  );

  const settings = useMemo(
    () => ({
      dots: true, // Enables dots (navigation) at the bottom
      infinite: true, // Infinite scrolling
      speed: 500, // Transition speed
      slidesToShow: 3, // Number of slides visible at once
      slidesToScroll: 1, // Number of slides to scroll per transition
      autoplay: true, // Enable autoplay
      autoplaySpeed: 2000, // Time interval between automatic slide transitions
      prevArrow: <button className="custom-prev">←</button>, // Custom previous arrow
      nextArrow: <button className="custom-next">→</button>, // Custom next arrow
      responsive: [
        {
          breakpoint: 1024, // For screens >= 1024px (desktop)
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768, // For screens >= 768px (tablets)
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480, // For screens >= 480px (mobile)
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }),
    []
  );

  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="w-3/4 m-auto">
        <div className="mt-20" aria-live="polite">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.img}
                alt={`Slide ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="size-96 rounded-md"
              />
            ))}
          </Slider>
        </div>
      </div>
      <button
        className="mt-14 bg-[#FF840E] text-black font-bold flex self-center px-7"
        onClick={() => navigate("/projects")}
      >
        Read More
      </button>
    </div>
  );
};

export default SlidingProjects;
