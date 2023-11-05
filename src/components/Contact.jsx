import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className="py-16 font-poppins">
        <div className="max-w-6xl mx-auto px-4">
            <div className="lg:grid-cols-[40%,1fr] grid-cols-1  grid gap-6 ">
                <div>
                    <div className="">
                        <h2 className="mb-2 text-3xl font-bold dark:text-gray-400">Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
                        </h2>
                        <p className="text-base mb-6 text-gray-500 ">
                            Please email us at info@gmail.com or call us at below contact offices</p>
                        <div className="flex  items-center mb-6 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" w-4 h-4 text-blue-500 dark:text-blue-400
                                bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z">
                                </path>
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                            </svg>
                            <div className="max-w-xl ml-2 text-base font-semibold tracking-wide text-gray-500 dark:text-gray-400">
                                Sukedhara, Kathmandu , Nepal
                            </div>
                        </div>
                        <div className="flex items-center mb-6 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-blue-500  w-4 h-4 bi bi-telephone dark:text-gray-400" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z">
                                </path>
                            </svg>
                            <div className="max-w-xl ml-2 text-base font-semibold tracking-wide text-gray-500 dark:text-gray-400">
                                <span> +977-014151329 ,</span> <span> +977-014151678</span>
                            </div>
                        </div>
                        <div className="flex items-center mb-6 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-blue-500 dark:text-blue-400  w-4 h-4  bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z">
                                </path>
                            </svg>
                            <div className="max-w-xl ml-2 text-base font-semibold tracking-wide text-gray-500 dark:text-gray-400">
                                info@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <form className="">
                        <div className="mb-6">
                            <label  className="block mb-2 font-semibold text-gray-700 dark:text-gray-400 uppercase">
                                Full Name
                            </label>
                            <input id="first-name" type="text" placeholder="John Doe" required="" className="block w-full px-4 py-3 mb-3 text-sm leading-tight  text-gray-700 border border-gray-300 dark:placeholder-gray-500  dark:bg-gray-900 dark:border-gray-900 dark:text-gray-400 rounded focus:outline-none focus:bg-white"/>
                        </div>
                        <div className=" mb-6">
                            <label  className="block mb-2 text-sm font-semibold dark:text-gray-400 text-gray-700 uppercase ">
                                Email
                            </label>
                            <input id="email" type="email" placeholder="john163@gmail.com" required="" className="block w-full px-4 py-3 mb-3  leading-tight  text-gray-700 border border-gray-300 dark:placeholder-gray-500  dark:bg-gray-900 dark:border-gray-900 dark:text-gray-400 rounded focus:outline-none focus:bg-white"/>
                        </div>
                        <div className=" mb-6">
                            <label  className="block mb-2  font-semibold dark:text-gray-400  text-gray-700 uppercase ">
                                Position
                            </label>
                            <select className="appearence-none dark:text-gray-400  dark:bg-gray-900 text-gray-500 border-gray-300  dark:border-gray-900  w-full py-2.5 px-4  text-base font-normal border rounded-md " name="" id="">
                                <option>PHP Developer</option>
                                <option>Web Designer</option>
                                <option>Graphics Designer</option>
                                <option>Node JS Developer</option>
                            </select>
                        </div>
                        <div className=" mb-6">
                            <label  className="block mb-2 text-sm font-semibold dark:text-gray-400 text-gray-700 uppercase">
                                Cover Letter
                            </label>
                            <textarea rows="4" type="message" placeholder="Describe about yourself..." required="" className="block w-full px-4 mb-4 leading-tight text-gray-700 border border-gray-300 rounded dark:placeholder-gray-500 py-7 dark:text-gray-400 dark:border-gray-900 dark:bg-gray-900 "></textarea>
                        </div>
                        <div className="flex justify-start w-auto  ">
                            <button className="relative block w-full px-4 py-2 overflow-hidden text-base font-medium text-white rounded-md bg-blue-500 group md:w-auto">
                                <div className="absolute top-0 left-0 w-full h-full transition duration-500 ease-in-out transform -translate-x-full bg-blue-600 group-hover:-translate-x-0">
                                </div>
                                <p className="relative z-10">Submit</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Contact
