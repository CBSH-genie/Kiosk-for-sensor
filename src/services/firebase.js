// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkyNMIteggyjHCpf-nvg1x9IJa9Qk38EA",
  authDomain: "kiosk-for-sensor.firebaseapp.com",
  projectId: "kiosk-for-sensor",
  storageBucket: "kiosk-for-sensor.appspot.com",
  messagingSenderId: "262903422043",
  appId: "1:262903422043:web:7ced86549d1589fe3ef37e",
  measurementId: "G-GZ916Y4HHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
