import {Button} from "react-bootstrap";
import {ProductCard} from "./ProductCard.jsx";

import "./MainContent.scss"
import {DefaultSwiper} from "./DefaultSwiper.jsx";
import data from "/src/assets/products.json"
import {Banner} from "./Banner.jsx";

export function MainContent() {
  return (
    <>
      <section id="banner">
        <div className="container-fluid d-flex flex-column" id="banner-container">
          <Banner img="/resourses/maincontent/bannerSamsungGalaxy.png"/>
          <Button id="show-all-sales" className="white-button" variant="light" href="#">
            <p>Всі акції</p>
            <p className="light-gray">1036</p>
          </Button>
        </div>
      </section>
      <section id="sales">
        <div className="container-fluid d-flex flex-column" id="sales-container">
          <p className="fs-18 fw-medium pb-3">Акційні пропозиції</p>
          <div id="grid-container" className="container-fluid d-grid">
            <ProductCard
              id="p1" type="large-adaptive-product-card" img="/resourses/maincontent/asusVivobook.png"
              title="Ноутбук ASUS VivoBook S14 S435EA-HM020 (90NB0SU1-M00330) Deep Green"
              previousPrice="33 999" price="30 999" priceStyle="discount"/>
            <ProductCard
              id="p2" type="normal-adaptive-product-card" img="/resourses/maincontent/fridge.png"
              title="Холодильник SAMSUNG RB29FSRNDSA/UA"
              previousPrice="14 799" price="12 999" priceStyle="discount"/>
            <ProductCard
              id="p3" type="normal-adaptive-product-card" img="/resourses/maincontent/smartwatch.png"
              title="Смарт-годинник Apple Watch Series 7 Nike GPS 45 mm Midnight Aluminium Case"
              previousPrice="22 745" price="22 195" priceStyle="discount"/>
            <ProductCard
              id="p4" type="normal-adaptive-product-card" img="/resourses/maincontent/xbox.png"
              title="Ігрова консоль Microsoft Xbox Series X 1TB (RRT-00010)"
              previousPrice="22 745" price="22 195" priceStyle="discount"/>
            <ProductCard
              id="p5" type="normal-adaptive-product-card" img="/resourses/maincontent/xiaomiScooter.png"
              title="Електросамокат Xiaomi Mi Electric Scooter 1S Black (FBC4019GL/DDHBC05NEB)"
              previousPrice="13 999" price="11 999" priceStyle="discount"/>
            <ProductCard
              id="p6" type="normal-adaptive-product-card" img="/resourses/maincontent/chivasRegal.png"
              title="Віскі Chivas Regal 1 л 12 років витримки 40% в подарунковій упаковці"
              previousPrice="1670" price="1049" priceStyle="discount"/>
            <ProductCard
              id="p7" type="normal-adaptive-product-card" img="/resourses/maincontent/appleIphone.png"
              title="Мобільний телефон Apple iPhone 12 mini 128 GB White Офіційна гарантія"
              previousPrice="23 999" price="21 999" priceStyle="discount"/>
            <button id="show-more" className="white-button btn btn-light grid-button default-block">
              Показати ще
            </button>
          </div>
        </div>
      </section>
      <section id="now-browsing">
        <div className="container-fluid d-flex flex-column" id="now-browsing-container">
          <p className="fs-18 fw-medium pb-3">Зараз шукають</p>
          <DefaultSwiper slides={data.products} slidesPerView={5}/>
        </div>
      </section>
    </>
  );
}