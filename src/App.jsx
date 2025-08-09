import { useState } from 'react' // 1. Importamos useState
import './App.css'

function App() {
  // 2. Declaramos una variable de estado para guardar la ciudad
  const [ciudad, setCiudad] = useState('')
  const [clima, setClima] = useState(null) // Nuevo estado para el clima
  const handleSubmit = async (e) => { // Añadimos 'async'
    e.preventDefault();

    const API_KEY = 'def5825eab8843abb1332131250808'; // ¡Pega tu clave aquí!
    const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${ciudad}&lang=es`;

    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setClima(data); // ¡Cambiamos console.log por esto!
    } catch (error) {
      console.error("Hubo un error:", error);
    }
  }

  return (
    <div className="contenedor">
      <h1 className="titulo">
        Aplicación del Clima
      </h1>

      <div className="contenedor-form">
        <input
          type="text"
          className="input-ciudad"
          placeholder="Escribe el nombre de una ciudad"
          value={ciudad}
          onChange={e => setCiudad(e.target.value)}
        />
        <button
          type="button"
          className="btn-buscar"
          onClick={handleSubmit}
        >
          Buscar Clima
        </button>
      </div>
      {clima && (
        <div className="contenedor-clima">
          <h2>{clima.location.name}, {clima.location.country}</h2>
          <div className="info-clima">
            <img src={clima.current.condition.icon} alt="Icono del clima" />
            <p className="temperatura">{clima.current.temp_c}°C</p>
          </div>
          <p className="condicion">{clima.current.condition.text}</p>
        </div>
      )}
    </div>
  )
}

export default App