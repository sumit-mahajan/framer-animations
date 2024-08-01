"use client";

import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function RevealWhenInView(props) {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { x: -100, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {props.children}
      </motion.div>
    </div>
  );
}

export default RevealWhenInView;
