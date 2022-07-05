import axios from "axios";

export const api = axios.create({ 
  baseURL: "http://localhost:3050",
  headers: {
    Authorization: '',
  },
});