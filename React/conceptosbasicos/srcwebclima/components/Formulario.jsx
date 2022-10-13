import React, {useState} from 'react'
const Formulario = () => {
    const apiKey= "a5153cf283ad43be2103ec3b783ab4d2"
  const [datoClima, setdatoClima]= useState([{}])
  const [ciudad, setciudad] = useState("")

  const buscarClima = (event) =>{
    if (event.key=="Enter") {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=imperial&APPID=${apiKey}`).then(
    response => response.json()
    ).then(
      dato => {
        setdatoClima(dato)
        setciudad("")
      }
    )
  }
}

  return (
    <div className="container">
      <p className="titulo">¡Bienvenido! Ingrese ubicación y presione "Enter" para averiguar el clima.</p>
    <input className="input" 
    placeholder="Ej: Camboriú"
    onChange={e=> setciudad(e.target.value)}
    value={ciudad}
    onKeyPress={buscarClima}/>

    {typeof datoClima.main === "undefined" ?(
      <div>
        
      </div>
      ) : (
      <div className="weather-data">
        <p className="city">{datoClima.name}</p>
        <p className="temp">{Math.round(datoClima.main.temp)}°F</p>
        <p className="weather">{datoClima.weather[0].main}</p>
        
      </div>
      )
      }

      {datoClima.cod === "404" ? (
        <p>No se encontraron datos de la ciudad ingresada.</p>
      ):(<>
      </>)}
    </div>
  )
}
    export default Formulario;