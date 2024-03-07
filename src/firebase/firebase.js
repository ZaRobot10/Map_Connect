// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth" ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeQ_sqfFJ3clxxDyyn-ydQVz6iTTpOGI8",
  authDomain: "innohacks-version2.firebaseapp.com",
  projectId: "innohacks-version2",
  storageBucket: "innohacks-version2.appspot.com",
  messagingSenderId: "853877860310",
  appId: "1:853877860310:web:3905e8c138781ab0de2677",
  measurementId: "G-9EJDTPYXZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth() ;

export default app ;