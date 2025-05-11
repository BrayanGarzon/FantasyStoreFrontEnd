// src/hooks/useBanners.ts
'use client';

import { useEffect, useState } from 'react';// ajusta según tu generación
import { CarouselItemResponse } from '../api-client'
import { carouselApi } from '../api'


export const useBanners = () => {
  const [banners, setBanners] = useState<CarouselItemResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await carouselApi.mainCarouselCarouselList();
        setBanners(res.data);
      } catch (error) {
        console.error('Error al cargar banners', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBanners();
  }, []);

  return { banners, loading };
};
