import { useState } from "react";
import "./plumbingAndRepair.scss"
import { MainCarousel } from "../MainCarousel/Carousel";
import "../MainContent/MainContent.scss";
import { Banner } from "../MainContent/Banner";
import data from "/src/assets/sanitaryWaveArray.json"
import { Link } from "react-router";
import { Footer } from "../Footer/Footer";
import dataPopular from "/src/assets/household-products.json";
import { DefaultSwiper } from "../MainContent/DefaultSwiper";

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
function SectionProducts({data, title})
{
    return (
        <section id="sanitaryWaveSection">
            <div className="productsBlockWrapper">
                <p className="titleSection">{title}</p>
                <div className="productsContainer">
                    {data.array.map(el => (
                        <ProductCard img={`${data.path}${el.img}.svg`} title={el.title} />
                    ))} 
                </div>
            </div>
        </section>
    )
}
export function PlumbingAndRepairPage()
{
    const sanitaryWaveData = arrayData(data.plumbing, "/resourses/plumbingAndRepair/plumbing/");
    const lightningData = arrayData(data.lightning, "/resourses/plumbingAndRepair/lightning/");
    const buildingMaterialsData = arrayData(data.building_materials, "/resourses/plumbingAndRepair/building/");
    return (
        <>
            <div className="wrapper">
                <section id="carousel">
                    <p className="mainTitlePage">Сантехніка та ремонт</p>
                    <Banner img={"/resourses/plumbingAndRepair/plumbingAndRepairImgCarousel.svg"} />
                </section>
                <SectionProducts data={sanitaryWaveData} title="Сантехніка" />
                <SectionProducts data={lightningData} title="Освітлення" />
                <SectionProducts data={buildingMaterialsData} title="Будівельні матеріали" />
                <div className='household-popular container-fluid'>
                    <h2>Популярні товари</h2>
                    <DefaultSwiper slides={dataPopular.products} slidesPerView={6}/>
                </div>
            </div>
            <Footer />
        </>
    )   
}