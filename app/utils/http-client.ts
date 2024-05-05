import config from "../config";
import axios from "axios";

const axiosAuth = axios.create({
  baseURL: config.baseUrl,
  timeout: config.httpTimeout,
  headers: config.headers,
});

export default axiosAuth;
