// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyACYmFdyXsKMQXmp77_hx1BI7OzkumuRNo",
  authDomain: "bitsync-a0a49.firebaseapp.com",
  projectId: "bitsync-a0a49",
  storageBucket: "bitsync-a0a49.appspot.com", // corrected here
  messagingSenderId: "322519770704",
  appId: "1:322519770704:web:18ef57f93f1a1039249355"

};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export needed Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
// export const storage = getStorage(app); // if you need it
