import React from 'react'

const Blog = () => {
    const blogs = [
        {id:1, title:"Five ways that can develop your business" , description:"Five ways that can develop your business Five ways that can develop your business" , image:"/src/assets/7.jpg"},
        {id:2, title:"Designing Better Links For Websites & Emails" , description:"Designing Better Links Five ways that can develop your business For Websites & Emails" , image:"/src/assets/8.jpg"},
        {id:3, title:"Strategies to Maintain a Positive Work" , description:"Strategies to Maintain a Five ways that can develop your business Positive Work Environment" , image:"/src/assets/9.jpg"},
      
      ]
  return (
   
       <div className='font-poppins md:px-14 px-4 py-24 max-w-screen-2xl mx-auto'>
    <div className='text-center mb-16'>
        <h2 className='text-4xl text-gray-800 font-semibold mb-6'>Latest Blogs</h2>
        <p className='text-gray-500 '>Manage your entire community in a single system</p>
    </div>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
    {
    blogs.map(blog => <div key={blog.id}>
      <div> 
        <div className='mb-4  w-full'> <img src={blog.image} alt="" className='h-64 rounded-md w-full object-cover'/></div>
        <h2 className='text-xl font-semibold mb-4'>{blog.title}</h2>
        <p className='text-base text-gray-500'>{blog.description}</p>
      </div>
    </div>

    )
  }
 </div>
    </div>
    
  )
}

export default Blog
