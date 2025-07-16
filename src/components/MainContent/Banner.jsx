import {Carousel} from "react-bootstrap";
import {useEffect, useState} from "react";

import "./Banner.scss"
import "./NullifiedElements.scss"

export function Banner(props) {
  const fallbackMobileBannerImage = "/resourses/maincontent/mobileViewportBanner.png";

  const images = {
    desktop: props.img,
    mobile: props.mobileImg === undefined ? fallbackMobileBannerImage : props.mobileImg,
  };

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  let showArrows = {display: "inline"};

  let maxWidth = props.maxWidth !== undefined ? {maxWidth: props.maxWidth} : props.maxWidth;

  if (props.showArrows === false) {
    showArrows = {display: "none"};
  }

  function handleSelect(selectedIndex) {
    setIndex(selectedIndex);
  }

  function switchLeft() {
    let nextIndex;

    if (index === 0) {
      nextIndex = 2;
    } else {
      nextIndex = index - 1;
    }

    setIndex(nextIndex);
  }

  function switchRight() {
    let nextIndex;

    if (index === 2) {
      nextIndex = 0;
    } else {
      nextIndex = index + 1;
    }

    setIndex(nextIndex);
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    function handleChange(e) {
      setIsMobile(e.matches);
    }

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  })

  function renderCarouselImages() {
    const image = isMobile ? images.mobile : images.desktop;

    return [0, 1, 2].map(() => (
      <Carousel.Item>
        <img className="img-fluid" src={image} alt="banner" />
      </Carousel.Item>
    ));
  }

  return (
    <div className="container-fluid d-flex px-0">
      <button className="styleless-button arrow-left" style={showArrows} onClick={switchLeft}>
        <img src="/resourses/maincontent/carouselArrowLeft.svg" alt="arrowLeft"/>
      </button>
      <div className="carousel-container" style={maxWidth}>
        <Carousel activeIndex={index} onSelect={handleSelect} controls={false} touch={isMobile} indicators={!isMobile}>
          {/*<Carousel.Item>
            <img className="img-fluid" src={props.img} alt="banner"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-fluid" src={props.img} alt="banner"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-fluid" src={props.img} alt="banner"/>
          </Carousel.Item>*/}
          {renderCarouselImages()}
        </Carousel>
      </div>
      <button className="styleless-button arrow-right" onClick={switchRight}>
        <img src="/resourses/maincontent/carouselArrowRight.svg" alt="arrowRight"/>
      </button>
    </div>
  );
}