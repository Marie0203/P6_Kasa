import React from "react";
import "./Banner.scss";
import home from "../../assets/HomeBanner.png"

// Affichage de la bannière en page d'accueil //
function Banner() {
    return (
        <div className="banner">
            <img src={home} alt="bannerImg" className="bannerImg"></img>
            <div className="bannerWrapper"></div>
            <h1 className="bannerText">Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner;