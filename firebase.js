// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2aOh5KWSjllo5y4izqWiUd4PdgyQDbrk",
  authDomain: "quotes-app-d098d.firebaseapp.com",
  projectId: "quotes-app-d098d",
  storageBucket: "quotes-app-d098d.appspot.com",
  messagingSenderId: "481491626031",
  appId: "1:481491626031:web:4dd9e68356169353733eda",
  measurementId: "G-0B8W1NZ0WM"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };