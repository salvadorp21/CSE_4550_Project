// config.js
const firebaseConfig = {
  apiKey: "AIzaSyDl3yrjnQYz4rvqxG0Doiu-wHId4gHkxY4",
  authDomain: "cse4550project.firebaseapp.com",
  projectId: "cse4550project",
  storageBucket: "cse4550project.appspot.com",
  messagingSenderId: "481741487769",
  appId: "1:481741487769:web:2501dcf46adf4e46c64208",
  measurementId: "G-RYJLTWDMK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);