import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/buttonActivation.css'



function Navbar() {
  const handleLinkActivation = (linkId) => {
    if(linkId==="calorieCalc"){
      document.getElementById(linkId).classList.add('activeLink')
      document.getElementById('bodyFCalc').classList.remove('activeLink')
    }else{
      document.getElementById(linkId).classList.add('activeLink')
      document.getElementById('calorieCalc').classList.remove('activeLink')
    }
  }
  return (
    <div className='w-full flex justify-center items-center space-x-10 p-2'>
        <Link to="/" id='calorieCalc' className='w-1/2 text-stone-600 border p-3 text-center md:text-xl font-space-grotesk activeLink transition-all duration-700 ease-in-out delay-100' onClick={()=>handleLinkActivation("calorieCalc")}>Maintenance Calorie</Link>
        <Link to="/bodyFatCalculator" id='bodyFCalc' className='w-1/2 text-stone-600 border p-3 text-center md:text-xl font-space-grotesk transition-all duration-700 ease-in-out delay-100' onClick={()=>handleLinkActivation("bodyFCalc")}>Body Fat</Link>
    </div>
  )
}

export default Navbar
