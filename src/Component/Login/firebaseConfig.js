// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    //your Own details
    apiKey: "AIzaSyA9_2iZ192NdbsvYFOrKydmv-wZke2TVck",
    authDomain: "vaccination-website-28ba1.firebaseapp.com",
    projectId: "vaccination-website-28ba1",
    storageBucket: "vaccination-website-28ba1.appspot.com",
    messagingSenderId: "390034218756",
    appId: "1:390034218756:web:9513a91f97d4b290097a51",
    measurementId: "G-ZJNB80L7XF"
};

// const firebaseConfig = {
//     apiKey: "AIzaSyA5Wt_bj0L2kdplfNHrrclccVnJKBI9pkc",
//     authDomain: "freevaccinecamp.firebaseapp.com",
//     projectId: "freevaccinecamp",
//     storageBucket: "freevaccinecamp.appspot.com",
//     messagingSenderId: "838621566946",
//     appId: "1:838621566946:web:fd0c5ff0787964636ecbbb",
//     measurementId: "G-GEMH1LH0H9"
//   };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);