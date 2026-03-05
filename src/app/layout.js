import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "La Piazzetta",
  description: "Il tuo shopping a misura di famiglia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={raleway.className}>
        {children}
      </body>
    </html>
  );
}
