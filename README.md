# 🩱 E-Commerce de Lencería

Plataforma web desarrollada con React y Next.js (App Router), enfocada en la venta de lencería femenina.  
Diseñada para ofrecer una experiencia moderna, rápida y responsive al usuario final.

---

## 🛍️ Características principales

- 🔄 Navegación moderna con App Router
- 🛒 Carrito de compras con estado global
- 🧩 Componentes reutilizables con diseño atractivo
- 📱 Diseño responsive con Tailwind CSS
- 🎨 Animaciones suaves con Framer Motion
- 🖼️ Vista de producto detallada

---

## 📄 Páginas actuales

- `/home` → Landing principal
- `/productos` → Catálogo de productos
- `/productos/[id]` → Detalle de producto
- `/carrito` → Carrito de compras
- `/checkout` → Proceso de pago (en desarrollo)

---


## 🏗️ Estrucutra del proyecto 

/src <br>
├── /app <br>
│   ├── /home <br>
│   │   └── page.jsx <br>
│   ├── /productos <br>
│   │   ├── page.jsx <br>
│   ├── /carrito <br>
│   │   └── page.jsx <br>
│   ├── /checkout <br>
│   │   └── page.jsx <br>
│   ├── layout.jsx         # Layout principal (Navbar, Footer, etc) <br>
│   └── globals.css        # Si estás usando Tailwind CSS <br>
├── /components <br>
│   ├── /common            # Navbar, Footer, Header, Loader, etc. <br>
│   └── /ui                # Botones, cards, inputs reutilizables <br>
├── /lib                   # Funciones o hooks personalizados (fetch, utils, etc.) <br>
├── /styles                # Archivos CSS/SCSS si usas estilos personalizados <br>
├── /public                # Imágenes, íconos, logos estáticos <br>
├── /hooks                 # Hooks personalizados como useCart, useToggle <br>

---

## 🚀 Tecnologías utilizadas

| Tecnología       | Descripción                                 |
|------------------|---------------------------------------------|
| **Next.js 14+**   | Framework moderno con enrutamiento App Router |
| **React 18+**     | Librería base para interfaces               |
| **Tailwind CSS**  | Utilidades CSS para diseño rápido           |
| **shadcn/ui**     | Componentes listos para producción          |
| **Lucide React**  | Iconos modernos personalizables             |
| **Framer Motion** | Animaciones fluidas y modernas              |
| **Sonner**        | Notificaciones flotantes (toast)            |
| **Zustand**       | Estado global simple para carrito           |
| **React Hook Form** | Formularios con validaciones eficientes  |


## 🔧 Mejoras de Componentes y Diseño

| Tecnología      | Descripción                                                     | Enlace Oficial                                                      |
| --------------- | --------------------------------------------------------------- | ------------------------------------------------------------------- |
| **Radix UI**    | Componentes accesibles y personalizables para bases sólidas     | [radix-ui.com](https://www.radix-ui.com/)                           |
| **Headless UI** | Componentes sin estilos para máxima personalización             | [headlessui.com](https://headlessui.com/)                           |
| **Mantine**     | Más de 120 componentes listos para producción y hooks avanzados | [mantine.dev](https://mantine.dev/)                                 |
| **React Icons** | Colección masiva de iconos para complementar Lucide             | [react-icons.github.io](https://react-icons.github.io/react-icons/) |
| **Heroicons**   | Iconos SVG para interfaces modernas (compatibles con Tailwind)  | [heroicons.com](https://heroicons.com/)                             |


## 🎨 Efectos y Animaciones Avanzadas

| Tecnología                | Descripción                                      | Enlace Oficial                                                                                 |
| ------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| **GSAP (GreenSock)**      | Animaciones avanzadas con control detallado      | [gsap.com](https://gsap.com/)                                                                  |
| **Lottie React**          | Animaciones JSON ligeras para microinteracciones | [lottiereact.com](https://lottiereact.com/)                                                    |
| **React Spring**          | Física realista para animaciones fluidas         | [react-spring.dev](https://react-spring.dev/)                                                  |
| **React Scroll Parallax** | Efectos de desplazamiento (scroll) elegantes     | [npmjs.com/package/react-scroll-parallax](https://www.npmjs.com/package/react-scroll-parallax) |
| **Anime.js**              | Librería ligera para animaciones precisas        | [animejs.com](https://animejs.com/)                                                            |


## 🛠️ Optimización de Código y Estado

| Tecnología                       | Descripción                                         | Enlace Oficial                                                           |
| -------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------ |
| **Jotai**                        | Estado global moderno y reactivo, similar a Zustand | [jotai.org](https://jotai.org/)                                          |
| **TanStack Query (React Query)** | Manejo avanzado de datos y sincronización de cache  | [tanstack.com/query](https://tanstack.com/query)                         |
| **Recoil**                       | Manejo de estado más flexible y escalable           | [recoiljs.org](https://recoiljs.org/)                                    |
| **SWR**                          | React Hooks para fetching de datos en Next.js       | [swr.vercel.app](https://swr.vercel.app/)                                |
| **react-use**                    | Hooks reutilizables para lógica común               | [github.com/streamich/react-use](https://github.com/streamich/react-use) |



## 🖼️ Mejoras en Imágenes y Videos

| Tecnología        | Descripción                                  | Enlace Oficial                                                                               |
| ----------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Next.js Image** | Optimización automática de imágenes          | [nextjs.org/docs/api-reference/next/image](https://nextjs.org/docs/api-reference/next/image) |
| **Cloudinary**    | Manipulación de medios en la nube            | [cloudinary.com](https://cloudinary.com/)                                                    |
| **React Player**  | Reproducción de medios embebidos             | [npmjs.com/package/react-player](https://www.npmjs.com/package/react-player)                 |
| **BlurHash**      | Imágenes con carga progresiva y placeholders | [blurha.sh](https://blurha.sh/)                                                              |



## 🔍 Mejoras en Búsqueda y Filtros

| Tecnología         | Descripción                                       | Enlace Oficial                                          |
| ------------------ | ------------------------------------------------- | ------------------------------------------------------- |
| **Fuse.js**        | Búsqueda difusa en grandes volúmenes de datos     | [fusejs.io](https://fusejs.io/)                         |
| **Algolia Search** | Búsqueda rápida con ranking avanzado              | [algolia.com](https://www.algolia.com/)                 |
| **Elastic UI**     | Interfaz para datos complejos y filtros avanzados | [elastic.github.io/eui](https://elastic.github.io/eui/) |

---

## 📦 Librerías instaladas

```bash
# Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# shadcn/ui
npx shadcn-ui@latest init

# Otras dependencias útiles
npm install lucide-react
npm install framer-motion
npm install sonner
npm install zustand
npm install react-hook-form
```
---


## ⚙️ Clonación y uso local
```bash

# Clona el repositorio
git clone https://github.com/BrayanGarzon/FantasyStore.git

# Entra al directorio
cd fantasy_store

# Instala dependencias
npm install

# Ejecuta el servidor local
npm run dev
```