import { Link } from 'react-router';
import { MainNavBarCatalogCombo } from '../Combo/MainNavBarCatalogCombo';
import { Footer } from '../Footer/Footer';
import './style.scss'

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
        </div>
    </div>
    <Footer />
    </>
    );
}