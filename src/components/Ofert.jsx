import { motion } from "framer-motion"
import React from 'react'

const Ofert = (props) => {
    
    return (
      <div className="overflow-hidden bg-black text-white py-2" style={{ position: "relative",width:"100%", dsplay: "flex", alignItems: "center", justifyContent: "center", flexWrap: "nowrap" }}>
        <motion.div
          className="inline-block"
          whileHover={{ animationPlayState: "paused" }}
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          <span className="mx-4">{props.text}</span>
        </motion.div>
      </div>
    );
}

export default Ofert
