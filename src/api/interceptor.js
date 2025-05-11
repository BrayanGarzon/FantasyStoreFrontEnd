// src/api/interceptor.ts

'use client';

import axiosInstance from './axios';
import { useAuthStore } from '../store/AuthStore';
import { AuthenticationApi } from '../api-client/api/authentication-api';
import { toast } from 'react-toastify';

const authenticationApi = new AuthenticationApi();

function setupInterceptor({ loader }) {
  const { setLoading } = loader;

// define routes that don't require authentication
const PUBLIC_ROUTES = [

];


  let isRefreshing = false;
  let failedQueue = [];

  const processQueue = (error, token) => {
    failedQueue.forEach((prom) => {
      error ? prom.reject(error) : prom.resolve(token);
    });
    failedQueue = [];
  };

  const logoutAndClearState = () => {
    const authStore = useAuthStore.getState();
    authStore.logout(); // Limpia el estado del usuario
    localStorage.removeItem('accessToken'); // Borra el token del almacenamiento
    localStorage.removeItem('refreshToken');
  };

  axiosInstance.interceptors.request.use(
    (config) => {
      setLoading(true);
  
      // Verificar si la URL es una ruta pública
      const isPublicRoute = PUBLIC_ROUTES.some((route) =>
        config.url?.startsWith(route)
      );
  
      if (!isPublicRoute) {
        const { accessToken } = useAuthStore.getState();
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
      }
  
      return config;
    },
    (error) => {
      setLoading(false);
      return Promise.reject(error);
    }
  );
  

  axiosInstance.interceptors.response.use(
    (response) => {
      setLoading(false);
      return response;
    },
    async (error) => {
      setLoading(false);

      const authStore = useAuthStore.getState();
      const originalRequest = error.config;

      // Manejar error 401 - Si no es un intento de refresh
      if (error.response?.status === 401 && !originalRequest._retry) {
        if (originalRequest.url.includes('/authentication/refresh/')) {
          // Si el refresh falla, limpia el estado y notifica al usuario
          logoutAndClearState();
          // toast.error('Tu sesión ha expirado. Inicia sesión nuevamente.', {
          //   position: 'top-right',
          //   autoClose: 3000,
          // });
          return Promise.reject(error); // Cancelamos la solicitud
        }

        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          }).then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return axiosInstance(originalRequest);
          });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          const { refreshToken } = authStore;
          if (!refreshToken) {
            logoutAndClearState();
            toast.warn('Tu sesión ha expirado. Por favor, inicia sesión nuevamente.', {
              position: 'top-right',
              autoClose: 3000,
            });
            return Promise.reject(error); // Cancelamos la solicitud
          }

          // Intentamos refrescar el token
          const response = await authenticationApi.authenticationRefreshCreate({
            tokenRefresh: { refresh: refreshToken },
          });

          const { access, refresh } = response.data;

          if (typeof access === 'string' && typeof refresh === 'string') {
            authStore.setTokens(access, refresh);

            // Guardamos los nuevos tokens
            localStorage.setItem('accessToken', access);
            localStorage.setItem('refreshToken', refresh);
          } else {
            throw new Error('Tipos de token inválidos');
          }

          axiosInstance.defaults.headers.common.Authorization = `Bearer ${access}`;
          processQueue(null, access);

          isRefreshing = false;
          return axiosInstance(originalRequest);
        } catch (err) {
          processQueue(err, null);
          isRefreshing = false;

          // Limpia el estado y notifica al usuario
          logoutAndClearState();
          // toast.error('Tu sesión ha caducado. Inicia sesión nuevamente.', {
          //   position: 'top-right',
          //   autoClose: 3000,
          // });

          return Promise.reject(err); // Cancelamos todas las solicitudes pendientes
        }
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
}

export default setupInterceptor;