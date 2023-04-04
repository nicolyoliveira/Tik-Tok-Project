
import { initializeApp } from "firebase/app";
import { getFirestore  } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCydGRKH-MqxB8amhGeg57plQtDW1oTqg0",
  authDomain: "tiktok---jornada-5e58a.firebaseapp.com",
  projectId: "tiktok---jornada-5e58a",
  storageBucket: "tiktok---jornada-5e58a.appspot.com",
  messagingSenderId: "701415270652",
  appId: "1:701415270652:web:a4f7c4d8a3a668d55a8f79"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;