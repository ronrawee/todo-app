import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBG-5fxyf9IdkXuvqWd7MU0fdUObtsH1LM",
    authDomain: "todo-app-410ad.firebaseapp.com",
    databaseURL: "https://todo-app-410ad.firebaseio.com",
    projectId: "todo-app-410ad",
    storageBucket: "todo-app-410ad.appspot.com",
    messagingSenderId: "46090801573",
    appId: "1:46090801573:web:ff4dda6cec4af02ecb184c"
})

const db = firebaseApp.firestore()

export default db