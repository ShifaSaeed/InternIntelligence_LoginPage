// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyBeJjoU3c7ztOxOeyQPt8h6tXRlLea2fkQ",
  authDomain: "login-page-task1.firebaseapp.com",
  projectId: "login-page-task1",
  storageBucket: "login-page-task1.appspot.com",
  messagingSenderId: "1009071307288",
  appId: "1:1009071307288:web:e2f7f84a5b8bb35641216d"
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();