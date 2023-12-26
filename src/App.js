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
import FirstPage from "./components/FirstPage";
// import LoginPage from "./components/LoginPage";

function App() {
  return (
    <>
      <AppNavbar />
      <Container className="h-100 overflow-auto">
        <Routes>
          {/* <Route path="/Sign" element={<LoginPage />} /> */}
          <Route path="/" element={<FirstPage />} />
          <Route path="/Prducts" element={<MainHome />} />
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
