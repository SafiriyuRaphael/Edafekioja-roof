import { useState } from "react";
import Nav from "../Components/Nav";
import SideBar from "../Components/SideBar";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="sticky top-0 z-40"
    onClick={(e)=>setShowMenu(false)}>
      <Nav setShowMenu={setShowMenu} />
      <SideBar showBar={showMenu} />
    </header>
  );
};

export default Header;
