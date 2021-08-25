import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
   
        apiKey: "AIzaSyCQkl7UJWDBGRr1Osb0rLkw9i81mwQZmoQ",
        authDomain: "c-67-c86cc.firebaseapp.com",
        projectId: "c-67-c86cc",
        storageBucket: "c-67-c86cc.appspot.com",
        messagingSenderId: "14834528145",
        appId: "1:14834528145:web:d8ba43a66fe189e09c3430",
        measurementId: "G-R8RXSHS8KV"
      

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();