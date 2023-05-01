import React from 'react'
import { useForm } from "react-hook-form";


function Form({onSubmit,setCalorieResult}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-start items-start space-y-5 p-2 py-6 md:p-10  bg-neutral-200 shadow-lg shadow-blue-200 font-space-grotesk">
      

    <div className="w-full space-x-3 md:space-x-4">
      <label htmlFor="age" className='opacity-60'>Age <span className='text-lg text-red-500'>{errors.age?"*":""}</span></label>
      <input
        type="number"
        id="age"
        {...register("age",  { required: "This field is required" })}
        className={`shadow ${errors.age?"shadow-red-400":"shadow-blue-400"}  outline-none p-2`}
      />
    </div>

    <div className="flex space-x-6">
      <label htmlFor="gneder" className='opacity-60'>Gender</label>
      <div className="space-x-3">
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          value="male"
          id="male"
          {...register("gender")}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          value="female"
          id="female"
          {...register("gender")}
        />
      </div>
    </div>

    <div className="space-x-3 md:space-x-4">
      <label htmlFor="height" className='opacity-60'>Height <span className='text-lg text-red-500'>{errors.height?"*":""}</span></label>
      <input
        type="number"
        id="height"
        {...register("height",  { required: "This field is required" })}
        className={`shadow ${errors.height?"shadow-red-400":"shadow-blue-400"}  outline-none p-2`}
      />
    </div>

    <div className="space-x-3 md:space-x-4">
      <label htmlFor="weight" className='opacity-60'>Weight<span className='text-lg text-red-500'>{errors.weight?"*":""}</span></label>
      <input
        type="number"
        id="Weight"
        {...register("weight", { required: "This field is required" })}
        className={`shadow ${errors.weight?"shadow-red-400":"shadow-blue-400"}  outline-none p-2`}
      />
    </div>

    <div className="space-x-3 md:space-x-4">
      <label htmlFor="activity" className='opacity-60'>Activity</label>
      <select id="activity" {...register("activity")} className="shadow shadow-blue-400 outline-none p-2 w-1/2 md:w-full">
        <option value={1}>Basal Metabolic Rate (BMR)</option>
        <option value={1.2}>Sedentary: little or no exercise</option>
        <option value={1.375}>Light: exercise 1-3 times per week</option>
        <option value={1.55}>Moderate: exercise 4-5 times per week</option>
        <option value={1.725}>Active: daily exercise or intense exercise 3-4 times/week</option>
        <option value={1.9}>Very Active: intense exercise daily, or physical job</option>
      </select>
    </div>

    <div className="flex justify-center space-x-3">
      <input type="submit" value="Calculate &rarr;" className="bg-slate-300 cursor-pointer hover:bg-slate-200 transition duration-300 text-gray-600 shadow shadow-blue-400 outline-none py-1 px-4 text-lg" />
      <input type="reset" value="Clear" className="bg-slate-300 cursor-pointer hover:bg-slate-200 transition duration-300 text-gray-600 shadow shadow-blue-400 outline-none py-1 px-4" onClick={()=>setCalorieResult(0)}/>
    </div>
  </form>
  )
}

export default Form
