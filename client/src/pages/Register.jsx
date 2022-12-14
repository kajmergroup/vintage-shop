import styled from "styled-components";
import { mobile } from "../responsive";
import "../css/Register.css";
import { useState } from "react";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.im.ge/2022/07/21/Fdb7kD.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-size: 14;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 5px;
`;

const Register = () => {


  const [show, setShow] = useState("none");
  const [time, setTime] = useState();
  // const code = parseInt(inpt);
  
  const [user, setUser] = useState({
    email: "",
    name: "",
    last_name: "",
    username: "",
    password: "",
    code:"",
  });
 


  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleShow = async (e) => {
    const email = user.email;
    try {
      e.preventDefault();
      setShow("block");
      setTime(180);
      publicRequest.post("auth/verify", { email });
    } catch (err) {}
  };
  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      publicRequest.post("auth/register", user , );
    } catch (err) {}
  };
  const handleClose = (e) => {
    e.preventDefault();
    
    setShow("none");
    setTime(0);
  };

  const timefnc = () => {
    if (time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, "1000");
    } else if (time === 0) {
      setTime("S??re Bitti");
    }
  };
  timefnc();
  return (
    <>
      <Container>
        <Wrapper>
          <Title>??ye Ol </Title>
          <Form>
            <Input name="name" placeholder="ad??n??z" onChange={handleChange} />
            <Input
              name="last_name"
              placeholder="soyad??n??z"
              onChange={handleChange}
            />
            <Input
              name="username"
              placeholder="kullan??c?? ad??"
              onChange={handleChange}
            />
            <Input name="email" placeholder="email" onChange={handleChange} />
            <Input
              name="password"
              type="password"
              placeholder="??ifre"
              onChange={handleChange}
            />
            <Agreement>
              ??ye Ol'a basarak <b>??yelik Ko??ullar??</b>n?? Kabul Ediyorum.
            </Agreement>
            <Button onClick={handleShow}>??YE OL</Button>
          </Form>
        </Wrapper>
        <div style={{ display: show }} className="auth-code">
          <div onClick={handleClose} className="d-flex justify-content-end p-2">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center auth-wrapper">
            <h5 className="auth-head">E-POSTA DO??RULAMA</h5>

            <label>(l??tfen {user.email} adresine gelen kodu giriniz) </label>
            <div>
              <label>Do??rulama Kodu ({time})</label>
              <div className="d-flex justify-content-center aligns-item-center auth-input">
                <input
                  name="code"
                  maxLength="6"
                  size="6"
                  min="0"
                  max="9"
                  pattern="\d"
                  type="text"
                  onChange={handleChange}
                />
                
              </div>
              <label>L??tfen Belirtilen S??rede Kodu Giriniz</label>
            </div>
            <button onClick={handleRegister} className="auth-button">
              DO??RULA
            </button>
            <button className="auth-button">KODU TEKRAR G??NDER</button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;
