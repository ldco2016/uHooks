import axios from "axios";

const KEY = "AIzaSyAm0grvn4LiVKamZ8IT7KYLqlDNpDz35lE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
