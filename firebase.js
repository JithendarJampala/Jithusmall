import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGBl7eIwUVYELtFwLtx8gI97wPWzWW6x0",
    authDomain: "mall-database.firebaseapp.com",
    databaseURL: "https://mall-database-default-rtdb.firebaseio.com",
    projectId: "mall-database",
    storageBucket: "mall-database.firebasestorage.app",
    messagingSenderId: "445602997408",
    appId: "1:445602997408:web:b7cad53fa09b07754195c5",
    measurementId: "G-Y4668SDFK0"
  };

  const app = getApps().length===0 ?
   initializeApp(firebaseConfig)
   : getApps()[0];

   const db = getDatabase(app);
   export {db};
