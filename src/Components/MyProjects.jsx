import OurProjects from "./OurProjects";
import { Link } from "react-router-dom";

const MyProjects = () => {
  return (
    <section>
      <div className="h-[60vh] w-full flex items-center justify-center flex-col bg-[url('/edafekioja.jpg')] bg-cover bg-center bg-black/70 bg-blend-darken">
        <h1 className="text-6xl md:text-7xl font-bold text-white">Projects</h1>
        <p className="font-extrabold pt-6 text-white">
        <Link to='/'> Home </Link> &gt; <span className="text-[#FF840E]">Projects</span>
        </p>
      </div>
      <div className="px-10">
        <OurProjects />
        <ol className="list-disc">
          <li>
            {" "}
            <h4 className="inline">
              {" "}
              Residential Roofing for Modern Homes:
            </h4>{" "}
            <p className="inline md:text-xl">
              {" "}
              We installed a durable, weather-resistant roof for a newly built
              residential property. Our choice of high-quality materials ensures
              longevity, while our team worked efficiently to meet the tight
              project deadline.{" "}
            </p>
          </li>
          <li>
            <h4 className="inline">
              Commercial Doors and Windows Installation:
            </h4>{" "}
            <p className="inline md:text-xl">
              {" "}
              For a commercial building, we designed and installed modern doors
              and windows that improve both aesthetic appeal and energy
              efficiency. Our products are built for strength, security, and
              style.{" "}
            </p>{" "}
          </li>
          <li>
            {" "}
            <h4 className="inline">Custom Roofing Solutions: </h4>{" "}
            <p className="inline md:text-xl">
              In each project we do, we provid a custom roofing solution to fit
              the unique architecture of any upscale property. The outcome has
              always been a perfect blend of functionality and design.
            </p>
          </li>{" "}
          <p className="md:text-xl">
            Every project we take on reflects our dedication to quality
            craftsmanship, innovation, and customer satisfaction. We understand
            that your space is important to you, and we’re here to make it safe,
            stylish, and secure.
          </p>
        </ol>
      </div>
    </section>
  );
};

export default MyProjects;
