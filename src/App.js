import { Routes, Route, useLocation } from "react-router-dom";
import ImageComponent from "./components/ImageComponent";
import Navbar from "./components/Navbar";
import Qrcode from "./components/Qrcode";
import Tagline from "./components/Tagline";
import Tools from "./components/Tools";
import Footer from "./components/Footer";
import Textutil from "./components/Textutil";
import TextExtractor from "./components/TextExtractor";
import PasswordGenerator from "./components/PasswordGenerator";
import Youtube from "./components/Youtube";
import ImageConverter from "./components/ImageConvertor";
import URLShortener from "./components/URLShortener";
import PdfCompressor from "./components/PdfCompressor";
import Home from "./components/Home";

function App() {
  const location = useLocation();
  const showTagline = location.pathname === "/";

  return (
    <>
      <Navbar />
      {showTagline && <Tagline />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="" element={<Tools />} />
        <Route path="/image-compressor" element={<ImageComponent />} />
        <Route path="/QR-generator" element={<Qrcode />} />
        <Route path="/text-util" element={<Textutil />} />
        <Route path="/image-text-extractor" element={<TextExtractor />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="/yt-thumbnail-downloader" element={<Youtube />} />
        <Route path="/image-converter" element={<ImageConverter />} />
        <Route path="/url-shortner" element={<URLShortener />} />
        <Route path="/pdf-compressor" element={<PdfCompressor />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
