# 🌐 Red de Ciudades y Zonas Verdes

Aplicación React que modela una red de ciudades interconectadas. Cada ciudad puede tener zonas verdes jerárquicas (árbol N-ario), y toda la red es visualizada con grafos interactivos.

---

## ⚙️ Funcionalidades

- Añadir y eliminar ciudades.
- Crear zonas verdes y subzonas (estructura de árbol).
- Conectar ciudades entre sí.
- Visualizar toda la red con nodos de colores.
- Calcular altura máxima y total de zonas verdes por ciudad.
- Estética limpia y responsive.

---

## 🔄 Consideraciones

- **Tras añadir una ciudad:** debes **recargar la página manualmente**.
- **Tras conectar ciudades:** presiona **"Refrescar grafo"** para actualizar visualmente.
- Las conexiones se dibujan solo si son **mutuas**.

---

## ▶️ Instrucciones

```bash
# Instala dependencias (si tienes conflictos usa el flag legacy)
npm install --legacy-peer-deps

# Corre el proyecto en desarrollo
npm run dev
