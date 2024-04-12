// src/api/cityApi.ts
export interface City {
    // Define the properties of the City type
    name: string;
    country: string;
    timezone: string;
    id: number;
    // Add other properties as needed
}

export async function fetchCities(): Promise<City[]> {
    try {
        const response = await fetch(
            'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?order_by=name&limit=100'
        );

        if (!response.ok) {
            throw new Error('Failed to fetch cities');
        }

        const data = await response.json();
        console.log(data)
        // Assuming the data structure is an array of cities
        // and each city object has properties like 'name', 'country', 'timezone', 'id'
        const cities: City[] = data.results.map((cityData: any) => ({
            name: cityData.name,
            country: cityData.cou_name_en,
            timezone: cityData.timezone,
            id: cityData.id,
            // Add other properties as needed
        }));

        return cities;
    } catch (error) {
        console.error('Error fetching cities:', error);
        throw error; // Propagate the error to the caller
    }
}
