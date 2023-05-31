// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV2h5UpZyotRFgvqyEze5N_Bw-lyEr5_I",
  authDomain: "educational-live-solu.firebaseapp.com",
  projectId: "educational-live-solu",
  storageBucket: "educational-live-solu.appspot.com",
  messagingSenderId: "333155218560",
  appId: "1:333155218560:web:d8da61bb68ac85e38b6265"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export default app;

const auth=getAuth(app);

export default auth;

