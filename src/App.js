import "./App.css";
import { AppNavbar } from "./components/AppNavbar";
import MainHome from "./components/MainHome";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import Profile from "./components/Profile";
import SettingsPage from "./components/Settings";
import SignUp from "./components/SignUp";
import Contact from "./components/Contact";
import Viewprod from "./components/Viewprod";
import Orders from "./components/Orders";

function App() {
  return (
    <>
      <AppNavbar />
      <Container className="h-100 overflow-auto">
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Settings" element={<SettingsPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/Product/:productId" element={<Viewprod />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
