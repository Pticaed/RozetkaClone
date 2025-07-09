import { MainNavBar } from "../mainNavBar/mainNavBar"
import { Catalog } from "../Catalog/Catalog"
import { useState } from "react"

export function MainNavBarCatalogCombo()
{
    const [dialog, setDialog] = useState(true);
    return (
        <>
            <MainNavBar setDialog={setDialog}  />
            <Catalog dialog={dialog} setDialog={setDialog} />
        </>
    )
}