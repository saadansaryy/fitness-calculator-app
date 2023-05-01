import React from "react";

function Result({ calorieResult }) {
  return (
    <div className="w-full md:w-1/3 font-space-grotesk p-4 space-y-4 bg-neutral-800 text-white shadow-md shadow-black">
      <h2 className="text-center text-xl tracking-wide">Results</h2>
      <div className="space-y-4">
        <div className="w-full flex justify-between items-center border-b border-r p-2 text-xs md:text-base">
          <span className="text-blue-300">Maintenance Calorie</span>
          <span
            className={`opacity-90  ${
              calorieResult ? "tracking-wider" : "text-xs md:text-base"
            }`}
          >
            {calorieResult
              ? `${Math.round(calorieResult)} Calories/Day`
              : "No results found"}
          </span>
        </div>
        <div className="w-full flex justify-between items-center border-b border-r p-2 text-xs md:text-base">
          <div className="flex flex-col">
            <span className="text-emerald-400">Mild Weight Loss</span>
            <span className="text-emerald-400 text-xs opacity-90 tracking-wider">0.25 Kg/Week</span>
          </div>
          <span
            className={`opacity-90  ${
              calorieResult ? "tracking-wider" : "text-xs md:text-base"
            }`}
          >
            {calorieResult
              ? `${Math.round(calorieResult) - 250} Calories/Day`
              : "No results found"}
          </span>
        </div>
        <div className="w-full flex justify-between items-center border-b border-r p-2 text-xs md:text-base">
          <div className="flex flex-col">
            <span className="text-yellow-300">Weight Loss</span>
            <span className="text-yellow-300 text-xs opacity-90 tracking-wider">0.5 Kg/Week</span>
          </div>
          <span
            className={`opacity-90  ${
              calorieResult ? "tracking-wider" : "text-xs md:text-base"
            }`}
          >
            {calorieResult
              ? `${Math.round(calorieResult) - 500} Calories/Day`
              : "No results found"}
          </span>
        </div>
        <div className="w-full flex justify-between items-center border-b border-r p-2 text-xs md:text-base">
          <div className="flex flex-col">
            <span className="text-red-500">Extreme Weight Loss</span>
            <span className="text-red-500 text-xs opacity-95 tracking-widest">1 Kg/Week</span>
          </div>
          <span
            className={`opacity-90  ${
              calorieResult ? "tracking-wider" : "text-xs md:text-base"
            }`}
          >
            {calorieResult
              ? `${Math.round(calorieResult) - 1000} Calories/Day`
              : "No results found"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Result;
