// import React from "react";
// import {motion} from "framer-motion";
// import logo from "../../Assets/B.png"
// import { FaLinkedin, FaGithub, FaEnvelope,FaInstagram,FaTwitter } from 'react-icons/fa';
// const Footer = () => {
//   const footerIcons = [
//     { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/bhupesh-kumar-35011224b' },
//     { icon: <FaGithub />, link: 'https://github.com/BhupeshB7' },
//     { icon: <FaEnvelope />, link: 'mailto:bhupeshkr2912@gmail.com' },
//     { icon: <FaInstagram />, link: 'https://www.instagram.com/bhupeshb7?igsh=ODVvMWd0bmQ0ZG10' },
//     { icon: <FaTwitter />, link: 'https://x.com/Bhupeshb7?t=F49fYUEO8Wj5I-jPaXL6CQ&s=09' },
//   ];
//   return (
//     <>
//       <footer className="footer ">
//        <motion.img className="footer-logo"
//        initial={{ opacity: 0, scale: 0.9 }}
//        animate={{ opacity: 1, scale: 1 }}
//        transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
//        src={logo} alt="footer-logo"
//        >
//        </motion.img>
//         <div className="footer-icon">
//         <div style={{ display: 'flex', justifyContent: 'space-between',gap: '15px',margin:'5px' }}>
//         {footerIcons.map((iconItem, index) => (
//           <a key={index} href={iconItem.link} target="_blank" rel="noopener noreferrer" className="footer-icon-item">
//             {iconItem.icon}
//           </a>
//         ))}
//       </div>
//         </div>
//         <motion.h5 className="footer-copyright"
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
//         >
//           Bhupesh Kumar &copy;2024
//         </motion.h5>
//       </footer>
//     </>
//   );
// };

// export default Footer;

import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaHome,
  FaPhone,
  FaPrint,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../../Assets/B.png";
import ThemeSwitcher from "../ThemeSwitcher";
const footerIcons = [
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/bhupesh-kumar-35011224b",
  },
  { icon: <FaGithub />, link: "https://github.com/BhupeshB7" },
  { icon: <FaEnvelope />, link: "mailto:bhupeshkr2912@gmail.com" },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/bhupeshb7?igsh=ODVvMWd0bmQ0ZG10",
  },
  {
    icon: <FaTwitter />,
    link: "https://x.com/Bhupeshb7?t=F49fYUEO8Wj5I-jPaXL6CQ&s=09",
  },
];

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:b29.bhupesh@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+918581869783";
  };

  const handleWhatsappClick = () => {
    window.location.href = "https://wa.me/918581869783";
  };
  return (
    <div className="mt-5">
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#1c2331" }}
      >
        {/* Section: Social media */}
        <section
          className="flex justify-between p-4 bg-slate-700"
          // style={{ backgroundColor: "rgb(195, 185, 58)" }}
        >
          <div className="me-5">
            <ThemeSwitcher/>
          </div>
          <div className="flex space-x-4">
            {footerIcons.map(({ icon, link }, index) => (
              <motion.a
                key={index}
                href={link}
                className="text-white"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </section>
        <section className="footer-content">
          <div className="col-1">
            <motion.img
              className="footer-logo"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
              src={logo}
              alt="footer-logo"
            ></motion.img>
          </div>
          <div className="col-2">
            <h6 className="text-white">Links</h6>
            {/* <hr className="my-1 mx-auto w-24 bg-amber-200 h-0.5" /> */}
            <div className="text-center my-1 mx-auto">
              <span className="inline-block w-1 h-1 rounded-full bg-slate-500 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-slate-300 ml-1"></span>
              <span className="inline-block w-24 h-1 rounded-full bg-slate-400 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-slate-300 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-slate-500 ml-1"></span>
            </div>
            <div className="footer-links">
            <a href="/help" className="text-white">
                Help
              </a>
              <a href="/" className="text-white">
                Home
              </a>
              <a href="/about" className="text-white">
                About me
              </a>
              <a href="#contact" className="text-white">
                Contact us
              </a>
              
            </div>
          </div>
          <div className="col-3">
            <h6 className="text-white">Contact us</h6>
            {/* <hr className="my-1 mx-auto w-24 bg-amber-200 h-0.5" /> */}
            <div className="text-center my-1 mx-auto">
              <span className="inline-block w-1 h-1 rounded-full bg-slate-500 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-slate-300 ml-1"></span>
              <span className="inline-block w-24 h-1 rounded-full bg-slate-400 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-slate-300 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-slate-500 ml-1"></span>
            </div>
            <div className="footer-contact">
              <div className="footer-contact-icon">
                <FaHome /> Patna, Bihar
              </div>
              <div className="footer-contact-icon" onClick={handlePhoneClick}>
                <FaPhone /> +91 85818-69783
              </div>
              <div
                className="footer-contact-icon"
                onClick={handleWhatsappClick}
              >
                <FaWhatsapp /> +91 85818-69783
              </div>
              <div className="footer-contact-icon" onClick={handleEmailClick}>
                <FaEnvelope /> b29.bhupesh@gmail.com
              </div>
            </div>
          </div>
        </section>
        <motion.div
          className="text-amber-200 text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <motion.a
            className="text-amber-200"
            href="https://bhupeshb7portfolio.vercel.app/"
          >
            Bhupesh Kumar &nbsp;
          </motion.a>
          <span>© 2024 &nbsp;</span>
        </motion.div>
      </footer>
    </div>
  );
};

export default Footer;
