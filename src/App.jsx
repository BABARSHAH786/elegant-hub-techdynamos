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
        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />

        {/* Main Layout */}
        <Route
          path="/*"
          element={
            <>
              <Nav />

              {/* Hero Section */}
              <div className="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white space-y-6">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                  Welcome to Elegant Hub
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold">
                  A Unique Shopping Experience for Customized Products
                </h2>
                <p className="text-lg md:text-xl italic">
                  "Bring Magic to Your Gifting"
                </p>
                <p className="max-w-2xl text-base md:text-lg mt-4">
                  An online platform offering customers the ability to customize clothes and other items.
                </p>
              </div>

              {/* Featured Products Section */}
              <div className="flex flex-col items-center py-12 bg-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Our Featured Products
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl px-4">
                  <div className="bg-gray-100 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform">
                    <img
                      src="https://via.placeholder.com/300x300?text=Image+1"
                      alt="Product 1"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <h3 className="mt-4 text-xl font-semibold text-gray-800">
                      Custom Shirt
                    </h3>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform">
                    <img
                      src="https://via.placeholder.com/300x300?text=Image+2"
                      alt="Product 2"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <h3 className="mt-4 text-xl font-semibold text-gray-800">
                      Personalized Mug
                    </h3>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform">
                    <img
                      src="https://via.placeholder.com/300x300?text=Image+3"
                      alt="Product 3"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <h3 className="mt-4 text-xl font-semibold text-gray-800">
                      Custom Hoodie
                    </h3>
                  </div>
                </div>
              </div>

              {/* About Page Route */}
              <Routes>
                <Route path="/about" element={<About />} />
                {/* Other Routes (cart, product details, etc.) can be added later */}
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>

              {/* Product Customizer Section */}
              <ProductCustomizer />

              {/* Footer */}
              <Footer />
            </>
          }
        />
      </Routes>

      {/* Toast Notification */}
      <ToastContainer position="top-right" autoClose={2000} />
    </BrowserRouter>
  );
}

export default App;
