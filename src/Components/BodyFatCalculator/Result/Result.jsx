import React from "react";

function Result({ calorieResult }) {
  return (
    <div className="md:w-1/4 font-space-grotesk p-4 space-y-4 bg-neutral-800 text-white shadow-md shadow-black">
      <h2 className="text-center text-xl tracking-wide">Results</h2>
      <div className="">
        {
          calorieResult?
        <p className="tracking-wider">Body Fat : {Math.round(calorieResult*10)/10}%</p>
        :
        <p className="opacity-50 font-mono">No Results Found</p>
        }
      </div>
    </div>
  );
}

export default Result;
