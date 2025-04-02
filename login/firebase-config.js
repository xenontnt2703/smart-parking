import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBJORPE2ff4PXaeED6lcj_17jhNz4psKoY",
  authDomain: "iot-smart-parking-9114f.firebaseapp.com",
  databaseURL:
    "https://iot-smart-parking-9114f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iot-smart-parking-9114f",
  storageBucket: "iot-smart-parking-9114f.firebasestorage.app",
  messagingSenderId: "32737250486",
  appId: "1:32737250486:web:54ae834553762f2a79aa17",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
