import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import Address from "./pages/Address";
import User from "./pages/User";
import UserOrders from "./pages/UserOrdersPage";
import UserAssessments from "./pages/UserAssessments"
import UserInformationPage from "./pages/UserInformationPage"
import UserLastViews from "./pages/UserLastViewsPage"


const App = () => {
  const user = useSelector((state) => state.user.currentUser)
  return (
    <Router>
      <Routes>
        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/address" element={<Address/>}/>
        <Route path="/profile" element={<User/>}/>
        <Route path="/profile/orders" element={<UserOrders/>}/>
        <Route path="/profile/assessments" element={<UserAssessments/>}/>
        <Route path="/profile/informations" element={<UserInformationPage/>}/>
        <Route path="/profile/lastviews" element={<UserLastViews/>}/>
         
      </Routes>
    </Router>
  );
};

export default App;
