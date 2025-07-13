import {Carousel} from "react-bootstrap";
import {useState} from "react";

import "./Banner.scss"

export function Banner(props) {
  const [index, setIndex] = useState(0);
  let showArrows = {display: "inline"};

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

  return (
    <div className="container-fluid d-flex">
      <button className="styleless-button arrow-left" style={showArrows} onClick={switchLeft}>
        <img src="/resourses/maincontent/carouselArrowLeft.svg" alt="arrowLeft"/>
      </button>
      <div className="carousel-container">
        <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
          <Carousel.Item>
            <img className="img-fluid" src={props.img} alt="banner"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-fluid" src={props.img} alt="banner"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-fluid" src={props.img} alt="banner"/>
          </Carousel.Item>
        </Carousel>
      </div>
      <button className="styleless-button arrow-right" onClick={switchRight}>
        <img src="/resourses/maincontent/carouselArrowRight.svg" alt="arrowRight"/>
      </button>
    </div>
  );
}