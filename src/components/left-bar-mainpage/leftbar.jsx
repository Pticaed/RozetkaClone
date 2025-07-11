import "../DefaultBlock.scss"
import "./sass/style.scss"
import { Link } from 'react-router-dom';

function LeftBarBottomList() {
    const help = [
        "Доставка та оплата",
        "Кредит",
        "Гарантія",
        "Повернення товару",
        "Сервісні центри",
        "Відстежити замовлення"
    ];
    const info = [
        "Про нас",
        "Умови використання сайту",
        "Вакансії",
        "Контакти"
    ];
    const services = [
        "Бонусний рахунок",
        "Premium",
        "Подарункові сертифікати",
        "Обмін",
        "Rozetka Travel"
    ];
    const partners = [
        "Франчайзинг",
        "Продавати на Розетці",
        "Співпраця з нами"
    ];
    return([help, info, services, partners]);
}

function LeftBarBottomItem(props) {
    return(
        <Link to="" className="text-decoration-none">{props.text}</Link>
    );
}

function LeftBarSocialMediaIcons() 
{
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

function LeftBarIcons(props)
{
    return(
    <Link to="">
        <img src={props.img}></img>
    </Link>
    );
}

function PartLeftBarCatalogData()
{
    const path = "/resourses/left-bar-main/";
    let leftBarData = [
        ["computer", "Ноутбуки та комп'ютери"],
        ["phone", "Смартфони, ТВ та електроніка"],
        ["gamepad", "Товари для геймерів"],
        ["washing-machine", "Побутова техніка"],
        ["sofa", "Товари для дому"],
        ["instrument", "Інструменти та автотовари"],
        ["shower", "Сантехніка та ремонт"],
        ["garden", "Дача, сад та город"],
        ["sport-ball", "Спорт та захоплення"],
        ["clothes", "Одяг, взуття та прикраси"],
        ["beauty-and-health", "Краса і здоров'я"],
        ["puzzle", "Дитячі товари"],
        ["paws", "Зоотовари"],
        ["books", "Канцтовари та книги"],
        ["alcohol", "Алкогольні напоі та продукти"],
        ["code", "Товари для бізнесу та послуги"],
        ["relax", "Тури та відпочинок"],
        ["sales", "Акції"],
        ["total-sale", "Тотальний розпродаж"]
    ];
    return leftBarData.map(([icon, label]) => [path + icon + ".svg", label]);
}

function PartLeftBarCatalog(props)
{
    return (<Link to="">
        <div id="left-nav-bar-list-item-text d-flex">
            <img src={props.img}></img>
            <p className="fs-13px">{props.text}</p>
        </div>
        </Link>
    )
}

export function LeftbarMainPage(props) {
    const leftBar = PartLeftBarCatalogData();
    const socialNetworkIcons = LeftBarSocialMediaIcons();
    const leftBarBottomList = LeftBarBottomList();
    return(
        <section id ="sidebar">
    <div className="wrap-left-bar-main d-flex flex-column left-nav-bar-wrap">
        <div className="default-block left-nav-bar-block">
            <div className="d-flex flex-column left-nav-bar-list left-nav-bar-top-list">
                    {leftBar.map((el,index) => (
                        <PartLeftBarCatalog key={index} img={el[0]} text={el[1]} />
                    ))}
            </div>
        </div>
        <div className="default-block left-nav-bar-block">
            <div className="d-flex flex-column left-nav-bar-list left-menu-ref-info-m ">
                <Link to="" className="text-decoration-none">
            <div className="left-bar-bottom-list-text flex-row align-items-center left-nav-bar-top-list"><img src="/resourses/left-bar-main/questionmark.svg" /><p className="left-nav-bar-list-item-text">Довідковий центр</p></div>
            </Link>
            </div>
        </div>
        <div className="default-block left-nav-bar-block ">
            <div className="text-center left-nav-bar-account-enter-wrap d-flex flex-column">
                <div>
                    <p className="text-center fs-5">Ласкаво просимо!</p>
                    <p className="text-center fs-13px line-spacing">Увійдіть, щоб отримувати рекомендації, персональні бонуси та знижки.</p>
                </div>
                <Link to=""><button className="default-green-btn">Увійдіть до особистого кабінету</button></Link>
            </div>
        </div>
        <div className="default-block left-nav-bar-block d-flex flex-column pt-4 pb-4 ">
            <p className="left-nav-bar-list-item-text grey-text ml-30px mb-3">Встановлюйте нашi додатки</p>
            <div className="d-flex gap-4 align-content-center ml-30px">
                <Link to=""><img src="/resourses/left-bar-main/google-play.svg"/></Link>
                <Link to=""><img src="/resourses/left-bar-main/app-store.svg"/></Link>
                </div>
        </div>
        <div className="default-block left-nav-bar-block pt-3 pb-3 ">
            <p className="left-nav-bar-list-item-text grey-text ml-30px">Ми в соціальних мережах</p>
        <div className="d-flex ml-30px gap-21px mt-3">
            {socialNetworkIcons.map((el, index) => (
                    <LeftBarIcons key={index} img={el} />
            ))}
            </div>
        </div>
        <div className="default-block left-nav-bar-block ">
        <div className="mt-3 ml-30px mb-40px">
            <div className="pb-26px">
            <h6 className="left-bar-heading">Допомога</h6>
                <div className="left-bar-bottom-list-text">
                    {leftBarBottomList.map((el, index) => (
                        <LeftBarBottomItem key={index} text={el[0]} />
                    ))}
                </div>
            </div>
            <div className="pb-26px">
            <h6 className="left-bar-heading">Інформація про компанію</h6>
                <div className="left-bar-bottom-list-text">
                    {leftBarBottomList.map((el, index) => (
                        <LeftBarBottomItem key={index} text={el[1]} />
                    ))}
                </div>
            </div> 
            <div className="pb-26px">
            <h6 className="left-bar-heading">Сервіси</h6>
                <div className="left-bar-bottom-list-text">
                    {leftBarBottomList.map((el, index) => (
                        <LeftBarBottomItem key={index} text={el[2]} />
                    ))}
                </div>
            </div>
            <div className="pb-26px">
            <h6 className="left-bar-heading">Партнерам</h6>
                <div className="left-bar-bottom-list-text">
                    {leftBarBottomList.map((el, index) => (
                        <LeftBarBottomItem key={index} text={el[3]} />
                    ))}
                </div>
            </div>
            <div className="pb-26px">
                <div className="left-bar-line ml--30px"></div>
            </div>
            <div className="d-flex w-209px justify-content-between">
                <Link to=""><img src="/resourses/left-bar-main/mastercard-logo.svg"/></Link>
                <Link to=""><img src="/resourses/left-bar-main/visa-logo.svg"/></Link>
            </div>
            </div>
        </div>
    </div>
    </section>);
}

