import "../DefaultBlock.scss"
import "./sass/style.scss"

export function LeftbarMainPage(props) {
    const listItems = ListElements();
    return(
        <section id ="sidebar">
    <div className="wrap-left-bar-main d-flex flex-column left-nav-bar-wrap">
        <div className="default-block left-nav-bar-block">
            <div className="d-flex flex-column left-nav-bar-list">
            {/* {listItems.map(item => (
                <div className="left-nav-bar-list-item-text d-flex">
                    <img src={item.img}/>
                    <p className="fs-13px">{item.text}</p>
                </div>))}; */}
            </div>
        </div>
        <div className="default-block left-nav-bar-block">
            <div className="d-flex flex-column left-nav-bar-list left-menu-ref-info-m">
            <div className="left-bar-bottom-list-text flex-row align-items-center"><img src="/resourses/left-bar-main/questionmark.svg" /><p className="left-nav-bar-list-item-text">Довідковий центр</p></div>
            </div>
        </div>
        <div className="default-block left-nav-bar-block ">
            <div className="text-center left-nav-bar-account-enter-wrap d-flex flex-column">
                <div>
                    <p className="text-center fs-5">Ласкаво просимо!</p>
                    <p className="text-center fs-13px line-spacing">Увійдіть, щоб отримувати рекомендації, персональні бонуси та знижки.</p>
                </div>
                <button className="default-green-btn">Увійдіть до особистого кабінету</button>
            </div>
        </div>
        <div className="default-block left-nav-bar-block d-flex flex-column pt-4 pb-4 ">
            <p className="left-nav-bar-list-item-text grey-text ml-30px mb-3">Встановлюйте нашi додатки</p>
            <div className="d-flex gap-4 align-content-center ml-30px"><img src="/resourses/left-bar-main/google-play.svg"/><img src="/resourses/left-bar-main/app-store.svg"/></div>
        </div>
        <div className="default-block left-nav-bar-block pt-3 pb-3 ">
            <p className="left-nav-bar-list-item-text grey-text ml-30px">Ми в соціальних мережах</p>
        <div className="d-flex ml-30px gap-21px mt-3">
            <img src="/resourses/left-bar-main/facebook.svg"/>
            <img src="/resourses/left-bar-main/twitter.svg"/>
            <img src="/resourses/left-bar-main/youtube.svg"/>
            <img src="/resourses/left-bar-main/instagram.svg"/>
            <img src="/resourses/left-bar-main/viber.svg"/>
            <img src="/resourses/left-bar-main/telegram.svg"/></div>
        </div>
        <div className="default-block left-nav-bar-block ">
        <div className="mt-3 ml-30px mb-40px">
            <div className="pb-26px">
            <h6 className="left-bar-heading">Допомога</h6>
                <div className="left-bar-bottom-list-text">
                    <p>Доставка та оплата</p>
                    <p>Кредит</p>
                    <p>Гарантія</p>
                    <p>Повернення товару</p>
                    <p>Сервісні центри</p>
                    <p>Відстежити замовлення</p>
                </div>
            </div>
            <div className="pb-26px">
            <h6 className="left-bar-heading">Інформація про компанію</h6>
                <div className="left-bar-bottom-list-text">
                    <p>Про нас</p>
                    <p>Умови використання сайту</p>
                    <p>Вакансії</p>
                    <p>Контакти</p>
                </div>
            </div> 
            <div className="pb-26px">
            <h6 className="left-bar-heading">Сервіси</h6>
                <div className="left-bar-bottom-list-text">
                    <p>Бонусний рахунок</p>
                    <p>Premium</p>
                    <p>Подарункові сертифікати</p>
                    <p>Обмін</p>
                    <p>Rozetka Travel</p>
                </div>
            </div>
            <div className="pb-26px">
            <h6 className="left-bar-heading">Партнерам</h6>
                <div className="left-bar-bottom-list-text">
                    <p>Франчайзинг</p>
                    <p>Продавати на Розетці</p>
                    <p>Співпраця з нами</p>
                </div>
            </div>
            <div className="pb-26px">
                <div className="left-bar-line ml--30px"></div>
            </div>
            <div className="d-flex">
                <img src="/resourses/"/><img src="/resourses/"/>
            </div>
            </div>
        </div>
    </div>
    </section>);
}

function ListElement(img, text) {
    return(img, text);
}

function ListElements()
{
    return [
        ListElement("/resourses/left-bar-main/computer.svg", "Ноутбуки та комп'ютери"),
        ListElement("/resourses/left-bar-main/phone.svg", "Смартфони, ТВ та електроніка"),
        ListElement("/resourses/left-bar-main/gamepad.svg", "Товари для геймерів"),
        ListElement("/resourses/left-bar-main/washing-machine.svg", "Побутова техніка"),
        ListElement("/resourses/left-bar-main/sofa.svg", "Товари для дому"),
        ListElement("/resourses/left-bar-main/instrument.svg", "Інструменти та автотовари"),
        ListElement("/resourses/left-bar-main/shower.svg", "Сантехніка та ремонт"),
        ListElement("/resourses/left-bar-main/garden.svg", "Дача, сад та город"),
        ListElement("/resourses/left-bar-main/sport-ball.svg", "Спорт та захоплення"),
        ListElement("/resourses/left-bar-main/clothes.svg", "Одяг, взуття та прикраси"),
        ListElement("/resourses/left-bar-main/beauty-and-health.svg", "Краса і здоров'я"),
        ListElement("/resourses/left-bar-main/puzzle.svg", "Дитячі товари"),
        ListElement("/resourses/left-bar-main/paws.svg", "Зоотовари"),
        ListElement("/resourses/left-bar-main/books.svg", "Канцтовари та книги"),
        ListElement("/resourses/left-bar-main/alcohol.svg", "Алкогольні напої та продукти"),
        ListElement("/resourses/left-bar-main/code.svg", "Товари для бізнесу та послуги"),
        ListElement("/resourses/left-bar-main/relax.svg", "Тури та відпочинок"),
        ListElement("/resourses/left-bar-main/sales.svg", "Акції"),
        ListElement("/resourses/left-bar-main/total-save.svg", "Тотальний розпродаж")

    ];
}