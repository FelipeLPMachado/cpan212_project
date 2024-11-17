212weather_app
This Weather App is a full-stack application that displays current weather data for a given city and suggests clothing options based on the temperature. It uses the OpenWeatherMap API for weather data and a MongoDB database for clothing suggestions.

Features
Weather Information: Displays current temperature, weather description, wind speed, humidity, and pressure.
Clothing Suggestions: Recommends appropriate clothing based on the weather.
User Preferences: Save preferred city and temperature unit (Celsius or Fahrenheit).
User Authentication: Simple sign-up and sign-in system for personalized settings.
Responsive Design: Works seamlessly on mobile and desktop devices.
Technology Stack
Backend
Node.js
Express
MongoDB (Mongoose for ORM)
Frontend
React
React Router for navigation
Axios for API calls
CSS for styling
Installation and Setup
Clone the repository:
Use the command git clone https://github.com/your-username/weather-app.git and navigate to the project directory using cd weather-app.

Install dependencies for both backend and frontend:
Navigate to the server folder and run npm install. Then, go to the root project directory and run npm install for frontend dependencies.

Create a .env file in the root directory:
In the root directory of the project, create a .env file and add the following line:
REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key
Replace your_openweathermap_api_key with your actual OpenWeatherMap API key.

Start MongoDB:
Ensure MongoDB is installed and running on your machine. Create a database named weatherApp.

Populate the MongoDB database with clothing data:
Insert clothing data into the clothing collection using MongoDB Compass or a MongoDB command-line tool.

Start the backend server:
Navigate to the server folder and run npm start.

Start the frontend development server:
Navigate to the root directory and run npm start.

Open the app in your browser:
The app will be available at http://localhost:3000.

API Details
Weather Data: Sourced from the OpenWeatherMap API. The API key is securely stored in the .env file in the root of the project.
Clothing Data: Fetched from a local MongoDB database containing temperature range and clothing recommendations.
Project Structure
Backend (/server): Handles API endpoints and communicates with the MongoDB database.
Frontend (/src): Manages the user interface and integrates the backend APIs for displaying weather and clothing data.
Notes
Ensure MongoDB is running before starting the application.
Add the .env file to the root directory and do not share it publicly.
Update the OpenWeatherMap API key in the .env file if needed.