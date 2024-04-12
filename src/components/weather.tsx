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
  const [error, setError] = useState<string | null>(null);
  const API_KEY = 'e6968cb22f4d35a568581c19976e8531';

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data: WeatherData = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Failed to fetch weather data. Please try again later.');
      }
    };

    fetchWeatherData();
  }, [cityName]);

  if (error) {
    return (
      <div style={{ textAlign: 'center', fontSize: '24px', marginTop: '50vh', transform: 'translateY(-50%)' }}>
        {error}
      </div>
    );
  }

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
    backgroundImage: 'linear-gradient(to bottom right, #FFA07A, #FF6347)', // Gradient background
    color: '#FFFFFF', // Text color
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    textAlign: 'center',
  };

  const boxStyle: React.CSSProperties = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black background for the box
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', // Box shadow for the box
  };

  return (
    <div style={pageStyle}>
      <div style={boxStyle}>
        <h1>Weather for {cityName}</h1>
        <p>Temperature: {weatherData.main.temp} K</p>
        <p>Weather: {weatherData.weather[0].description}</p>
        <p>Humidity: {weatherData.main.humidity}%</p>
        <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        <p>Pressure: {weatherData.main.pressure} hPa</p>
      </div>
    </div>
  );
};

export default WeatherPage;
