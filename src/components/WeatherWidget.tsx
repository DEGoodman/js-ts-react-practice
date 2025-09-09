import React, { useState, useEffect } from 'react';

// TODO: Define the Weather interface
// HINT: A weather object should have:
// - city: string
// - temperature: number
// - condition: string (e.g., "sunny", "cloudy", "rainy")
// - humidity: number
// - windSpeed: number
interface Weather {
  // Add your interface properties here
}

// TODO: Define the WeatherWidgetProps interface
// HINT: The component should accept:
// - city: string (the city to fetch weather for)
// - units: 'celsius' | 'fahrenheit' (temperature units)
interface WeatherWidgetProps {
  // Add your props here
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ city, units }) => {
  // TODO: Add state for weather data
  // HINT: Use useState with Weather type or null for initial state
  
  // TODO: Add state for loading status
  // HINT: Use useState with boolean type
  
  // TODO: Add state for error handling
  // HINT: Use useState with string type or null

  // TODO: Create a function to fetch weather data
  // HINT: This should be an async function that:
  // 1. Sets loading to true
  // 2. Clears any previous errors
  // 3. Makes an API call (you can simulate this with setTimeout)
  // 4. Updates the weather state with mock data
  // 5. Sets loading to false
  // 6. Handles errors appropriately
  const fetchWeather = async () => {
    // Implement your fetch logic here
    // For practice, you can simulate an API call with:
    // setTimeout(() => { /* your mock data logic */ }, 1000);
  };

  // TODO: Add useEffect to fetch weather when city changes
  // HINT: useEffect should depend on the city prop
  useEffect(() => {
    // Call fetchWeather when component mounts or city changes
  }, [/* add dependencies */]);

  // TODO: Create a function to convert temperature based on units
  // HINT: Convert between Celsius and Fahrenheit
  const convertTemperature = (temp: number): number => {
    // Implement temperature conversion logic
    return temp;
  };

  // TODO: Handle loading state
  // HINT: Return a loading message or spinner component
  if (/* loading condition */) {
    return <div>Loading weather data...</div>;
  }

  // TODO: Handle error state
  // HINT: Return an error message with retry option
  if (/* error condition */) {
    return (
      <div>
        {/* Display error message */}
        {/* Add a retry button that calls fetchWeather */}
      </div>
    );
  }

  // TODO: Handle case when no weather data is available
  if (/* no weather data condition */) {
    return <div>No weather data available</div>;
  }

  // TODO: Render the weather widget
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      borderRadius: '8px', 
      padding: '20px', 
      maxWidth: '300px',
      margin: '20px auto'
    }}>
      {/* TODO: Display city name */}
      
      {/* TODO: Display temperature with proper units */}
      {/* HINT: Use convertTemperature function */}
      
      {/* TODO: Display weather condition */}
      
      {/* TODO: Display humidity */}
      {/* HINT: Format as "Humidity: X%" */}
      
      {/* TODO: Display wind speed */}
      {/* HINT: Format as "Wind: X km/h" or "Wind: X mph" based on units */}
      
      {/* TODO: Add a refresh button to fetch new data */}
      {/* HINT: Button should call fetchWeather */}
    </div>
  );
};

export default WeatherWidget;

/*
LEARNING OBJECTIVES:
1. Practice with TypeScript interfaces for complex data structures
2. Learn async/await patterns with error handling
3. Practice useEffect with dependencies
4. Implement loading and error states
5. Work with conditional rendering
6. Practice data transformation (temperature conversion)
7. Learn prop-based component customization

IMPLEMENTATION TIPS:
- Start by defining the interfaces
- Implement the mock API call with setTimeout
- Add proper error handling with try/catch
- Use conditional rendering for different states
- Style the component to look like a real weather widget
- Test with different cities and units

BONUS CHALLENGES:
- Add weather icons based on condition
- Implement caching to avoid repeated API calls
- Add animations for state transitions
- Make the widget responsive
*/