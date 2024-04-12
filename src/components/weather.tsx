import React, { useState, useEffect } from 'react';

interface WeatherPageProps {
  cityName: string;
}

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}

const WeatherPage: React.FC<WeatherPageProps> = ({ cityName }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const API_KEY = 'e6968cb22f4d35a568581c19976e8531';

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`);
        const data: WeatherData = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [cityName]);

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  // Determine background color based on weather description
  let backgroundColor = '#FFFFFF'; // Default background color
  const weatherDescription = weatherData.weather[0].description.toLowerCase();
  if (weatherDescription.includes('clear')) {
    backgroundColor = '#87CEEB'; // Light blue for clear weather
  } else if (weatherDescription.includes('cloud')) {
    backgroundColor = '#778899'; // Light slate gray for cloudy weather
  } else if (weatherDescription.includes('rain')) {
    backgroundColor = '#4682B4'; // Steel blue for rainy weather
  }

  // Inline styles for the WeatherPage component
  const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: backgroundColor, // Dynamic background color
    color: '#FFFFFF', // Text color
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div style={pageStyle}>
      <h1>Weather for {cityName}</h1>
      <p>Temperature: {weatherData.main.temp} K</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
      <p>Pressure: {weatherData.main.pressure} hPa</p>
    </div>
  );
};

export default WeatherPage;
