import React from 'react';

export default function Skill() {
    const skills = [
        { name: "HTML", percentage: 90 },
        { name: "CSS", percentage: 85 },
        { name: "TypeScript", percentage: 70 },
        { name: "NextJs", percentage: 75 },
        { name: "Node.js", percentage: 70 },
        { name: "Tailwind", percentage: 75 },
    ];

    return (
        <div className="flex flex-col items-center min-h-screen justify-center bg-gradient-to-r from-teal-200 via-indigo-200 to-lime-200

 py-36">
            <h2 className="text-4xl font-bold text-[#01455E] mb-8 text-center">
                My <span className="text-[#E1aD01]">Skills</span>
            </h2>
            <div className="grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-3">
                {skills.map((skill, index) => (
                    <div key={index} className="relative group flex flex-col items-center">
                        <div className="w-32 h-32 border-8 rounded-full border-[#E1aD01] flex items-center justify-center relative group">
                            <div className="w-24 h-24 border-8 rounded-full border-[#01455E] flex items-center justify-center  hover:scale-105">
                                <div className="text-black text-lg font-semibold">{skill.percentage}%</div>
                            </div>
                        </div>

                        <p className="mt-2 text-center text-[#01455E] font-semibold">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}


