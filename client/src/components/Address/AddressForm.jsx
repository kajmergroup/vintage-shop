import { useSelector } from "react-redux";
import { useState } from "react";
import "../../css/Address.css";
import { userRequest } from "../../requestMethods";
const AddressForm = () => {
  const id = useSelector((state) => state.user.currentUser._id);

  const [address_title , setAddress_title] = useState();
  const [city, setCity] = useState();
  const [town, setTown] = useState();
  const [address_line, setAddress_line] = useState();
  const [postal_code, setPostal_code] = useState();
  const [phone, setPhone] = useState();

  const handleClick = async () => {
    const data = {
      address: [
        {
          city,
          town,
          address_line,
          postal_code,
          phone,
          address_title,
        },
      ],
    };

    await userRequest.put("users/" + id, data);
  };

  return (
    <>
      <div className="ty-address">
        <div className="address-form">
          <form onSubmit={handleClick}>
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
                <input type="text" onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="d-flex flex-column">
                <label>İl</label>
                <input type="text" onChange={(e) => setCity(e.target.value)} />
              </div>
            </div>
            <div className="d-flex">
              <div className="d-flex flex-column mr-5">
                <label>İlçe</label>
                <input type="text" onChange={(e) => setTown(e.target.value)} />
              </div>
              <div className="d-flex flex-column">
                <label>Posta Kodu</label>
                <input
                  type="text"
                  onChange={(e) => setPostal_code(e.target.value)}
                />
              </div>
            </div>
            <div className="d-flex">
              <div className="d-flex flex-column">
                <label>Adres</label>
                <textarea
                  onChange={(e) => setAddress_line(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="d-flex">
              <div className="d-flex flex-column">
                <label>Adres Başlığı</label>
                <input
                 type="text"
                 onChange={(e) => setAddress_title(e.target.value)}
                  />
              </div>
            </div>
            <div className="d-flex flex-column">
              <button type="submit" className="submit">
                KAYDET
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddressForm;
