import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain : process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId : process.env.REACT_APP_FIREBASE_PROJECT_ID,
  measurement_id: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingId : process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
});

export const auth = app.auth();
