import React from "react";
import Calculator from "./Calculator/Calculator";
import Header from "../Header/Header";
import { motion as m } from "framer-motion";

function CalorieCalculator() {
  return (
    <div
      className=""
    >
      <m.div className="flex justify-start ml-4 items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration:1.5,ease:"easeOut"}}
      >
        <Header title="Calorie Calculator" color="text-stone-600" />
      </m.div>
        <hr/>
      <m.div className="w-full flex justify-center items-start"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{type:"spring", duration: 0.75, ease: "easeInOut" }}
      // exit={{ x: 200 }}
      >
        <Calculator />
      </m.div>
    </div>
  );
}

export default CalorieCalculator;
