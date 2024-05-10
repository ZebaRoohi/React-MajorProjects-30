import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCXA4BtysDu58x7ZqcKvHqxxTkD7O53PuY",
    authDomain: "fir-project-b5eff.firebaseapp.com",
    projectId: "fir-project-b5eff",
    storageBucket: "fir-project-b5eff.appspot.com",
    messagingSenderId: "589002280344",
    appId: "1:589002280344:web:f3ab8a690eace634f76fed",
    databaseURL:'https://fir-project-b5eff-default-rtdb.firebaseio.com'
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);