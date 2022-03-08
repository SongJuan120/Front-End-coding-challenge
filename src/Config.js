import firebase from "firebase";

const settings ={timestampsInSnapshots: true}

const firebaseConfig = {
    apiKey: "AIzaSyAnEgVZpqbTCNGWFSPrKkEkHu-bKA_EUJ8",
    authDomain: "front-end-coding-challen-76aed.firebaseapp.com",
    databaseURL: "https://front-end-coding-challen-76aed-default-rtdb.firebaseio.com",
    projectId: "front-end-coding-challen-76aed",
    storageBucket: "front-end-coding-challen-76aed.appspot.com",
    messagingSenderId: "882076141180",
    appId: "1:882076141180:web:268ada03c88040b5ba2bf9"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings(settings);

  export default firebase;


  // Initialize Firebase