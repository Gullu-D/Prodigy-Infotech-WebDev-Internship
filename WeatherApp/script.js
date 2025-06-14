const apiKey = 'd1630409bce47c5c2735a852daa3c71'; // Use your activated key

function getWeather() {
  const city = encodeURIComponent(document.getElementById('cityInput').value.trim());
  if (city === '') {
    alert('Please enter a city name');
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        const temp = data.main.temp;
        const desc = data.weather[0].description;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;
        const icon = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        document.getElementById('weatherIcon').src = iconUrl;
        document.getElementById('weatherIcon').style.display = 'block';
        document.getElementById('weatherText').innerHTML = `
          <strong>${city.toUpperCase()}</strong><br>
          🌡️ Temperature: ${temp}°C<br>
          🌥️ ${desc}<br>
          💧 Humidity: ${humidity}%<br>
          💨 Wind Speed: ${wind} m/s
        `;
      } else {
        document.getElementById('weatherResult').innerHTML = '❌ City not found!';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('weatherResult').innerHTML = '⚠️ Error fetching weather!';
    });
}
