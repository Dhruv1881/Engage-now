import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyDeeAn4dc8f10eBw75NZkucK33OSqCKsEc",
  authDomain: "engagenow-chatapp.firebaseapp.com",
  projectId: "engagenow-chatapp",
  storageBucket: "engagenow-chatapp.appspot.com",
  messagingSenderId: "1057617846555",
  appId: "1:1057617846555:web:44ca5a61075780d935f3be",
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
