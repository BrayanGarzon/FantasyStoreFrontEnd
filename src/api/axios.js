'use client';

import axios from "axios";

const apiUrl = process.env.API_HOST || "http://localhost:8000";




const axiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
});

export default axiosInstance;