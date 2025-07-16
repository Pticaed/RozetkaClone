import {ProductCard} from "./ProductCard.jsx";

import "./MainContent.scss"
import {DefaultSwiper} from "./DefaultSwiper.jsx";
import data from "/src/assets/products.json"
import {Banner} from "./Banner.jsx";
import {Link} from "react-router-dom";

export function MainContent() {
  return (
    <>
      <section id="banner">
        <div className="container-fluid d-flex flex-column px-0" id="banner-container">
          <Banner img="/resourses/maincontent/bannerSamsungGalaxy.png" maxWidth={1423}/>
          <Link id="show-all-sales" className="white-button btn btn-light" to="*">
            <p>Всі акції</p>
            <p className="light-gray">1036</p>
          </Link>
        </div>
      </section>
      <section id="sales">
        <div className="container-fluid d-flex flex-column px-0" id="sales-container">
          <p className="section-caption">Акційні пропозиції</p>
          <div id="sales-grid-container" className="container-fluid px-0">
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
        <div className="container-fluid d-flex flex-column px-0" id="now-browsing-container">
          <p className="section-caption">Зараз шукають</p>
          <DefaultSwiper slides={data.products} slidesPerView={5}/>
        </div>
      </section>
      <section id="best-presents">
        <div className="container-fluid d-flex flex-column px-0" id="best-presents-container">
          <p className="section-caption">Кращі подарунки</p>
          <div className="container-fluid d-flex flex-row px-0 gap-2">
            <div className="present-banner" id="pink">
              <div className="description-container">
                <p className="title fs-18">
                  Добірка подарунків у розділі<br/>
                  Товари для краси, здоров'я і догляду<br/>
                  за тілом
                </p>
                <p className="caption">Для неї</p>
                <Link id="go-to" className="white-button btn btn-light" to="*">
                  Перейти
                </Link>
              </div>
              <div className="image-container">
                <img src="/resourses/maincontent/love-present-for-her.png" alt="present"/>
              </div>
            </div>
            <div className="present-banner" id="blue">
              <div className="description-container">
                <p className="title fs-18">
                  Добірка подарунків у розділі<br/>
                  Побутова техніка
                </p>
                <p className="caption">Для нього</p>
                <Link id="go-to" className="white-button btn btn-light" to="*">
                  Перейти
                </Link>
              </div>
              <div className="image-container">
                <img src="/resourses/maincontent/love-present-for-him.png" alt="present"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="recommendations">
        <div className="container-fluid d-flex flex-column px-0" id="recommendations-container">
          <p className="section-caption">Рекомендації на основі ваших переглядів</p>
          <DefaultSwiper slides={data.products} slidesPerView={5}/>
        </div>
      </section>
      <section id="most-awaited">
        <div className="container-fluid d-flex flex-column px-0" id="most-awaited-container">
          <p className="section-caption">Найбільш очікуванні товари</p>
          <div className="container-fluid px-0" id="most-awaited-grid-container">
            <ProductCard
              id="p1" type="large-adaptive-product-card" img="/resourses/maincontent/macbook.png"
              title="Ноутбук Apple MacBook Pro 16&quot; M1 Max 1TB 2021 (MK1A3UA/A) Space Gray"
              previousPrice="136 999" price="122 999" priceStyle="discount" pending={true}/>
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
          </div>
        </div>
      </section>

    </>
  );
}