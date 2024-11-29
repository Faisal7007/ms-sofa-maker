import React from "react";
import Home from "./home/page";
import { FirebaseProvider } from "./context/Firebase";
import './globals.css'



function App() {

  return (
    <FirebaseProvider>
      <Home />
    </FirebaseProvider>
  );
}

export default App;
