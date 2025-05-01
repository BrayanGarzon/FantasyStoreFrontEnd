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

/src
├── /app
│   ├── /home
│   │   └── page.jsx
│   ├── /productos
│   │   ├── page.jsx
│   ├── /carrito
│   │   └── page.jsx
│   ├── /checkout
│   │   └── page.jsx
│   ├── layout.jsx         # Layout principal (Navbar, Footer, etc)
│   └── globals.css        # Si estás usando Tailwind CSS
├── /components
│   ├── /common            # Navbar, Footer, Header, Loader, etc.
│   └── /ui                # Botones, cards, inputs reutilizables
├── /lib                   # Funciones o hooks personalizados (fetch, utils, etc.)
├── /styles                # Archivos CSS/SCSS si usas estilos personalizados
├── /public                # Imágenes, íconos, logos estáticos
├── /hooks                 # Hooks personalizados como useCart, useToggle

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

