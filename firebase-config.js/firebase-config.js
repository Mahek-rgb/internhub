// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_vtrPMYLzsZeNdF1J2RaD6p37K4xuM2Y",
  authDomain: "internhub-ad3f8.firebaseapp.com",
  projectId: "internhub-ad3f8",
  storageBucket: "internhub-ad3f8.firebasestorage.app",
  messagingSenderId: "578073211407",
  appId: "1:578073211407:web:a0a83f56128c44c317697a",
  measurementId: "G-QB6QTFJGLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);