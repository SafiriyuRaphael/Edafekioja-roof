import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HeadNav from "./HeadNav";

const Nav = ({setShowMenu}) => {
  
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setShowNavBar(false);
    } else {
      setShowNavBar(true);
    }
    setLastScrollY(currentScrollY);
  };



  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className="" aria-label="Main navigation">
      <HeadNav/>

      <div
        className={`flex justify-between px-5 items-center w-screen  bg-black transition-transform duration-1000 ease-in-out ${
          showNavBar ? "transform translate-y-0" : "transform -translate-y-96"
        }`}
      >
        <div
          className={`flex w-screen justify-between max-w-[85vw] items-center`}
        >
          <img
            src="/Business card side 1-1.jpg"
            alt="Edafekioja logo - Company branding"
            width="200"
            className="rounded-3xl"
          />

          <ul
            className="lg:flex items-center gap-9 px-3 pt-9 pr-14 font-bold hidden whitespace-nowrap"
            aria-label="Main navigation links"
          >
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>
            <Link to="/services">
              <li>SERVICES</li>
            </Link>
            <Link to="/projects">
              <li>PROJECTS</li>
            </Link>
            <Link to="/contacts">
              <li>CONTACT US</li>
            </Link>
            <Link to="/faqs">
              <li>FAQ'S</li>
            </Link>
          </ul>
        </div>

        <button
          className="size-14 mr-6 cursor-pointer lg:hidden flex justify-center items-center"
          onClick={(e) => 
            { e.stopPropagation()
              setShowMenu(true)}}
          aria-label="Open menu"
        >
          <Menu />
        </button>
      </div>
    

    </nav>
  );
};

export default Nav;
