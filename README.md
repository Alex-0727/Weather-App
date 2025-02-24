🌦️ Weather App
A simple weather application that allows users to search for real-time weather data by entering a city name. The application fetches weather information from the OpenWeatherMap API and displays details like temperature, weather condition, and humidity.

(Add a screenshot of your app here)

🚀 Features
🔍 Search for weather information by entering a city name
🌡️ Display real-time temperature in Celsius
☁️ Show current weather conditions (e.g., cloudy, sunny, rainy)
💧 Display humidity levels
🌍 Supports cities worldwide
📡 Fetches data from OpenWeatherMap API
💻 Simple and responsive UI
🛠️ Technologies Used
HTML - For structuring the webpage
CSS - For styling the UI
JavaScript (Vanilla JS) - For handling user input and making API calls
OpenWeatherMap API - For fetching real-time weather data
📥 Installation & Setup
To run this Weather App locally, follow these steps:

Clone the repository:

bash
复制
编辑
git clone https://github.com/your-username/weather-app.git
cd weather-app
Open the project folder in your preferred code editor (e.g., VS Code).

Sign up for an OpenWeatherMap API key:

Visit OpenWeatherMap
Register for an account
Get your API Key
Update the API key in script.js:

Open script.js
Replace 'your-api-key-here' with your actual API key:
javascript
复制
编辑
const apiKey = 'your-api-key-here';  // Replace with your OpenWeatherMap API key
Run the application:

Open index.html directly in your browser, or
Use VS Code Live Server (recommended):
Install Live Server
Right-click index.html and select "Open with Live Server"
🖥️ Usage
Open the Weather App in your browser.
Enter the name of a city (e.g., "Tokyo", "New York").
Click the "Get Weather" button.
The app will fetch real-time weather data and display:
🌡️ Temperature (°C)
☁️ Weather condition (e.g., Clear, Rain, Cloudy)
💧 Humidity (%)
If an invalid city is entered, an error message will be shown.
🐛 Troubleshooting
Issue: Weather data not loading

Check if you have entered a valid API Key in script.js.
Ensure your internet connection is working.
Issue: API Key not working

API keys may take a few minutes to activate after creation.
Ensure that the API key is correctly copied and pasted.
Issue: CORS error or network issues

Try opening the project with Live Server instead of opening the file directly.
📌 Future Enhancements
✅ Improve UI/UX with animations and icons
✅ Add support for Fahrenheit & Kelvin temperature units
✅ Implement Geolocation API to fetch user’s location-based weather
✅ Display 5-day weather forecast
✅ Allow users to save their favorite cities

📝 License
This project is open-source and available under the MIT License.

🤝 Contributing
Want to contribute? Feel free to fork this repository, make changes, and submit a pull request. Any improvements are welcome! 🚀

👨‍💻 Author
👤 Your Name
📧 Email: your-email@example.com
🌐 GitHub: your-username
📌 Project Repository: Weather App

📢 If you found this project helpful, please ⭐ star the repository on GitHub!
