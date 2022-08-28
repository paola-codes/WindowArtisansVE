import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MyNavbar } from "./components/myNavbar";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Services } from "./pages/services";
import { Contact } from "./pages/contact";
import { Faq } from "./pages/faq";
import { Legal } from "./pages/legal";
import { Privacy } from "./pages/privacy";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
