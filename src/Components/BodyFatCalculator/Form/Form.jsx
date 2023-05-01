import React from "react";
import { useForm } from "react-hook-form";

function Form({ onSubmit, setCalorieResult }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-start items-start space-y-4 p-3 py-6 md:p-10  bg-neutral-200 shadow-lg shadow-blue-200 font-space-grotesk"
    >
      <div className="w-full flex justify-between items-center">
        <label htmlFor="age" className="opacity-60">
          Age
        </label>
        <input
          type="number"
          id="age"
          {...register("age", { required: "This field is required" })}
          className="shadow shadow-blue-400 outline-none px-2 py-1"
        />
        {/* {errors.age && <span>This field is required</span>} */}
      </div>

      <div className="w-full flex justify-between items-center">
        <label htmlFor="gneder" className="opacity-60">
          Gender
        </label>
        <div className="space-x-2">
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            value="male"
            id="male"
            className="w-10"
            {...register("gender", { required: "This field is required" })}
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            value="female"
            id="female"
            className="w-10"
            {...register("gender", { required: "This field is required" })}
          />
        </div>
        {/* {errors.gender && <span>This field is required</span>} */}
      </div>

      <div className="w-full flex justify-between items-center">
        <label htmlFor="height" className="opacity-60">
          Height
        </label>
        <input
          type="number"
          id="height"
          {...register("height", { required: "This field is required" })}
          className="shadow shadow-blue-400 outline-none px-2 py-1"
        />
      </div>

      <div className="w-full flex justify-between items-center">
        <label htmlFor="weight" className="opacity-60">
          Weight
        </label>
        <input
          type="number"
          id="Weight"
          {...register("weight", { required: "This field is required" })}
          className="shadow shadow-blue-400 outline-none px-2 py-1"
        />
      </div>

      <div className="w-full flex justify-between items-center">
        <label htmlFor="neck" className="opacity-60">
          Neck
        </label>
        <input
          type="number"
          id="neck"
          {...register("neck", { required: "This field is required" })}
          className="shadow shadow-blue-400 outline-none px-2 py-1"
        />
      </div>

      <div className="w-full flex justify-between items-center">
        <label htmlFor="waist" className="opacity-60">
          Waist
        </label>
        <input
          type="number"
          id="waist"
          {...register("waist", { required: "This field is required" })}
          className="shadow shadow-blue-400 outline-none px-2 py-1"
        />
      </div>

      
        <div className={`w-full flex justify-between items-center ${watch("gender") === "female"?"flex":"hidden"}`}>
          <label htmlFor="hip" className="opacity-60">
            Hip
          </label>
          <input
            type="number"
            id="hip"
            {...register("hip", { required: "This field is required" })}
            className="shadow shadow-blue-400 outline-none px-2 py-1"
          />
        </div>
      

      <div className="flex justify-center space-x-3 pt-2">
        <input
          type="submit"
          value="Calculate &rarr;"
          className="bg-slate-300 cursor-pointer hover:bg-slate-200 transition duration-300 text-gray-600 shadow shadow-blue-400 outline-none py-1 px-4 text-lg"
        />
        <input
          type="reset"
          value="Clear"
          className="bg-slate-300 cursor-pointer hover:bg-slate-200 transition duration-300 text-gray-600 shadow shadow-blue-400 outline-none py-1 px-4"
          onClick={() => setCalorieResult(0)}
        />
      </div>
    </form>
  );
}

export default Form;
