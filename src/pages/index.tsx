import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface City {
  name: string;
  country: string;
  timezone: string;
  latitude: number;
  longitude: number;
  [key: string]: any; // Index signature allowing any string key
}

const fetchData = async (offset: number): Promise<City[]> => {
  const limit = 20;
  const response = await fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=${limit}&offset=${offset}`);
  const data = await response.json();
  return data.results.map((city: any) => ({
    name: city.name,
    country: city.cou_name_en,
    timezone: city.timezone,
    latitude: city.coordinates.lat,
    longitude: city.coordinates.lon,
  }));
};

const App: React.FC = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: string } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const distanceToBottom = document.documentElement.offsetHeight - (window.innerHeight + document.documentElement.scrollTop);
      if (distanceToBottom < 1 && !loading) {
        setLoading(true);
        setOffset(prevOffset => prevOffset + 20);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  useEffect(() => {
    const fetchDataAndUpdateCities = async () => {
      const newCities = await fetchData(offset);
      setCities(prevCities => [...prevCities, ...newCities]);
      setLoading(false);
    };
    fetchDataAndUpdateCities();
  }, [offset]);

  useEffect(() => {
    setFilteredCities(
      cities.filter(city =>
        (city.name && city.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (city.country && city.country.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (city.timezone && city.timezone.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    );
  }, [cities, searchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (key: string) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedCities = () => {
    const sortableCities = [...filteredCities];
    if (sortConfig !== null) {
      sortableCities.sort((a, b) => {
        const key = sortConfig.key;
        if (a[key] < b[key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[key] > b[key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableCities;
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', background: 'linear-gradient(to bottom, orange, white)' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>City Information</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search by city, country, or timezone..."
        style={{ marginBottom: '10px', padding: '5px', width: '100%', boxSizing: 'border-box' }}
      />
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2', fontSize: '1.2em' }}>
            <th style={{ padding: '8px', textAlign: 'left', cursor: 'pointer' }} onClick={() => handleSort('name')}>
              <button style={{ border: 'none', background: 'none', cursor: 'pointer' }}>City Name</button>
            </th>
            <th style={{ padding: '8px', textAlign: 'left', cursor: 'pointer' }} onClick={() => handleSort('country')}>
              <button style={{ border: 'none', background: 'none', cursor: 'pointer' }}>Country</button>
            </th>
            <th style={{ padding: '8px', textAlign: 'left', cursor: 'pointer' }} onClick={() => handleSort('timezone')}>
              <button style={{ border: 'none', background: 'none', cursor: 'pointer' }}>Timezone</button>
            </th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Latitude</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {sortedCities().map((city, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '8px', textAlign: 'left' }}>
                <Link href={`/${encodeURIComponent(city.name)}`}>
                  {city.name}
                </Link>
              </td>
              <td style={{ padding: '8px', textAlign: 'left' }}>{city.country}</td>
              <td style={{ padding: '8px', textAlign: 'left' }}>{city.timezone}</td>
              <td style={{ padding: '8px', textAlign: 'left' }}>{city.latitude}</td>
              <td style={{ padding: '8px', textAlign: 'left' }}>{city.longitude}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default App;
