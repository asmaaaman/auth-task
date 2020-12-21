import history from "../../routes/history";
import { axiosInstance } from "../baseUrl";

//interceptors
axiosInstance.interceptors.request.use((request) => {
  console.log("interceptor request", request);
  return request;
});
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("handle response", response);
    history.push("welcom");
    return response;
  },
  (error) => {
    console.log("handle error", error);
    console.log(error.response);

    return Promise.reject({ ...error });
  }
);

export default axiosInstance;
