import "../styles/globals.css";

export const metadata = {
  title: "Roni Portfolio",
  description: "Professional Developer Portfolio"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}