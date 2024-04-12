import { useRouter } from 'next/router';
import React from 'react';
import Weather from "../components/weather";

const CityPage = () => {
  const router = useRouter();
  const cityName = Array.isArray(router.query.cityname)
    ? router.query.cityname[0] // If it's an array, take the first element
    : router.query.cityname;   // If it's not an array, keep it as is

  console.log(cityName, "Cityname");

  if (!cityName) {
    return (
      <div style={{ textAlign: 'center', fontSize: '24px', marginTop: '50vh', transform: 'translateY(-50%)' }}>
        Loading...
      </div>
    );
  }

  let weatherComponent;
  try {
    weatherComponent = <Weather cityName={cityName} />;
  } catch (error) {
    console.error("Error rendering Weather component:", error);
    weatherComponent = <div style={{ textAlign: 'center', fontSize: '24px', marginTop: '50vh', transform: 'translateY(-50%)' }}>Unable to load weather information for {cityName}</div>;
  }

  return (
    <div>
      {weatherComponent}
    </div>
  );
};

export default CityPage;
