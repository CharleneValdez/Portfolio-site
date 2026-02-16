import "./globals.css";
import Header from "@/component/Header";

export const metadata = {
  title: "My Portfolio",
  description: "Charlene's Portfolio",
};

export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <div className={"header"}>
          <Header/>
        </div>
        <div className={"pages"}>
          {children}
        </div>
      </body>
    </html>
  );
}
