// Firebase App (the core Firebase SDK) is always required
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDveEhCUwEBglkznumfDIVCtpEsRfWOyrc",
    authDomain: "vibe-brand-page.firebaseapp.com",
    projectId: "vibe-brand-page",
    storageBucket: "vibe-brand-page.firebasestorage.app",
    messagingSenderId: "421880123399",
    appId: "1:421880123399:web:3820b6eb99ab43a542daa2",
    measurementId: "G-F721TQ8W6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase & Analytics initialized successfully");
