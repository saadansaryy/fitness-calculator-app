import React, { useEffect, useState } from "react";
import Form from "../Form/Form";
import Result from "../Result/Result";

function Calculator() {

  const [userData,setUserData] = useState({});
  const [calorieResult,setCalorieResult] = useState(0);

  const onSubmit = (data) => {
    console.log(data);
    setUserData({...data});
  };

  const calculateCalorie = () => {
    if(userData.gender==="male"){
      setCalorieResult(((10*userData.weight)+(6.25*userData.height)-(5*userData.age)+5)*userData.activity);
    }else {
      setCalorieResult(((10*userData.weight)+(6.25*userData.height)-(5*userData.age)-161)*userData.activity);
    }
  }

  useEffect(()=>{
    calculateCalorie();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[userData])
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 h-full w-full p-4 md:space-x-4">
      <Form onSubmit={onSubmit} setCalorieResult={setCalorieResult}/>
      <Result calorieResult={calorieResult}/>
    </div>
  );
}

export default Calculator;
