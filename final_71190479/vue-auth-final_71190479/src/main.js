import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAVlMV3MBLMNpmPXgZJ6jVMxF6GkbGdLK0",
    authDomain: "pwl-d5476.firebaseapp.com",
    projectId: "pwl-d5476",
    storageBucket: "pwl-d5476.appspot.com",
    messagingSenderId: "434370950299",
    appId: "1:434370950299:web:ec73d2ec00932ce2dd823e",
    measurementId: "G-LJJR0B14R5"
  };

  firebase.initializeApp(firebaseConfig);
createApp(App).mount('#app')
