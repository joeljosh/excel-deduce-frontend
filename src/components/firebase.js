import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJe7N5Fs41lLhdKjfLiRnp758uJ6kQYnY",
  authDomain: "fifth-reality-313806.firebaseapp.com",
  databaseURL: "https://fifth-reality-313806-default-rtdb.firebaseio.com",
  projectId: "fifth-reality-313806",
  storageBucket: "fifth-reality-313806.appspot.com",
  messagingSenderId: "400055254952",
  appId: "1:400055254952:web:1ff94c082e53ef3b20279d",
  measurementId: "G-BP435QC9H1"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

export default db;
