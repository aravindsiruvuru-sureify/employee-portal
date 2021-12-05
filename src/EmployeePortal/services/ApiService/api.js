// eslint-disable-next-line import/no-unresolved
import axios from "axios";

import history from "../../routes/history";
// import createNotification from "../../utils";

const headers = {};

const axiosConfig = {
  baseURL: "https://sureify-portal-be.herokuapp.com/",
  headers,
};

const axiosInstance = axios.create();

axiosConfig.crossdomain = true;

// axiosInstance.interceptors.request.use(function (request) {
//   if (!window.navigator.onLine) {
//     createNotification(
//       'warning',
//       'Please make sure you have stable internet connection'
//     );
//   }
//   //set access_token if present
//   const acessToken = localStorage.getItem('access_token');
//   if (acessToken) {
//     request.headers.Authorization = `Token ${acessToken}`;
//   }

//   return request;
// });

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // switch (error.response.status) {
    //   case 401:
    //     localStorage.removeItem("access_token");
    //     history.push("/login");
    //     break;
    //   default:
    //     break;
    // }
    // createNotification("error", error.response.data.data);
    return Promise.reject(error);
  }
);

export default axiosInstance;

//TODO: need to add base url in .env file
