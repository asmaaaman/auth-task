import axiosInstance from "../BaseUrl/baseUrl";

//interceptors
axiosInstance.interceptors.request.use((request) => {
  console.log("interceptor request", request);
  return request;
});
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("handle response", response);

    return response;
  },
  (error) => {
    console.log("handle error", error);
    console.log(error.response);

    return Promise.reject({ ...error });
  }
);

export default axiosInstance;
