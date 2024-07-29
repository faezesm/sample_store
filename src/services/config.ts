import axios from "axios";
export const baseURL = "http://192.168.0.120:8081"

const api = axios.create({ baseURL });

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => Promise.reject(error)
);

export default api