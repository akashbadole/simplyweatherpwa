import { useState } from 'react';
import './App.css';
import fetchWeather from './api/fetchWeather';

const App = () => {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({})

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query)

      console.log(data)
      setWeather(data);
      setQuery('');
    }
  }

  const content=[
    {
      id:1,
      data:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet semper neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius. '
    },
    {
      id:2,
      data:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet semper neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius. '
    },
    {
      id:3,
      data:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet semper neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius. '
    },{
      id:4,
      data:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet semper neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius. '
    },{
      id:5,
      data:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet semper neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius. '
    }
    ,{
      id:6,
      data:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet semper neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius. '
    }
  ]

  return (
    <>
      <div className='container'>
        <header className='Menus' >
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Help</li>
          </ul>
        </header>

        <h1 className='title'>Hi Guest Welcome to SimplyWeather app</h1>
        <section>

          <h2>Search here</h2>

          <input type='text' className='search' placeholder='Search....'
            value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />

          {weather.main && (
            <div className='city'>
              <h2 className='city-name'>
                <span>{weather.name}</span>
                <sup>{weather.sys.country}</sup>
              </h2>
              <div className='city-temp'>
                {Math.round(weather.main.temp)}
                <sup>&deg;C</sup>
              </div>
              <div className='info'>
                <img className='city-icon' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                <p>{weather.weather[0].description}</p>
              </div>
            </div>
          )}

        </section>
        <article>
        <ul  className="helpdata">
          {
            content.map((number) => {
              return(
                
                <li key={number.id}>{number.data}</li>
              
              )
            })
          
          }
          </ul>
        </article>
        <footer>
          <p className='footerText'>&copy; All right reserved by you 2022....</p>

        </footer>
      </div>
    </>
  );
}

export default App;
