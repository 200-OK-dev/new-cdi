# Build-Time Static News Setup

## 📋 Configuración Requerida

### 1. Variables de Entorno para CMS Backend (Render)

Agrega estas variables en el dashboard de Render:

```env
# Configuración existente
ADMIN_USERNAME=tu_admin
ADMIN_PASSWORD=tu_password
JWT_SECRET=tu_jwt_secret
CLOUDINARY_CLOUD_NAME=tu_cloudinary_name
CLOUDINARY_API_KEY=tu_cloudinary_key
CLOUDINARY_API_SECRET=tu_cloudinary_secret
NODE_ENV=production

# NUEVAS: Para build-time static
GITHUB_REPO_OWNER=tu-usuario-github
GITHUB_REPO_NAME=new-cdi
GITHUB_WEBHOOK_TOKEN=tu_personal_access_token
BASE_URL=https://cmsexpress.onrender.com
```

### 2. Crear Personal Access Token en GitHub

1. Ve a **GitHub.com** → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. **Generate new token (classic)**
3. **Scopes necesarios:**
   - ✅ `repo` (Full control of private repositories)
   - ✅ `workflow` (Update GitHub Action workflows)
4. **Copia el token** y úsalo como `GITHUB_WEBHOOK_TOKEN`

### 3. Actualizar Variables en Archivos

Edita estos archivos con tus valores reales:

#### `/scripts/update-news.js`
- Línea 2: Cambia `API_URL` si usas dominio custom

#### `/.github/workflows/update-news.yml`
- Línea 22: Verifica la URL del CMS

#### `/backend/routes/webhook.js`
- Líneas 5-6: Cambia por tu usuario/repo de GitHub

## 🚀 Flujo de Activación

### Paso 1: Push cambios al repositorio
```bash
# En CMS Express (backend)
cd /home/yo/proyectos/cmsexpress
git add .
git commit -m "Add webhook system for build-time static generation"
git push

# En CDI Chile (frontend)
cd /home/yo/proyectos/new-cdi  
git add .
git commit -m "Add build-time static news generation system"
git push
```

### Paso 2: Configurar variables en Render
- Ve al dashboard de CMS Express en Render
- Agrega las variables de entorno listadas arriba
- Redeploy del backend

### Paso 3: Verificar funcionamiento

#### Test manual del script:
```bash
cd /home/yo/proyectos/new-cdi
node scripts/update-news.js
```

#### Test del webhook:
```bash
curl -X POST https://cmsexpress.onrender.com/api/webhook/trigger-update
```

#### Test del endpoint de estado:
```bash
curl https://cmsexpress.onrender.com/api/webhook/status
```

## 🔄 Funcionamiento Automático

Una vez configurado:

1. **Admin crea/edita noticia** en CMS
2. **CMS dispara webhook** automáticamente  
3. **GitHub Actions ejecuta** script de actualización
4. **Descarga noticias e imágenes** del CMS
5. **Actualiza archivos estáticos** en el repositorio
6. **Hace commit automático**
7. **Vercel redeploy** automático
8. **Noticias visibles** en 1-2 minutos

## 🧪 Testing del Sistema

### Test completo:
1. Crea una noticia de prueba en el CMS
2. Verifica que se disparó el webhook (logs de Render)
3. Verifica que corrió GitHub Actions (pestaña Actions en GitHub)
4. Verifica que se creó el commit automático
5. Verifica que la noticia aparece en cdichile.org

### Troubleshooting común:
- **Webhook falla**: Verificar `GITHUB_WEBHOOK_TOKEN` y permisos
- **Script falla**: Verificar acceso a API del CMS
- **Imágenes no descargan**: Verificar URLs de Cloudinary
- **GitHub Actions no corre**: Verificar sintaxis del workflow YAML

## ⚡ Beneficios Finales

✅ **Performance**: Noticias cargan instantáneamente (estáticas)  
✅ **SEO**: Google indexa contenido prerenderizado  
✅ **Escalabilidad**: Sin límites de requests a APIs  
✅ **Resilencia**: Sitio funciona aunque CMS esté offline  
✅ **Costos**: Todo gratis en tiers gratuitos  
✅ **UX**: Usuarios nunca esperan carga de APIs  

## 📞 Soporte

Si algo no funciona, revisa los logs de:
1. **Render**: Logs del CMS backend
2. **GitHub Actions**: Pestaña Actions del repositorio
3. **Vercel**: Build logs del frontend