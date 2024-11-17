
import { MdSchool} from 'react-icons/md';
import {MdWork} from 'react-icons/md'
import { MdOutlineRocket} from 'react-icons/md'
import { MdComputer } from 'react-icons/md'
function About() {
  return (
    <div className="text-center pt-9 w-full max-h-max bg-gradient-to-b from-blue-100 via-pink-100 to-yellow-200 z-0">


    <h2 className=" text-5xl font-bold mb-9 text-[#01455E] ">About <span className='text-[#E1aD01]'> Me</span> </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto p-6">
        <div className=" hover:scale-105 transition-all duration-300 ease-in-out   flex flex-col items-center p-6 bg-white rounded-lg shadow-lg border border-gray-200">
          <MdSchool size="40px" className="text-[#E1aD01] mb-4" />
          <h3 className="text-2xl font-semibold text-[#01455E]">Education</h3>
          <p className="text-gray-700 mt-2">I&apos;m an Intermediate-level student with a passion for learning and exploring new ideas. Currently enhancing my skills in web development and programming. Always eager to take on challenges and grow in my knowledge.</p>
        </div>
        <div className=" hover:scale-105 transition-all duration-300 ease-in-out  flex flex-col items-center p-6 bg-white rounded-lg shadow-lg border border-gray-200">
          <MdWork size="40px" className="text-[#E1aD01] mb-4" />
          <h3 className="text-2xl font-semibold text-[#01455E]">Experience</h3>
          <p className="text-gray-700 mt-2"> I&apos;m diving into web development &quot;building foundational skills in frontend and backend technologies. Eager to learn and grow in the field as a fresher with a keen interest in coding and technology..</p>
        </div>
        <div className=" hover:scale-105 transition-all duration-300 ease-in-out  flex flex-col items-center p-6 bg-white rounded-lg shadow-lg border border-gray-200">
          <MdComputer size="40px" className="text-[#E1aD01] mb-4" />
          <h3 className="text-2xl font-semibold text-[#01455E]">Technology</h3>
          <p className="text-gray-700 mt-2">I am passionate about exploring new technologies and tools in the web development space. I enjoy working with programming languages like JavaScript &quot; React &quot; and Node.js. Constantly learning and staying updated with the latest tech trends keeps me motivated.</p>
        </div>
        <div className="hover:scale-105 transition-all duration-300 ease-in-out  flex flex-col items-center p-6 bg-white rounded-lg shadow-lg border border-gray-200">
          <MdOutlineRocket size="40px" className="text-[#E1aD01] mb-4" />
          <h3 className="text-2xl font-semibold text-[#01455E] ">Future Goals</h3>
          <p className="text-gray-700 mt-2">My goal is to continuously learn and improve my skills in web development. I aim to contribute to impactful projects that solve real-world problems. By staying curious and dedicated&quot; I hope to make a positive impact in the tech industry.</p>
        </div>
      </div>
    </div>
  );
}

export default About;

