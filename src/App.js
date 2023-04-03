import React from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import "./App.scss";
import Banner from "./components/banner/Banner.jsx";
import ApartmentGrid from "./components/apartmentGrid/ApartmentGrid.jsx";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
      path: "/",
      element: (
          <>
          <Navbar />
          <App />
          <Footer />
          </>
      ),
      errorElement: <h1>404 not found</h1>
  },
  {
      path: "/flat",
      element: (
          <>
          <Navbar />
          <h1>Appartement</h1>
          <Footer />
          </>
      )
  },
  {
      path: "/about",
      element: (
          <>
          <Navbar />
          <h1>A propos</h1>
          <Footer />
          </>
      )
  }
]);

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