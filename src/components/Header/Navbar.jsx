import React from "react";
import logo from "../../Assets/B.png";
// import { FaWhatsapp } from "react-icons/fa";
import ThemeSwitcher from "../ThemeSwitcher";
import { Resume } from "../../pages/Resume";
const Navbar = () => {
  const whatsappNumber = '+918581869783';
  const message = 'Hii';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

  return (
    <>
      <div className="navbar">
        <nav>
          <img src={logo} alt="logo" />

          {/* <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={40} className="icon" />
          </a> */}
          <Resume/>
          <ThemeSwitcher/>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
