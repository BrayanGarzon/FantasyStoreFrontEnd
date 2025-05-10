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

## hello 