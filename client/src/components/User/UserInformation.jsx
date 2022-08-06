import "../../css/UserInformation.css";

const UserInformation = () => {
  return (
    <div className="informations-container">
      <div className="info-header">
        <h5 className="info-header-text">Kullanıcı Bilgilerim</h5>
      </div>
      <div className="info-email d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <i class="fa-solid fa-circle-check"></i>
          <span>E-Posta Adresinizi Doğrulamanız Gerekmektedir</span>
        </div>
        <button className="button-1">DOĞRULA</button>
      </div>
      <div className="info-wrapper d-flex">
        <div className="info-update d-flex flex-column">
          <h6>Üyelik Bilgilerim</h6>
          <form>
            <div className="info-1 d-flex">
              <div className="input-1">
                <label>Ad</label>
                <input type="text" />
              </div>
              <div className="input-1">
                <label>Soy Ad</label>
                <input type="text" />
              </div>
            </div>
            <label>Email</label>
            <input type="text" />
            <label>Cep Telefonu</label>
            <input type="text" />
            <label>Doğum Tarihiniz</label>
            <div className="info-2 d-flex">
              <select>Gün</select>
              <select>Ay</select>
              <select>Yıl</select>
            </div>
            <label>Cinsiyet</label>
            <div className="info-3 d-flex align-items-center">
              <div className="d-flex align-items-center mr-3">
                <input type="checkbox" />
                <span>Kadın</span>
              </div>
              <div className="d-flex align-items-center">
                <input type="checkbox" />
                <span>Erkek</span>
              </div>
            </div>
            <button className="w-100 button-2">GÜNCELLE</button>
          </form>
        </div>
        <div className="space"></div>
        <div className="password-update d-flex flex-column">
          <h6>Şifre Güncelleme</h6>
          <label>Şu Anki Şifre</label>
          <input type="text"/>
          <label>Yeni Şifre</label>
          <input type="text"/>
          <label>Yeni Şifre (Tekrar)</label>
          <input type="text"/>
          <button className="button-2">GÜNCELLE</button>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
