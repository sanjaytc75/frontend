import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCbxvMd7eGo2XX3PQxNUXb2ggIiZwo71mo",
    authDomain: "travel-aeb28.firebaseapp.com",
    projectId: "travel-aeb28",
    storageBucket: "travel-aeb28.appspot.com",
    messagingSenderId: "101521016101",
    appId: "1:101521016101:web:6d0c2f17b2ec0aefe446cc",
    measurementId: "G-7QDQX3V2MN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;