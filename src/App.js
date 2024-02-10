import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Organisms/Navbar";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import OurCards from "./Pages/OurCards";
import Customers from "./Pages/Customers";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/cards" element={<OurCards />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
