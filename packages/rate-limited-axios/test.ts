import { RateLimitedAxios } from './lib/RateLimitedAxios';

const axios = new RateLimitedAxios();

const response = await axios.get('https://api.github.com');
console.log(response);
