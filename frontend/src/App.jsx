import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/Navbar";
import Slider from "./component/Slider";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import TourPackges from "./pages/TourPackges";
import Domestic from "./pages/Domestic";
import International from "./pages/International";
import Hajj from "./pages/Hajj";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";

function AppContent() {
  const location = useLocation();
  
  // Check if current route is any admin route (including login)
  const isAdminRoute = location.pathname.startsWith('/admin');
  
  return (
    <div className="app">
      {/* Hide navbar and slider for admin routes */}
      {!isAdminRoute && <Navbar />}
      {!isAdminRoute && <Slider />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tour-packages" element={<TourPackges />} />
        <Route path="/domestic" element={<Domestic />} />
        <Route path="/international" element={<International />} />
        <Route path="/hajj" element={<Hajj />} />
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        } />
        <Route path="/admin/holy-hajj" element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        } />
        <Route path="/admin/holy-umrah-hajj" element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        } />
        <Route path="/admin/international-tour" element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        } />
        <Route path="/admin/domestic-tour" element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        } />
      </Routes>
      
      {/* Hide footer for admin routes */}
      {!isAdminRoute && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;