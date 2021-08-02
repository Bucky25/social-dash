import firebase from "firebase/app"
import "firebase/auth"

// const firebaseConfig = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// })


const firebaseConfig = {
  apiKey: "AIzaSyDobzH_479axsmLKQ5xO2iNQ44MzSl0-X0",
  authDomain: "p-social-b42da.firebaseapp.com",
  projectId: "p-social-b42da",
  storageBucket: "p-social-b42da.appspot.com",
  messagingSenderId: "286836890082",
  appId: "1:286836890082:web:78968c2c392a487da301bb",
  measurementId: "G-RMQL3HSJVF"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
// const db=firebaseApp.firestore();
const auth=firebase.auth();

const provider=new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();

export {auth, provider, providerFacebook};
// export default db;