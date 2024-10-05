"use client"

import Image from "next/image";
import react, { useState } from "react";

export default function Home() {

  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [bmi, setBMI] = useState(null)
  const [result, setResult] = useState(null)

  function calculateBMI(){

    const heightInMeters = parseFloat(height) / 100
    const bmiValue = (parseFloat(weight) / (heightInMeters * heightInMeters)).toFixed(2)
    setBMI(bmiValue)

    if(bmiValue < 18.5){
      setResult("Underweight")
    }
    else if(bmiValue < 24.9){
      setResult("Normal weight")
    }
    else if(bmiValue < 29.9){
      setResult("Overweight")
    }
    else if(height === null || weight === null || height == 0 || weight == 0){
      setResult("Invalid value")
    }
    else{
      setResult("Obesity")
    }

  }

  return (
    <div className="min-w-full min-h-screen flex justify-center items-center bg-slate-950">
      <div className="border-4 rounded-3xl bg-slate-900 p-14">

        <div className="text-center text-2xl font-bold mb-10">
          <h1 className="text-white">BMI Calculator</h1>
        </div>

        <>

          <div className="">
            <label htmlFor="weight">
              <h3 className="my-3 font-semibold text-white">Weight (kg):</h3>
            </label>
            <input className="input input-bordered w-full max-w-xs" onChange={(e) => setWeight(e.target.value)} placeholder="Enter your weight..." type="number" name="weight"/>
          </div>
          
          <div className="">
            <label htmlFor="height">
              <h3 className="my-3 font-semibold text-white">Height (cm):</h3>
            </label>
            <input className="input input-bordered w-full max-w-xs" onChange={(e) => setHeight(e.target.value)} placeholder="Enter your height..." type="number" name="height"/>
          </div>

        </>

        <div className="flex justify-center my-10">
          <button className="btn btn-accent text-xl text-white" onClick={() => calculateBMI()}>Calculate</button>
        </div>

        <div className="text-center mt-10">
          <h1 className="font-semibold text-xl text-white">{result}</h1>
        </div>

      </div>
    </div>
  );
}
