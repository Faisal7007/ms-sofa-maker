import Header from "./components/header";
import Navbar from "./components/navbar";
import { FirebaseProvider } from "./context/Firebase";
import "./globals.css";
import { ReduxProvider1 } from "./redux_services/providers";
import { Inter, Allison, Poppins, Jost,Amiri } from "next/font/google";





// _app.js


import WhatsAppConditionalRender from "./components/whatsup-condition/WhatsAppConditionalRender";
import UserContextProvider from "./contextApi/UserContextProvider";





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

const amiri_init = Amiri({
  subsets: ["latin"],
  variable: "--font-amiri",
  weight: ["400"],

});
export default function RootLayout({ children }) {
  // console.log(children,'Children')

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon1.ico" />
      </head>
      <body className={`${jost_init.variable} ${allison_init.variable} ${amiri_init.variable} bg-gray-50`}>
      <UserContextProvider>
          <FirebaseProvider>
            <ReduxProvider1>
              {children}
              <WhatsAppConditionalRender/>
            </ReduxProvider1>
          </FirebaseProvider>
      </UserContextProvider>
      </body>
    </html>
  );
}
