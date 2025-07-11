import { Link } from "react-router"
import "./RightSideNavigation.css"
import "../left-bar-mainpage/sass/style.scss"
import { LeftBarBottomList, LeftBarBottomItem, LeftBarDownloadAndSocial, LeftBarSocialMediaIcons } from "../left-bar-mainpage/leftbar"
import { useState } from "react"
function FirstPartBody(props)
{
    const path = "/resourses/rightNav/" + props.img
    return (
        <div id={`firstPartBody`} >
            <img className={props.class} src={path}></img>
            <p>{props.text}</p>
        </div>
    )
}

export function ComboBoxNavBar({el})
{
    const [visible, setVisible] = useState({display: "none", marginBottom: "0px"});

    function switchVisible()
    {
        switch(visible.display)
        {
            case "none": 
                setVisible({display: "block"}) 
                break;
            default:
                setVisible({display: "none", marginBottom: "0px"})
                break;
        }
    }

    return (
        <div className="default-block partRightNav divNavButtons">
            <h6 className="" style={{marginBottom: visible.marginBottom}}>{el[0]}</h6>
            <img src="/resourses/rightNav/arrowBottom.svg" onClick={switchVisible}></img>
            <div className="" style={{display: visible.display}}>
                {el[1].map((el1, subIndex) => (
                    <Link to="" key={subIndex} className="text-decoration-none">{el1}</Link>
                ))}
            </div>
        </div>
    )
}

export function RightSideNavigation(props)
{
    let leftBarBottomList = LeftBarBottomList();
    const firstTwoSections = leftBarBottomList.slice(0,2).reverse();
    const dataComboBoxes = leftBarBottomList.slice(2,4);
    return (
        <nav id="rightSideNavigation" style={{display: props.display}}>
            <div id="divRightSideNavigation">
                <div id="divRightSideNavigation__head">
                    <img src="/resourses/rightNav/cancelClose.svg" id="buttonCancel" onClick={() => props.setDisplay("none")}></img>
                    <div id="AuthRegistrButtons">
                        <img src="/resourses/nav/accButton.svg"></img>
                        <div>
                            <span>
                                <Link>Вхід</Link> | <Link>Рєстрація</Link>
                            </span>
                            <p>Авторизуйтесь для отримання розширених можливостей</p>
                        </div>
                    </div>
                </div>
                <div id="divRightSideNavigation__premiumAd">
                    <div id="divRightSideNavigation__divPremiumAd">
                        <p id="textPremiumAd">PREMIUM</p>
                        <p id="descPremiumAd">Безкоштовна доставка весь рік</p>
                    </div>
                    <Link to="" id="arrowRightPremiumAd">
                        <img src="/resourses/rightNav/arrowRight.svg"></img>
                    </Link>
                </div>
                <div id="divRightSideNavigation__body">
                    <div className="default-block partRightNav">
                        <FirstPartBody class="catalogProduct" img="catalog.svg" text="Каталог товарів" />
                        <FirstPartBody img="basket.svg" text="Кошик"/>
                        <FirstPartBody img="question.svg" text="Довідковий центр" />
                        <FirstPartBody img="tel.svg" text="+38 044 222 11 00" />
                    </div>
                    {firstTwoSections.map((el, index) => (
                        <div key={index} className="default-block partRightNav divNavButtons">
                            <h6 className="">{el[0]}</h6>
                            <div className="">
                                {el[1].map((el1, subIndex) => (
                                    <LeftBarBottomItem key={subIndex} text={el1} />
                                ))}
                            </div>
                        </div>
                    ))}
                    {dataComboBoxes.map((el,index) => (
                        <ComboBoxNavBar el={el} key={index} />
                    ))}
                    <LeftBarDownloadAndSocial />
                </div>
            </div>
        </nav>
    )
}