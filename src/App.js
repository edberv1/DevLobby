// App.js
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Organisms/Navbar";
import Home from "./Pages/Home";
import PlayCodeArena from "./Pages/PlayCodeArena";
import Chat from "./Pages/Chat";
import Blog from "./Pages/Blog";
import About from "./Pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/playcodearena" element={<PlayCodeArena />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
