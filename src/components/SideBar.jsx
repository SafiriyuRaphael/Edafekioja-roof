import { Link } from "react-router-dom";

const SideBar = ({ showBar }) => {
  return (
    <>
    <div
      className={`transition-transform duration-1000 ${
        showBar ? "translate-x-0" : "-translate-x-full"
      } fixed inset-0 flex z-50`}
    >
      {/* Sidebar */}
      <nav aria-label="main Navigation">
        <ul className="flex flex-col h-[100vh] items-start text-2xl gap-5 bg-black/70 px-10 py-10 z-50">
          <Link to="/">
            {" "}
            <li>Home</li>{" "}
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/services"><li>Services</li></Link>
         <Link to='/projects'> <li>Projects</li></Link>
         <Link to='/contacts'> <li>Contact Us</li></Link>
         <Link to='faqs'> <li>Faq&apos;s</li></Link>
        </ul>
        <div>
          <h6>All rights reserved &copy; 2021</h6>
        </div>
      </nav>
    </div>
  
    </>
  );
};

export default SideBar;
