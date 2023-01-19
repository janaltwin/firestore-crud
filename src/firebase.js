// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF72jCx4Km9xY4LpzJzuyZltAL7VElIRY",
  authDomain: "todo-list-app-5dc1c.firebaseapp.com",
  projectId: "todo-list-app-5dc1c",
  storageBucket: "todo-list-app-5dc1c.appspot.com",
  messagingSenderId: "518466128013",
  appId: "1:518466128013:web:c138f52718ee60e4d9fac4",
  measurementId: "G-2B2LTK8WG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
