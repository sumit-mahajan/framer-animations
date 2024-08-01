"use client";

import { motion } from "framer-motion";

// For easy clipPaths - https://bennettfeely.com/clippy/
function PageTransition(props) {
  return (
    <>
      <motion.div
        className="fixed inset-0"
        // initial={{ clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" }}
        // animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
        animate={{
          clipPath: [
            "polygon(0 0, 100% 0, 100% 0, 0 0)",
            "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            "polygon(0 0, 100% 0, 100% 0, 0 0)",
            // "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          ],
        }}
        transition={{ duration: "1", times: [0, 0.2, 0.8, 1] }}
      >
        <div className="h-screen w-full bg-neutral-900"></div>
      </motion.div>
    </>
  );
}

export default PageTransition;
