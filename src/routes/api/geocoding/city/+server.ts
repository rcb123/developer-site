import fetch from 'isomorphic-fetch';
import { json } from '@sveltejs/kit';

export const GET = async ({ url }: any) => {
    const apiKey = process.env.API_KEY;
    const cityName = url.searchParams.get('city');
    const stateCode = url.searchParams.get('state');
    const countryCode = 'US';
    const limit = '1';
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=${limit}&appid=${apiKey}`);
    const data = await response.json();
    return json(data)
}