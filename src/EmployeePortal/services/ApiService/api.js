// eslint-disable-next-line import/no-unresolved
import axios from "axios";

import history from "../../routes/history";
// import createNotification from "../../utils";

const headers = {
  Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJocHVzdWx1cmkiLCJpc0FkbWluIjp0cnVlLCJleHAiOjE2NDEzMzIwMzMsImlhdCI6MTY0MTMxNDAzM30.WMIRKvj5HHIOpxJouEhS3Dtl4TgAt2vKTOwFy4O7vz45ss4dJeTVWcju_Fq8UQRaR47QbWwfy_kO2ZRyeXBcNw`,
};

const axiosConfig = {
  baseURL: "http://35.200.162.143:8080/",
  headers,
};

const axiosInstance = axios.create(axiosConfig);

axiosConfig.crossdomain = true;

axiosInstance.interceptors.request.use(function (request) {
  // if (!window.navigator.onLine) {
  //   createNotification(
  //     'warning',
  //     'Please make sure you have stable internet connection'
  //   );
  // }
  //set access_token if present
  const acessToken =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJocHVzdWx1cmkiLCJpc0FkbWluIjp0cnVlLCJleHAiOjE2NDEzMDc3NzMsImlhdCI6MTY0MTI4OTc3M30.O0GpwuFYwNZQRUyxAJ28X0gqhdhX2KqsCGSo9InHQC0JgAVJVOHiVJ1AyUjQdiuCrlY2Hd7zzKOu97TlRYZzaQ";
  // request.headers.Authorization = `Bearer ${acessToken}`;

  return request;
});

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
