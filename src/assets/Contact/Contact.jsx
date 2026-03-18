import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="Contact" className="observe-section max-w-7xl mx-auto px-6 py-16 border-t border-slate-800/50 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
      <p className="text-lg text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed">
        I’m currently looking for new opportunities. Whether you have a question or just want to connect, my inbox is always open!
      </p>
      <div className="flex justify-center items-center gap-8 mt-6">
        <a
          href="https://github.com/kUnal929"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:-translate-y-1"
          aria-label="GitHub"
        >
          <FaGithub size={36} />
        </a>
        <a
          href="https://linkedin.com/in/kunal-gurav-5636b4275"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-[#0a66c2] transition-colors duration-300 transform hover:-translate-y-1"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={36} />
        </a>
        <a
          href="mailto:kunalgurav1359@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-red-400 transition-colors duration-300 transform hover:-translate-y-1"
          aria-label="Email"
        >
          <FaEnvelope size={36} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
