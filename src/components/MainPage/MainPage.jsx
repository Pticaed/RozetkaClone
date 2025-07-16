import {LeftbarMainPage} from "../left-bar-mainpage/leftbar.jsx";
import {MainContent} from "../MainContent/MainContent.jsx";

import "./MainPage.scss"

export function MainPage() {
  return (
    <>
      <main>
        <div className="d-flex container-fluid" id="main-page">
          <LeftbarMainPage/>
          <div id="main-content-container">
            <MainContent/>
          </div>
        </div>
      </main>
      {/*<Footer/>*/}
    </>
  );
}