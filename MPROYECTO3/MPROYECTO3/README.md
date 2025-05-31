# 🏢 Plataforma de Gestión Organizacional

Aplicación web en React para visualizar y gestionar una estructura jerárquica de empleados y sus conexiones de comunicación.

### 📚 Tecnologías y librerías:
- React + Vite
- Redux Toolkit
- react-d3-tree (organigrama)
- vis-network (red de comunicación)
- SASS (estilos)
- localStorage (persistencia local)

📦dependencias
npm install react-router-dom
npm install @reduxjs/toolkit react-redux
npm install react-d3-tree --legacy-peer-deps
npm install vis-network
npm install sass

🧭 ¿Cómo usar la plataforma?
🌳 Sección Organigrama:
Haz clic en un empleado para editarlo.
Desde ahí puedes agregar subalternos.
El total de subalternos se muestra automáticamente.

🔗 Sección Red de Comunicación:
Selecciona dos empleados y conéctalos (emisor → receptor).
Puedes eliminar conexiones individuales o todas a la vez.
La red se actualiza automáticamente.