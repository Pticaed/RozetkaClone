import { Link } from "react-router"
import "./RightSideNavigation.css"


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

export function RightSideNavigation()
{
    return (
        <nav id="rightSideNavigation">
            <div id="divRightSideNavigation">
                <div id="divRightSideNavigation__head">
                    <img src="/resourses/rightNav/cancelClose.svg" id="buttonCancel"></img>
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
                    <div className="default-block partRightNav" id=""></div>
                    <div className="default-block partRightNav"></div>
                    <div className="default-block partRightNav"></div>
                    <div className="default-block partRightNav"></div>
                    <div className="default-block partRightNav"></div>
                    <div className="default-block partRightNav"></div>
                    <div className="default-block partRightNav"></div>
                </div>
            </div>
        </nav>
    )
}