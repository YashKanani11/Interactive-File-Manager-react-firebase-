import React from "react";
import { motion } from "framer-motion";
function Card({ data, dragConstraint, initialPosition}) {
  return (
    <>
      <motion.div
        drag
        whileDrag={{ scale: 1.1 }}
        dragConstraints={dragConstraint}
        style={{top:initialPosition.y,left:initialPosition.x}}
        className={`w-[11%] h-[30%] bg-zinc-500 pt-4 m-4 rounded-3xl absolute shadow-emerald-900 border shadow-xl drop-shadow-xl`}
      >
        <div className=" pl-4 flex justify-start text-violet-300 text-xl">
          <data.icon />
        </div>
        <div className="pl-4 py-3 text-emerald-200 text-sm tracking-tight font-semibold">
          <p>{data.description}</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="items-center flex justify-around text-violet-300 text-lg mb-2">
            <p>{data.downloadSize} mb</p>
            <div className="">
              <data.actionIcon />
            </div>
          </div>
          {data.extraFooter.isOpen && (
            <div
              className={`w-full ${data.extraFooter.color} py-1 text-white rounded-b-3xl flex items-center justify-center text-lg`}
            >
              {data.extraFooter.extraFooterContent}
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
