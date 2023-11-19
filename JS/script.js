function convertTemperature() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const resultDiv = document.getElementById('result');
  
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
  
    if (!isNaN(celsiusValue)) {
      const convertedFahrenheit = (celsiusValue * 9) / 5 + 32;
      resultDiv.innerHTML =
        celsiusValue +
        ' &deg;C is equal to ' +
        convertedFahrenheit.toFixed(2) +
        ' &deg;F';
      fahrenheitInput.value = convertedFahrenheit.toFixed(2);
    } else if (!isNaN(fahrenheitValue)) {
      const convertedCelsius = ((fahrenheitValue - 32) * 5) / 9;
      resultDiv.innerHTML =
        fahrenheitValue +
        ' &deg;F is equal to ' +
        convertedCelsius.toFixed(2) +
        ' &deg;C';
      celsiusInput.value = convertedCelsius.toFixed(2);
    } else {
      resultDiv.innerHTML = 'Please enter a valid temperature.';
    }
  }
  