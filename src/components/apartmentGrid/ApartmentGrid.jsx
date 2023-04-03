import React, { useState, useEffect } from "react";
import "../apartmentGrid/ApartmentGrid.scss";
import Apartment from "../apartment/Apartment.jsx";


function ApartmentGrid() {
    const [apartments, setApartments] = useState([]);

// useEffect avec une array vide exécute cette fonction au chargement du composant //
    useEffect(fetchApartments, []);

    function fetchApartments() {
    fetch("data.json")
        .then((res) => res.json())
        .then((res) => setApartments(res))
        .catch(console.error);
    }
    
    return (
        <div className="grid">
            {apartments.map((apartment) => (
                <Apartment title={apartment.title} imageUrl={apartment.cover} />
            ))}
        </div>
    );
}

export default ApartmentGrid;