import React from "react";
import "./Collapse.scss";

export function CollapseApartment() {
    return (
        <div className="apartment__description">
            <p className="description__header">
                <span>Description</span>
                <i className="fa-solid fa-chevron-up"></i>
            </p>

            <p className="description__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sunt dicta illo deserunt incidunt quibusdam alias fugit, perferendis quaerat nostrum sequi debitis modi totam iusto cumque ad saepe. Itaque voluptas dolor ipsum deserunt libero voluptate sint! Quidem accusantium facere quae, vel omnis mollitia atque id quia optio, odio libero voluptatem.</p>
        </div>
    );
}

export default CollapseApartment;