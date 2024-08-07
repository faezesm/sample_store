import axios from "axios";
export const baseURL = "http://192.168.0.120:8081";

const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
(error: any) => {
  Promise.reject(error);
};


api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => Promise.reject(error)
);


// const refreshToken = async () => {
//   try {
//     const resp = await api.get("api/auth/login");
//     console.log("refresh token", resp.data);
//     return resp.data;
//   } catch (e) {
//     console.log("Error", e);
//   }
// };

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const refreshToken = localStorage.getItem("refreshToken");
//       if (refreshToken) {
//         try {
//           const response = await axios.post(`${baseURL}/refreshToken`, { refreshToken });
//           // don't use axious instance that already configured for refresh token api call
//           const newAccessToken = response.data.accessToken;
//           localStorage.setItem("accessToken", newAccessToken); //set new access token
//           originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//           return axios(originalRequest); //recall Api with new token
//         } catch (error) {
//           Promise.reject(error)
//         }
//       }
//     }
//   }
// );

export default api;
