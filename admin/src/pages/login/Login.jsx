import "./login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-form">
          <h3>Admin Panel</h3>
          <div className="ty">
            <label>Kullanıcı Adı</label>
            <input type="text" />
          </div>
          <div className="ty">
            <label>Şifre</label>
            <input type="password" />
          </div>

          <button className="ty-button">Giriş</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
