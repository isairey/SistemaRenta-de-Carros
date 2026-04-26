import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCFCCJyMLKKixVMQhlTqTvMcL5nL1xupow",
    authDomain: "fir-girosyfinanzas.firebaseapp.com",
    databaseURL: "https://fir-girosyfinanzas.firebaseio.com",
    projectId: "fir-girosyfinanzas",
    storageBucket: "fir-girosyfinanzas.appspot.com",
    messagingSenderId: "1036985037451",
    appId: "1:1036985037451:web:c5844e41618e1ef62e9a8e",
    measurementId: "G-Z41VX8J54E"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({timestampsInSnapshots: true})

  export default firebaseApp.firestore()