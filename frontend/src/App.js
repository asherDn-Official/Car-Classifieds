import Header from "./components/layouts/Header";
import Home from "./components/layouts/Home";
import { ToastContainer } from "react-toastify";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ProductDetail from "./components/layouts/product/productDetail";
import ProductSearch from "./components/layouts/product/ProductSearch";
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import "./App.css";
import "./navbar.css";
import NewHome from "./components/layouts/NewHome";
import "./Menu.css";
import { useEffect, useState } from "react";
import store from "./store";
import { loadUser } from "./actions/userActions";
import Profile from "./components/users/Profile";
import ProtectedRoute from "./components/route/ProtectedRoute";
import UpdateProfile from "./components/users/UpdateProfile";
import UpdatePassword from "./components/users/UpdatePassword";
import ForgotPasword from "./components/users/ForgotPassword";
import ResetPassword from "./components/users/ResetPassword";
import Cart from "./components/cart/Cart";
import SellBike from "./components/layouts/SellBike";
import Dashboard from "./components/admin/Dashboard";
import ProductList from "./components/admin/ProductList";
import NewProduct from "./components/admin/NewProduct";
import UpdateProduct from "./components/admin/UpdateProduct";
import UserList from "./components/admin/Userlist";
import UpdateUser from "./components/admin/UpdateUser";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import OrderSuccess from "./components/cart/OrderSuccess";
import axios from "axios";
import UsersOrders from "./components/order/UserOrders";
import OrderDetail from "./components/order/OrderDetail";
import OrderList from "./components/admin/OrderList";
import UpdateOrder from "./components/admin/UpdateOrder";
import Footer from "./components/layouts/Footer";
import AboutPage from "./components/layouts/AboutPage";
import MyAccountPage from "./components/users/MyAccountPage";
import NavbarOne from "./components/layouts/NavbarOne";
import { WishListItem } from "./actions/wishListActions";
import WISHlISTS from "./components/cart/WishList";
import AboutPage1 from "./components/layouts/AboutPage1";
import PolicyPage from "./components/layouts/Policy";
import Thankingyou from "./components/layouts/ThankingJs";
// import NavbarOne from "./components/layouts/NavbarOne";

axios.defaults.withCredentials = true;

function App() {
  useEffect(() => {
    store.dispatch(loadUser);
  }, []);

  return (
    <Router>
      <div className="App">
        <HelmetProvider>
          <Header />
          {/* <NavbarOne /> */}
          <ToastContainer theme="dark" />
          <div>
            <Routes>
              <Route path="/BuyPage" element={<Home />} />
              <Route path="/search/:keyword" element={<ProductSearch />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<AboutPage />} />
              {/* <Route path="/about1" element={<AboutPage1 />} /> */}

              <Route
                path="/myprofile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/myprofile/update"
                element={
                  <ProtectedRoute>
                    <UpdateProfile />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/myprofile/update/password"
                element={
                  <ProtectedRoute>
                    <UpdatePassword />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/SellBike"
                element={
                  <ProtectedRoute>
                    <SellBike />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/Thankingyou"
                element={
                  <ProtectedRoute>
                    <Thankingyou />
                  </ProtectedRoute>
                }
              />
              <Route path="/password/forgot" element={<ForgotPasword />} />
              <Route
                path="/password/reset/:token"
                element={<ResetPassword />}
              />
              <Route path="/Mywishlist" element={<Cart />} />
              <Route path="/PolicyPage" element={<PolicyPage />} />

              <Route path="/mywishlists" element={<WISHlISTS />} />

              <Route
                path="/shipping"
                element={
                  <ProtectedRoute>
                    <Shipping />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/order/confirm"
                element={
                  <ProtectedRoute>
                    <ConfirmOrder />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/order/success"
                element={
                  <ProtectedRoute>
                    <OrderSuccess />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/orders"
                element={
                  <ProtectedRoute>
                    <UsersOrders />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/order/:id"
                element={
                  <ProtectedRoute>
                    <OrderDetail />
                  </ProtectedRoute>
                }
              />
            </Routes>

            {/* Admin Routes */}
            <Routes>
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute isAdmin={true}>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/admin/products"
                element={
                  <ProtectedRoute isAdmin={true}>
                    <ProductList />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/admin/products/create"
                element={
                  <ProtectedRoute isAdmin={true}>
                    <NewProduct />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/admin/product/:id"
                element={
                  <ProtectedRoute isAdmin={true}>
                    <UpdateProduct />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/admin/orders"
                element={
                  <ProtectedRoute isAdmin={true}>
                    <OrderList />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/admin/order/:id"
                element={
                  <ProtectedRoute isAdmin={true}>
                    <UpdateOrder />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/admin/users"
                element={
                  <ProtectedRoute isAdmin={true}>
                    <UserList />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/admin/user/:id"
                element={
                  <ProtectedRoute isAdmin={true}>
                    <UpdateUser />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>

          <Footer />
        </HelmetProvider>
      </div>
    </Router>
  );
}

export default App;
