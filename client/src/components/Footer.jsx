import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  background-color: #f5fbfd;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>BCH.</Logo>
        <Desc>
         BCH Studios, Dünyaca ünlü markaların Vintage koleksiyonlarını ve sokak giyim kültürüne ait unisex ürünleri zamansızlaştırarak sizinle buluşturuyor. Bireyselliğini eşsiz giyim tarzıyla tamamlamak isteyenlerin ortak noktası olan BCH. , alışılmış kalıpların dışına çıkarak özgür zihinlerin odak noktasında kalmayı hedefliyor.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Hızlı Menü</Title>
        <List>
          <ListItem>Anasayfa</ListItem>
          <ListItem>Giriş Yap</ListItem>
          <ListItem>İndirimli Ürünler</ListItem>
          <ListItem>Yeni Ürünler</ListItem>
          <ListItem>Kadın</ListItem>
          <ListItem>Erkek</ListItem>
        </List>
      </Center>
      <Right>
        <Title>İletişim</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Kazımdirik mah. 220/1 sk. Özboran Apt. Kat:3 Daire:12 No:5 Bornova/İzmir
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> 543 521 3580
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> kajmergroup@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
