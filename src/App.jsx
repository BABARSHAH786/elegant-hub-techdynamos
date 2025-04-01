import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "./redux/authSlice";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import Home from "./pages/home";
import About from "./components/About";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
import Login from "./components/Login";
import LogoutButton from "./components/LogoutButton";
import RequireAuth from "./components/RequireAuth";
import { ToastContainer } from "react-toastify";
import ProductCustomizer from "./components/TProductCustomizer";

// Protected Dashboard Component
const Dashboard = () => (
  <div className="p-4 max-w-md mx-auto">
    <h2 className="text-2xl font-bold mb-4">Dashboard - Protected Page</h2>
    <p>Welcome! You are logged in.</p>
    <LogoutButton />
  </div>
);

function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page - Separate from main layout */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        {/* mug */}

        {/* Main Application Layout */}
        <Route
          path="/*"
          element={
            <>
              <Nav />
              <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/about" element={<About />} />
                {/* <Route path="/cart" element={<Cart />} /> */}
                {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
                {/* Redirect unknown routes */}
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </>
          }
        />
      </Routes>

      {/* Toast Notification */}
      <ToastContainer position="top-right" autoClose={2000} />
      <ProductCustomizer />
      <Footer />

    </BrowserRouter>//new 
    
  );
}

export default App;












// auth
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import LogoutButton from "./components/LogoutButton";
// import RequireAuth from "./components/RequireAuth";

// const Dashboard = () => <h2>Dashboard - Protected Page</h2>;

// function App() {
//   return (
//     <Router>
//       <div className="p-4">
//         <LogoutButton />
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route
//             path="/dashboard"
//             element={
//               <RequireAuth>
//                 <Dashboard />
//               </RequireAuth>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;