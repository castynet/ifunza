import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB41wWaFdDMxyHTzSfANQ5IFcE_A5AgQpQ",
  authDomain: "max-ifunza.firebaseapp.com",
  projectId: "max-ifunza",
  storageBucket: "max-ifunza.appspot.com",
  messagingSenderId: "971609524365",
  appId: "1:971609524365:web:a731dfe037dfcf8f087ac4",
};

export const initFirebaseApp = () => initializeApp(firebaseConfig);
