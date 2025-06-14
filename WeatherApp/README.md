# 🌤️ Weather App – Prodigy InfoTech Web Dev Internship (Task 5)

This project is built as part of **Task 5** of my **Web Development Internship** at **Prodigy InfoTech**.

## 🔥 Features

- 🌍 Get real-time weather updates for any city worldwide
- 🌡️ Displays:
  - Temperature
  - Weather Description
  - Humidity
  - Wind Speed
- 🌥️ Dynamic weather icon based on conditions (e.g., sunny, cloudy, rain)
- 📱 Fully responsive and modern UI with gradient background

## 💻 Technologies Used

- **HTML5** – Structure  
- **CSS3** – Gradient UI, buttons, weather card  
- **JavaScript (Fetch API)** – For API calls and dynamic updates  
- **OpenWeatherMap API** – For real-time weather data  
- **Google Fonts** – Stylish typography  
- **Weather Icons** – Fetched dynamically using OpenWeatherMap icon ID

## 📷 Preview

![Weather App Screenshot](./preview.png) <!-- Replace this with your actual screenshot path -->

## 🚀 How to Run

1. Clone or download this repository
2. Open `index.html` in any modern browser
3. Enter a city name (e.g., Pune, Delhi, New York)
4. Hit **"Get Weather"** and see results instantly!

> ✅ Make sure you have an active internet connection (API call uses live OpenWeatherMap).

## 🔑 Setup Your Own API Key (Optional)

If you want to use your own API key:
1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Replace the API key in `script.js`:
```js
const apiKey = 'YOUR_API_KEY_HERE';
