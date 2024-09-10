import axios from "axios";
import { requestInterceptors } from "./axiosInterceptors/axiosInterceptors";

const apiClient = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

apiClient.interceptors.request.use(...requestInterceptors);

export { apiClient };
