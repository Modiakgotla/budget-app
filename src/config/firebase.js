// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA3WuRaDIbCPoFquh-WGzuOSakTwzJt5Fo",
  authDomain: "budget-app-60f9f.firebaseapp.com",
  projectId: "budget-app-60f9f",
  storageBucket: "budget-app-60f9f.appspot.com",
  messagingSenderId: "829783778544",
  appId: "1:829783778544:web:48b25794a89759791a4e35",
  measurementId: "G-BDQNQ15XBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app) ;

const db = getFirestore(app)
const analytics = getAnalytics(app);

export {auth, db} ;