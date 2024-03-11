import React from "react";
import Slider from "react-slick";
import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
  bannerImgFour,
  bannerImgFive,
} from "../../images/index";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div className="w-full">
      <div className="w-full h-full realtive">
        <Slider {...settings}>
          <div>
            <img src={bannerImgOne} alt="" />
          </div>
          <div>
            <img src={bannerImgTwo} alt="" />
          </div>
          <div>
            <img src={bannerImgThree} alt="" />
          </div>
          <div>
            <img src={bannerImgFour} alt="" />
          </div>
          <div>
            <img src={bannerImgFive} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
