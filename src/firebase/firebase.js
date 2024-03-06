import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB_qObhJmMs0AovH4YBzwmcrb8Vx4gGz0g",
    authDomain: "innohacks-a286c.firebaseapp.com",
    projectId: "innohacks-a286c",
    storageBucket: "innohacks-a286c.appspot.com",
    messagingSenderId: "523808157509",
    appId: "1:523808157509:web:c3035651af1eefa50c582c"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
