import React from "react";
import './../styles/App.css'; // Import your CSS file here

// const App = () => {
  // Sample weather input
  // const weatherData = { temperature: 25, conditions: "Sunny" };
  // const threshold = 20;
  // const isAboveThreshold = weatherData.temperature > threshold;

  // return (
  //   <div className="container">
  //     <h1>Weather Report</h1>
  //     <div className="weather-info">
  //       <p>Temperature: <span className={isAboveThreshold ? 'above-threshold' : 'below-threshold'}>{weatherData.temperature}</span></p>
  //       <p>Conditions: {weatherData.conditions}</p>
  //     </div>
  //   </div>
  // );
//  import React from "react";
const App = () => {
  const weatherData = { temperature: 25, conditions: "Sunny" };
  const threshold = 20;
  const temperatureClass = weatherData.temperature > threshold ? 'above-threshold' : 'below-threshold';

  return (
    <div className="main">
      <p>
        Temperature: <span className={temperatureClass}>{weatherData.temperature}°C</span>
      </p>
      <p>Condition: {weatherData.conditions}</p>
    </div>
  );
};

export default App;


