import React from "react";
import "../apartment/Apartment.scss";
import { Link } from "react-router-dom";

// Affichage du logement sur la page d'accueil sous forme de card //
function Apartment(props) {
    return (
        <Link to={{ pathname: "/flat", search: "?_id=" + props.id }}
            state={{
                apartmentId: props.id
            }}
        >
            <div className="apartment">
                <img src={props.imageUrl} alt="" />
                <div className="apartment__subtitle">{props.title}</div>
            </div>
        </Link>
    );
}

export default Apartment;