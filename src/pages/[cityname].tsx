import { useRouter } from 'next/router';
import React from 'react';
import Weather from "../components/weather";

const CityPage = () => {
  const router = useRouter();
  const cityName = Array.isArray(router.query.cityname)
    ? router.query.cityname[0] // If it's an array, take the first element
    : router.query.cityname;   // If it's not an array, keep it as is

  console.log(cityName);

  if (!cityName) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>Weather information for {cityName}</div>
      <div>
        <Weather cityName={cityName} />
      </div>
    </div>
  );
};

export default CityPage;
