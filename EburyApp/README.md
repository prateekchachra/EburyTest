# Ebury Mobile App

This is a test application made using React Native, for navigation we use React Navigation.

## How to Run

- Install the dependencies using ```npm install```
- Setup the ios pods using ```npx pod-install```
- Add a .env file with the following properties 

1. API_TOKEN (Same token as in the Backend)
1. API_BASE_URL (Backend URL). 


For testing purposes, a ***.env.test*** is included with the app. You can rename it to .env and run the app smoothly
### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

## Architecture

The architecture used is a clean architecture separating the components and utils logic from the screens. We use **React Navigation** for setting up internal routes and fetch query for the API.

