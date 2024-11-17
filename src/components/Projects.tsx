import react from 'react'
import Image from 'next/image'
import P1 from '../../../public/images/resume-01-html-css.webp'
import P2 from "../../../public/images/hijab.webp"
import P3 from "../../../public/images/static-resume.webp"
import P4 from "../../../public/images/dynamic resume2.webp"
import P5 from "../../../public/images/food website2.webp"
import P6 from "../../../public/images/travel.webp"
import Link from 'next/link'

export default function Projects() {
    return (
        <>
            <div className="flex justify-center items-center">
            <h2 className=" text-5xl font-bold mb-9 text-[#01455E] ">My<span className='text-[#E1aD01]'> Projects</span> </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 py-6 mx-auto mt-20 min-h-[calc(100vh-200px)]">
                <div className="border border-gray-300 shadow-2xl rounded-lg p-2 w-[290px] h-[385px] ml-9 transition-all duration-300 ease-in-out hover:scale-105">
                    <Image src={P1} alt="1" width={280} height={230} className="bg-slate-600" />
                    <h4 className="text-base font-bold text-gray-500 p-2">Resume Website</h4>
                    <h4 className="text-sm font- text-black ml-2">Creative developer focused on building intuitive and engaging web experiences</h4>
                    <h3 className="flex justify-between p-2 text-sm text-gray-500 font-semibold">Rates ⭐⭐⭐⭐
                        <button className='mr-5 underline'><Link href="https://sadia-khan-resume-website234.vercel.app/ ">View</Link></button>
                    </h3>
                    <button className=" h-[35px] w-[120px] bg-[#e34c26] shadow-lg shadow-[rgba(0,0,0,0.4)]  text-white font-bold p-1 rounded-lg mt-3 ml-2 hover:bg-[#f06529] hover:border-none hover:text-white transition-all duration-300">HTML</button>
                    <button className=" h-[35px] w-[120px] bg-[#004b64] shadow-lg shadow-[rgba(0,0,0,0.4)] text-white p-1 font-bold rounded-lg mt-3 ml-2 hover:bg-[#489cd7] hover:border-none hover:text-white transition-all duration-300">CSS</button>

                </div>

                <div className="border border-gray-300 shadow-2xl rounded-lg p-2 w-[290px] h-[385px] ml-9 transition-all duration-300 ease-in-out hover:scale-105">
                    <Image src={P2} alt="1" width={280} height={230} className="bg-slate-600" />
                    <h4 className="text-base font-bold text-gray-500 p-2 tracking-wide">Hijab Website</h4>
                    <h4 className="text-sm font- text-black ml-2"> Our Hijab collection variety of fabrics, colors, and designs, carefully select every taste and occasion</h4>
                    <h3 className="flex justify-between p-2 text-sm text-gray-500 font-semibold">Rates ⭐⭐⭐⭐
                        <button className='mr-5 underline'><Link href="https://hijab-website.vercel.app/?vercelToolbarCode=vWHKyCXU3gVM6FK ">View</Link></button>
                    </h3>
                    <button className=" h-[35px] w-[120px] bg-[#e34c26] shadow-lg shadow-[rgba(0,0,0,0.4)] text-white font-bold p-1 rounded-lg mt-3 ml-2 hover:bg-[#f06529] hover:border-none hover:text-white transition-all duration-300">NextJS</button>
                    <button className=" h-[35px] w-[120px] bg-[#004b64] text-white p-1 shadow-lg shadow-[rgba(0,0,0,0.4)] rounded-lg font-bold mt-3 ml-2 hover:bg-[#489cd7] hover:border-none hover:text-white transition-all duration-300">Tailwind CSS</button>

                </div>

                <div className="border border-gray-300 shadow-2xl rounded-lg p-2 w-[290px] h-[385px] ml-9 transition-all duration-300 ease-in-out hover:scale-105">
                    <Image src={P3} alt="1" width={280} height={230} className="bg-slate-600" />
                    <h4 className="text-base font-bold text-gray-500 p-2 tracking-wide">Static Resume</h4>
                    <h4 className="text-sm font- text-black ml-2">A concise resume showcasing skills, experience, achievements for career advancement.</h4>
                    <h3 className="flex justify-between p-2 text-sm text-gray-500 font-semibold">Rates ⭐⭐⭐⭐
                        <button className='mr-5 underline'><Link href="https://milestone-1-2-zeta.vercel.app/ ">View</Link></button>
                    </h3>
                    <button className=" h-[35px] w-[120px] bg-[#e34c26] shadow-lg shadow-[rgba(0,0,0,0.4)] text-white font-bold p-1 rounded-lg mt-3 ml-2 hover:bg-[#f06529] hover:border-none hover:text-white transition-all duration-300">HTML</button>
                    <button className=" h-[35px] w-[120px] bg-[#004b64] text-white p-1 shadow-lg shadow-[rgba(0,0,0,0.4)] rounded-lg font-bold mt-3 ml-2 hover:bg-[#489cd7] hover:border-none hover:text-white transition-all duration-300">CSS</button>
                </div>

                <div className="border border-gray-300 shadow-2xl rounded-lg p-2 w-[290px] h-[385px] ml-9 transition-all duration-300 ease-in-out hover:scale-105">
                    <Image src={P4} alt="1" width={280} height={230} className="bg-slate-600" />
                    <h4 className="text-base font-bold text-gray-500 p-2 tracking-wide">Dynamic Resume</h4>
                    <h4 className="text-sm font- text-black ml-2">A dynamic resume highlights key skills, experiences,achievements tailored to each job opportunity.</h4>
                    <h3 className="flex justify-between p-2 text-sm text-gray-500 font-semibold">Rates ⭐⭐⭐⭐
                        <button className='mr-5 underline'><Link href="https://milestone-05-updated.vercel.app/">View</Link></button>
                    </h3>
                    <button className=" h-[35px] w-[120px] bg-[#e34c26] shadow-lg shadow-[rgba(0,0,0,0.4)] text-white font-bold p-1 rounded-lg mt-3 ml-2 hover:bg-[#f06529] hover:border-none hover:text-white transition-all duration-300">HTML</button>
                    <button className=" h-[35px] w-[120px] bg-[#004b64] text-white p-1 shadow-lg shadow-[rgba(0,0,0,0.4)] rounded-lg font-bold mt-3 ml-2 hover:bg-[#489cd7] hover:border-none hover:text-white transition-all duration-300">CSS</button>
                </div>
                <div className="border border-gray-300 shadow-2xl rounded-lg p-2 w-[290px] h-[385px] ml-9 transition-all duration-300 ease-in-out hover:scale-105">
                    <Image src={P5} alt="1" width={280} height={230} className="bg-slate-600" />
                    <h4 className="text-base font-bold text-gray-500 p-2 tracking-wide">Food Website</h4>
                    <h4 className="text-sm font- text-black ml-2">Food website showcasing popular dishes, ingredients, and recipes tailored to every preference.</h4>
                    <h3 className="flex justify-between p-2 text-sm text-gray-500 font-semibold">Rates ⭐⭐⭐⭐
                        <button className='mr-5 underline'><Link href="/">View</Link></button>
                    </h3>
                    <button className=" h-[35px] w-[120px] bg-[#e34c26] shadow-lg shadow-[rgba(0,0,0,0.4)] text-white font-bold p-1 rounded-lg mt-3 ml-2 hover:bg-[#f06529] hover:border-none hover:text-white transition-all duration-300">NextJS</button>
                    <button className=" h-[35px] w-[120px] bg-[#004b64] text-white p-1 shadow-lg shadow-[rgba(0,0,0,0.4)] rounded-lg font-bold mt-3 ml-2 hover:bg-[#489cd7] hover:border-none hover:text-white transition-all duration-300">Tailwind CSS</button>
                </div>

                <div className="border border-gray-300 shadow-2xl rounded-lg p-2 w-[290px] h-[385px] ml-9 transition-all duration-300 ease-in-out hover:scale-105">
                    <Image src={P6} alt="1" width={280} height={230} className="bg-slate-600" />
                    <h4 className="text-base font-bold text-gray-500 p-2 tracking-wide">Travel Website</h4>
                    <h4 className="text-sm font- text-black ml-2">Travel website featuring top destinations, experiences,tips tailored to every adventure and interest</h4>
                    <h3 className="flex justify-between p-2 text-sm text-gray-500 font-semibold">Rates ⭐⭐⭐⭐
                        <button className='mr-5 underline'><Link href="/">View</Link></button>
                    </h3>
                    <button className=" h-[35px] w-[120px] bg-[#e34c26] shadow-lg shadow-[rgba(0,0,0,0.4)] text-white font-bold p-1 rounded-lg mt-3 ml-2 hover:bg-[#f06529] hover:border-none hover:text-white transition-all duration-300">NextJS</button>
                    <button className=" h-[35px] w-[120px] bg-[#004b64] text-white p-1 shadow-lg shadow-[rgba(0,0,0,0.4)] rounded-lg font-bold mt-3 ml-2 hover:bg-[#489cd7] hover:border-none hover:text-white transition-all duration-300">Tailwind CSS</button>
                </div>

            </div>
        </>
    )
}