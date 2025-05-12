// src/api/index.ts

'use client';

import { AuthenticationApi, CarouselApi} from '../api-client/';
import axiosInstance from "./axios";
const apiUrl = process.env.API_HOST || "http://localhost:8000";

export const authenticateApi = new AuthenticationApi(undefined, apiUrl, axiosInstance);
export const carouselApi = new CarouselApi(undefined, apiUrl, axiosInstance);
