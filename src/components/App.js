
// import React from "react";
// import './../styles/App.css';

// const App = () => {
//   return (
//     <div>
//         {/* Do not remove the main div */}
//     </div>
//   )
// }

// export default App
import React from "react";
import './../styles/App.css'; // Import your CSS file here

const App = () => {
  // Sample weather input
  const weatherData = { temperature: 25, conditions: "Sunny" };
  const threshold = 20;
  const isAboveThreshold = weatherData.temperature > threshold;

  return (
    <div className="container">
      <h1>Weather Report</h1>
      <div className="weather-info">
        <p>Temperature: <span className={isAboveThreshold ? 'above-threshold' : 'below-threshold'}>{weatherData.temperature}°C</span></p>
        <p>Conditions: {weatherData.conditions}</p>
      </div>
    </div>
  );
};

export default App;
