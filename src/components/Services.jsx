import React from 'react'

const Services = () => {
  const services = [
    {id:1, title:"Membership Organizations" , description:"Membership organizations are groups or associations formed by individuals or entities with common interests, goals, or purposes." , image:"/src/assets/banner1.jpg"},
    {id:2, title:"Nonprofit Organizations" , description:"These groups represent businesses or organizations within a particular industry or trade." , image:"/src/assets/banner1.jpg"},
    {id:3, title:"Profit Organizations" , description:"Many nonprofits have membership structures, where individuals or entities become members to support the organization's mission. " , image:"/src/assets/banner1.jpg"},
  
  ]
  return (
    <div className='font-poppins md:px-14 px-4 py-24 max-w-screen-2xl mx-auto'>
    <div className='text-center mb-16'>
        <h2 className='text-4xl text-gray-800 font-semibold mb-6'>Our Services</h2>
        <p className='text-gray-500 '>Manage your entire community in a single system</p>
    </div>
      {/* cards */}
<div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6">
  {
    services.map(service => <div key={service.id}>
      <div> 
        <div className='mb-4  w-full'> <img src={service.image} alt="" className='h-64 rounded-md w-full object-cover'/></div>
        <h2 className='text-xl font-semibold mb-4'>{service.title}</h2>
        <p className='text-base text-gray-500'>{service.description}</p>
      </div>
    </div>

    )
  }
</div>

    </div>
  )
}

export default Services
