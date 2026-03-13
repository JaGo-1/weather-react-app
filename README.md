# Weather App

## 🌤️ Overview
The **Weather App** is a React application that fetches real-time data from the [OpenWeather API](https://openweathermap.org/api). The project serves as a showcase for **clean architecture** and **enhanced UX**, implementing custom hooks for logic separation, debounced search to optimize API usage, and fluid animations to provide immediate visual feedback.

[🔗 Live Demo](https://skyviewapp.vercel.app/)

## 📝 Latest Update

- Architectural Overhaul:
  - Moved all business logic into a centralized Custom Hook (useWeather).
  - Implemented Clean Code principles by separating API calls, state management, and UI rendering.

- Dynamic Theming & UX:
  - Added a Dynamic Background Engine that updates CSS variables based on temperature, providing instant visual context.

- Performance Optimization:
  - Integrated Debouncing logic to minimize API rate-limiting and unnecessary re-renders.
  - Added useLayoutEffect for flicker-free theme transitions.

- Motion Design:
  - Replaced static loading with Skeleton Screens using AnimatePresence.
  - Added Interactive Feedback for search errors and empty states.
  - Implemented an Animated Counter for temperature values to enhance data perception.

## ✨ Features
- 🌡️ Displays current temperature in Celsius
- 💧 Shows humidity percentage
- 🌬️ Displays wind speed in km/h
- 🔍 Search bar for looking up weather in different cities
- 🌎 Fetches data dynamically from the OpenWeather API
- 🎬 Smooth Animations: Powered by Framer Motion

## 🚀 Installation
### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```
### 2️⃣ Install dependencies
```bash
npm install
```
### 3️⃣ Set up the API Key
Create a **.env** file in the root directory and add your OpenWeather API key:
```
VITE_API_KEY=your_openweather_api_key
```
### 4️⃣ Run the app
```bash
npm run dev
```

## 🛠️ Technologies Used
- React.js ⚛️
- Animations: Framer Motion 🎬
- OpenWeather API 🌍
- CSS 🎨
- JavaScript (ES6+) 🚀

## 📌 Future Improvements
- 🌎 Add geolocation support
- 📅 Display a 5-day weather forecast
