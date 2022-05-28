import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2Zcx6Cy17FnSYrmoktfmx3WAPSJS9jig",
  authDomain: "bigfoot-tires-cbc36.firebaseapp.com",
  projectId: "bigfoot-tires-cbc36",
  storageBucket: "bigfoot-tires-cbc36.appspot.com",
  messagingSenderId: "802310706750",
  appId: "1:802310706750:web:355ded2a79236680af636f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
const analytics = getAnalytics(app);