import React from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import "./App.scss";
import Banner from "./components/banner/Banner.jsx";
import ApartmentGrid from "./components/apartmentGrid/ApartmentGrid.jsx";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";


function App() {
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

export default App;