import dotenv from "dotenv";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

dotenv.config();

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "cinehub-mv.firebaseapp.com",
    projectId: "cinehub-mv",
    storageBucket: "cinehub-mv.appspot.com",
    messagingSenderId: "32441279740",
    appId: "1:32441279740:web:ab48ad6ba68b8e89e72379",
    measurementId: "G-6E3GFT3H0T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };
