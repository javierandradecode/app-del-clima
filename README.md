# 🌦️ Aplicación del Clima

Una aplicación simple creada con React y Vite que permite a los usuarios buscar el clima actual de cualquier ciudad del mundo, consumiendo los datos de WeatherAPI.com.

## 📸 Vista Previa

![Vista Previa de la Aplicación del Clima](https://private-user-images.githubusercontent.com/225301049/476299207-a06a4079-a0c8-417f-9163-74426254e4e8.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQ3NjAwODcsIm5iZiI6MTc1NDc1OTc4NywicGF0aCI6Ii8yMjUzMDEwNDkvNDc2Mjk5MjA3LWEwNmE0MDc5LWEwYzgtNDE3Zi05MTYzLTc0NDI2MjU0ZTRlOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgwOVQxNzE2MjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iNWRmYzczMDZmMmZkZWQyODFiYjcyOGVlZjNjMzhmOTgyMzZjYjNmNWM3MmE2ZTI3Mjc3NDI2MTBmNzBkNDU4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.dQy_0rjMavvC8gkcBO8zxjdujk12K1qnS3FyiTl_eqY)

---

## ✨ Características Principales

- Formulario de búsqueda para cualquier ciudad.
- Visualización en tiempo real de la temperatura actual en grados centígrados.
- Muestra el ícono del clima y la descripción de la condición actual (ej. "Soleado", "Parcialmente nublado").
- Diseño limpio, centrado y profesional.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend:**
  - [React](https://react.dev/)
  - [Vite](https://vitejs.dev/)
- **Estilos:**
  - CSS simple
- **API:**
  - [WeatherAPI.com](https://www.weatherapi.com/)

---

## 🚀 Cómo Ejecutarlo Localmente

Para clonar y ejecutar este proyecto en tu propia máquina, sigue estos pasos:

1.  **Clona el repositorio**
    ```bash
    git clone [https://github.com/javierandradecode/app-del-clima.git](https://github.com/javierandradecode/app-del-clima.git)
    ```
2.  **Navega a la carpeta del proyecto**
    ```bash
    cd app-del-clima
    ```
3.  **Instala las dependencias**
    ```bash
    npm install
    ```
4.  **Crea un archivo `.env.local`** en la raíz del proyecto y añade tu API Key:
    ```
    VITE_API_KEY=TU_API_KEY_DE_WEATHERAPI
    ```
    *(Es una buena práctica mantener las claves de API fuera del código principal por seguridad)*.

5.  **Inicia el servidor de desarrollo**
    ```bash
    npm run dev
    ```
