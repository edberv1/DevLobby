import "./App.css";
import Sidebar from "./Organisms/DashboardSidebar/Sidebar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import Pricing from './Pages/Pricing';
import OurCards from './Pages/OurCards';
import Customers from './Pages/Customers';
import Contact from './Pages/Contact';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';



function App() {
  return (
    <div>
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/ourcards" element={<OurCards />} />

          <Route path="/customers" element={<Customers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
