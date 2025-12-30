# Configuración de Dominio Personalizado en Vercel

Esta guía te ayudará a configurar el dominio `www.estudioveraojeda.com` para tu sitio web alojado en Vercel.

## 📋 Requisitos Previos

1. **Dominio registrado**: Debes tener el dominio `estudioveraojeda.com` registrado en un proveedor de dominios (GoDaddy, Namecheap, Google Domains, etc.)
2. **Cuenta de Vercel**: Tu proyecto debe estar desplegado en Vercel
3. **Acceso al panel de DNS**: Necesitas acceso al panel de configuración DNS de tu proveedor de dominios

## 🚀 Pasos para Configurar el Dominio

### Paso 1: Agregar el Dominio en Vercel

1. Ve a tu proyecto en [Vercel Dashboard](https://vercel.com/dashboard)
2. Haz clic en tu proyecto
3. Ve a la pestaña **"Settings"** (Configuración)
4. En el menú lateral, selecciona **"Domains"** (Dominios)
5. En el campo de texto, ingresa: `www.estudioveraojeda.com`
6. Haz clic en **"Add"** (Agregar)

### Paso 2: Configurar los Registros DNS

Vercel te mostrará los registros DNS que necesitas configurar. Tienes dos opciones:

#### Opción A: Usar los Nameservers de Vercel (Recomendado)

Si tu proveedor de dominios lo permite, puedes cambiar los nameservers:

1. En Vercel, copia los nameservers que te proporciona (algo como):
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`

2. Ve al panel de tu proveedor de dominios
3. Busca la sección de "Nameservers" o "DNS Nameservers"
4. Reemplaza los nameservers actuales con los de Vercel
5. Guarda los cambios

**Ventaja**: Vercel gestionará automáticamente todos los registros DNS necesarios.

#### Opción B: Configurar Registros DNS Manualmente

Si prefieres mantener tus nameservers actuales, configura estos registros:

1. **Registro CNAME para www**:
   - **Tipo**: `CNAME`
   - **Nombre/Host**: `www`
   - **Valor/Destino**: `cname.vercel-dns.com`
   - **TTL**: `3600` (o el valor por defecto)

2. **Registro A para el dominio raíz (opcional)**:
   - Si quieres que `estudioveraojeda.com` (sin www) también funcione:
   - **Tipo**: `A`
   - **Nombre/Host**: `@` o `estudioveraojeda.com`
   - **Valor/Destino**: `76.76.21.21` (IP de Vercel - puede cambiar)
   - **TTL**: `3600`

### Paso 3: Agregar el Dominio Raíz (Opcional pero Recomendado)

Para que tanto `www.estudioveraojeda.com` como `estudioveraojeda.com` funcionen:

1. En Vercel, agrega también: `estudioveraojeda.com` (sin www)
2. Vercel configurará automáticamente la redirección

### Paso 4: Verificar la Configuración

1. Espera entre 5 minutos y 48 horas para que los cambios DNS se propaguen
2. En Vercel, verás el estado del dominio:
   - 🟡 **"Pending"**: Esperando verificación DNS
   - 🟢 **"Valid"**: Dominio configurado correctamente
   - 🔴 **"Invalid"**: Hay un problema con la configuración

3. Puedes verificar el estado ejecutando en tu terminal:
   ```bash
   dig www.estudioveraojeda.com
   ```
   O usar herramientas online como:
   - [whatsmydns.net](https://www.whatsmydns.net/)
   - [dnschecker.org](https://dnschecker.org/)

### Paso 5: Configurar Redirecciones (Opcional)

Vercel permite configurar redirecciones automáticas:

1. En la configuración de dominios de Vercel
2. Puedes configurar que `estudioveraojeda.com` redirija a `www.estudioveraojeda.com`
3. O viceversa, según tu preferencia

## 🔧 Configuración Adicional en Next.js

No necesitas cambiar nada en el código de Next.js. Vercel maneja automáticamente:
- ✅ Certificados SSL/HTTPS (gratis)
- ✅ Redirecciones HTTP a HTTPS
- ✅ Configuración de dominios

## 📝 Ejemplo de Configuración DNS por Proveedor

### GoDaddy
1. Ve a "DNS" → "Manage DNS"
2. Agrega registro CNAME:
   - Name: `www`
   - Value: `cname.vercel-dns.com`
   - TTL: `600 seconds`

### Namecheap
1. Ve a "Advanced DNS"
2. Agrega registro CNAME:
   - Host: `www`
   - Value: `cname.vercel-dns.com`
   - TTL: `Automatic`

### Google Domains
1. Ve a "DNS" → "Custom resource records"
2. Agrega registro CNAME:
   - Name: `www`
   - Data: `cname.vercel-dns.com`
   - TTL: `3600`

## ⚠️ Solución de Problemas

### El dominio no se verifica después de 48 horas

1. Verifica que los registros DNS estén correctos
2. Asegúrate de que no haya conflictos con otros registros
3. Verifica que el dominio esté correctamente escrito en Vercel
4. Contacta al soporte de Vercel si persiste el problema

### Error "Domain already in use"

- El dominio puede estar configurado en otro proyecto de Vercel
- Verifica todos tus proyectos en Vercel
- O contacta al soporte si crees que es un error

### El sitio carga pero muestra "Not Found"

- Verifica que el proyecto esté desplegado correctamente
- Asegúrate de que el dominio esté asociado al proyecto correcto
- Verifica que el build haya sido exitoso

## 🔒 SSL/HTTPS

Vercel proporciona certificados SSL automáticamente y de forma gratuita. Una vez que el dominio esté configurado, Vercel:
- Obtendrá automáticamente un certificado SSL de Let's Encrypt
- Configurará HTTPS automáticamente
- Renovará el certificado automáticamente

## 📚 Recursos Adicionales

- [Documentación oficial de Vercel sobre dominios](https://vercel.com/docs/concepts/projects/domains)
- [Guía de DNS de Vercel](https://vercel.com/docs/concepts/projects/domains/add-a-domain)
- [Soporte de Vercel](https://vercel.com/support)

## ✅ Checklist Final

- [ ] Dominio agregado en Vercel
- [ ] Registros DNS configurados correctamente
- [ ] Esperado tiempo de propagación (5 min - 48 horas)
- [ ] Dominio verificado en Vercel (estado "Valid")
- [ ] Sitio accesible en `www.estudioveraojeda.com`
- [ ] SSL/HTTPS funcionando correctamente
- [ ] Redirecciones configuradas (si aplica)

---

**Nota**: El tiempo de propagación DNS puede variar. Generalmente toma entre 5 minutos y 24 horas, pero puede llegar hasta 48 horas en algunos casos.

