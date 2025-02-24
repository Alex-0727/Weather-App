 document.getElementById('getWeatherBtn').addEventListener('click', function(){
    const city = document.getElementById('cityInput').value;
    const apiKey= '30b00edf6eba85c72b8e0cf4aec14491';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherData = `
              <h2>${data.name}, ${data.sys.country}</h2>
              <p>Temperature: ${data.main.temp}°C</p>
              <p>Weather: ${data.weather[0].description}</p>
              <p>Humidity: ${data.main.humidity}%</p>
            `;
            document.getElementById('weatherResult').innerHTML = weatherData;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = 'City not found. Please try again.';
            
        })
 })