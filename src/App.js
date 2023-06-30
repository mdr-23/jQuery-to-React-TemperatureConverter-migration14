import { useState } from 'react';
import AlertCustom from './AlertCustom';
import './App.css';

function App() {

  const [celsius, setCelsius] = useState()
  const [fahrenheit, setFahrenheit] = useState()
  const [kelvin, setKelvin] = useState()
  const [alert, setAlert] = useState({color: '', text: ''})

  const convert = () => {
    if(!isNaN(celsius)){
      let fahrenheitResult = (celsius * 9/5) + 32;
      let kelvinResult = parseFloat(celsius) + 273.15;
      setFahrenheit(Number(fahrenheitResult.toFixed(2)).toString());
      setKelvin(Number(kelvinResult.toFixed(2)).toString())
      setAlert({color:'green', text:`${celsius}ºC is ${fahrenheitResult.toFixed(2)}ºF and ${kelvinResult.toFixed(2)} K.
      To use again, please refresh.`})
    }else if(!isNaN(fahrenheit)){
      let celsiusResult = (fahrenheit - 32) * 5/9 
      let kelvinResult = (fahrenheit + 459.67) * 5/9
      setCelsius(Number(celsiusResult.toFixed(2)).toString());
      setKelvin(Number(kelvinResult.toFixed(2)).toString());
      setAlert({color:'green', text:`${fahrenheit}ºF is ${celsiusResult.toFixed(2)}ºC and ${kelvinResult.toFixed(2)} K.
      To use again, please refresh.`})
    }else if(!isNaN(kelvin)){
      let celsiusResult = kelvin - 273.15
      let fahrenheitResult = (kelvin * 9/5) - 459.67
      setCelsius(Number(celsiusResult.toFixed(2)).toString());
      setFahrenheit(Number(fahrenheitResult.toFixed(2)).toString());
      setAlert({color:'green', text:`${kelvin} K is ${celsiusResult.toFixed(2)}ºC and ${fahrenheitResult.toFixed(2)}ºF.
      To use again, please refresh.`})
    }else{
      setAlert({color: 'red', text: 'Please enter a valid temperature value.'});
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      convert();
    }
  };

  return (
    <div className="App">
      <div className="converter">
          <h1>Temperature Converter</h1>
          <div className="info">
            <label>Celsius: </label>
            <input type="number" id="celsius-input" value={celsius} onChange={(e) => setCelsius(e.target.value)} onKeyDown={handleKeyPress} />
          </div>

          <div className="info">
            <label>Fahrenheit: </label>
            <input type="number" id="fahrenheit-input" value={fahrenheit} onChange={(e) => setFahrenheit(e.target.value)} onKeyDown={handleKeyPress} />
          </div>

          <div className="info">
            <label>Kelvin: </label>
            <input type="number" id="kelvin-input" value={kelvin} onChange={(e) => setKelvin(e.target.value)} onKeyDown={handleKeyPress} />
          </div>
          <button id="convert-btn" onClick={convert}>Convert</button>
      </div>

      <AlertCustom {...alert} />
    </div>
  );
}

export default App;