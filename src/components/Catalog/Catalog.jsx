// import { useState } from "react"
import { Link } from "react-router";
import "./Catalog.scss"
import { Modal } from "react-bootstrap"
import { HouseholdApps } from "../HouseholdAppliances/Household";
import { PlumbingAndRepairPage } from "../plumbingAndRepair/plumbingAndRepair";



export function CategoriesData()
{
    return [
        ["computer", "Ноутбуки та комп'ютери", null],
        ["phone", "Смартфони, ТВ та електроніка", null],
        ["gamepad", "Товари для геймерів", null],
        ["washing-machine", "Побутова техніка", <HouseholdApps />],
        ["sofa", "Товари для дому", null],
        ["instrument", "Інструменти та автотовари", null],
        ["shower", "Сантехніка та ремонт", <PlumbingAndRepairPage />],
        ["garden", "Дача, сад та город", null],
        ["sport-ball", "Спорт та захоплення", null],
        ["clothes", "Одяг, взуття та прикраси", null],
        ["beauty-and-health", "Краса і здоров'я", null],
        ["puzzle", "Дитячі товари", null],
        ["paws", "Зоотовари", null],
        ["books", "Канцтовари та книги", null],
        ["alcohol", "Алкогольні напоі та продукти", null],
        ["code", "Товари для бізнесу та послуги", null],
        ["relax", "Тури та відпочинок", null],
        ["sales", "Акції", null],
        ["total-sale", "Тотальний розпродаж", null]
    ];
}

export function PartLeftBarCatalogData()
{
    const path = "/resourses/left-bar-main/";
    let leftBarData = CategoriesData();
    return leftBarData.map(([icon, label]) => [path + icon + ".svg", label]);
}
function PartLeftBarCatalog(props)
{
    return (
        <div id="partLeftBarCatalog">
            <img src={props.img}></img>
            <Link to={props.to} onClick={props.event}>{props.text}</Link>
        </div>
    )
}
function PartRightSectionCatalogData()
{
    return [
            [
                "Ноутбуки",
                ["Asus", "Acer", "HP", "Lenovo", "Dell", "Apple"]
            ],
            [
                "Аксесуари для ноутбуків і ПК",
                [
                    "Флеш пам'ять USB",
                    "Сумки та рюкзаки для ноутбуків",
                    "Підставки та столики для ноутбуків",
                    "Веб-камери"
                ]
            ],
            [
                "Аксесуари до планшетів",
                [
                    "Чохли та клавіатури для планшетів",
                    "Захисні плівки",
                    "Скло"
                ]
            ],
            [
                "Комп'ютери",
                [
                    "Монітори",
                    "Миші",
                    "Клавіатури",
                    "Комплект: клавіатури + миші",
                    "Мережеві сховища (NAS)",
                    "Моноблоки"
                ]
            ],
            [
                "Комплектуючі",
                [
                    "Відеокарти",
                    "Жорсткі диски та дискові масиви",
                    "Процесори",
                    "SSD",
                    "Пам'ять",
                    "Материнські плати",
                    "Блоки живлення"
                ]
            ],
            [
                "Мережеве обладнання",
                [
                    "Патч-корди",
                    "Маршрутизатори",
                    "IP-камери",
                    "Комутатори",
                    "Бездротові точки доступу"
                ]
            ],
            [
                "Серверне обладнання",
                []
            ],
            [
                "Товари для геймерів",
                [
                    "PlayStation",
                    "Ігрові консолі та приставки",
                    "Джойстики та аксесуари",
                    "Ігри",
                    "Ігрові поверхні"
                ]
            ],
            [
                "Офісна техніка",
                [
                    "БФП/Принтери",
                    "Проектори",
                    "Витратні матеріали для принтерів",
                    "Телефонні апарати"
                ]
            ],
            [
                "Програмне забезпечення",
                [
                    "Операційні системи",
                    "Офісні програми",
                    "Антивіруси"
                ]
            ],
            [
                "Товари зі знижкою",
                []
            ]
        ]
}

function PartRightSectionCatalog(props)
{
    console.log(props.list)
    return (
        <div id="partSectionCatalog">
            <p id="partSectionCatalogTitle">{props.title}</p>
            {props.list.map((el,index) => (
                <Link to="/" key={index}>{el}</Link>
            ))}
        </div>
    )
}

function PartRightBar(props)
{
    return (
        <div id="partRightBar">
            {props.categories.map((el,index) => (
                <PartRightSectionCatalog key={index} title={el[0]} list={el[1]} />
            ))}
        </div>
    )
}
function LogoCompany(props)
{
    const path = "/resourses/catalogNavBar/" + props.img
    return (
        <Link target="_blank" to={props.to}>
            <img src={path}></img>
        </Link>
    )
}

export function Catalog(props)
{
    if(!props.dialog)
    {
        return null
    }
    const categories = PartRightSectionCatalogData();
    const leftBar = CategoriesData();
    return (
        <>
            <Modal className="catalog" show={props.dialog} onHide={() => props.setDialog(false)} backdrop={true}>
                <Modal.Body>
                    <div id="divCatalog" className="d-flex">
                        <div id="leftDiv" className="default-block">
                            {leftBar.map((el,index) => (
                                <PartLeftBarCatalog key={index} img={`/resourses/left-bar-main/${el[0]}.svg`} text={el[1]} to={`/categories/${el[0]}`} event={() => props.setDialog(false)} />
                            ))}
                        </div>
                        <div id="rightDiv" className="default-block">
                            <div id="" >
                                <PartRightBar categories={categories.slice(0,3)} />
                                <PartRightBar categories={categories.slice(3,5)} />
                                <PartRightBar categories={categories.slice(5,8)} />
                                <PartRightBar categories={categories.slice(8,categories.length)} />
                            </div>
                            <div id="brands">
                                <LogoCompany to="/" img="apple.svg" />
                                <LogoCompany to="/" img="asus.svg" />
                                <LogoCompany to="/" img="hp.svg" />
                                <LogoCompany to="/" img="acer.svg" />
                                <LogoCompany to="/" img="lenovo.svg" />
                                <LogoCompany to="/" img="samsung.svg" />
                                <LogoCompany to="/" img="dell.svg" />
                                <LogoCompany to="/" img="canon.svg" />
                                <LogoCompany to="/" img="tplink.svg" />
                                <LogoCompany to="/" img="logitech.svg" />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
