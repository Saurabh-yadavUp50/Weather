import React, { useState } from 'react'
import cloud from   './assets/cloud.png'
import humidity from './assets/humidity.png'
import Temprature from './assets/Temprature.png'
import ggg from './assets/ggg.png'
import press from './assets/press.png'
import winds from './assets/winds.png'
import cloudss from './assets/cloudss.png'
import kuchupuchu from './assets/kuchupuchu.png'

const Page = ({CityName,Temp,Humidity, Cloudy,wind, Pressure,feels_like,Othercityweather,StateName,Currentcity,isSearch}) => {


   function getFeelsLike(Temp) {
    if (Temp <= 10) return "🥶 Very Cold";
    if( Temp <= 20) return "❄️ Cold";
    if (Temp <= 28) return "😊 Pleasant";
    if (Temp <= 34) return "🌤 Warm";
    if (Temp <= 40) return "🥵 Hot";
    return "🔥 Very Hot";
  }



  const today = new Date();

const day = today.toLocaleDateString("en-US", {
  weekday: "long",
  day:"numeric",
  month:"short",
});


  return (
    <>
    
    <div className=" md:h-screen w-full  flex flex-col md:grid md:grid-cols-[2fr_1fr] md:grid-rows-2 gap-8 bg-blue-100 md:ml-42 mt-4 p-8 md:h-[400px] md:w-2/3">

  <div className="bg-blue-200 rounded-lg flex flex-row justify-around md:items-center  ">
    
   <div className='flex flex-col '>
     <div className="div1 ">
      <img  className=' h-30 w-52 -ml-8 'src={cloud}></img>
    </div>
    <div className="div2 flex flex-row gap-4 h-12 w-full md:-mt-2 items-center mt-2 mb-8 md:mb-0 ml-2  text-blue-600 text-lg font-bold">

      <p className='ml-4 '> {isSearch ? CityName : Currentcity}</p>
      <p>{Math.round(Temp)}°C</p>
    </div>


   </div  >

      <div className=' h-30 w-30 md:h-40 md:w-40 m-2 rounded-lg bg-white flex flex-col'>

<div className='flex flex-row justify-evenly h-1/2 w-full '>
<img src={cloud} className='h-14 md:h-16 w-20 -ml-2 '></img>
<p  className='h-12 md:h-14 w-20 mt-4 text-xl md:text-2xl'>{Math.round(Temp)}°C</p>

</div>

<div className='mt-4 ml-4'>
  <p className='text-sm md:text-xl'>{day}</p>
  
</div>


      </div>
  </div>

 
 {/* Others City */}

  <div className="bg-blue-200 rounded-lg row-span-2 flex flex-col   md:order-2 order-3">
    <p className='mt-2 ml-4 text-xl '>Others City</p>
    <div className='grid grid-cols-1 grid-rows-6 gap-4 p-4'>

     { Othercityweather.map((item)=>{
        let Tem =item.main.temp;
     function getFeelsLikesOthers(Tem) {
    if (Tem <= 10) return "🥶 Very Cold";
    if( Tem <= 20) return "❄️ Cold";
    if (Tem<= 28) return "😊 Pleasant";
    if (Tem <= 34) return "🌤 Warm";
    if (Tem <= 40) return "🥵 Hot";
    return "🔥 Very Hot";
  }


      return(
        
<div className="bg-white rounded-lg pt-2 flex flex-row w-full justify-evenly gap-2 "  key={item.id}>
      <div><img src={cloud} className='h-10 w-12'></img></div>
      <div className='flex flex-col ' >
        <p className='flex flex-row whitespace-nowrap'>{item.name}</p>
        <p className='text-sm'>{getFeelsLikesOthers(Tem)}</p>
      </div>
      <div className=' pr-2'><p>{Math.round(item.main.temp)}°C</p></div>
    </div>


      )
 
     })

     }
      
      
       
    </div>
  </div>

{/* Today's Highlight */}

  <div className="order-2 md:order-3 md:h-64 bg-blue-200 rounded-lg p-4">

  <p className="text-xl font-semibold mb-4">
    Today's Highlight
  </p>

  <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4">
    <div className="bg-white rounded-lg pt-2 flex flex-row gap-2 ">
      <div><img src={ggg} className='h-10 w-12'></img></div>
      <div className='flex flex-col '>
        <p className='flex flex-row whitespace-nowrap'>feel Likes</p>
        <p className='text-sm'>{getFeelsLike(feels_like)}</p>
      </div>
     
    </div>

 
    <div className="bg-white rounded-lg pt-2 flex flex-row gap-2 ">
      <div><img src={cloudss} className='h-10 w-12'></img></div>
      <div className='flex flex-col '>
        <p className='flex flex-row whitespace-nowrap'>Cloud</p>
        <p className='text-sm'>{ Cloudy} %</p>
      </div>
     
    </div>

     
    <div className="bg-white rounded-lg pt-2 flex flex-row gap-2 ">
      <div><img src={Temprature} className='h-10 w-12'></img></div>
      <div className='flex flex-col '>
        <p className='flex flex-row whitespace-nowrap'>Temprature</p>
        <p className='text-sm'>{Math.round(Temp)}°C</p>
      </div>
     
    </div>
  

 
    <div className="bg-white rounded-lg pt-2 flex flex-row gap-2 ">
      <div><img src={humidity} className='h-10 w-12'></img></div>
      <div className='flex flex-col '>
        <p className='flex flex-row whitespace-nowrap'>Humidity</p>
        <p className='text-sm'>{Humidity}%</p>
      </div>
      
    </div>

 
    <div className="bg-white rounded-lg pt-2 flex flex-row gap-2 ">
      <div><img src={winds} className='h-10 w-12'></img></div>
      <div className='flex flex-col '>
        <p className='flex flex-row whitespace-nowrap'>Wind</p>
        <p className='text-sm  whitespace-nowrap'>{wind}m/sec</p>
      </div>
      
    </div>

 
    <div className="bg-white rounded-lg pt-2 flex flex-row gap-2 ">
      <div><img src={press} className='h-10 w-12'></img></div>
      <div className='flex flex-col '>
        <p className='flex flex-row whitespace-nowrap'>Pressure</p>
        <p className='text-sm'>{Pressure} hpa</p>
      </div>
     
    </div>





  </div>

</div>

</div>
    </>
  )}

export default Page