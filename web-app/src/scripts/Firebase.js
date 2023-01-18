import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJvlNr_nX0lRuoIWuwk14nnDsbaCl7faI",
  authDomain: "rsaauthdemo.firebaseapp.com",
  projectId: "rsaauthdemo",
  storageBucket: "rsaauthdemo.appspot.com",
  messagingSenderId: "220721941079",
  appId: "1:220721941079:web:9d2fc093cfe6796693b112"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebase = {
  app: app,
  auth: getAuth(),
};
export default firebase;
