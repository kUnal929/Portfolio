import React from 'react'

const About = () => {
  return (
    <section id="About" className="observe-section max-w-7xl mx-auto px-6 py-16 border-t border-slate-800/50">
      <div className="bg-slate-800/20 shadow-2xl rounded-2xl border border-slate-700/50 p-8 md:p-12 hover:border-slate-600 transition-colors cursor-default">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">About</h2>
        
        <div className="grid md:grid-cols-2 gap-10 md:gap-0">
          
          {/* Left Column */}
          <div className="md:border-r border-slate-700 md:pr-12">
            <h3 className="text-3xl font-bold text-white mb-6">About Me</h3>
            <p className="text-slate-300 leading-relaxed text-lg lg:text-xl">
             Hi, I’m Kunal Gurav, a Computer Engineering graduate (2025 pass-out, CGPA: 7.62) with a strong interest in backend development. I have worked with JavaScript, Node.js, and Express.js to build scalable applications and have experience designing REST APIs. I also have basic knowledge of React.js and am familiar with SQL databases and Wix Studio. I have completed a backend development internship where I worked on building and testing APIs and handling application data. I’m currently focused on improving my backend skills and working on real-world projects.
            </p>
          </div>

          {/* Right Column */}
          <div className="md:pl-12">
            <h3 className="text-3xl font-bold text-white mb-8">Education</h3>
            
            <div className="space-y-8">
              <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2.5 before:h-2.5 before:bg-indigo-500 before:rounded-full before:ring-4 before:ring-[#1a1a1a]">
                <h4 className="font-medium text-slate-200 text-lg lg:text-xl">Bachelor of Engineering (Computer Engineering)</h4>
                <p className="text-indigo-400 text-base font-medium mb-1 mt-1">2021 – 2025</p>
                <p className="text-slate-400 text-base">Pillai HOC College of Engineering and Technology, Rasayani</p>
              </div>
              
              <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2.5 before:h-2.5 before:bg-indigo-500 before:rounded-full before:ring-4 before:ring-[#1a1a1a]">
                <h4 className="font-medium text-slate-200 text-lg lg:text-xl">HSC</h4>
                <p className="text-indigo-400 text-base font-medium mb-1 mt-1">2021</p>
                <p className="text-slate-400 text-base">S.P. Jain Junior College Nagothane</p>
              </div>

              <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2.5 before:h-2.5 before:bg-indigo-500 before:rounded-full before:ring-4 before:ring-[#1a1a1a]">
                <h4 className="font-medium text-slate-200 text-lg lg:text-xl">SSC</h4>
                <p className="text-indigo-400 text-base font-medium mb-1 mt-1">2019</p>
                <p className="text-slate-400 text-base">K.E.S G.R. Agrawal Vidyamandir Nagothane</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About
