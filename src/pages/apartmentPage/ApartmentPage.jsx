import React, { useEffect, useState } from "react";
import "./ApartmentPage.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/Main";
import CollapseApartment from "../../components/collapse/Collapse";
import { useLocation } from "react-router-dom";
import BannerApartment from "../../components/bannerApartment/BannerApartment";
import ApartmentHeader from "../../components/apartmentHeader/ApartmentHeader";

function ApartmentPage() {
    const location = useLocation();
    const [flat, setFlat] = useState(null);
    useEffect(fetchApartmentData, []);

    function fetchApartmentData() {
        fetch("data.json")
            .then((res) => res.json())
            .then((flats) => {
                const flat = flats.find((flat) => flat.id === location.state.apartmentId);
                setFlat(flat);
            })
            .catch(console.error);
    }
    if (flat == null) return <div>Loading...</div>
    return (
        <>
            <Navbar />
            <Main>
                <div className="apartment-page">
                    <BannerApartment imageUrl={flat.cover} />
                    <ApartmentHeader flat={flat} />
                    <div className="apartment__description__area">
                        <CollapseApartment />
                        <CollapseApartment />
                    </div>
                </div>
            </Main>
            <Footer />
        </>

    );
}

export default ApartmentPage;