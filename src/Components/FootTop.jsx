import {
  Instagram,
  Facebook,
  Linkedin,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";
import TikTokIcon from "../Icons/TikTokIcon";

const FootTop = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 p-20">
        <div className="flex flex-col gap-6">
          <h3 className="border-l-4 border-l-[#FF840E] px-6">ABOUT US</h3>
          <p>
            Edafekioja specializes in providing premium-quality roofing, doors,
            and windows solutions. Our commitment to excellence, innovation, and
            superior customer service ensures your projects are completed with
            the highest standards of quality.
          </p>
        </div>

        <div className="flex flex-col gap-6 text">
          <h3 className="border-l-4 border-l-[#FF840E] px-6">CONTACTS</h3>
          <div className="flex flex-col gap-2 items-start">
            <p className="flex items-center gap-4">
              <Phone size={24} aria-label="Phone icon" />
              <p>Phone:</p>
              <a
                href="tel:+2348035122042"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:text-lg text-black dark:text-white"
              >
                +234-803-512-2042
              </a>
            </p>
            <p className="flex items-center gap-4">
              <Mail size={24} /> <p>Email:</p>
              <a
                href="mailto:edafekioja06@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:text-lg text-black dark:text-white"
              >
                edafekioja06@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-4">
              <img src="/whatsapp.png" alt="WhatsApp" className="h-6 w-6 rounded-xl dark:bg-none dark:rounded-none  bg-black" />{" "}
              <p>WhatsApp:</p>
              <a
                href="https://wa.me/2348035122042"
                target="_blank"
                className="sm:text-lg text-black dark:text-white whitespace-nowrap"
              >
                +234-803-512-2042
              </a>
            </p>
            <p className="flex items-center gap-4">
              {" "}
              <Instagram /> <p>Instagram:</p>
              <a
                href="https://www.instagram.com/edafekioja_?igsh=MWE3ZTNmaW90eGF3ag=="
                target="_blank"
                rel="noopener noreferrer"
                className="sm:text-lg text-black dark:text-white whitespace-nowrap"
              >
                edafekioja_
              </a>
            </p>

            <p className="flex items-center gap-4">
              {" "}
              <Facebook /> Facebook:
              <a
                href="https://www.facebook.com/share/18n4GGkUo5/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:text-lg text-black dark:text-white whitespace-nowrap"
              >
                Edafekioja
              </a>
            </p>

            <p className="flex items-center gap-4">
              {" "}
              <TikTokIcon /> <p>Tiktok:</p>
              <a
                href="https://www.tiktok.com/@edafekioja?_t=ZM-8t5Ktw7DUCU&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:text-lg text-black dark:text-white whitespace-nowrap"
              >
                edafekioja
              </a>
            </p>
            <p className="flex items-center gap-4">
              {" "}
              <Linkedin /> <p>Linkedin:</p>
              <a
                href="https://www.linkedin.com/company/edafekioja/"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:text-lg text-black dark:text-white whitespace-nowrap"
              >
                edafekioja
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="border-l-4 border-l-[#FF840E] px-6">OUR SERVICES</h3>
          <ul className="flex flex-col gap-2">
            <li className="flex">
              {" "}
              <ChevronRight /> Roof Installation and Repairs
            </li>
            <li className="flex">
              {" "}
              <ChevronRight /> Custom Windows Design and Installation
            </li>
            <li className="flex">
              {" "}
              <ChevronRight /> Door Supply and Installation
            </li>
            <li className="flex">
              {" "}
              <ChevronRight /> Roofing Inspections and Maintenance
            </li>
            <li className="flex">
              {" "}
              <ChevronRight /> Felt-laying with Polyethylene carpet
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FootTop;
