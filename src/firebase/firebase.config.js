// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwLQP7ONgb0F0OBIhAdtiNVex44JXbq34",
  authDomain: "event-management-b3263.firebaseapp.com",
  projectId: "event-management-b3263",
  storageBucket: "event-management-b3263.appspot.com",
  messagingSenderId: "34427287914",
  appId: "1:34427287914:web:f01bb933828627a4650d13",
  measurementId: "G-6F0FGQZYJG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
