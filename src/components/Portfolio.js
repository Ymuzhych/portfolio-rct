import React from "react";
import autism from "../images/autism.png";
import cineview from "../images/cineview.png";
import horiseon from "../images/horiseon.png";
import marvel from "../images/marvel.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//React Popupbox
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
const Portfolio = () => {
    //Autism
    const openPopupboxAutism = () => {
        const content = (
        <>
        <h2>Autism_Speak</h2>
        <img className="portfolio-image-popupbox" src={autism} alt="Autism_Speak project..."/>
        <p>A forum for parents or any family of ASD children to discuss anything related to ASD. Whether seeking advice, looking for suggestions, needing to vent, or simply just wanting someone in the same situation to talk too. Autism speaks is the community to join.</p>
        <b>GitHub:</b> <a className="hyper-link"onClick={() => window.open("https://github.com/Ymuzhych/Autism_Speak")}>https://github.com/Ymuzhych/Autism_Speak</a>
        </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigAutism = {
       titleBar: {
           enable: true,
           text:"Autism_Speak"
       },
      
    }
       const openPopupboxCineview = () => {
        const content = (
        <>
        <h2>Cineview</h2>
        <img className="portfolio-image-popupbox" src={cineview} alt="Movie App..."/>
        <p>Use Express.js for routing, a MongoDB database, React, and Nodejs. Movie App using MERN</p>
        <b>GitHub:</b> <a className="hyper-link"onClick={() => window.open("https://github.com/salemiana/cineview")}>https://github.com/salemiana/cineview</a>
        </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigCineview = {
       titleBar: {
           enable:true,
           text:"Cineview"
       },
    }
    const openPopupboxHoriseon = () => {
        const content = (
        <>
        <h2>Horiseon</h2>
        <img className="portfolio-image-popupbox" src={horiseon} alt="website for various online tools for e-commerce..."/>
        <p>Horiseon is a website for various online tools for e-commerce. It has many features such as: Search Engine Optimization: It increase visibility of businesses to find the right customers. Online Reputation Management: Help businesses to control the online reputation. Social Media Marketing: It helps to analyse to find the right platforms for marketing.</p>
        <b>GitHub:</b> <a className="hyper-link"onClick={() => window.open("https://ymuzhych.github.io/HTML_CSS_Git_Refactor/")}>https://ymuzhych.github.io/HTML_CSS_Git_Refactor</a>
        </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigHoriseon = {
       titleBar: {
           enable:true,
           text:"Horiseon"
       },
    }
    const openPopupboxMarvel = () => {
        const content = (
        <>
        <h2>Marvel</h2>
        <img className="portfolio-image-popupbox" src={marvel} alt="super hero project..."/>
        <p>An application that allows users such as Marvel Fans to get information about their favorite super hero, so that the user can understand and admire their favorite super hero.</p>
        <b>GitHub:</b> <a className="hyper-link"onClick={() => window.open("https://github.com/Tydomx/Marvel_project_/")}>https://github.com/Tydomx/Marvel_project_/</a>
        </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigMarvel = {
       titleBar: {
           enable:true,
       },
    
    }
    return (
    <div className="portfolio-wrapper">
        <div className="container">
            <h1 className=" title text-uppercase text-center py-5">portfolio</h1>
            <div className="image-box-wrapper row justify-content-center">
                <div className="portfolio-image-box" onClick={openPopupboxAutism}>
                <img className="portfolio-image" src={autism} alt="Autism_Speak project..." />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
            <div className="portfolio-image-box" onClick={openPopupboxCineview}>
                <img className="portfolio-image" src={cineview} alt="Movie App..." />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            <div className="portfolio-image-box" onClick={openPopupboxHoriseon}>
                <img className="portfolio-image" src={horiseon} alt="website for various online tools for e-commerce..." />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            <div className="portfolio-image-box" onClick={openPopupboxMarvel}>
                <img className="portfolio-image" src={marvel} alt="Marvel Fan..." />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
          </div>
        </div>
        <PopupboxContainer {...popupboxConfigAutism}/>
        <PopupboxContainer {...popupboxConfigCineview}/>
        <PopupboxContainer {... popupboxConfigHoriseon}/>
        <PopupboxContainer {... popupboxConfigMarvel}/>
    </div>
    )
}
export default Portfolio;