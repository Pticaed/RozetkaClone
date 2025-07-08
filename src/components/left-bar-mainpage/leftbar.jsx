import "../DefaultBlock.css"
import "./sass/style.css"

export function LeftbarMainPage(props) {
    return(
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
                    <p className="text-center fs-13px">Увійдіть, щоб отримувати рекомендації, персональні бонуси та знижки.</p>
                </div>
                <button className="default-green-btn">Увійдіть до особистого кабінету</button>
            </div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
    </div>);
}

function CreateList( {props} ) {

}