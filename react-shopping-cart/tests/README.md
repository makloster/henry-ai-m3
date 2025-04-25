# IA para Programadores | 7 AI para frontend software testing

El paquete de tests creados integra pruebas end-to-end y visuales sobre la aplicación `react-shopping-cart` de Jefferson Ribeiro, utilizando herramientas de IA como Testim, Playwright y Applitools.

---

## Herramientas Utilizadas

- **Testim**: Grabación y ejecución de pruebas E2E automáticas.
- **Playwright**: Framework de testing para automatizar navegadores.
- **Applitools Eyes**: Validación visual de UI utilizando IA.
- **[NOTA] ASKUI**: No integrado por limitaciones de acceso a SDK.

---

## Instalación

1. Clonar el proyecto:

```bash
git clone https://github.com/jeffersonRibeiro/react-shopping-cart.git
cd react-shopping-cart
```

2. Instalar dependencias:

```bash
npm install
npx playwright install
```

3. Crear archivo `.env`:

```bash
APPLITOOLS_API_KEY=TU_API_KEY_AQUI
```

4. Agregar `.env` al `.gitignore`.

---

## Estructura del Proyecto

```plaintext
react-shopping-cart/
├── tests/
│   ├── e2e/        # Pruebas de Testim
│   └── visual/     # Pruebas visuales de Playwright + Applitools
├── docs/           # Documentación de configuración y pruebas
├── .env            # Variables sensibles (API Keys)
├── package.json    # Se agrega un script para correr los tests visuales de Playwright
└── README.md
```

---

## Comandos Disponibles

- Ejecutar las pruebas visuales:

```bash
npm run visual-tests
```

- Ejecutar pruebas grabadas en Testim: Desde la plataforma Testim (no local).

---

## Consideraciones sobre ASKUI

Por razones de tiempo y acceso limitado, no se integró ASKUI en el proyecto actual.
Sin embargo, las pruebas visuales están completamente cubiertas utilizando Applitools.

---

## Créditos

- Jefferson Ribeiro - [react-shopping-cart](https://github.com/jeffersonRibeiro/react-shopping-cart)
- Manuel Kloster - Proyecto educativo para integración de testing automatizado con IA para el Curso de IA para Programadores de Henry.
