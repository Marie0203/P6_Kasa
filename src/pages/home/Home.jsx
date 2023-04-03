import React from "react";
import "./Home.scss";
import Banner from "../components/banner/Banner.jsx";
import ApartmentGrid from "../components/apartmentGrid/ApartmentGrid.jsx";

function Home() {
    return (
        <>
        <Banner />
        <ApartmentGrid />
        </>
    );
}

export default Home;