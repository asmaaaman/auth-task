import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://boiler-stage.ibtikar.sa/`,
});

export default axiosInstance;
