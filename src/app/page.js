import React from "react";
import Home from "./home/page";
import { FirebaseProvider } from "./context/Firebase";

function App() {


  return(
    <>
    <FirebaseProvider>
      <Home/>
    </FirebaseProvider>
    </>
  )
  
}

export default App;
