import React from 'react'

const Header = ({Input,setInput,city,setCity}) => {

const Handlesearch =()=>{

  setCity(Input.trim());
}



  return (
    <>
   {/* /parents container */}
    <div className='flex flex-row h-16  w-full md:w-2/3 md:ml-44 md:mt-4 md:mr-20 md:rounded-xl bg-gradient-to-r from-[#0052D4] via-[#34b5f5] to-[#79e7fb] items-center justify-around'>

        {/* Logo */}
   <div className=''>
    <p className='text-xl text-amber-50'>Weather <span className='text-2xl text-blue-700 font-bold'>Cast</span> </p>
   </div>

{/* Search */}

<div className='flex items-center justify-center'>
    <input className='h-8 w-44 pl-2 rounded-l-lg  md:w-64 border-1 border-blue-600 outline-0 md:pl-4 text-amber-50 ' type='text' placeholder='Enter Your Location' value={Input} onChange={(e)=>setInput(e.target.value)}></input>
    <button className='h-8  bg-blue-600 w-8 rounded-r-lg text-white'onClick={Handlesearch}>O</button>
</div>
         
    </div>
    
    </>
  )
}

export default Header