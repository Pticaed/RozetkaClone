import "./style.scss"
import { Link } from "react-router-dom";
import { LeftBarSocialMediaIcons, LeftBarBottomList, LeftBarBottomItem } from "../left-bar-mainpage/leftbar";

function SubscribeBar() {
    
    return(
        <div className="footer-sub-part">
        <p className="footer-sub-text">Будьте в курсі вигідних пропозицій!</p>
        <input type="email" className="footer-sub-input" placeholder="Ел.пошта" />
        <button className="default-green-btn footer-btn">Підписатися</button>
        </div>
    );
}

function MainFooter() {
    const socialMediaIcons = LeftBarSocialMediaIcons()
    const footerList = LeftBarBottomList()
    return(
    <div className="wrap-main-footer">
        <div className="wrap-middle-footer">
            <div >
                <Link to="">
                <div className="schedule">
                    <img src="/resourses/footer/clock.svg" />
                    <p>Графік роботи Call-центру</p>
                </div>
                </Link>
                <div className="social-media">
                {socialMediaIcons.map((icon, index) => 
                    <Link to="" >
                    <img key={index} src={icon}/>
                    </Link>
                )}
                </div>
            </div>
                <div className="lists-wrap">
                    {footerList.map((el, index) => (
                        <div key={index} className="list-wrap">
                            <h6>{el[0]}</h6>
                            <div className="list-elements">
                                {el[1].map((el1, subIndex) => (
                                    <LeftBarBottomItem key={subIndex} text={el1} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    </div>
    );
}

function BottomFooter() {
    return(
        <>
        <div className="footer-underline"></div>
        <div className="bottom-footer-wrap">
            <div>
                <div className="footer-image-container">
                    <Link to="" className="footer-image-1"><img src="/resourses/left-bar-main/mastercard-logo.svg" /></Link>
                    <Link to=""><img src="/resourses/left-bar-main/visa-logo.svg" /></Link>
                </div>
                <p className="footer-license-info">© Інтернет-магазин «Розетка™»2001–2022  ТМ використовується на підставі ліцензії правовласника RozetkaLTD</p>
            </div>
        </div>
        </>
    );
}

export function Footer(props) {
    return(
        <footer>
                <div className="footer">
                    <SubscribeBar />
                    <div>
                    <MainFooter />
                    <BottomFooter />
                    </div>
                </div>
        </footer>
    );
}