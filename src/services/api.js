import axios from "axios";

const REQUEST_TIMEOUT = 5000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};
