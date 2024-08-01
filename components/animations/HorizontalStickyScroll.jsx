"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function HorizontalStickyScroll() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-45%"]);

  return (
    <>
      <div ref={ref} className="relative bg-purple-500 h-[300vh]">
        <div className="sticky top-0 bg-neutral-900 h-screen w-full flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            <div className="bg-white w-[250px] h-[250px] rounded-2xl"></div>
            <div className="bg-white w-[250px] h-[250px] rounded-2xl"></div>
            <div className="bg-white w-[250px] h-[250px] rounded-2xl"></div>
            <div className="bg-white w-[250px] h-[250px] rounded-2xl"></div>
            <div className="bg-white w-[250px] h-[250px] rounded-2xl"></div>
            <div className="bg-white w-[250px] h-[250px] rounded-2xl"></div>
            <div className="bg-white w-[250px] h-[250px] rounded-2xl"></div>
            <div className="bg-white w-[250px] h-[250px] rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
      <div className="h-screen w-full bg-gray-300"></div>
    </>
  );
}

export default HorizontalStickyScroll;
