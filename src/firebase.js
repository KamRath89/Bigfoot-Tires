import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_6TwOdlZbhajQOd7RCFLFfG1Zo90wsao",
  authDomain: "bigfoot-tires.firebaseapp.com",
  projectId: "bigfoot-tires",
  storageBucket: "bigfoot-tires.appspot.com",
  messagingSenderId: "844723704146",
  appId: "1:844723704146:web:b167eee0c480bcdff9ea8b",
  measurementId: "G-SEP7KTWRDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
const analytics = getAnalytics(app);