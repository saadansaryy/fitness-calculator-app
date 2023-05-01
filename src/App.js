import React from "react";
import { useEffect } from "react";
import CalorieCalculator from "./Components/CalorieCalculator/CalorieCalculator";
import BodyFatCalculator from "./Components/BodyFatCalculator/BodyFatCalculator";
import Navbar from "./Components/Navbar/Navbar";
import { Routes,Route,useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const navigate = useNavigate();

  useEffect(()=>{
    navigate("/"); //eslint-disable-next-line
  },[]) 
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="mb-4">
        <Navbar />
      </div>
      <div className="w-full overflow-x-hidden">
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<CalorieCalculator />}/>
            <Route path="/bodyFatCalculator" element={<BodyFatCalculator/>}/>
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
