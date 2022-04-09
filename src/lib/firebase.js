import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB86b1mThxV0oZVXFQRVV0oSAKsKUCb-LU",
  authDomain: "redux-bookshelf-c3f08.firebaseapp.com",
  projectId: "redux-bookshelf-c3f08",
  storageBucket: "redux-bookshelf-c3f08.appspot.com",
  messagingSenderId: "275398734658",
  appId: "1:275398734658:web:76bf04f2b79d83bdf9cedb",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
