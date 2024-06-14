import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAPqAECRRizV9gOiBGa5Ybs23WzcDsXqv4",
    authDomain: "job-task-d11d2.firebaseapp.com",
    projectId: "job-task-d11d2",
    storageBucket: "job-task-d11d2.appspot.com",
    messagingSenderId: "1059526383419",
    appId: "1:1059526383419:web:4cc3a742d8314bb4b9c91e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;