import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APIKEY,
  authDomain: process.env.REACT_AUTHDOMAIN,
  projectId: "scheduleclassesassignment",
  storageBucket: "scheduleclassesassignment.appspot.com",
  messagingSenderId: process.env.REACT_MESSAGINGSENDERID,
  appId: process.env.REACT_APPID,
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
let Firebase = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
export const db = firebase.firestore();

db.settings({
  timestampsInSnapshots: true,
});
export default Firebase;
