import firebase from 'firebase'

// Initialize Firebase for the application

const config = {
    apiKey: "AIzaSyB4YKYX39BF3XJoQyohJimfOB9fX5yIKqo",
    authDomain: "smart-hands-1214f.firebaseapp.com",
    databaseURL: "https://smart-hands-1214f.firebaseio.com",
    projectId: "smart-hands-1214f",
    storageBucket: "smart-hands-1214f.appspot.com",
    messagingSenderId: "524714027027"
};
firebase.initializeApp(config);
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
export const storage = firebase.storage();
export const imagesRef = storage.ref().child('images');
export const postsRef = storage.ref().child('posts');