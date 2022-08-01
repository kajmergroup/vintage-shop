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
         
      </Routes>
    </Router>
  );
};

export default App;
