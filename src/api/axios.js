'use client';

import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_HOST || "http://192.168.1.12:8000";




const axiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
});

export default axiosInstance;