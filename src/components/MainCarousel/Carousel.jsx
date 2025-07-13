import { useState } from "react";
import { Carousel } from "react-bootstrap";

export function MainCarousel({data})  {
    const [index, setIndex] = useState(0);
    
    function handleSelect(selectedIndex) {
        setIndex(selectedIndex);
    }
    function switchLeft() {
        let nextIndex;

        if (index === 0) {
            nextIndex = 2;
        } 
        else {
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
        <section id="banner">
            <div className="container-fluid d-flex flex-column" id="banner-container">
                <div className="container-fluid d-flex">
                    <button className="styleless-button arrow-left" onClick={switchLeft}>
                        <img src="/resourses/maincontent/carouselArrowLeft.svg" alt="arrowLeft" />
                    </button>

                    <div className="carousel-container">
                        <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
                            {data.map((el, index) => (
                                <Carousel.Item key={index}>
                                    <img className="img-fluid" src={el} alt="banner" />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>

                    <button className="styleless-button arrow-right" onClick={switchRight}>
                        <img src="/resourses/maincontent/carouselArrowRight.svg" alt="arrowRight" />
                    </button>
                </div>
            </div>
        </section>
    )
}
