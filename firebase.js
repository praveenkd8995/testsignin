import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4l8Ypn271uxKkOJ7XbasOyNU7WgjWlPQ",
  authDomain: "testsign-eea21.firebaseapp.com",
  projectId: "testsign-eea21",
  storageBucket: "testsign-eea21.appspot.com",
  messagingSenderId: "198415915504",
  appId: "1:198415915504:web:dd547a3a12159878952535"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
