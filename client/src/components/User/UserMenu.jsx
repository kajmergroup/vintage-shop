import "../../css/UserMenu.css";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className="d-flex flex-column">
      <h3 className="menu-title">Hesabım</h3>
      <NavLink
        style={{ textDecoration: "none", color: "black" }}
        to="/profile/orders"
      >
      <div className="d-flex align-items-center menu-link">
        <i class="fa-solid fa-box menu-icon fa-xs"></i>
        <span className="ml-2 menu-text">Siparişlerim</span>
      </div>
      </NavLink>
      <div className="d-flex align-items-center  menu-link">
        <i class="fa-solid fa-comment-dots menu-icon fa-xs"></i>
        <span className="ml-2 menu-text">Değerlendirmelerim</span>
      </div>
      <div className="d-flex align-items-center  menu-link">
        <i class="fa-solid fa-arrow-rotate-left menu-icon fa-xs"></i>
        <span className="ml-2 menu-text">Tekrar Satın Al</span>
      </div>
      <NavLink
        style={{ textDecoration: "none", color: "black" }}
        to="/profile/lastviews"
      >
      <div className="d-flex align-items-center  menu-link">
        <i class="fa-solid fa-magnifying-glass menu-icon fa-xs"></i>
        <span className="ml-2 menu-text">Önceden Gezdiklerim</span>
      </div>
      </NavLink>
      <div className="d-flex align-items-center  menu-link">
        <i class="fa-solid fa-ticket-simple menu-icon fa-xs"></i>
        <span className="ml-2 menu-text">İndirim Kuponlarım</span>
      </div>
      <NavLink
        style={{ textDecoration: "none", color: "black" }}
        to="/profile/informations"
      >
        <div className="d-flex align-items-center  menu-link">
          <i class="fa-solid fa-user menu-icon fa-xs"></i>
          <span className="ml-2 menu-text">Kullanıcı Bilgilerim</span>
        </div>
      </NavLink>
      <div className="d-flex align-items-center  menu-link">
        <i class="fa-solid fa-location-dot menu-icon fa-xs"></i>
        <span className="ml-2 menu-text">Adres Bilgilerim</span>
      </div>
      <div className="d-flex align-items-center  menu-link">
        <i class="fa-solid fa-credit-card menu-icon fa-xs"></i>
        <span className="ml-2 menu-text">Kayıtlı Kartlarım</span>
      </div>
    </div>
  );
};

export default UserMenu;
