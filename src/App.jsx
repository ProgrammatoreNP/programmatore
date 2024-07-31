import "./App.css"
import "@fontsource/rubik"; 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAYOIw6jYdyovXCDoqhgntab3vGtLJtSMs",
  authDomain: "programmatorenp.firebaseapp.com",
  projectId: "programmatorenp",
  storageBucket: "programmatorenp.appspot.com",
  messagingSenderId: "1045545181655",
  appId: "1:1045545181655:web:0898e63f353fcae027eb92",
  measurementId: "G-C4S460YL9L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {

  return (
    
    <>
     Hello World
    </>
  )
}

export default App
