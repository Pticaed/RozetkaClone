import "./MainContent.scss"
import {Button, Carousel} from "react-bootstrap";
import {useState} from "react";

export function MainContent() {
  const [index, setIndex] = useState(0);

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
    <>
      <section id="banner" className="d-flex align-items-center">
        <div className="container-fluid d-flex flex-column" id="banner-container">
          <div className="container-fluid d-flex">
            <button className="styleless-button arrow-left" onClick={switchLeft}>
              <img src="/resourses/maincontent/carouselArrowLeft.svg" alt="arrowLeft"/>
            </button>
            <div className="carousel-container">
              <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
                <Carousel.Item>
                  <img src="/resourses/maincontent/bannerSamsungGalaxy.png" alt="banner"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src="/resourses/maincontent/bannerSamsungGalaxy.png" alt="banner"/>
                </Carousel.Item>
                <Carousel.Item>
                  <img src="/resourses/maincontent/bannerSamsungGalaxy.png" alt="banner"/>
                </Carousel.Item>
              </Carousel>
            </div>
            <button className="styleless-button arrow-right" onClick={switchRight}>
              <img src="/resourses/maincontent/carouselArrowRight.svg" alt="arrowRight"/>
            </button>
          </div>
          <Button id="show-all-sales" className="white-button" variant="light" href="#">
            <p>Всі акції</p>
            <p className="light-gray">1036</p>
          </Button>
        </div>
      </section>
      <section id="sales">
        <div className="container-fluid d-grid">

        </div>
      </section>
    </>
  );
}