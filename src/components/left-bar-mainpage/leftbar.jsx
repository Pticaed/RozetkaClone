import "../DefaultBlock.scss"
import "./sass/style.scss"

export function LeftbarMainPage(props) {
    return(
        <section id ="sidebar">
    <div className="wrap-left-bar-main d-flex flex-column left-nav-bar-wrap">
        <div className="default-block left-nav-bar-block">
            <div className="d-flex flex-column left-nav-bar-list">
            <div className="left-nav-bar-list-item-text">asdasd</div>
            <div className="left-nav-bar-list-item-text">asdasd</div>
            </div>
        </div>
        <div className="default-block left-nav-bar-block">
            <div className="d-flex flex-column left-nav-bar-list left-menu-ref-info-m">
            <div className="left-nav-bar-list-item-text ">asdasd</div>
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
            <p className="left-nav-bar-list-item-text grey-text ml-30px">Встановлюйте нашi додатки</p>
            <div className="d-flex gap-4 align-content-center ml-30px"><p>картинка</p><p>картинка</p></div>
        </div>
        <div className="default-block left-nav-bar-block pt-3 pb-3 ">
            <p className="left-nav-bar-list-item-text grey-text ml-30px">Ми в соціальних мережах</p>
        <div className="d-flex ml-30px gap-4 mt-3"><p>к</p><p>к</p><p>к</p><p>к</p><p>к</p><p>к</p></div>
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
                <div>asdasd</div>
            </div>
            <div className="d-flex">
                <img src="/resourses/"/><img src="/resourses/"/>
            </div>
            </div>
        </div>
    </div>
    </section>);
}

function CreateList( {props} ) {

}

function ListElement(img, text) {
    return(img, text);
}

function ListElements()
{
    return[
        ListElement("/resourses/computer.svg", "Ноутбуки та комп'ютери"),
        ListElement("/resourses/phone.svg", "Смартфони, ТВ та електроніка"),
        ListElement("/resourses/gamepad.svg", "Товари для геймерів"),
        ListElement("/resourses/", "Побутова техніка"),
        ListElement("/resourses/", "Товари для дому"),
        ListElement("/resourses/", "Інструменти та автотовари"),
        ListElement("/resourses/", "Сантехніка та ремонт"),
        ListElement("/resourses/", "Дача, сад та город"),
        ListElement("/resourses/", "Спорт та захоплення"),
        ListElement("/resourses/", "Одяг, взуття та прикраси"),
        ListElement("/resourses/", "Краса і здоров'я"),
        ListElement("/resourses/", "Дитячі товари"),
        ListElement("/resourses/", "Зоотовари"),
        ListElement("/resourses/", "Канцтовари та книги"),
        ListElement("/resourses/", "Алкогольні напої та продукти"),
        ListElement("/resourses/", "Товари для бізнесу та послуги"),
        ListElement("/resourses/", "Тури та відпочинок"),
        ListElement("/resourses/", "Акції"),
        ListElement("/resourses/", "Тотальний розпродаж")

    ];
}