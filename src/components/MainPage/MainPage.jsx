import {LeftbarMainPage} from "../left-bar-mainpage/leftbar.jsx";
import {MainContent} from "../MainContent/MainContent.jsx";
import {MainNavBarCatalogCombo} from "../Combo/MainNavBarCatalogCombo.jsx";

import "./MainPage.scss"
import {Footer} from "../Footer/Footer.jsx";

export function MainPage() {
  return (
    <>
      <main>
        <div className="d-flex" id="main-page">
          <LeftbarMainPage/>
          <div>
            <MainContent/>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}