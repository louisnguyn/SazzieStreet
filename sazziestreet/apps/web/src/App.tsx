import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainPage from "./pages/MainPage/MainPage"
import AboutPage from "./pages/AboutPage/AboutPage"
import ContactPage from "./pages/ContactPage/ContactPage"
import OurStoryPage from "./pages/OurStoryPage/OurStoryPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
