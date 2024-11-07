import Navbar from "./components/navbar";
import "./globals.css";
import { ReduxProvider1 } from "./redux_services/providers";
export const metadata = {
  title: "MS Sofa Maker",
  description: "MS Sofa Maker And Modern Furniture",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon1.ico" />
      </head>
      <body className={``}>
        <ReduxProvider1>
          <Navbar />
          {children}
        </ReduxProvider1>
      </body>
    </html>
  );
}
