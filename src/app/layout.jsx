import Header from "./components/header";
import Navbar from "./components/navbar";
import "./globals.css";
import { ReduxProvider1 } from "./redux_services/providers";
import { Inter, Allison, Poppins, Jost } from "next/font/google";

export const metadata = {
  title: "MS Sofa Maker",
  description: "MS Sofa Maker And Modern Furniture",
};

const jost_init = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon1.ico" />
      </head>
      <body className={`${jost_init.variable}`}>
        <ReduxProvider1>
      
        
        {children}
        </ReduxProvider1>
      </body>
    </html>
  );
}
