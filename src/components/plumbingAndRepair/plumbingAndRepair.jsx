import { useState } from "react";
import "./plumbingAndRepair.scss"
import { MainCarousel } from "../MainCarousel/Carousel";
import "../MainContent/MainContent.scss";
import { Banner } from "../MainContent/Banner";
import data from "/src/assets/sanitaryWaveArray.json"
import { Link } from "react-router";

function arrayData (array, path)
{
    return {array, path};
}
function ProductCard(props)
{
    return (
        <Link to="" className="productCard">
            <div>
                <img src={props.img}></img>
                <p>{props.title}</p>
            </div>
        </Link>
    )
}
export function PlumbingAndRepairPage()
{
    const sanitaryWaveData = arrayData(data.plumbing, "/resourses/plumbingAndRepair/plumbing/");
    const lightningData = arrayData(data.lightning, "/resourses/plumbingAndRepair/plumbing/");
    const buildingMaterialsData = arrayData(data.building_materials, "/resourses/plumbingAndRepair/plumbing/");
    return (
        <div className="wrapper">
            <section id="carousel">
                <p className="mainTitlePage">Сантехніка та ремонт</p>
                <Banner img={"/resourses/plumbingAndRepair/plumbingAndRepairImgCarousel.svg"} />
            </section>
            <section id="sanitaryWaveSection">
                <div className="productsBlockWrapper ">
                    <p className="titleSection">Сантехника</p>
                    <div className="productsContainer">
                        {sanitaryWaveData.array.map(el => (
                            <ProductCard img={`${sanitaryWaveData.path}${el.img}.svg`} title={el.title} />
                        ))}
                    </div>
                </div>
            </section>
            <section id="sanitaryWaveSection">
                <div className="productsBlockWrapper ">
                    <p className="titleSection">Освітлення</p>
                    <div className="productsContainer">
                        {sanitaryWaveData.array.map(el => (
                            <ProductCard img={`${sanitaryWaveData.path}${el.img}.svg`} title={el.title} />
                        ))}
                    </div>
                </div>
            </section>
            <section id="sanitaryWaveSection">
                <div className="productsBlockWrapper ">
                    <p className="titleSection">Сантехника</p>
                    <div className="productsContainer">
                        {sanitaryWaveData.array.map(el => (
                            <ProductCard img={`${sanitaryWaveData.path}${el.img}.svg`} title={el.title} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}