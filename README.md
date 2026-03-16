# Yurna Finance - Sitio Web Profesional

Sitio web profesional desarrollado con Next.js 14, TypeScript y Tailwind CSS para Yurna Finance, consultoría estratégica en gestión financiera e inversiones.

## 🚀 Tecnologías

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Framer Motion** - Animaciones fluidas
- **React 18** - Biblioteca UI

## 📁 Estructura del Proyecto

```
yurnaapp/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   ├── globals.css        # Estilos globales
│   ├── finanzas/          # Página de finanzas
│   ├── proyectos/          # Página de proyectos
│   └── real-estate/       # Página de real estate
├── components/             # Componentes reutilizables
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Stats.tsx
│   ├── Services.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   ├── Newsletter.tsx
│   ├── WhatsAppFloat.tsx
│   ├── PrivacyModal.tsx
│   ├── LegalModal.tsx
│   ├── FinanzasPage.tsx
│   ├── ProyectosPage.tsx
│   └── RealEstatePage.tsx
├── public/
│   └── assets/            # Imágenes y assets estáticos
└── package.json
```

## 🛠️ Instalación y Desarrollo

1. **Instalar dependencias:**
```bash
npm install
```

2. **Ejecutar en desarrollo:**
```bash
npm run dev
```

3. **Abrir en el navegador:**
```
http://localhost:3000
```

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 🎨 Características

- ✅ Diseño responsive y moderno
- ✅ Animaciones suaves con Framer Motion
- ✅ Optimización de imágenes con Next.js Image
- ✅ SEO optimizado con metadata
- ✅ Navegación fluida entre páginas
- ✅ Componentes modulares y reutilizables
- ✅ TypeScript para mayor seguridad de tipos
- ✅ Tailwind CSS para estilos rápidos y consistentes

## 📱 Páginas

- **/** - Página principal con todas las secciones
- **/finanzas** - Servicios de finanzas personales y empresariales
- **/proyectos** - Estructuración y gestión de proyectos
- **/real-estate** - Servicios inmobiliarios

## 🔧 Configuración

### Variables de Entorno

No se requieren variables de entorno para el funcionamiento básico. Si necesitas integrar servicios externos (formularios, newsletter, etc.), puedes agregar un archivo `.env.local`.

### Personalización

- **Colores**: Edita `tailwind.config.ts` para cambiar la paleta de colores
- **Fuentes**: Las fuentes están importadas en `app/globals.css`
- **Contenido**: Edita los componentes en `components/` para modificar el contenido

## 📝 Notas

- Las imágenes deben estar en `public/assets/img/`
- El favicon debe estar en `public/assets/favicon.svg`
- Los enlaces de WhatsApp están configurados con el número +507 6897 3414

## 🚀 Despliegue

El sitio está listo para desplegar en plataformas como:
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **AWS Amplify**
- Cualquier plataforma que soporte Node.js

Para Vercel:
```bash
npm install -g vercel
vercel
```

## 📄 Licencia

Todos los derechos reservados © Yurna Finance
