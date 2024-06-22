import React from "react";
import { MovingBorder } from "./MovingBorder";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div>
      <Navbar/>
      <div className="absolute inset-0 -z-10 h-full w-full bg-zinc-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:17px_34px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-orange-400 opacity-20 blur-[90px]" />
        <section>
            <h2 className="text-amber-200 text-center"> Welcome</h2>
            <MovingBorder/>
        </section>
      </div>
    </div>
  );
};

export default Hero;
