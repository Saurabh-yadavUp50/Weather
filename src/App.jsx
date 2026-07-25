import React, { useEffect, useState } from 'react'
import Header from './Header'
import Page from './Page'
import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;


const App = () => {
  const[address,setAddress]=useState("")
const [Input,setInput]=useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [currentLocation,setCurrentLocation]=useState({})
  const [currentWeather,setcurrentWeather]=useState({})
  const[ Othercityweather,setOthercityweather]=useState([]) 
  const  Othercity =["delhi","mumbai","lucknow","Bengaluru","chennai"];
  const [isSearch, setIsSearch] = useState(false);

  const locationName =
  address.city ||
  address.town ||
  address.village ||
  address.county ||
  "Unknown";

// console.log(locationName);
  
  
const URL = "https://api.openweathermap.org/data/2.5/weather"

async function GetCurrentWeather() {
  try{
    const current = await axios.get(URL,
      {
          params:{
             lat: currentLocation.lat,
              lon: currentLocation.lon,
              appid: API_KEY,
              units: "metric",
  },   
      }
    )
    setWeather(current.data);
      // console.log(current.data)
  }
  catch (error){
    console.log("Error")
  }
  
}

async function GetWeather() {
  try{

  const response = await axios.get(URL,{
  params:{
    q:Input,
    appid: API_KEY,
    units: "metric",
  },
  
});
setWeather(response.data);
setIsSearch(true);
console.log(weather)


  } catch (error) {
    console.log("Error")
  }
}



async function Getothercityweather(){
try{
    const others = await Promise.all(
      Othercity.map((othercity)=>
      axios.get(URL,{
        params:{
          q: othercity,
              appid: API_KEY,
              units: "metric",
        },
      }))
    )
    setOthercityweather(others.map((res) => res.data));
}
catch{
 console.log("Error");

}

}
useEffect(() => {
  navigator.geolocation.getCurrentPosition((position) => {
    setCurrentLocation({
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    });
  });
}, []);

useEffect(() => {
if (currentLocation.lat && currentLocation.lon){
GetCurrentWeather() ;
setIsSearch(false);
  fetchAddress(
    currentLocation.lat,
    currentLocation.lon
   );
}
}, [currentLocation]);


const fetchAddress = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
    );

    const data = await response.json();

    if (data && data.display_name) {
      setAddress(data.address);
    } else {
      setAddress("Address nahi mil paya.");
    }
  } catch (err) {
    console.log("Address fetch karne me error aayi.",err);
  }
};
  

//  console.log(address)
useEffect(() => {
  GetWeather();
}, [city]);

useEffect(()=>{
 Getothercityweather();
},[]);

if (!weather) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-700 flex items-center justify-center px-6">
      <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-8 md:p-12 text-center shadow-2xl max-w-md w-full border border-white/20">

        {/* Spinner */}
        <div className="mx-auto h-16 w-16 rounded-full border-4 border-white/30 border-t-white animate-spin"></div>

        {/* Icon */}
        <div className="text-5xl mt-6">📍</div>

        {/* Heading */}
        <h1 className="text-white text-2xl md:text-3xl font-bold mt-4">
          Chacha, Location Allow Karo 
        </h1>

        {/* Message */}
        <p className="text-white/90 mt-3 text-sm md:text-base leading-6">
          Current weather dikhane ke liye location Ki izazat zaroori hai.
          Browser me <span className="font-semibold">"Allow"</span> button dabaiye.
        </p>

        {/* Footer */}
        <p className="text-white/70 text-xs mt-6">
          Weather data load ho raha hai...
        </p>
      </div>
    </div>
  );
}
 
  return (
    <>
    <Header Input={Input} setInput={setInput} city={city} setCity={setCity}/>
    <Page Temp ={weather.main.temp} CityName={weather.name} Humidity={weather.main.humidity} Cloudy ={weather.clouds.all} wind={weather.wind.speed}  Pressure ={weather.main.pressure} feels_like ={weather.main.feels_like}
     Othercityweather={Othercityweather}
     
     Currentcity={address.city} StateName={address.state} isSearch={isSearch}
    
    />
    
    
    </>
  )
}

export default App