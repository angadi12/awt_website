import React from 'react'
import { motion } from "framer-motion";

const Customhoveranimation = ({ text, width, style }) => {
  return (
    <div className={`${style}   top-0 left-2`}>
      <motion.div
        initial={{ width: width }}
        viewport={{ once: true }}
        whileHover={{ width: [0, 10, 20, 30, 40, 60, 70, 80, 90, 100, width] }}
        transition={{
          duration: 1.5,
          delay: 0.2,
          ease: "backInOut",
          type: "spring",
        }}
        className="relative   text-start z-0 "
      >
        <motion.span
          initial={{ color: "black" }}
          viewport={{ once: true }}
          whileHover={{ color: "white" }}
          className="text-start z-20 text-white  top-0 "
        >
          {text}
        </motion.span>
      </motion.div>
    </div>
  )
}

export default Customhoveranimation