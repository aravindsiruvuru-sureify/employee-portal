// eslint-disable-next-line import/no-unresolved
import axios from "axios";
import decode from "jwt-decode";
import dayjs from "dayjs";
import history from "../../routes/history";
// import createNotification from "../../utils";

const axiosConfig = {
  baseURL: "http://35.200.162.143:8080/",
};

axiosConfig.crossdomain = true;
const axiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.request.use(function (request) {
  // if (!window.navigator.onLine) {
  //   createNotification(
  //     'warning',
  //     'Please make sure you have stable internet connection'
  //   );
  // }

  //set access_token if present
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`;
  }
  const user = decode(accessToken);
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

  if (isExpired) {
    // make refreshToken API call
  }
  // request.headers.refreshtoken = true;

  return request;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    switch (error.response.status) {
      case 401:
        localStorage.removeItem("access_token");
        history.push("/login");
        break;
      default:
        break;
    }
    // createNotification("error", error.response.data.data);
    return Promise.reject(error);
  }
);

export default axiosInstance;

//TODO: need to add base url in .env file
