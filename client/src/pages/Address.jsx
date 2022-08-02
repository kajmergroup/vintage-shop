import Footer from "../components/Footer";
import "../css/Address.css";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AddressForm from "../components/Address/AddressForm";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../requestMethods";
const Address = () => {
  const user = useSelector((state) => state.user.currentUser);
  const id = user._id;
  
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [display, setDisplay] = useState("none");
  const [see, setSee] = useState("block");
  const [address, setAddress] = useState([]);
  

  useEffect( () => {
    const fetchData = async() =>{
      const res = await userRequest.get("users/find/" + id);
      setAddress(res.data.address);
    }
    fetchData();
     
  }, [id]);

  const handleClick = () => {
    setDisplay("block");
    setSee("none");
  };
  const handleClick1 = () => {
    setDisplay("none");
    setSee("block");
  };

  return (
    <>
      <div className="container">
        <div className="payment-header">BCH.</div>
      </div>
      <main id="address">
        <div className="p-layout">
          <div className="content">
            <div className="d-flex p-tabs">
              <div
                onClick={handleClick1}
                className="address-info d-flex flex-column p-3 "
              >
                <div className="header">Adres Bilgileri</div>
                <div className="address-text d-flex flex-column">
                  <span>Kazımdirik mah</span>
                  <span>İzmir/Bornova</span>
                </div>
              </div>
              <div className="sperator"></div>
              <div
                onClick={handleClick}
                className="payment-options d-flex flex-column p-3"
              >
                <div className="header">Ödeme Seçenekleri</div>
                <span className="address-text">
                  Ödemenizi güvenle <strong>Banka ya da Kredi Kartı</strong> ile
                  yapabilirsiniz.
                </span>
              </div>
            </div>
            <div className="address-wrapper">
              <div style={{ display: see }}>
                <div className="header mb-4">Teslimat Adresi</div>
                <div className="d-flex justify-content-between">
                  <div
                    className="address-box mr-3 d-flex flex-column align-items-center justify-content-center"
                    onClick={handleShow}
                  >
                    <div>
                      <AddIcon />
                    </div>
                    <span>Yeni Adres Ekle</span>
                  </div>
                  {address.map((address) => (
                    <div className="address-box d-flex flex-column p-3">
                      <div className="d-flex justify-content-between m-1">
                        <div className="d-flex">
                          <div>
                            <PersonIcon />
                          </div>
                          <span>
                            {user.first_name} {user.last_name}
                          </span>
                        </div>
                        <div className="d-flex">
                          <div>
                            <PhoneIphoneIcon />
                          </div>
                          <span>{address.phone}</span>
                        </div>
                      </div>
                      <div className="d-flex flex-column m-2">
                        <span>{address.address_line}</span>
                        <span>{address.city}/{address.town}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: display }}>
                <div className="payment-box d-flex flex-column mt-5">
                  <div className="d-flex justify-content-between">
                    <h5>Kart Bilgiler</h5>
                    <span>Kayıtlı kartımla ödeme yap</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <label>Kart Numarası</label>
                    <i class="fa-brands fa-cc-mastercard"></i>
                  </div>
                  <input type="text" />
                  <div className="d-flex justify-content-between">
                    <label>Son Kullanma Tarihi</label>
                    <label>CVV</label>
                  </div>
                  <div className="row d-flex justify-content-between">
                    <div className="col-6 d-flex">
                      <input className="mr-2" type="text" placeholder="Ay" />
                      <input type="text" placeholder="Yıl" />
                    </div>
                    <div className="col-3">
                      <input type="text" />
                    </div>
                  </div>
                  <div className="d-flex">
                    <input type="checkbox" className="checkbox m-2" />
                    <p className="m-2">3d secure ile ödemek istiyorum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column p-summary">
            <div>
              <button className="submit">Kaydet ve Devam Et</button>
            </div>
            <div className="d-flex justify-content-center kvkk">
              <input className="checkbox mt-2 mr-2" type="checkbox" />
              <p className="kvkk-text">
                Ön Bilgilendirme Koşulları'nı ve Mesafeli Satış Sözleşmesi'ni
                okudum, onaylıyorum.
              </p>
            </div>
            <div className="d-flex flex-column">
              <h3>Sipariş Özeti</h3>
              <div className="d-flex justify-content-between">
                <p>Ara Toplam</p>
                <p>169 TL</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Kargo Toplam</p>
                <p>20 TL</p>
              </div>
              <div id="space"></div>
              <div className="d-flex justify-content-between mb-3">
                <p> Toplam</p>
                <p>189 TL</p>
              </div>
              <div>
                <button className="submit">Kaydet ve Devam Et</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Modal show={show}>
        <Modal.Header className="justify-content-between">
          <div>Adres Ekle</div>
          <CloseIcon onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <AddressForm />
        </Modal.Body>
      </Modal>
      <Footer />
    </>
  );
};

export default Address;
