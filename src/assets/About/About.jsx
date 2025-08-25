import React from 'react'

const About = () => {
  return (
    <div
      id="About"
      className="text-white bg-opacity-30 shadow-xl rounded-lg mx-0 md:mx-20 mb-6 p-8"
    >
        <h1 className='text-3xl md:text-4xl font-semibold mb-6 flex justify-center pb-5 mt-10'>About</h1>
      <div className="grid  md:grid-cols-2 gap-12 items-start md:border-r md:pr-8 border-gray-600">
        
        <div className='md:border-r md:border-l md:pr-8 border-gray-600'>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 pl-9">About Me</h2>
          <p className="text-sm md:text-lg tracking-tight leading-relaxed pl-9">
            Hi, I’m Kunal Gurav, a Computer Engineering graduate, 2025 pass-out
            with CGPA 7.62, with an interest in backend development. I work with
            JavaScript, ReactJS, NodeJS, and ExpressJS to build scalable and
            efficient solutions, while also being familiar with technologies
            like Docker and MongoDB. I’m focused on enhancing my backend
            expertise and contributing to impactful projects.
          </p>
        </div>

        <div className='pl-9'>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 ">Education</h3>
          
            <div>
              <p className="font-semibold">
                Bachelor of Engineering (Computer Engineering) 2025-Passout
              </p>
              <p className="text-gray-300 pb-6">
                Pillai HOC College of Engineering and Technology
              </p>
            </div>
            <div>
              <p className="font-semibold">HSC – 2021</p>
              <p className="text-gray-300 pb-6">
                S.P. Jain Junior College Nagothane
              </p>
            </div>
            <div>
              <p className="font-semibold">SSC – 2019</p>
              <p className="text-gray-300">
                K.E.S G.R. Agrawal Vidyamandir Nagothane
              </p>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default About
