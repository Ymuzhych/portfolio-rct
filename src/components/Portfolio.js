import React from "react";
import autism from "../images/autism.png";
import cineview from "../images/cineview.png";
import horiseon from "../images/horiseon.png";
import marvel from "../images/marvel.png";
//React Popupbox
import { PopupboxManager, PopupboxContainer } from "react-popupbox";

const Portfolio = () => {
    //Autism
    const openPopupboxAutism = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={autism} alt="Autism_Speak project..."/>
        <p>lorem</p>
        <b>GitHub:</b> <a className="hyper-link"onClick={() => window.open("https://github.com/Ymuzhych/Autism_Speak")}>https://github.com/Ymuzhych/Autism_Speak</a>
        </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigAutism = {

    }
    return (
    <div className="portfolio-wrapper">
        <div className="container">
            <h1 className="text-uppercase text-center py-5">portfolio</h1>
            <div className="image-box-wrapper row justify-content-center">
                <div className="portfolio-image-box" onClick={openPopupboxAutism}>
                <img className="portfolio-image" src={autism} alt="Autism_Speak project..." />
                <div className="overflow"></div>
                </div>
            <div className="portfolio-image-box">
                <img className="portfolio-image" src={cineview} alt="Movie App..." />
                <div className="overflow"></div>
            </div>
            <div className="portfolio-image-box">
                <img className="portfolio-image" src={horiseon} alt="website for various online tools for e-commerce..." />
                <div className="overflow"></div>
            </div>
            <div className="portfolio-image-box">
                <img className="portfolio-image" src={marvel} alt="Marvel Fan..." />
                <div className="overflow"></div>
            </div>
          </div>
        </div>
        <PopupboxContainer {...popupboxConfigAutism}/>
    </div>
    )
}
export default Portfolio;