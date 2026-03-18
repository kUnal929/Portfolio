import React from 'react'

const Home = () => {
  return (
    <section id="Home" className="observe-section flex flex-col max-w-7xl mx-auto px-6 pt-12 md:pt-24 lg:pt-32 pb-20">
      <div className="max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          Hello, I’m <span className="text-indigo-00">Kunal Gurav</span>.
          <br />
          <span className="text-slate-400">Backend & Full-Stack Developer.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl leading-relaxed animate-fadeInUp" style={{ animationDelay: '300ms' }}>
          I build scalable backend systems, efficient web solutions, and seamless digital experiences using modern technologies.
        </p>
        <div className="flex flex-wrap items-center gap-6 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
          <a
            href="#Contact"
            className="inline-flex items-center justify-center w-40 h-14 text-lg font-medium text-white bg-indigo-500 hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/20 border border-transparent rounded-lg transition-all duration-200"
          >
            Contact Me
          </a>
          <a
            href="/kunal%20resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-40 h-14 text-lg font-medium text-slate-300 bg-slate-800/50 hover:bg-indigo-500/10 hover:text-white border border-indigo-500/40 hover:border-indigo-400 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] rounded-lg transition-all duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home