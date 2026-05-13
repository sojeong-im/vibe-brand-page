// Firebase App (the core Firebase SDK) is always required
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApMoEdjAYMeaEXdIy6dlM1b018IjmfGfk",
    authDomain: "vibelogic-bc65c.firebaseapp.com",
    projectId: "vibelogic-bc65c",
    storageBucket: "vibelogic-bc65c.firebasestorage.app",
    messagingSenderId: "814360532364",
    appId: "1:814360532364:web:2cf8235dbfee1eea1a72a9",
    measurementId: "G-MEWZG6CK8Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase & Analytics initialized successfully");
