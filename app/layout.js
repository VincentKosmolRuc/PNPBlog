import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import ContentWrapper from "./ui/ContentWrapper";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="site bg-orange-400"> 
        <Navbar />
          <main className="main">
            <ContentWrapper>
              {children}
            
            </ContentWrapper>
          </main>
        <Footer/>
      </body>
    </html>
  );
}
