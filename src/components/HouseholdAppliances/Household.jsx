import { Link } from 'react-router';
import { MainNavBarCatalogCombo } from '../Combo/MainNavBarCatalogCombo';
import { Footer } from '../Footer/Footer';
import "../DefaultBlock.scss"
import './style.scss'
import { DefaultSwiper } from '../MainContent/DefaultSwiper';

function GetLogos() {
    const path = "/resourses/householdApps/companyLogos/";
    const data = [
        "lg",
        "phillips",
        "bosch",
        "samsung",
        "indesit",
        "tefal",
        "rowenta",
        "braun",
        "whirlpool",
        "beko"
    ];
    return(data.map(item => [path + item + ".svg"]));
}

export function CreateLogoArr( {props} ) {
    return(
    props.map((item, index) => 
    <Link to="" key={index}>
        <img src={item} />   
    </Link>
    )
    );
}

export function ShowLogos( {props} ) {
    return(
        <>
        <CreateLogoArr props={props} />
        </>
    );
}

function GetCategoryInfo() {
    function getPath(item) {
        return(
            [path + item + ".svg"]
        );
    }
    const path = "/resourses/householdApps/categories/";
    const categories = [
        {name: "Велика побутова техніка", addCategories: ["Холодильники","Пральні машини","Посудомийні машини","Кухонні плити","Морозильні камери","Сушильні машини"], src: getPath("bigTech")},
        {name: "Вбудована техніка", addCategories: ["Подрібнювачі харчових відходів","Аксесуари до впт","Вбудовувані духові шафи","Вбудовані варильні поверхні","Кухонні витяжки"], src: getPath("microwave")},
        {name: "Техніка для кухні", addCategories: ["Грилі","Аксесуари до кухонної техніки","Інша дрібна техніка","Кавомашини","Мультиварки","Печі НВЧ", "Блендери"], src: getPath("kitchenTech")},
        {name: "Краса та здоров’я", addCategories: ["Машинки для стриження","Тримери","Зубні щітки й іригатори","Прилади для укладання воллосся","Фени","Електробритви","Фотоепілятори","Ваги підлогові","Аксесуари для товарів догляду за тілом"], src: getPath("beatyAndHealth")},
        {name: "Кліматична техніка", addCategories: ["Обігрівачі","Зволожування повітря","Водонагрівачі (Бойлери)","Очисники повітря","Котли опалення","Кондиціонери"], src: getPath("climate")},
        {name: "Фільтри для води", addCategories: ["Система зворотнього осмосу","Фільтри - глечики","Фільтри механічного очищення","Антинакипні фільтри для побутової техніки","Змінні елементи та комплектуючі"], src: getPath("waterFilters")},
        {name: "Контрольно-вимірювальні прилади", addCategories: ["Автомати захисту від перепадів напруги","Лічильники води","Лічильники газу","Лічильники тепла","Лічильники електроенергії"], src: getPath("measuringInstruments")},
        {name: "Послуги для побутової техніки", addCategories: ["Встановлення водонагрівача (бойлера)","Монтаж кондиціонера","Встановлення великої побутової техніки","Сертифікати на продовження гарантії"], src: getPath("techService")},
        {name: "Догляд за домом і одягом", addCategories: ["Пилососи","Роботи - пилососи","Праски","Швейна техніка та аксесуари","Пароочисники","Аксесуари до товарів догляду за домом і одягом"], src: getPath("homeService")},
        {name: "Спеціалізована хімія", addCategories: ["Спеціалізована хімія"], src: getPath("chemicals")}
    ]
    return(categories);
}

function CreateCategoryCards() {
    const categories = GetCategoryInfo();
    return(
        <>
            {categories.map((el, index) =>
                <div key={index} className='default-block household-categories-card'>
                    <img src={el.src}/>
                    <h2>{el.name}</h2>
                    <div className='household-categories-list'>
                    {el.addCategories.map((item, index) =>
                    <Link to="" key={index} className='categories-card-text'>{item}</Link>
                    )}
                    </div>
                </div>)}
        </>
    );
}

export function HouseholdApps()
{
    const companyLogos = GetLogos();
    return(<>
    <MainNavBarCatalogCombo />
    <div className='household-wrap'>
        <h1>Побутова техніка</h1>
        <div className='household-main-content'>
            <div className='wrap-company-logos'>
            <ShowLogos props={companyLogos} />
            </div>
            <div className='household-categories-container'>
                <CreateCategoryCards />
            </div>
            <div className='household-popular'>
                <h2>Популярні товари</h2>
                <DefaultSwiper />
            </div>
        </div>
    </div>
    <Footer />
    </>
    );
}