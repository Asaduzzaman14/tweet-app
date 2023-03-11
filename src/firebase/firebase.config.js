// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBjWHWTLgSJh1ffAclLDo6EcVvMNvZT44",
    authDomain: "tweet-app-44b7e.firebaseapp.com",
    projectId: "tweet-app-44b7e",
    storageBucket: "tweet-app-44b7e.appspot.com",
    messagingSenderId: "909991208941",
    appId: "1:909991208941:web:d557a3c4028b42ff9469e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
