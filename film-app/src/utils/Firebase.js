import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC6gcFnKv14j8YSRdWb6R9f3y-iYNuPPn4",
    authDomain: "user-authentication-6dceb.firebaseapp.com",
    projectId: "user-authentication-6dceb",
    storageBucket: "user-authentication-6dceb.appspot.com",
    messagingSenderId: "480187151844",
    appId: "1:480187151844:web:435d3c255d65ba17dd83f1",
    measurementId: "G-LERS1SEHB0"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);