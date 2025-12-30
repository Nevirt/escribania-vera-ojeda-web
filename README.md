# Vera Ojeda – Estudio Notarial

Landing page institucional premium para estudio notarial.

## Stack Tecnológico

- **Next.js 14** (App Router)
- **TypeScript**
- **Material UI v5**
- **React 18**

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build para Producción

```bash
npm run build
npm start
```

## Estructura del Proyecto

```
├── app/
│   ├── layout.tsx          # Layout principal con ThemeProvider
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── Header.tsx          # Header/Navbar institucional
│   ├── HeroSection.tsx     # Sección Hero (logo + texto + fondo)
│   ├── AboutSection.tsx    # Sobre el Estudio
│   ├── ServicesSection.tsx # Servicios Notariales
│   ├── ValuesSection.tsx   # Valores Institucionales
│   ├── TestimonialsSection.tsx # Testimonios de clientes
│   ├── CTASection.tsx      # CTA Institucional
│   ├── MapSection.tsx      # Google Maps + información
│   ├── ContactSection.tsx  # Contacto
│   ├── Footer.tsx          # Footer institucional
│   └── WhatsAppButton.tsx # Botón flotante WhatsApp
├── providers/
│   └── ThemeProvider.tsx   # Provider de MUI Theme
├── public/
│   └── images/             # Carpeta para imágenes
│       ├── logo.png        # Logo del estudio
│       └── hero-background.jpg # Imagen de fondo del Hero
└── theme.ts                # Configuración del theme MUI
```

## Configuración Inicial

### 1. Imágenes

Coloca las siguientes imágenes en `public/images/`:

- **logo.png** (o logo.svg) - Logo del estudio
- **hero-background.jpg** - Imagen de fondo para el Hero

Ver `public/images/README.md` para más detalles.

### 2. Datos de Contacto

Edita `app/page.tsx` y actualiza:

- `mapData`: dirección, teléfono, email, horarios, URL de Google Maps
- `whatsappData`: número de WhatsApp y mensaje predeterminado
- `testimonials`: testimonios de clientes

Ver `CONFIGURACION.md` para instrucciones detalladas.

## Branding

### Tipografía
- **Lato** (Regular, Italic, Bold, Bold Italic)

### Paleta de Colores
- Verde petróleo institucional: `#294549`
- Blanco: `#FFFFFF`
- Dorado institucional oscuro: `#CA9954`
- Dorado claro / acento suave: `#EDBD83`

## Características

✅ Header fijo con navegación suave  
✅ Hero con logo, texto e imagen de fondo  
✅ Sección de servicios con cards premium  
✅ Testimonios de clientes  
✅ Integración con Google Maps  
✅ Botón flotante de WhatsApp  
✅ Diseño responsive  
✅ Optimización de imágenes con Next.js Image

## 🌐 Dominio Personalizado

El sitio está configurado para funcionar con el dominio personalizado:
- **www.estudioveraojeda.com**

Para configurar el dominio en Vercel, consulta la guía completa en:
- **[CONFIGURACION_DOMINIO.md](./CONFIGURACION_DOMINIO.md)**

### Resumen Rápido:
1. Ve a tu proyecto en Vercel Dashboard → Settings → Domains
2. Agrega `www.estudioveraojeda.com`
3. Configura los registros DNS según las instrucciones de Vercel
4. Espera la propagación DNS (5 min - 48 horas)

Vercel proporciona SSL/HTTPS automático y gratuito.

## Notas

- Los datos marcados como "[mock]" deben ser reemplazados por información real
- El formulario de contacto requiere configuración de backend para funcionar
- Configura Google Maps API si necesitas funcionalidades avanzadas

