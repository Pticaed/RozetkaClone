import "./mainNavBar.scss";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Catalog } from "../Catalog/Catalog";

function ImgLink(props) {
    return (
        <Link id={props.id} to={props.to}>
            <img src={props.img}></img>
        </Link>
    );
}

function SearchBar() {
    return (
        <div id="searchBar">
            <img id="iconSearch" src="/resourses/nav/iconSearch.svg"></img>
            <input placeholder="Я шукаю..."></input>
            <img id="microphone" src="/resourses/nav/microphone.svg"></img>
            <button>Знайти</button>
        </div>
    );
}

function ButtonNav(props) {
    return <img id={props.id} className="buttonNav" onClick={props.event} src={props.img}></img>;
}

function PartMenu(props) {
    return (
        <Link className="partMobileNav" onClick={props.event} to={props.to}>
            <img src={props.src}></img>
            <p>{props.text}</p>
        </Link>
    );
}

export function MainNavBar(props) {
    const path = "/resourses/nav/";
    return (
        <>
            <div className="mobileNavigation">
                <PartMenu src={path + "heart.svg"} text="Головна" to="/" />
                <PartMenu src={path + "catalog.svg"} text="Каталог" event={() => props.setDialog(!props.dialog)} />
                <PartMenu src={path + "home.svg"} text="Списки" />
                <PartMenu src={path + "other.svg"} text="Ще" />
            </div>
            <header>
                <p id="headerPromote">ТОТАЛЬНИЙ РОЗПРОДАЖ ДО -50%</p>
                <nav id="mainNavBar">
                    <ImgLink id="burgerButton" img="/resourses/nav/BurgerButton.svg" />
                    <ImgLink id="logo" img="/resourses/nav/logo_bazar.svg" to="/" />
                    <button onClick={() => props.setDialog(!props.dialog)}>
                        <img src={path + "iconCatalog.svg"}></img>
                        <p>Каталог</p>
                    </button>
                    <SearchBar />
                    <div id="tryPremiumButton">
                        <p>Спробуйте</p>
                        <button>PREMIUM</button>
                    </div>
                    <div id="buttonsNav">
                        <ButtonNav id="accButton" event={() => props.setDisplay("block")} img={path + "accButton.svg"} />
                        <ButtonNav id="basket" event={props.openCart} img="/resourses/nav/basket.svg" /> {/* Изменено */}
                    </div>
                </nav>
            </header>
        </>
    );
}