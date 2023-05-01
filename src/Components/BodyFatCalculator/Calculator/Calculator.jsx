import React, { useEffect, useState } from "react";
import Form from "../Form/Form";
import Result from "../Result/Result";

function Calculator() {

  const [userData,setUserData] = useState({});
  const [calorieResult,setCalorieResult] = useState(0);

  const onSubmit = (data) => {
    console.log("entered on submit");
    setUserData(data);
  };

  const calculateCalorie = () => {

    if(userData.gender==="male"){
      setCalorieResult((495/(1.0324-0.19077*Math.log10(userData.waist-userData.neck)+0.15456*Math.log10(userData.height)))-450);
    }else {
      setCalorieResult((495/(1.29579-0.35004*Math.log10(parseInt(userData.waist)+parseInt(userData.hip)-parseInt(userData.neck))+0.22100*Math.log10(userData.height)))-450);
    }
    
  }

  useEffect(()=>{
    calculateCalorie();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[userData])
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-full w-full p-4 space-y-4 md:space-x-4">
      <Form onSubmit={onSubmit} setCalorieResult={setCalorieResult}/>
      <Result calorieResult={calorieResult}/>
    </div>
  );
}

export default Calculator;
