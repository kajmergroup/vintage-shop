import { useState } from "react";
import "./login.scss";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        user
      );
      const token = res.data.accessToken;
      const id = res.data._id;
      localStorage.setItem("jwt", token);
      localStorage.setItem("id", id);
    } catch (err) {}
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-form">
          <h3>Admin Panel</h3>
          <form onSubmit={handleLogin}>
            <div className="ty">
              <label>Kullanıcı Adı</label>
              <input name="username" type="text" onChange={handleChange} />
            </div>
            <div className="ty">
              <label>Şifre</label>
              <input name="password" type="password" onChange={handleChange} />
            </div>

            <button className="ty-button">Giriş</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
