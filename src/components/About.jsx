import React from 'react'
import aboutimg from '../assets/2.jpg'
const About = () => {
  return (
 
      <div className='font-poppins px-4 py-12 max-w-6xl mx-auto'>
        <div className='flex flex-wrap items-center'>
            <div className="w-full px-4 lg:w-1/2">
                <img src={aboutimg} alt="" className="h-80 object-cover"/>
            </div>
            <div className="w-full px-4 lg:w-1/2">
            <span className="text-xs bg-blue-500 text-gray-50 px-2 rounded-md">About Us</span>
<h2 className="text-xl font-semibold mb-6 mt-3">What we do?</h2>
<p className="text-base mb-6 text-gray-700">These groups represent businesses or organizations within a particular industry or trade.These groups represent businesses or organizations within a particular industry or trade.</p>
          <button className="text-sm font-medium px-6 py-3 rounded-md text-gray-50  bg-blue-600">Learn More</button>
            </div>
        </div>
      </div>
  
  )
}

export default About
