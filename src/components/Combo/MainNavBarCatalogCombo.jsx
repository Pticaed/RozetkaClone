import { MainNavBar } from "../mainNavBar/mainNavBar"
import { Catalog } from "../Catalog/Catalog"
import { useState } from "react"
import { RightSideNavigation } from "../RightSideNavigation/RightSideNavigation";

export function MainNavBarCatalogCombo()
{
    const [dialog, setDialog] = useState(false);
    return (
        <>
            <MainNavBar dialog={dialog} setDialog={setDialog}  />
            <Catalog dialog={dialog} setDialog={setDialog} />
            <RightSideNavigation /> 
        </>
    )
}