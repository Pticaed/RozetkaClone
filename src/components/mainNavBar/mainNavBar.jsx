import "./mainNavBar.scss"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Catalog } from "../Catalog/Catalog";


function ImgLink(props)
{
    return (
        <Link id={props.id}>
            <img src={props.img}></img>
        </Link>
    )
}
function SearchBar()
{
    return (
        <div id="searchBar">
            <img id="iconSearch" src="/resourses/nav/iconSearch.svg"></img>
            <input placeholder="Я шукаю"></input>
            <img id="microphone" src="/resourses/nav/microphone.svg"></img>
            <button>Знайти</button>
        </div>
    )
}
function ButtonNav(props)
{
    return <img id={props.id} className="buttonNav" onClick={props.event} src={props.img}></img>
}


export function MainNavBar(props)
{
    return (
        <header>
            <p id="headerPromote">ТОТАЛЬНИЙ РОЗПРОДАЖ ДО -50%</p>
            <nav id="mainNavBar">
                <ImgLink id="burgerButton" img="/resourses/nav/BurgerButton.svg"/>
                <ImgLink id="logo" img="/resourses/nav/logo_bazar.svg" />
                <button onClick={() => props.setDialog(!props.dialog)}><img src="/resourses/nav/iconCatalog.svg"></img><p>Каталог</p></button>
                <SearchBar /> 
                <div id="tryPremiumButton">
                    <p>Спробуйте</p>
                    <button>PREMIUM</button>
                </div>
                <div id="buttonsNav">
                    <ButtonNav id="accButton" event={null} img="/resourses/nav/accButton.svg"/>
                    <ButtonNav id="basket"event={null} img="/resourses/nav/basket.svg"/>
                </div>
            </nav>
        </header>
    )
}