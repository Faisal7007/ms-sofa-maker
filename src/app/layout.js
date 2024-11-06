import "./globals.css";
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
      <body className={``}>{children}</body>
    </html>
  );
}
