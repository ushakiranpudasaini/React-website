import React from 'react'
 import { Carousel } from 'flowbite-react';
 import banner1 from "../assets/banner1.jpg"
 import banner2 from "../assets/1.jpg"
const Home = () => {
  return (
    <>
     <div className='bg-gray-100 font-poppins'>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'> 
      <Carousel className="w-full mx-auto">
      <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse  h-full items-center justify-between gap-12">
       <div className="md:w-1/2">
        <img src={banner1} alt=""/>
       </div>
       <div className="md:w-1/2">
<h1 className="text-5xl md:w-3/4 leading-snug mb-6">Lessons and insights <span className="text-blue-500">from 8 years</span></h1>
      <p className="mb-6 text-gray-500 text-base">
      The code you provided contains a JSX element with conditional class rendering. 
      </p>
      <button className="px-7 py-2 bg-blue-500 text-gray-50 rounded-md hover:bg-blue-600">Register</button>
       </div>
      </div>
      <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse  h-full items-center justify-between gap-12">
       <div className="md:w-1/2">
        <img src={banner1} alt=""/>
       </div>
       <div className="md:w-1/2">
<h1 className="text-5xl md:w-3/4 leading-snug mb-6">Lessons and insights <span className="text-blue-500">from 8 years</span></h1>
      <p className="mb-6 text-gray-500 text-base">
      The code you provided contains a JSX element with conditional class rendering. 
      </p>
      <button className="px-7 py-2 bg-blue-500 text-gray-50 rounded-md hover:bg-blue-600">Register</button>
       </div>
      </div>
    </Carousel>
    
      </div>
    </div> 
   
    </>
  )
}

export default Home
