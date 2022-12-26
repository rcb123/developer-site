import fetch from 'isomorphic-fetch';
import { json } from '@sveltejs/kit';

import 'dotenv/config'

export const GET = async ({ url }: any) => {
    const apiKey = process.env.API_KEY;
    const zipcode = url.searchParams.get('zip');
    const countryCode = 'US';
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},${countryCode}&appid=${apiKey}`);
    const data = await response.json();
    return json(data)
}