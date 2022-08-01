
import "../../css/Address.css"
const AddressForm = () => {
  return (
    <>
      <div className="ty-address">
        <div className="address-form">
          <form>
            <div className="d-flex">
              <div className="d-flex flex-column mr-5 ">
                <label>Ad</label>
                <input type="text" />
              </div>
              <div className="d-flex flex-column">
                <label>Soyad</label>
                <input type="text" />
              </div>
            </div>
            <div className="d-flex">
              <div className="d-flex flex-column mr-5 ">
                <label>Telefon</label>
                <input type="text" />
              </div>
              <div className="d-flex flex-column">
                <label>İl</label>
                <input type="text" />
              </div>
            </div>
            <div className="d-flex">
              <div className="d-flex flex-column mr-5">
                <label>İlçe</label>
                <input type="text" />
              </div>
              <div className="d-flex flex-column">
                <label>Mahalle</label>
                <input type="text" />
              </div>
            </div>
            <div className="d-flex">
              <div className="d-flex flex-column">
                <label>Adres</label>
                <textarea></textarea>
              </div>
            </div>
            <div className="d-flex">
              <div className="d-flex flex-column">
                <label>Adres Başlığı</label>
                <input type="text" />
              </div>
            </div>
            <div className="d-flex flex-column">
              <button className="submit">KAYDET</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddressForm;
