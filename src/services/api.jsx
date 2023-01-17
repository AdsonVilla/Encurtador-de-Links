import axios from "axios";

export const key = "f5769a6bd6b85fdd58f260bd65e2f80ea2ce3ec0";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4/",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;
