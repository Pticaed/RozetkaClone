// import { useState } from "react"
import "./Catalog.css"
import { Modal } from "react-bootstrap"

function PartSectionCatalog(props)
{
    return (
        <div class="partSectionCatalog">
            <p id="partSectionCatalogTitle"></p>
            {props.listSubsection.map(el => {
                <Link to="">{el}</Link>
            })}
        </div>
    )
}

export function Catalog(props)
{
    if(!props.dialog)
    {
        return null
    }
    return (
            <div id="backdropCatalog" onClick={() => props.setDialog(false)}>
                <Modal show={props.dialog} onHide={() => props.setDialog(false)} backdrop={false}>
                    <Modal.Body>
                        <div id="divCatalog" className="d-flex">
                            <div id="leftDiv" className="default-block">
                                f
                            </div>
                            <div id="rightDiv" className="default-block">
                                f 
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
    )
}
