import React from 'react'
import Image from 'next/image'
import HeroImage from '../../public/images/image.jpg'
import Background from '../../public/images/bg2.avif'
import Link from 'next/link'



export const Hero = () => {
    return (
        <div className="relative">
  <div className="bg-[url('/images/bg2.avif')] bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-center">
   
    <div className="flex justify-center mb-8 mt-[130px]">
      <Image
        src={HeroImage}
        alt="hero"
        width={200}
        height={200}
        className="rounded-lg transition-all duration-300 ease-in-out shadow-2xl shadow-black hover:scale-110 hover:shadow-lg hover:shadow-black/80"
      />
    </div>

   
    <div className="text-[#000] text-4xl sm:text-5xl font-bold mb-4">
      <h2 className="flex flex-col items-center text-center">
      <span className="italic text-[#01455E] text-4xl sm:text-5xl font-extrabold leading-tightx">
      <span className="animate-wave">Hey 👋</span> I'M
    </span>
        <span className="text-[#E1aD01] mt-3 sm:text-6xl">
          <span className="text-[#01455E]  sm:text-6xl font-extra ">Sadia</span> Khan
        </span>
      </h2>
    </div>

 
    <div className="flex justify-center sm:justify-start mb-8 px-4 sm:px-0">
      <h3 className="text-[#000] text-lg sm:text-xl font-medium tracking-wide leading-relaxed text-center sm:text-left max-w-3xl">
        I'm a motivated beginner front-end developer with a strong grasp of
        <strong className="italic text-[#01455E]"> HTML,</strong>
        <strong className="italic text-[#01455E]"> CSS,</strong> and
        <strong className="italic text-[#01455E]"> JavaScript</strong>. Passionate about creating clean, interactive web pages, always eager to learn new technologies like NextJS.
        I aim to combine design and functionality to deliver an excellent user experience.
      </h3>
    </div>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-x-4 sm:space-y-0 mb-10">
  <button className="bg-[#01455E] w-[180px] sm:w-[200px] h-[50px] text-lg sm:text-xl text-white font-bold rounded-xl transition-all duration-300 ease-in-out hover:bg-[#6497b1] hover:text-[#01455E] hover:scale-105 hover:shadow-2xl hover:shadow-[#01455E]/50">
    Hire Me
  </button>
  <button className="bg-[#E1aD01] w-[180px] sm:w-[200px] h-[50px] text-lg sm:text-xl text-white font-bold rounded-xl transition-all duration-300 ease-in-out hover:bg-slate-400 hover:text-[#01455E] hover:scale-105 hover:shadow-2xl hover:shadow-[#E1aD01]/50">
    <Link href="https://milestone-1-2-zeta.vercel.app/ ">Download CV</Link>
  </button>
</div>

  </div>
</div>

    )
}
