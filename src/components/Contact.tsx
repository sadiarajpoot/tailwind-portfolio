import react from 'react';
export default  function Contact(){
    return(
      
        <div className="text-center bg-white">
      <h2 className=" text-5xl font-bold mb-9 text-[#01455E] p-9  ">Contact <span className='text-[#E1aD01]'> Me</span> </h2>
      <div className="max-w-sm  mx-auto p-6 ">
        <div className="hover:scale-105 transition-all duration-300 ease-in-out shadow-lg shadow-[rgba(0,0,0,0.3)] flex flex-col items-start p-6 rounded-lg  border-1 border-gray-200">
         <label htmlFor="name" className='text-[#01455E]' >Name :</label>
         <input type="text" name="name" id="name"  className='border-2 border-[#E1aD01] text-[#01455E]'placeholder='John Thomas'/>
         <label htmlFor="name" className='mt-[30px] text-[#01455E] '>Email :</label>
         <input type="text" name="name" id="name"  className='border-2 border-[#E1aD01] text-[#01455E]  ' placeholder='John@gmail.com'/>
         <label htmlFor="name" className='mt-[30px] text-[#01455E]'>Phone :</label>
         <input type="text" name="name" id="name"  className='border-2 border-[#E1aD01] text-[#01455E] 'placeholder='0231-349988 '/>
         <label htmlFor="name" className='mt-[30px] text-[#01455E]'>Message :</label>
         <textarea name="name" id="name"  className='border-2 border-[#E1aD01] w-[210px] 'placeholder='Write Your Message'/>
        </div>
        </div>
        </div>
    )
}