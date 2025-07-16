import "../DefaultBlock.scss"
import "./sass/style.scss"
import {Link} from 'react-router-dom';
import {PartLeftBarCatalogData} from "../Catalog/Catalog";

export function LeftBarBottomList() {
  const help = [
    "Допомога",
    [
      "Доставка та оплата",
      "Кредит",
      "Гарантія",
      "Повернення товару",
      "Сервісні центри",
      "Відстежити замовлення"
    ]
  ];

  const info = [
    "Інформація про компанію",
    [
      "Про нас",
      "Умови використання сайту",
      "Вакансії",
      "Контакти"
    ]
  ];

  const services = [
    "Сервіси",
    [
      "Бонусний рахунок",
      "Premium",
      "Подарункові сертифікати",
      "Обмін",
      "Rozetka Travel"
    ]
  ];

  const partners = [
    "Партнерам",
    [
      "Франчайзинг",
      "Продавати на Розетці",
      "Співпраця з нами"
    ]
  ];

  return ([help, info, services, partners]);
}

export function LeftBarBottomItem(props) {
  return (
    <Link to="" className="text-decoration-none">{props.text}</Link>
  );
}

export function LeftBarSocialMediaIcons() {
  const path = "/resourses/left-bar-main/";
  const data = [
    "facebook",
    "twitter",
    "youtube",
    "instagram",
    "viber",
    "telegram"
  ]
  return data.map(item => [path + item + ".svg"]);
}

function LeftBarIcons(props) {
  return (
    <Link to="">
      <img src={props.img}></img>
    </Link>
  );
}


function PartLeftBarCatalog(props) {
  let page = props.to === undefined ? "*" : props.to;
  return (<Link to={page}>
      <div id="left-nav-bar-list-item-text d-flex">
        <img src={props.img}></img>
        <p className="fs-13px">{props.text}</p>
      </div>
    </Link>
  )
}

export function LeftBarDownloadAndSocial() {
  const socialNetworkIcons = LeftBarSocialMediaIcons();
  return <>
    <div className="default-block left-nav-bar-block d-flex flex-column pt-4 pb-4">
      <p className="left-nav-bar-list-item-text grey-text mb-3">Встановлюйте нашi додатки</p>
      <div className="d-flex gap-4 align-content-center">
        <Link to=""><img src="/resourses/left-bar-main/google-play.svg"/></Link>
        <Link to=""><img src="/resourses/left-bar-main/app-store.svg"/></Link>
      </div>
    </div>

    <div className="default-block left-nav-bar-block pt-3 pb-3">
      <p className="left-nav-bar-list-item-text grey-text pb-3">Ми в соціальних мережах</p>
      <div className="d-flex gap-21px">
        {socialNetworkIcons.map((el, index) => (
          <LeftBarIcons key={index} img={el}/>
        ))}
      </div>
    </div>
  </>
}

export function LeftbarMainPage() {
  const leftBar = PartLeftBarCatalogData();
  const leftBarBottomList = LeftBarBottomList();

  return (
    <section id="sidebar">
      <div className="wrap-left-bar-main d-flex flex-column left-nav-bar-wrap">

        <div className="default-block left-nav-bar-block">
          <div className="d-flex flex-column left-nav-bar-list left-nav-bar-top-list">
            {leftBar.map((el, index) => (
              <PartLeftBarCatalog key={index} img={el[0]} text={el[1]}/>
            ))}
          </div>
        </div>

        <div className="default-block left-nav-bar-block">
          <div className="d-flex flex-column left-nav-bar-list left-menu-ref-info-m">
            <Link to="*" className="text-decoration-none">
              <div className="left-bar-bottom-list-text flex-row align-items-center left-nav-bar-top-list">
                <img src="/resourses/left-bar-main/questionmark.svg"/>
                <p className="left-nav-bar-list-item-text">Довідковий центр</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="default-block left-nav-bar-block">
          <div className="text-center left-nav-bar-account-enter-wrap d-flex flex-column">
            <div>
              <p className="text-center fs-5">Ласкаво просимо!</p>
              <p className="text-center fs-13px line-spacing">
                Увійдіть, щоб отримувати рекомендації, персональні бонуси та знижки.
              </p>
            </div>
            <Link to="*">
              <button className="default-green-btn">Увійдіть до особистого кабінету</button>
            </Link>
          </div>
        </div>

        <LeftBarDownloadAndSocial/>

        <div className="default-block left-nav-bar-block">
          <div className="">
            {leftBarBottomList.map((el, index) => (
              <div key={index} className="pb-26px">
                <h6 className="left-bar-heading">{el[0]}</h6>
                <div className="left-bar-bottom-list-text">
                  {el[1].map((el1, subIndex) => (
                    <LeftBarBottomItem key={subIndex} text={el1}/>
                  ))}
                </div>
              </div>
            ))}
            <div className="pb-26px">
              <div className="left-bar-line ml--30px"></div>
            </div>
            <div className="d-flex justify-content-between px-3 pb-3">
              <Link to=""><img src="/resourses/left-bar-main/mastercard-logo.svg"/></Link>
              <Link to=""><img src="/resourses/left-bar-main/visa-logo.svg"/></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}