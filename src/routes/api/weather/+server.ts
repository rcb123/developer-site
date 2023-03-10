import fetch from 'isomorphic-fetch';
import { json } from '@sveltejs/kit';

import 'dotenv/config'

export const GET = async ({ url }: any) => {
    const apiKey = process.env.WEATHER_API_KEY;
    const latitude = url.searchParams.get('lat');
    const longitude = url.searchParams.get('lng');
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`);
    const data = await response.json();
    return json(data)
}