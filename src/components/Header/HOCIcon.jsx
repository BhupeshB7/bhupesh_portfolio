import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaTwitter } from 'react-icons/fa';
import {motion}from "framer-motion"
const HOCIcon = () => {
    const footerIcons = [
        { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/bhupesh-kumar-35011224b' },
        { icon: <FaGithub />, link: 'https://github.com/BhupeshB7' },
        { icon: <FaEnvelope />, link: 'mailto:bhupeshkr2912@gmail.com' },
        { icon: <FaInstagram />, link: 'https://www.instagram.com/bhupeshb7?igsh=ODVvMWd0bmQ0ZG10' },
        { icon: <FaTwitter />, link: 'https://x.com/Bhupeshb7?t=F49fYUEO8Wj5I-jPaXL6CQ&s=09' },
      ];
    
  return (
    <div>
        <div className="HOC-icon">
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '15px', margin: '5px',flexDirection:'column' }}>
        {footerIcons.map((iconItem, index) => (
          <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeIn", duration: 1,delay:0.35 }}
          key={index} href={iconItem.link} target="_blank" rel="noopener noreferrer" className="footer-icon-item" style={{cursor:"pointer"}}>
            {iconItem.icon}
          </motion.a>
        ))}
      </div>
    </div>

    </div>
  )
}

export default HOCIcon