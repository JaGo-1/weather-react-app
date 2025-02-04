import { useEffect, useRef, useState } from 'react'
import "./Weather.css"
import { CiSearch } from "react-icons/ci";
import { FiWind } from "react-icons/fi";
import { IoIosWater } from "react-icons/io";
import  icons  from '../assets/images'
import { getWeatherByCity, getCitySuggestions } from '../api/weatherApi'

const Weather = () => {

    const [weather, setWeather] = useState()
    const ref = useRef();
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const search = async (city) => {

            const weatherData = await getWeatherByCity(city);
            if (weatherData) {
              setWeather({ ...weatherData, icon: icons[weatherData.icon] });
              setSuggestions([]); 
            }
    }
    
   useEffect(() => {
     search('Buenos Aires')
   }, [])

   const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);
    const cityResults = await getCitySuggestions(value);
    setSuggestions(cityResults);
  };

  const handleSelectCity = (city) => {
    setQuery(city);
    search(city);
  };

  return (
    <div className='weather'>

        {weather ? 
            <> 
                <div>
                <div className='weather__search-bar'>
                    <input ref={ref} type="text" placeholder='Search'  value={query} onChange={handleInputChange}/>
                    <div className='icon search-icon' onClick={()=> search(query)}>
                        <CiSearch />
                    </div>
                </div>

                { suggestions ? <>
                    {suggestions.length > 0 && (
                        <ul className='suggestions'>
                            {suggestions.map((city, i) => (
                                <li className='outfit-regular' key={i} onClick={() => handleSelectCity(city)}>
                                    {city}
                                </li>
                            ))}
                        </ul>
                    )}
                    </> : <></>
                }
                </div>
             

                <div className='weather__icon'>
                    <img src={weather.icon} alt="" /> 
                </div>
                <div>
                    <h1 className='outfit-semiBold temperature'>{weather.temperature}°C</h1>
                    <p className='outfit-regular'>{weather.location}</p>
                </div>
        
                <div className='weather__info'>
                    <div className='weather__humidity-percentage'>
                        <IoIosWater size={25}/>
                        <div className='info-text'>
                            <p className='outfit-regular'>{weather.humidity}%</p>
                            <p className='outfit-regular'>Humidity</p>
                        </div>
                    
                    </div>
                    <div className='weather__wind-speed'> 
                        <FiWind size={25} />
                        <div className='info-text'>
                            <p className='outfit-regular'>{weather.speed} Km/h</p>
                            <p className='outfit-regular'>Wind Speed</p>
                        </div>
                    
                    </div>
                </div>
            </> 
            : <div className="loader"></div>
                }

    </div>
  )
}

export default Weather