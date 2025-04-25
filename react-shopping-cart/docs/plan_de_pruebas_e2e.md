# Plan de Pruebas E2E - react-shopping-cart

Este documento describe los flujos de prueba end-to-end que serán grabados y ejecutados con **Testim** para validar funcionalidades clave del proyecto `react-shopping-cart`.

---

## ✅ Test 1: Agregar producto al carrito

- **Objetivo**: Verificar que un usuario puede agregar un producto al carrito correctamente.
- **Pasos**:
  1. Navegar a `http://localhost:3000`
  2. Esperar que se carguen los productos
  3. Hacer clic en **"Add to cart"** de cualquier producto
  4. Abrir el carrito
  5. Verificar que el producto está en la lista con nombre y precio correctos
  6. Finalizar

---

## ✅ Test 2: Eliminar producto del carrito

- **Objetivo**: Validar que el usuario puede remover productos del carrito.
- **Pasos**:
  1. Ingresar a `http://localhost:3000`
  2. Agregar un producto al carrito
  3. Abrir el carrito
  4. Hacer clic en el botón **"Remove"**
  5. Verificar que el producto ya no está en la lista
  6. Verificar que el carrito indica vacío o total $0
  7. Finalizar

---

## ✅ Test 3: Filtrar productos por talle

- **Objetivo**: Validar que el filtro por talla funciona correctamente.
- **Pasos**:
  1. Navegar a `http://localhost:3000`
  2. Seleccionar un talle desde la barra lateral (ej: "M")
  3. Verificar que solo se muestran productos disponibles en esa talla
  4. Cambiar a otro talle (ej: "XL") y verificar resultados
  5. Finalizar

---

Estos tests serán ejecutados con el grabador visual de Testim, y luego validados en distintos navegadores para asegurar consistencia funcional del sistema de compras.
