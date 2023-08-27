import "./globals.css";

export const metadata = {
  title: "بطانية الصوف للاطفال",
  description: "بطانية الصوف للاطفال",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="root">{children}</body>
    </html>
  );
}
