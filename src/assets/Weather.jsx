import {useState} from 'react'
import './Weather.css'
import Sun from './cloud.png'

const api={
    baseUrl:"https://api.openweathermap.org/data/2.5/",
    key:"6f6d778394a059e1009dce2cd1b1d0d9"
  }
  
const Weather =()=>{
    const[city,setcity]=useState('');
    const[result,setresult]=useState({})
    function myfxn(e){
      if(e.key=='Enter'){
        fetch(`${api.baseUrl}weather?q=${city}&units=metric&appid=${api.key}`)
        .then(response=>response.json())
        .then(data=>
        {console.log(data)
          setresult(data);
          setcity('')
        }
        )
      }
    }
  return (
    <div className='weather'>

      <div className='inp'>
          <input type="text" className='inp' placeholder='Enter city name' value={city} onChange={e=>setcity(e.target.value)} onKeyPress={myfxn} />

      </div>
      

      {(typeof result.sys!=="undefined")?(
            <div>
                <img src={Sun} alt="" />
                <h1>{result.name}, {result.sys.country}</h1>
                <hr />
                <p>Temperature : <span className='span'>{result.main.temp} °C</span></p>
                <hr />
                <p>Wind Speed : <span className='span1'>{result.wind.speed}Km/h</span></p>
                <hr />
                <p>Sunrise : <span className='span2'>{result.sys.sunrise}</span></p>
                <hr />
                <p>Sunset : <span className='span3'>{result.sys.sunset}</span></p>
                <hr />
                <p>Weather: <span className='span4'>{result.weather[0].main}</span></p>
                <hr />
                <p>Timezone : <span className='span5'>{result.timezone}</span></p>
                <hr />
                <p>Humidity : <span className='span6'>{result.main.humidity}%</span></p>
            </div>
            
        ):("")
      }
    </div>
  )
}

export default Weather
