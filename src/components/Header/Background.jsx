"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams.tsx";
import logo from "../../Assets/B.png"
import Work from "../../pages/Work.jsx";
import Navbar from "./Navbar.jsx";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import HOCIcon from "./HOCIcon.jsx";
export function Background() {
  
  return (
    <div>
      <Navbar/>
    <div className="h-[32rem] w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
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
        <HOCIcon/>
        <p></p>
        </div>
        {/* <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, MailJet has got you
          covered.
        </p> */}
        <div style={{marginTop:'120px'}}>
        </div>
      <BackgroundBeams />
      <div>

      {/* <ContactForm/> */}
      </div>
    </div>
    <Work/>
    
    </div>
  );
}
