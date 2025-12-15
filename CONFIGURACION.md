# Guía de Configuración

## 📁 Imágenes

Coloca las siguientes imágenes en la carpeta `public/images/`:

1. **logo.png** (o logo.svg)
   - Logo del estudio notarial
   - Formato recomendado: PNG con fondo transparente
   - Tamaño mínimo: 400x400px

2. **hero-background.jpg**
   - Imagen de fondo para la sección Hero
   - Formato recomendado: JPG optimizado
   - Tamaño mínimo: 1920x1080px
   - Debe ser una imagen profesional (escritorio, documentos, ambiente notarial)

## 📍 Google Maps

Para configurar el mapa en la sección de ubicación:

1. Ve a [Google Maps](https://www.google.com/maps)
2. Busca la dirección del estudio
3. Haz clic en "Compartir" → "Insertar un mapa"
4. Copia la URL del iframe
5. Actualiza el archivo `app/page.tsx` en la constante `mapData`:
   ```typescript
   mapEmbedUrl: 'TU_URL_DE_GOOGLE_MAPS_AQUI',
   ```

## 📱 WhatsApp

Para configurar el botón flotante de WhatsApp:

1. Edita `app/page.tsx`
2. Actualiza la constante `whatsappData`:
   ```typescript
   phoneNumber: '5491123456789', // Sin espacios, sin +, sin guiones
   message: 'Tu mensaje personalizado aquí',
   ```

   **Formato del número:**
   - Código de país (54 para Argentina)
   - Código de área sin el 0 inicial
   - Número completo
   - Ejemplo: 5491123456789 (para Buenos Aires, Argentina)

## 📝 Testimonios

Los testimonios se encuentran en `app/page.tsx` en la constante `testimonials`. Puedes agregar, editar o eliminar testimonios según necesites.

## 📧 Datos de Contacto

Actualiza los siguientes datos en `app/page.tsx`:

- **MapSection**: `address`, `phone`, `email`, `hours`
- **ContactSection**: Los datos mock deben ser reemplazados en el componente

## 🎨 Personalización

Todos los colores y estilos están definidos en `theme.ts`. Los colores principales son:

- Verde petróleo: `#294549`
- Dorado oscuro: `#CA9954`
- Dorado claro: `#EDBD83`
- Blanco: `#FFFFFF`

