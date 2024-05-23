function getWeather() {
    var city = document.getElementById('cityInput').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d7794fb73328979a391ca392acfe2a69`)
        .then(response => response.json())
        .then(data => {
            // Call a function to update the UI with weather information
            displayWeatherData(data);
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

function displayWeatherData(data) {
    var weatherDataDiv = document.getElementById('weatherData');
    weatherDataDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

// {"coord":{"lon":-83.4483,"lat":39.8865},
// "weather":[{"id":701,"main":"Mist","description":"mist","icon":"50d"}],
// "base":"stations",
// "main":{"temp":293.87,"feels_like":294.48,"temp_min":293.16,"temp_max":295.25,"pressure":1017,"humidity":95},
// "visibility":3219,
// "wind":{"speed":1.54,"deg":230},
// "clouds":{"all":100},
// "dt":1689853910,
// "sys":{"type":2,"id":2020775,"country":"US","sunrise":1689848491,"sunset":1689901103}
// ,"timezone":-14400,"id":4517009,"name":"London","cod":200}

