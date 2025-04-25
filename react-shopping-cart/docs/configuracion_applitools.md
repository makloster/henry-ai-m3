
# Configuración de Pruebas Visuales con Applitools

Este documento describe los pasos para configurar pruebas visuales automáticas en el proyecto `react-shopping-cart` utilizando **Applitools** con **Playwright**.

---

## 🔧 Requisitos Previos

- Tener instalado Node.js
- Tener el proyecto clonado y funcionando en `localhost:3000`

---

## 🔍 Registro en Applitools

1. Registrarse gratis en [Applitools](https://applitools.com/).
2. Acceder al **Dashboard**.
3. Copiar la **API Key** desde el perfil de usuario.

---

## 📦 Instalación de Dependencias

Desde la raíz del proyecto ejecutar:

```bash
npm install -D @playwright/test
npm install -D playwright
npm install -D @applitools/eyes-playwright
npm install dotenv
npx playwright install
```

---

## 👁️ Configuración de Applitools

### 1. Crear archivo `.env`

Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
APPLITOOLS_API_KEY=TU_API_KEY_AQUI
```

### 2. Agregar `.env` al `.gitignore`

Para no subir la clave al repositorio, agregar:

```gitignore
.env
```

### 3. Crear tests visuales

Ubicarlos dentro de `tests/visual/`. Ejemplos:

- `homepage.visual.spec.js`
- `cart.visual.spec.js`
- `filter.visual.spec.js`

Cada archivo debe cargar las variables de entorno:

```javascript
require('dotenv').config();
```

Y utilizar selectores correctos para los elementos:
- Para abrir el carrito usar:

```javascript
await page.click('[class*="Cart__CartIcon"]');
```

Además, se puede agregar espera explícita para más robustez:

```javascript
await page.waitForSelector('[class*="Cart__CartIcon"]');
await page.click('[class*="Cart__CartIcon"]');
```

---

## 🚀 Ejecución de las pruebas

### 1. Ejecutar pruebas individuales

```bash
npx playwright test tests/visual/homepage.visual.spec.js
npx playwright test tests/visual/cart.visual.spec.js
npx playwright test tests/visual/filter.visual.spec.js
```

### 2. Ejecutar todas las pruebas visuales juntas

Agregado en el `package.json` el script:

```json
"scripts": {
  "test": "playwright test",
  "visual-tests": "playwright test tests/visual/"
}
```

Luego simplemente ejecutar:

```bash
npm run visual-tests
```

---

## 📊 Validación de resultados

Los resultados de las capturas y comparaciones visuales se visualizan en el **Applitools Dashboard**, donde se puede aceptar o rechazar diferencias detectadas.

---

Con esta configuración se asegura una validación visual automática de las pantallas críticas del proyecto, complementando las pruebas end-to-end funcionales.
