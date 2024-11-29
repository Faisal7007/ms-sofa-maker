import React from "react";
import Home from "./home/page";
import { FirebaseProvider } from "./context/Firebase";
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primeicons/primeicons.css';
import './globals.css'



function App() {

  return (
    <FirebaseProvider>
      <Home />
    </FirebaseProvider>
  );
}

export default App;
