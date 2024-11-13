Weather App
A React-based weather application built with Node.js and Express.js that allows users to search for weather information by city, view weather forecasts, and save their preferred city and temperature units. The app also suggests clothing options based on the weather.

Features
Home Page:
Search weather by city with current date, time, and weather parameters.
Choose to view current weather or forecasts for the next 1, 2, or 3 days.
Displays recommended clothing options based on weather conditions.

Sign-up and Sign-in:
Users can create an account and sign in to access the Preferences page.
Authentication is handled locally for demonstration purposes.

Preferences Page:
Allows users to set their preferred city and temperature unit.
Preferences are stored locally and reflected on the Home page.

API Integration:
Uses the Weather API to fetch live weather data.
Clothing recommendations are fetched from a MongoDB Compass database, categorized by weather conditions.

Project Structure
The app follows a modular project structure for better maintainability and scalability:
config/: Contains environment configuration files, such as the database connection settings.
controllers/: Holds the business logic for handling API requests and user interactions.
middlewares/: Stores middleware functions, such as authentication.
models/: Contains database models for user data and clothing options.
routes/: Defines API endpoints and routes for user and weather requests.
views/: HTML templates for the frontend user interface.
utils/: Helper functions and utilities, such as API handlers for the Weather API.
public/: Static assets, including CSS and client-side JavaScript.
app.js: The main application file that initializes the Express server.

Getting Started
Prerequisites
Node.js and npm installed on your machine
MongoDB Compass installed and a MongoDB instance set up for storing clothing data
A Weather API key from RapidAPI

Installation
Clone the repository: git clone https://github.com/FelipeLPMachado/cpan212_project.git
Navigate into the project directory: cd 212_weather
Install dependencies: npm install

Running the App
For Development
To run the app in development mode with automatic restarts on file changes, use:
npm run dev
This will use Nodemon to start the server and monitor for any changes.

For Production
To run the app in production mode, use:
node app.js
This command will start the server without automatic restarts.

Usage
Sign Up: Register an account on the Sign-up page.
Sign In: Log in with your credentials to access the Preferences page.
Set Preferences: Choose a preferred city and temperature unit on the Preferences page.
View Weather: Use the Home page to search for cities and view the current weather or a forecast.
Clothing Recommendations: The Home page shows clothing suggestions based on current weather conditions.

License
This project is licensed under the MIT License.
