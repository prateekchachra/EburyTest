# Ebury Backend 

## How To Run

1. Install the dependencies
    ```bash
    npm install
    ```
2. Start the nodemon server

    ```bash
npm run dev
    ```

3. Add a .env file with the property API_TOKEN (Same token as in React Native)

For testing purposes, a ***.env.test*** is included with the app. You can rename it to .env and run the server smoothly

## Dependencies used

Express, Nodemon (To refresh server), Dotenv (Environment Variables), HTTP Status Codes (Error Handling)

## Architecture 

The architecture used is a basic, clean architecture using middleware and separating all the validation and error logic from the main application.

- For verification of Token and UserAgent, functions are being used inside the utils folder
- For error handling, we extend the Base error and handle different errors for failing Authentication and User Agent verification.