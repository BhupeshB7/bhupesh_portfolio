"use client";
import React from "react";
import { Button } from "../ui/moving-border.tsx";

export function MovingBorder({onClick}) {
  const handleNavigate =()=>{
    window.location.href = "/about";
  }
  return (
    <div onClick={onClick} className="flex items-center justify-center w-full h-full">
      
      <Button onClick={handleNavigate} 
        borderRadius="1.75rem"
        className="bg-black dark:bg-slate-900 text-white dark:text-white border-black dark:border-slate-800"
      >About me
      </Button>
    </div>
  );
}
