import React, { useEffect, useState } from "react";
import "./ApartmentPage.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/Main";
import Collapse from "../../components/collapse/Collapse";
import { useSearchParams } from "react-router-dom";
import BannerApartment from "../../components/bannerApartment/BannerApartment";
import ApartmentHeader from "../../components/apartmentHeader/ApartmentHeader";
import ErrorPageNotFound from "../../pages/error/ErrorPageNotFound";

// Récupération de l'id d'un logement //
function ApartmentPage() {
    const [searchParams] = useSearchParams();
    const [apartmentId] = useState(searchParams.get('_id'));
    const [flat, setFlat] = useState(null);

    useEffect(fetchApartmentData, []);
    function fetchApartmentData() {
        fetch("data.json")
            .then((res) => res.json())
            .then((flats) => {
                const flat = flats.find((flat) => flat.id === apartmentId);
    
                setFlat(flat);
            })
        }
        if (flat == null) return (<ErrorPageNotFound />)
    // Redirection vers la page 404 si erreur dans l'id //
    
    // Affichage de tout les éléments de la page en détail d'un appartement //
    return (
        <>
            <Navbar />
            <Main>
                <div className="apartment-page">
                    <BannerApartment pictures={flat.pictures} />
                    <ApartmentHeader flat={flat} />
                    <div className="apartment__description__area">
                        <Collapse title="Description" content={flat.description} />
                        <Collapse
                            title="Equipements"
                            content={flat.equipments.map((eq, i) => (
                                <li key={i}>{eq}</li>
                            ))}
                        />
                    </div>
                </div>
            </Main>
            <Footer />
        </>

    );
}

export default ApartmentPage;