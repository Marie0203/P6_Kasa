import React, { useState } from "react";
import "./Collapse.scss";

function Collapse(props) {
    const [isContentVisible, setIsContentVisible] = useState(false);

    const showContent = () => {
        setIsContentVisible(!isContentVisible);
    };
    const contentClass = (isContentVisible ? "visible" : "hidden") + " description__content";
    const chevronClass = (isContentVisible ? "fa-chevron-up" : "fa-chevron-down") + " fas";
    return (
        <div className="apartment__description">
            <p className="description__header" onClick={showContent}>
                <span>{props.title}</span>
                <i className={chevronClass}></i>
            </p>
            <p className={contentClass}>{props.content}</p>
        </div>
    );
}

export default Collapse;
