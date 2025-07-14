import { MainNavBar } from "../mainNavBar/mainNavBar"
import { Catalog } from "../Catalog/Catalog"
import { useState } from "react"
import { RightSideNavigation } from "../RightSideNavigation/RightSideNavigation";
import { FormAuthorization, FormRegistration } from "../Forms/Forms";
import { Outlet } from "react-router";

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
            <RightSideNavigation setDisplay={setDisplay} display={display} setRegForm={setAuthForm} setAuthForm={setRegForm} />
            {isForms.auth && <FormAuthorization vision={isForms.auth} setVision={setAuthForm} setVisionOtherForm={setRegForm} />}
            {isForms.reg && <FormRegistration vision={isForms.reg} setVision={setRegForm} setVisionOtherForm={setAuthForm} />}
            
            <Outlet />
        </>
    )
}