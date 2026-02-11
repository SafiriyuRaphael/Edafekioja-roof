import { useState } from "react";
import Nav from "../components/Nav";
import SideBar from "../components/SideBar";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="sticky top-0 z-40"
    onClick={() => setShowMenu(false)}>
      <Nav setShowMenu={setShowMenu} />
      <SideBar showBar={showMenu} />
    </header>
  );
};

export default Header;
