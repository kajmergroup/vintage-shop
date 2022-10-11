import "../css/recommended.css";
import React, { Component } from "react";
import Slider from "react-slick";



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "lightgrey" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "lightgrey" }}
        onClick={onClick}
      />
    );
  }



export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <>
        <h2 className="slider-header"> Bu Ürünlerde İlgini Çekebilir </h2>
        <div className="slider-container">
          <Slider {...settings}>
            <div className="slider-product">
              <img
                className="slider-img"
                src="https://cdn.myikas.com/images/c96b2df0-fbcd-4b1b-8184-2e95b6529078/e1765a36-2dab-4a54-bc5d-43a9969229fe/image_1080.webp"
                alt=""
              />
              <div className="slider-content">
              <button className="slider-button">Sepete Ekle</button>
              </div>
              <div className="slider-content">
                <span>Vintage Grey Şapka</span>
              </div>
              <div className="slider-content">
                <span>₺ 17000</span>
              </div>
              
            </div>
            <div className="slider-product">
              <img
                className="slider-img"
                src="https://cdn.myikas.com/images/c96b2df0-fbcd-4b1b-8184-2e95b6529078/e1765a36-2dab-4a54-bc5d-43a9969229fe/image_1080.webp"
                alt=""
              />
              <div className="slider-content">
              <button className="slider-button">Sepete Ekle</button>
              </div>
              <div className="slider-content">
                <span>Vintage Grey Şapka</span>
              </div>
              <div className="slider-content">
                <span>₺ 17000</span>
              </div>
              
            </div>
            <div className="slider-product">
              <img
                className="slider-img"
                src="https://cdn.myikas.com/images/c96b2df0-fbcd-4b1b-8184-2e95b6529078/e1765a36-2dab-4a54-bc5d-43a9969229fe/image_1080.webp"
                alt=""
              />
              <div className="slider-content">
              <button className="slider-button">Sepete Ekle</button>
              </div>
              <div className="slider-content">
                <span>Vintage Grey Şapka</span>
              </div>
              <div className="slider-content">
                <span>₺ 17000</span>
              </div>
              
            </div>
            <div className="slider-product">
              <img
                className="slider-img"
                src="https://cdn.myikas.com/images/c96b2df0-fbcd-4b1b-8184-2e95b6529078/e1765a36-2dab-4a54-bc5d-43a9969229fe/image_1080.webp"
                alt=""
              />
              <div className="slider-content">
              <button className="slider-button">Sepete Ekle</button>
              </div>
              <div className="slider-content">
                <span>Vintage Grey Şapka</span>
              </div>
              <div className="slider-content">
                <span>₺ 17000</span>
              </div>
              
            </div>
            <div className="slider-product">
              <img
                className="slider-img"
                src="https://cdn.myikas.com/images/c96b2df0-fbcd-4b1b-8184-2e95b6529078/e1765a36-2dab-4a54-bc5d-43a9969229fe/image_1080.webp"
                alt=""
              />
              <div className="slider-content">
              <button className="slider-button">Sepete Ekle</button>
              </div>
              <div className="slider-content">
                <span>Vintage Grey Şapka</span>
              </div>
              <div className="slider-content">
                <span>₺ 17000</span>
              </div>
              
            </div>
            <div className="slider-product">
              <img
                className="slider-img"
                src="https://cdn.myikas.com/images/c96b2df0-fbcd-4b1b-8184-2e95b6529078/e1765a36-2dab-4a54-bc5d-43a9969229fe/image_1080.webp"
                alt=""
              />
              <div className="slider-content">
              <button className="slider-button">Sepete Ekle</button>
              </div>
              <div className="slider-content">
                <span>Vintage Grey Şapka</span>
              </div>
              <div className="slider-content">
                <span>₺ 17000</span>
              </div>
              
            </div>
            <div className="slider-product">
              <img
                className="slider-img"
                src="https://cdn.myikas.com/images/c96b2df0-fbcd-4b1b-8184-2e95b6529078/e1765a36-2dab-4a54-bc5d-43a9969229fe/image_1080.webp"
                alt=""
              />
              <div className="slider-content">
              <button className="slider-button">Sepete Ekle</button>
              </div>
              <div className="slider-content">
                <span>Vintage Grey Şapka</span>
              </div>
              <div className="slider-content">
                <span>₺ 17000</span>
              </div>
              
            </div>
            <div className="slider-product">
              <img
                className="slider-img"
                src="https://cdn.myikas.com/images/c96b2df0-fbcd-4b1b-8184-2e95b6529078/e1765a36-2dab-4a54-bc5d-43a9969229fe/image_1080.webp"
                alt=""
              />
              <div className="slider-content">
              <button className="slider-button">Sepete Ekle</button>
              </div>
              <div className="slider-content">
                <span>Vintage Grey Şapka</span>
              </div>
              <div className="slider-content">
                <span>₺ 17000</span>
              </div>
              
            </div>
            <div className="slider-product">
              <img
                className="slider-img"
                src="https://cdn.myikas.com/images/c96b2df0-fbcd-4b1b-8184-2e95b6529078/e1765a36-2dab-4a54-bc5d-43a9969229fe/image_1080.webp"
                alt=""
              />
              <div className="slider-content">
              <button className="slider-button">Sepete Ekle</button>
              </div>
              <div className="slider-content">
                <span>Vintage Grey Şapka</span>
              </div>
              <div className="slider-content">
                <span>₺ 17000</span>
              </div>
              
            </div>
            <div className="slider-product">
              <img
                className="slider-img"
                src="https://cdn.myikas.com/images/c96b2df0-fbcd-4b1b-8184-2e95b6529078/e1765a36-2dab-4a54-bc5d-43a9969229fe/image_1080.webp"
                alt=""
              />
              <div className="slider-content">
              <button className="slider-button">Sepete Ekle</button>
              </div>
              <div className="slider-content">
                <span>Vintage Grey Şapka</span>
              </div>
              <div className="slider-content">
                <span>₺ 17000</span>
              </div>
              
            </div>
            <div className="slider-product">
              <img
                className="slider-img"
                src="https://cdn.myikas.com/images/c96b2df0-fbcd-4b1b-8184-2e95b6529078/e1765a36-2dab-4a54-bc5d-43a9969229fe/image_1080.webp"
                alt=""
              />
              <div className="slider-content">
              <button className="slider-button">Sepete Ekle</button>
              </div>
              <div className="slider-content">
                <span>Vintage Grey Şapka</span>
              </div>
              <div className="slider-content">
                <span>₺ 17000</span>
              </div>
              
            </div>
            <div className="slider-product">
              <img
                className="slider-img"
                src="https://cdn.myikas.com/images/c96b2df0-fbcd-4b1b-8184-2e95b6529078/e1765a36-2dab-4a54-bc5d-43a9969229fe/image_1080.webp"
                alt=""
              />
              <div className="slider-content">
              <button className="slider-button">Sepete Ekle</button>
              </div>
              <div className="slider-content">
                <span>Vintage Grey Şapka</span>
              </div>
              <div className="slider-content">
                <span>₺ 17000</span>
              </div>
              
            </div>

          </Slider>
        </div>
      </>
    );
  }
}
