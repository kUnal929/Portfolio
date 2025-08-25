import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <div id="Contact" className=" text-white py-6 mt-10">
            <h1 className="text-4xl font-bold mb-4 md:mb-0 md:mr-8 flex justify-center pl-5">Contact Me</h1>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 pt-20">

                 <div>
                    <h1 className="text-3xl font-bold">I'm currently looking for new opportunities</h1>
                </div>

                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a
                        href="https://github.com/kUnal929"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-colors duration-300"
                    >
                        <FaGithub size={50} />
                    </a>

                    <a
                        href="https://linkedin.com/in/kunal-gurav-563b4275"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-colors duration-300"
                    >
                        <FaLinkedin size={50} />
                    </a>


                    <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=kunalgurav1359@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-gray-400 transition-colors duration-300"
>
  <FaEnvelope size={50} />
</a>

                </div>

               
            </div>
        </div>
    );
};

export default Contact;
