import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyBBFvYPN2qCVRQdRXwk9ZrY2QYjDUI4afA",
    authDomain: "ecom-react-9a484.firebaseapp.com",
    projectId: "ecom-react-9a484",
    storageBucket: "ecom-react-9a484.appspot.com",
    messagingSenderId: "173316439303",
    appId: "1:173316439303:web:a13b394562211995c399a2",
    measurementId: "G-2TEN0445XJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const fireStore = firebase.firestore();

  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
prompt: 'select_account'
  });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;