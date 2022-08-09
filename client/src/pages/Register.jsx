import styled from "styled-components";
import { mobile } from "../responsive";
import { Modal } from "react-bootstrap";
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
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [last_name, setLast_name] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState("none");
  const [time, setTime] = useState();
  const [input, setInput] = useState();
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();
  const [input3, setInput3] = useState();
  const [input4, setInput4] = useState();
  const [input5, setInput5] = useState();
  const inpt = input + input1 + input2 + input3 + input4 + input5;
  const code = parseInt(inpt);
  // console.log(input + input1 + input2 + input3 + input4 + input5)

  const handleShow = async (e) => {
    try {
      e.preventDefault();
      setShow("block");
      setTime(180);
      publicRequest.post("auth/verify", { email });
    } catch (err) {}
  };
  const handleRegister = async (e) => {
    const data = {
      email,
      name,
      last_name,
      username,
      password,
      code,
    };
    try {
      e.preventDefault();
      publicRequest.post("auth/register", data);
    } catch (err) {}
  };
  const handleClose = (e) => {
    e.preventDefault();
    console.log(1);
    setShow("none");
    setTime(0);
  };

  const timefnc = () => {
    if (time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, "1000");
    } else if (time === 0) {
      setTime("Süre Bitti");
    }
  };
  timefnc();
  return (
    <>
      <Container>
        <Wrapper>
          <Title>Üye Ol </Title>
          <Form>
            <Input
              placeholder="adınız"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="soyadınız"
              onChange={(e) => setLast_name(e.target.value)}
            />
            <Input
              placeholder="kullanıcı adı"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="şifre"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Agreement>
              Üye Ol'a basarak <b>Üyelik Koşulları</b>nı Kabul Ediyorum.
            </Agreement>
            <Button onClick={handleShow}>ÜYE OL</Button>
          </Form>
        </Wrapper>
        <div style={{ display: show }} className="auth-code">
          <div onClick={handleClose} className="d-flex justify-content-end p-2">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center auth-wrapper">
            <h5 className="auth-head">E-POSTA DOĞRULAMA</h5>

            <label>(lütfen {email} adresine gelen kodu giriniz) </label>
            <div>
              <label>Doğrulama Kodu ({time})</label>
              <div className="d-flex justify-content-center aligns-item-center auth-input">
                <input
                  maxLength="1"
                  size="1"
                  min="0"
                  max="9"
                  pattern="\d"
                  type="text"
                  onChange={(e) => setInput(e.target.value)}
                />
                <input
                  maxLength="1"
                  size="1"
                  min="0"
                  max="9"
                  pattern="\d"
                  type="text"
                  onChange={(e) => setInput1(e.target.value)}
                />
                <input
                  maxLength="1"
                  size="1"
                  min="0"
                  max="9"
                  pattern="\d"
                  type="text"
                  onChange={(e) => setInput2(e.target.value)}
                />
                <input
                  maxLength="1"
                  size="1"
                  min="0"
                  max="9"
                  pattern="\d"
                  type="text"
                  onChange={(e) => setInput3(e.target.value)}
                />
                <input
                  maxLength="1"
                  size="1"
                  min="0"
                  max="9"
                  pattern="\d"
                  type="text"
                  onChange={(e) => setInput4(e.target.value)}
                />
                <input
                  maxLength="1"
                  size="1"
                  min="0"
                  max="9"
                  pattern="\d"
                  type="text"
                  onChange={(e) => setInput5(e.target.value)}
                />
              </div>
              <label>Lütfen Belirtilen Sürede Kodu Giriniz</label>
            </div>
            <button onClick={handleRegister} className="auth-button">
              DOĞRULA
            </button>
            <button className="auth-button">KODU TEKRAR GÖNDER</button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;
