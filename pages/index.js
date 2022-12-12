import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';

import { styled } from '@stitches/react';

import axios from 'axios';
import {useState} from 'react';
import {BsSearch} from 'react-icons/bs'
import Clouds from '../utils/clouds'

export default function Home() {

  const [city, setCity] = useState('');
  const [icon, setIcon] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const inputHandle = (e) => {
    setCity(e.target.value);
  }

  const fetchWeather = (e) => {
    e.preventDefault()
    if(city){
      setLoading(true);
      axios.get(url).then((response) => {
        setWeather(response.data);
        setIcon(response.data.weather)
      })
      setCity('');
      setLoading(false);
    }
  }


  return (
    <div >
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Weather next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="d-flex flex-column justify-content-center align-items-center pt-5">
          <form>
          <input value={city} onChange={inputHandle}/>
          <button type="submit" value="Submit" onClick={fetchWeather}>Szukaj</button>
          </form>

          <div>
            <CityContainer>
            <HeadingCity className="pt-4">
              {weather.main ? weather.name : 'Pogoda'}
              <WeatherIconsList>
              {weather.main 
              ? (
                icon.map((item, key) => {
                  return(
                    
                    <ListItem key={key}>       
                    <Image 
                    alt="weather"
                    width={70}
                    height={70} 
                    src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`} />
                  </ListItem>
                
                  )
                })
              )  
              : ''}
            </WeatherIconsList>
            </HeadingCity>
            </CityContainer>
            <p>{(weather.main ? 'temperatura: ' + (parseFloat(weather.main.temp)-273.15).toFixed(1) + ' °C' : '')}</p>
            <CloudsContainer>{weather.main ? <Clouds weather={weather}/> : ''}</CloudsContainer>
          </div>
    </div>
    </div>
  )
}
const CloudsContainer = styled('div', {
  position: 'relative',
  
})
const ListItem = styled('li', {
  listStyle: 'none'
})

const CityContainer = styled('div', {
  position: 'relative',
})
const WeatherIconsList = styled('ul', {
  position: 'absolute',
  left: '100%',
  top: '0',
  display: 'flex',
  left: '100%',
  padding: '0'
})

const HeadingCity = styled('h1', {
  width: '10  0%',
  position: 'relative',
})