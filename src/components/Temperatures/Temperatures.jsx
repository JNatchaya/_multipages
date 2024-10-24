import { useEffect, useState ,useRef } from 'react';
import Variable from '../Variable/Variable';
import './Temperatures.css';

function Temperatures() {
    const [celsius , setCelsius] = useState(25);
    const [fahrenheit , setFahrenheit] = useState((25 * 9/5) + 32);
    const [kelvin , setKelvin] = useState(25 + 273.15);

    // function to convert celsius to fahrenheit and kelvin

    const prevCelsius = useRef(celsius);
    const prevFahrenheit = useRef(fahrenheit);
    const prevKelvin = useRef(kelvin);
  
    // update Fahrenheit and Kelvin when Celsius changes
    useEffect(() => {
      if (celsius !== prevCelsius.current) {
        const newFahrenheit = (celsius * 9/5) + 32;
        const newKelvin = celsius + 273.15;
  
        if (Math.abs(newFahrenheit - fahrenheit) > 0.01) {
          setFahrenheit(newFahrenheit);
        }
        if (Math.abs(newKelvin - kelvin) > 0.01) {
          setKelvin(newKelvin);
        }
  
        prevCelsius.current = celsius; // Update the reference value
      }
    }, [celsius]);
  
    //  update Celsius and Kelvin when Fahrenheit changes
    useEffect(() => {
      if (fahrenheit !== prevFahrenheit.current) {
        const newCelsius = (fahrenheit - 32) * 5/9;
        const newKelvin = newCelsius + 273.15;
  
        if (Math.abs(newCelsius - celsius) > 0.01) {
          setCelsius(newCelsius);
        }
        if (Math.abs(newKelvin - kelvin) > 0.01) {
          setKelvin(newKelvin);
        }
  
        prevFahrenheit.current = fahrenheit; // Update the reference value
      }
    }, [fahrenheit]);
  
    // update Celsius and Fahrenheit when Kelvin changes
    useEffect(() => {
      if (kelvin !== prevKelvin.current) {
        const newCelsius = kelvin - 273.15;
        const newFahrenheit = (newCelsius * 9/5) + 32;
  
        if (Math.abs(newCelsius - celsius) > 0.01) {
          setCelsius(newCelsius);
        }
        if (Math.abs(newFahrenheit - fahrenheit) > 0.01) {
          setFahrenheit(newFahrenheit);
        }
  
        prevKelvin.current = kelvin; // Update the reference value
      }
    }, [kelvin]);
  
  return (
    <div className='temperatures-container' >
      <h3 className='temperatures-title'>TEMPERATURES</h3>
      <h3 className='temperatures-display'>
        <span className='badge bg-primary'>{celsius.toFixed(2)}°C</span>
        <span className='badge bg-primary'>{fahrenheit.toFixed(2)}°F</span>
        <span className='badge bg-primary'>{kelvin.toFixed(2)}°K</span>
      </h3>
      <div className='temperatures-variables'>
        <Variable name={'Celsius'} value={celsius} setValue={setCelsius} />
        <Variable name={'Fahrenheit'} value={fahrenheit} setValue={setFahrenheit} />
        <Variable name={'Kelvin'} value={kelvin} setValue={setKelvin} />
      </div>
    </div>
  );
}

export default Temperatures;
