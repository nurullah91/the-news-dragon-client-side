// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApwxGHzC95z9IHFGy0Y2aZMyzviaF1Rn8",
  authDomain: "the-news-dragon-client-7ec5c.firebaseapp.com",
  projectId: "the-news-dragon-client-7ec5c",
  storageBucket: "the-news-dragon-client-7ec5c.appspot.com",
  messagingSenderId: "1044314512177",
  appId: "1:1044314512177:web:196bee50c3c5b60c9d6e10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;