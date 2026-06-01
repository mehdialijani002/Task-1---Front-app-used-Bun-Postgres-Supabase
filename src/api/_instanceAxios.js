import axios from "axios";
import Cookies from "js-cookie";

// Base URLs from environment variables
export const BASE_URL_ADDRESS = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

// Create Axios instance
export const axiosInstance = axios.create();

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Set baseURL dynamically
    config.baseURL = BASE_URL_ADDRESS;

    // Attach Authorization header
    const token = Cookies.get("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    // Set appropriate content-type
    const isFormData = config.data instanceof FormData;
    config.headers["Content-Type"] = isFormData
      ? "multipart/form-data"
      : "application/json";

    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;

      switch (status) {
        case 401:
          Cookies.remove("accessToken");
          Cookies.remove("refresh_token");
          Cookies.remove("mode");
          Cookies.remove("role");
          Cookies.remove("username");
          window.location.href = "/panel/signin";
          break;

        case 403:
          window.location.href = "/unauthorized";
          break;

        case 404:
        case 500:
          console.error(`API Error ${status}:`, error.response);
          break;

        default:
          break;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
