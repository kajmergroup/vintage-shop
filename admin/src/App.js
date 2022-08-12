import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import UserList from "./pages/userList/userList";
import ProductList from "./pages/productList/productList";
import SingleUser from "./pages/singleUser/SingleUser";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<UserList />} />
              <Route path=":userId" element={<SingleUser />} />
            </Route>
            <Route path="products">
              <Route index element={<ProductList />} />
              <Route path=":id" element={<SingleProduct />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
