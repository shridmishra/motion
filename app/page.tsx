"use client"
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="[perspective::1000px] transform-3d flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-gray-900">
      <motion.button 

        // initial= {{
        //   rotate:0
        // }}
        // animate= {{
        //   rotate:[0,10,0]
        // }}
        // transition={{
        //   duration:2
        // }}

        whileHover={{
          rotateX: 25,
          rotateY:30,

        }}

        style={{
          translateZ:100,
        }}
      
      
      className="bg-pink-900 px-10 py-5 rounded-lg text-2xl">
        Subscribe
      </motion.button>
    </div>
  );
}
