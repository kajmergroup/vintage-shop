import "../../css/UserOrders.css";

const UserOrders = () => {
  return (
    <div className="orders-container">
      <div className="d-flex header align-items-center justify-content-between order-header">
        <h1 className="header-title">Siparişlerim</h1>
        <form className="search-form d-flex align-items-center">
          <input className="search-input " placeholder="Ürün ismi ara" />
          <i class="fa-solid fa-magnifying-glass search-icon fa-2xs"></i>
        </form>
        <div className="order-select-container">
          <select className="order-select">
            <option>Tüm Siparişler</option>
            <option>Son 1 Ay</option>
            <option>Son 3 Ay</option>
            <option>2021</option>
          </select>
        </div>
      </div>
      <div className="orders-sort a">
        <ul className="d-flex order-status">
          <li>Tümü</li>
          <li>Devam Eden Siparişler</li>
          <li>İadeler</li>
          <li>İptaller</li>
        </ul>
      </div>
      <div className="orders mb-3">
        <div className="orders-info d-flex align-items-center">
            <div className="order-info d-flex flex-column w-25">
                <span className="info-header-1">Sipariş Tarihi</span>
                <span className="info-text">16 Haziran 2022-17:22</span>
            </div>
            <div className="order-info d-flex flex-column w-25">
                <span className="info-header-1">Sipariş Özeti</span>
                <span className="info-text">2 Teslimat, 2 Ürün</span>
            </div>
            <div className="order-info d-flex flex-column w-25">
                <span className="info-header-1">Alıcı</span>
                <span className="info-text">Barış Can Hasar</span>
            </div>
            <div className="order-info d-flex flex-column w-25">
                <span className="info-header-1">Tutar</span>
                <span className="info-price">179,97 TL</span>
            </div>
            <button className="order-detail">Sipariş Detayı</button>
        </div>
        <div className="order-list ">
            <div className="order d-flex align-items-center mb-3">
            <div className="d-flex flex-column w-75">
              <div className="order-check mb-2">
                 <i class="fa-solid fa-check fa-sm"></i>
                 <span className="ml-2" >Teslim Edildi</span>
              </div>
              <span className="order-date">1 Ürün 20 Haziran tarihinde teslim edilmiştir.</span>
            </div>
            <div className="img-container">
            <img className="order-img" alt="" src="https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw8d007617/original/90_1003927-1A04155_5B040_10_SilverBaroqueSilkShirt-Shirts-versace-online-store_0_0.jpg?sw=1440&sh=2000&sm=fit&sfrm=jpg"/>
            </div>
            </div>
            <div className="order d-flex align-items-center mb-3">
            <div className="d-flex flex-column w-75">
              <div className="order-check mb-2">
                 <i class="fa-solid fa-check fa-sm"></i>
                 <span className="ml-2" >Teslim Edildi</span>
              </div>
              <span className="order-date">1 Ürün 20 Haziran tarihinde teslim edilmiştir.</span>
            </div>
            <div className="img-container">
            <img className="order-img" alt="" src="https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw8d007617/original/90_1003927-1A04155_5B040_10_SilverBaroqueSilkShirt-Shirts-versace-online-store_0_0.jpg?sw=1440&sh=2000&sm=fit&sfrm=jpg"/>
            </div>
            </div>
        </div>
      </div>
      <div className="orders">
        <div className="orders-info d-flex align-items-center">
            <div className="order-info d-flex flex-column w-25">
                <span className="info-header-1">Sipariş Tarihi</span>
                <span className="info-text">16 Haziran 2022-17:22</span>
            </div>
            <div className="order-info d-flex flex-column w-25">
                <span className="info-header-1">Sipariş Özeti</span>
                <span className="info-text">2 Teslimat, 2 Ürün</span>
            </div>
            <div className="order-info d-flex flex-column w-25">
                <span className="info-header-1">Alıcı</span>
                <span className="info-text">Barış Can Hasar</span>
            </div>
            <div className="order-info d-flex flex-column w-25">
                <span className="info-header-1">Tutar</span>
                <span className="info-price">179,97 TL</span>
            </div>
            <button className="order-detail">Sipariş Detayı</button>
        </div>
        <div className="order-list ">
            <div className="order d-flex align-items-center mb-3">
            <div className="d-flex flex-column w-75">
              <div className="order-check mb-2">
                 <i class="fa-solid fa-check fa-sm"></i>
                 <span className="ml-2" >Teslim Edildi</span>
              </div>
              <span className="order-date">1 Ürün 20 Haziran tarihinde teslim edilmiştir.</span>
            </div>
            <div className="img-container">
            <img className="order-img" alt="" src="https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw8d007617/original/90_1003927-1A04155_5B040_10_SilverBaroqueSilkShirt-Shirts-versace-online-store_0_0.jpg?sw=1440&sh=2000&sm=fit&sfrm=jpg"/>
            </div>
            </div>
            <div className="order d-flex align-items-center mb-3">
            <div className="d-flex flex-column w-75">
              <div className="order-check mb-2">
                 <i class="fa-solid fa-check fa-sm"></i>
                 <span className="ml-2" >Teslim Edildi</span>
              </div>
              <span className="order-date">1 Ürün 20 Haziran tarihinde teslim edilmiştir.</span>
            </div>
            <div className="img-container">
            <img className="order-img" alt="" src="https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw8d007617/original/90_1003927-1A04155_5B040_10_SilverBaroqueSilkShirt-Shirts-versace-online-store_0_0.jpg?sw=1440&sh=2000&sm=fit&sfrm=jpg"/>
            </div>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default UserOrders;
