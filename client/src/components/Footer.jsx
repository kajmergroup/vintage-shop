import {
  Facebook,
  Instagram,
  MailOutline,
  Youtube,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import YouTubeIcon from '@mui/icons-material/YouTube';

import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="footer-item">
            <h6>ONLINE ALISVERIS</h6>
            <span>Kadın</span>
            <span>Erkek</span>
            <span>Bebek</span>
            <span>Çocuk</span>
            <span>Premium Vintage</span>
            <span>Divided</span>
            <span>Spor</span>
          </div>
          <div className="footer-item">
            <h6>KURUMSAL BİLGİLER</h6>
            <span>BCH'de Kariyer</span>
            <span>BCH grubu hakkında</span>
            <span>Sürdürülebilirlik</span>
            <span>Basın</span>
            <span>Yatırımcı İlişkileri</span>
            <span>Corporate Governance</span>
            <span>Finance</span>
          </div>
          <div className="footer-item">
            <h6>YARDIM</h6>
            <span>Müşteri Hizmetleri</span>
            <span>Hesabım</span>
            <span>Mağaza Bulma Aracı</span>
            <span>Yasal Kurallar & Gizlilik</span>
            <span>İletişim</span>
            <span>Hediye Kartı</span>
            <span>Çerez Ayarları</span>
          </div>
        </div>
        <div className="footer-social">
          <i className="twitter">
            <Twitter />
          </i>
          <i className="facebook">
            <Facebook />
          </i>
          <i className="instagram">
            <Instagram />
          </i>
          <i className="pinterest">
            <Pinterest />
          </i>
          <i className="youtube">
            <YouTubeIcon />
          </i>
        </div>
        <div className="footer-copyright">
          <p>Bu sayfanın içeriği telif hakları ile korunmaktadır ve BCH'ye aittir. BCH'nin ticaret konsepti, modayı ve kaliteyi en iyi fiyatla sürdürülebilir şekilde...</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
