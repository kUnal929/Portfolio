import React from 'react'

const Home = () => {
  return (
    <div id='Home' className=' l text-white flex bg-gray-800 h-fit w-fit justify-between p-10 md:p-20 mt-5 pt-20 ml-7 '>
      <div className='md:w-4/4 '>
        <h1 className=' text-4xl font-semibold flex leading-normal tracking-tighter'  >
          Hello, I’m Kunal Gurav
        </h1>
        <p className='text-sm md:text-2xl tracking-widest'>
          Backend Developer – Frontend Developer – Web Enthusiast
        </p>
        <button className='mt-5 md:m-5 text-white text-sm px-3 md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
          <a href="#Contact" >Contact Me  </a></button>
      </div>
      <div></div>
    </div>

          
  )
}

export default Home