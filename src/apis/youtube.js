import axios from 'axios';

const KEY = 'AIzaSyAw2vzB4KewwtCdPICcNRPpgGaOLjWNrwQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
