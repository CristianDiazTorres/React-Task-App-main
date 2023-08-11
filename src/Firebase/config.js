import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDHqF2cw3O6xENcsaagg5MXLKbVz8Zwdk",
  authDomain: "react-task-app-cristian.firebaseapp.com",
  projectId: "react-task-app-cristian",
  storageBucket: "react-task-app-cristian.appspot.com",
  messagingSenderId: "574269655780",
  appId: "1:574269655780:web:11461f7b5637c2acedbaf1",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
