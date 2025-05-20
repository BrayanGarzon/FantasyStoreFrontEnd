'use client';

import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_HOST || "http://127.0.0.1:8000";




const axiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
});

export default axiosInstance;