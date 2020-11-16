import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyC0ggiByqFnSKit0aULA7q6BXxu9Pk3n6A",
    authDomain: "react-utn-tfreilij.firebaseapp.com",
    databaseURL: "https://react-utn-tfreilij.firebaseio.com",
    projectId: "react-utn-tfreilij",
    storageBucket: "react-utn-tfreilij.appspot.com",
    messagingSenderId: "564018715940",
    appId: "1:564018715940:web:642b18455dc2d198bc67b1",
    measurementId: "G-7PVYLGJG8E"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
firebase.auth = firebase.auth();
firebase.db = db;



export default firebase;
