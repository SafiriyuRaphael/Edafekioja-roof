import { Facebook , Instagram, Linkedin } from "lucide-react"
import TikTokIcon from "../Icons/TikTokIcon"

const HeadNav = () => {
  return (
    <div className="flex justify-between items-center bg-gray-200">
    <div className="flex pl-1 sm:pl-12 gap-2 sm:gap-10 w-screen py-3">
      <a
        href="https://www.facebook.com/share/18n4GGkUo5/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook - Visit our page"
      >
        <Facebook className="text-black size-3 sm:size-6 hover:fill-[#FF840E]" />
      </a>
      <a
        href="https://www.instagram.com/edafekioja_?igsh=MWE3ZTNmaW90eGF3ag=="
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram - Visit our profile"
      >
        <Instagram className="text-black size-3 sm:size-6 hover:fill-[#FF840E]" />
      </a>
      <a
        href="https://www.linkedin.com/company/edafekioja/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn - Follow us"
      >
        <Linkedin className="text-black size-3 sm:size-6 hover:fill-[#FF840E]" />
      </a>
    </div>

    <div className="flex gap-2 sm:gap-5 pr-2">
      <div>
        <h6 className="whitespace-nowrap m-0 text-xs sm:text-md md:text-lg text-black">
          Call Us
        </h6>
        <p className="whitespace-nowrap text-sm sm:text-lg md:text-xl text-black">
          <a href="tel:+234-803-470-4407" className="text-inherit">
          +234-803-512-2042
          </a>
        </p>
      </div>
      <div className="border-l-2 border-black"></div>
      <div>
        <h6 className="whitespace-nowrap m-0 text-xs sm:text-md md:text-lg text-black ">
          Email Us
        </h6>
        <p className="whitespace-nowrap text-sm sm:text-lg md:text-xl text-black md:pr-10">
          <a
            href="mailto:edafekioja06@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit"
            aria-label="Email Edafekioja"
          >
            edafekioja06@gmail.com
          </a>
        </p>
      </div>
    </div>
  </div>
  )
}

export default HeadNav