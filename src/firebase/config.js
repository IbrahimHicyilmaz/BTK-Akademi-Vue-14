import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCht2_vAixQYSaX80IrhX-KF2A5zHhz9ak",
  authDomain: "vue3-7075a.firebaseapp.com",
  projectId: "vue3-7075a",
  storageBucket: "vue3-7075a.appspot.com",
  messagingSenderId: "881546843864",
  appId: "1:881546843864:web:17ebb58c7b13fffba669ad"
};

const fb = initializeApp(firebaseConfig);

export {fb};