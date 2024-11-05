import "./globals.css";
export const metadata = {
  title: "MS Sofa Maker",
  description: "MS Sofa Maker And Modern Furniture",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>{children}</body>
    </html>
  );
}
