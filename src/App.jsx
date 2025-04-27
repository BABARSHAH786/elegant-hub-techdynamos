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
<<<<<<< HEAD
// import ProductCustomizer from "./components/TProductCustomizer";
=======
import ProductCustomizer from "./components/TProductCustomizer";
>>>>>>> e92c576c39c34a3c988fb1399c134015c6f4c1a3

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
<<<<<<< HEAD
  
=======
>>>>>>> e92c576c39c34a3c988fb1399c134015c6f4c1a3
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
<<<<<<< HEAD
      <div class="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white space-y-6">
  <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight">
    Welcome to Elegant Hub
  </h1>

  <h2 class="text-2xl md:text-3xl font-semibold">
    A Unique Shopping Experience for Customized Products
  </h2>

  <p class="text-lg md:text-xl italic">
    "Bring Magic to Your Gifting"
  </p>

  <p class="max-w-2xl text-base md:text-lg mt-4">
    An online platform offering customers the ability to customize clothes and other items.
  </p>
</div>
{/* add image */}
{/* <div className="flex flex-col items-center py-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Featured Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl px-4">
        <div className="bg-gray-100 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <img
            src="https://via.placeholder.com/300x300?text=Image+1"
            alt="Product 1"
            className="w-full h-64 object-cover rounded-lg"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-800">Custom Shirt</h3>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <img
            src="https://via.placeholder.com/300x300?text=Image+2"
            alt="Product 2"
            className="w-full h-64 object-cover rounded-lg"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-800">Personalized Mug</h3>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <img
            src="https://via.placeholder.com/300x300?text=Image+3"
            alt="Product 3"
            className="w-full h-64 object-cover rounded-lg"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-800">Custom Hoodie</h3>
        </div>
      </div>
    </div> */}

      {/* <ProductCustomizer /> */}
      <Footer />

    </BrowserRouter>
    
=======
      <ProductCustomizer />
      <Footer />

    </BrowserRouter>//new 
>>>>>>> e92c576c39c34a3c988fb1399c134015c6f4c1a3
    
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