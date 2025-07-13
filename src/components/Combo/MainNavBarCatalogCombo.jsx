import { MainNavBar } from "../mainNavBar/mainNavBar"
import { Catalog } from "../Catalog/Catalog"
import { useState } from "react"
import { RightSideNavigation } from "../RightSideNavigation/RightSideNavigation";
import { LeftbarMainPage } from "../left-bar-mainpage/leftbar";

export function MainNavBarCatalogCombo()
{
    const [dialog, setDialog] = useState(false);
    const [display, setDisplay] = useState("none");
    return (
        <>
            <MainNavBar setDisplay={setDisplay} dialog={dialog} setDialog={setDialog}  />
            <Catalog dialog={dialog} setDialog={setDialog} />
            <RightSideNavigation setDisplay={setDisplay} display={display} /> 
            <LeftbarMainPage />
        </>
    )
}