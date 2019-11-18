import firebase from 'firebase/app';
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyB7db6oijr_8mQWyv2LiuAhkwg5jOaPqko",
    authDomain: "uploadimageaction.firebaseapp.com",
    databaseURL: "https://uploadimageaction.firebaseio.com",
    projectId: "uploadimageaction",
    storageBucket: "uploadimageaction.appspot.com",
    messagingSenderId: "120628542197",
    appId: "1:120628542197:web:7065cb9f332336667923bc",
    measurementId: "G-MGX64H1C6P"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}