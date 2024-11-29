import Header from "./components/header";
import Navbar from "./components/navbar";
import { FirebaseProvider } from "./context/Firebase";
import "./globals.css";
import { ReduxProvider1 } from "./redux_services/providers";
import { Inter, Allison, Poppins, Jost } from "next/font/google";
/* PrimeReact core styles */
import 'primereact/resources/primereact.min.css';

/* PrimeReact theme (choose one) */
import 'primereact/resources/themes/lara-light-blue/theme.css';

/* PrimeIcons (for icons used in components) */
import 'primeicons/primeicons.css';

// _app.js

import { PrimeReactProvider } from "primereact/api";
import WhatsAppConditionalRender from "./components/whatsup-condition/WhatsAppConditionalRender";





export const metadata = {
  title: "MS Sofa Maker",
  description: "MS Sofa Maker And Modern Furniture",
};

const allison_init = Allison({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allison",
});

const jost_init = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});
export default function RootLayout({ children }) {
  // console.log(children,'Children')

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon1.ico" />
      </head>
      <body className={`${jost_init.variable} ${allison_init.variable} bg-gray-50`}>
          <FirebaseProvider>
            <ReduxProvider1>
              {children}
              <WhatsAppConditionalRender/>
            </ReduxProvider1>
          </FirebaseProvider>
      </body>
    </html>
  );
}
