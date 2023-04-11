import React from "react";
import "./BannerApartment.scss";

export function BannerApartment(props) {
    return (
        <div className="banner__apartment">
            <img src={props.imageUrl} alt="" />
        </div>
    );
}

export default BannerApartment;