import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth'; // Import other services as needed

const firebaseConfig = {
  apiKey: "AIzaSyD4tKoK6k2d43X9pquz5YSPu2cHUDNUnLE",
  projectId: "attendence-app-46f1a",
  storageBucket: "attendence-app-46f1a.firebasestorage.app",
  messagingSenderId: "209891261010",
  appId: "1:209891261010:android:d7b135ba2839b21a3dbd8b",
  databaseURL: "", // Optional if you're not using Realtime Database
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  console.log('Firebase already initialized!');
}

export default firebase;
