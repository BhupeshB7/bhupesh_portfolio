import React from 'react';
import { motion } from 'framer-motion';
import StarryBackground from './StarryBackground';
import Typewriter from 'typewriter-effect';
import HOCIcon from "./HOCIcon.jsx";
import logo from "../../Assets/B.png"
import Work from '../../pages/Work.jsx';
import Navbar from './Navbar.jsx';
function Starry() {
  return (
    <>
    <Navbar/>
    <div style={{ background: '#000', width: '100vw', height: '90vh' }}>

      <StarryBackground />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '24px',
          textAlign: 'center',
        }}
      >
       
       <div >
        <div className="logo">
          <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
          src={logo} alt="logo"/>
        </div>
        <motion.h1
       className="relative hero_text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeIn", duration: 1,delay:0.5 }}
         >
          Bhupesh Kumar
        </motion.h1>
        <motion.h1 className="relative hero_text2"
        initial={{ opacity: 0.2, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration:0.6,delay:0.3 }}>
         <Typewriter
          options={{
            strings: [
              'Fullstack developer',
              'React developer',
              'MERN developer',
              'React Native developer'
            ],
            autoStart: true,
            loop: true,
          }}
        />
        </motion.h1>
        </div>
      </motion.div>
        <HOCIcon/>
    </div>
    <Work/>
    </>
  );
}
export default Starry;