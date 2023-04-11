import React from "react";
import "../../App.scss";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import ApartmentGrid from "../../components/apartmentGrid/ApartmentGrid";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/Main";

function Home() {
  return (
    <div>
      <Navbar />
      <Main>
        <Banner />
        <ApartmentGrid />
      </Main>
      <Footer />
    </div>
  );
}

export default Home;