
import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaDocker } from "react-icons/fa";

const Skills = () => {
    return (
        <section id="Skills" className=" text-white py-16 px-6 ">
            <h2 className="text-3xl font-bold mb-10 flex justify-center">Skills</h2>

            <div className="grid grid-cols-2 grid-cols- md:grid-cols-4 gap-6 place-items-center">
                <div className="p-4 bg-gray-800 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300">
                    <FaHtml5 className="text-6xl text-orange-500" />
                    <p className="mt-2 text-center text-lg font-semibold">HTML</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300">
                    <FaCss3Alt className="text-6xl text-blue-500" />
                    <p className="mt-2 text-center text-lg font-semibold">CSS</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300">
                    <FaJs className="text-6xl text-yellow-400" />
                    <p className="mt-2 text-center text-lg font-semibold">JavaScript</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300">
                    <FaReact className="text-6xl text-cyan-400" />
                    <p className="mt-2 text-center text-lg font-semibold">React</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300">
                    <FaNodeJs className="text-6xl text-green-500" />
                    <p className="mt-2 text-center text-lg font-semibold">Node.js</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300">
                    <FaGithub className="text-6xl text-white" />
                    <p className="mt-2 text-center text-lg font-semibold">GitHub</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300">
                    <FaDocker className="text-6xl text-blue-400" />
                    <p className="mt-2 text-center text-lg font-semibold">Docker</p>
                </div>
            </div>
        </section>
    );
};

export default Skills;
