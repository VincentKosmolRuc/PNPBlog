import Navbar from "./Navbar";
import Footer from "./Footer";
import ContentWrapper from "./ContentWrapper";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="site">
        <Navbar />
          <main className="main">
            <ContentWrapper children={children} >
            
            </ContentWrapper>
          </main>
        <Footer/>
      </body>
    </html>
  );
}
