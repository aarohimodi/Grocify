import React, { useContext, useEffect, useState } from "react";
import Container from "../ui/container/Container";
import logo from "../../assets/logo.png";
import DesktopMenu from "./DesktopMenu";
import Extras from "./Extras";
import MobileMenu from "./MobileMenu";
import UiContext from "../../context/UiContext";

function Navbar() {
  const { isMenuOpen } = useContext(UiContext);
  const [isScroll, setIsScrolled] = useState(false);
  useEffect(() => {
    const scrollEffect = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);
  return (
    <nav
      className={`bg-white  border border-gray-100 px-5 md:px-0 sticky  top-0  w-full z-20 ${isScroll ? "shadow-lg" : ""}`}
    >
      <Container>
        <div className="flex gap-2 py-6 items-center justify-between">
          {/* logo */}
          <div className="">
            <a href="#" className="text-3xl font-semibold ">
              Gr<span className="text-orange-500">O</span>cify
            </a>
          </div>
          <DesktopMenu />
          <Extras />

          {isMenuOpen && <MobileMenu status={isMenuOpen} />}
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
