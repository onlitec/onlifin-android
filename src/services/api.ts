import axios from 'axios';

const api = axios.create({
  baseURL: 'http://your-laravel-backend-url.com/api', // Substitua pela URL do seu backend Laravel
});

export default api;


