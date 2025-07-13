import { MainNavBar } from "../mainNavBar/mainNavBar"
import { Catalog } from "../Catalog/Catalog"
import { useEffect, useState } from "react"
import { RightSideNavigation } from "../RightSideNavigation/RightSideNavigation";
import { LeftbarMainPage } from "../left-bar-mainpage/leftbar";
import { FormAuthorization, FormRegistration } from "../Forms/Forms";

export function MainNavBarCatalogCombo()
{
    const [dialog, setDialog] = useState(false);
    const [display, setDisplay] = useState("none");
    const [isForms, setIsForms] = useState({reg: false, auth: false,})
    function changeDisplay()
    {
        switch(display)
        {
            case "flex":
                setDisplay("none");
                break;
            default:
                setDisplay("flex");
                break;
        }
    }

    const setRegForm = (value) => setIsForms(prev => ({...prev, reg: value}));
    const setAuthForm = (value) => setIsForms(prev => ({...prev, auth: value}));
    return (
        <>
            <MainNavBar setDisplay={changeDisplay} dialog={dialog} setDialog={setDialog}  />
            <Catalog dialog={dialog} setDialog={setDialog} />
            <RightSideNavigation setDisplay={setDisplay} display={display} />
            
            <LeftbarMainPage />
        </>
    )
}