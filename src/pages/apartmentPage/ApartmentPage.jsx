import React from "react";
import "./ApartmentPage.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/Main";

function ApartmentPage() {
    return (
        <>
        <Navbar />
        <Main>
        <div className="apartment-page">
            <div>
                <img src="https://picsum.photos/800/400" alt="" />
            </div>
            <div className="apartment__header">
            <div className="apartment__title">
            <h1>Crazy loft on the Canal Saint-Martin</h1>
                <h2>Paris, île de France</h2>
                <div className="apartment__tags">
                    <span>Cozy</span>
                    <span>Canak</span>
                    <span>Paris 10</span>
                    </div>
                </div>
                <div className="apartment__owner">
                    <div className="apartment__owner__details">
                    <h3>
                        <span>Alexandre</span>
                        <span>Dumas</span>
                    </h3>
                    <div className="apartment__owner__badge"></div>
                    </div>
                    <div className="apartment__owner__stars">
                    <span className="on">★</span>
                    <span className="on">★</span>
                    <span className="on">★</span>
                    <span className="off">★</span>
                    <span className="off">★</span>
                    </div>
                </div>
                </div>
                <div className="apartment__description">
                    <p className="description__header">
                        <span>Description</span>
                    </p>
                    <p className="description__content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sunt dicta illo deserunt incidunt quibusdam alias fugit, perferendis quaerat nostrum sequi debitis modi totam iusto cumque ad saepe. Itaque voluptas dolor ipsum deserunt libero voluptate sint! Quidem accusantium facere quae, vel omnis mollitia atque id quia optio, odio libero voluptatem.</p>
                </div>
                <div className="apartment__description">
                    <p className="description__header">Équipements</p>
                    <p className="description__content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nostrum soluta incidunt perspiciatis! Beatae cumque ratione dolores sit quae dolore ad officia explicabo perspiciatis omnis, quo accusantium sequi consectetur aliquid voluptatem laborum facilis illo aliquam soluta iusto ut ipsa rerum ipsam veritatis! Nisi, cupiditate! Quam, reprehenderit? Non corrupti laborum vitae.</p>
                </div>
                </div>
                </Main>
                <Footer />
                </>
                
    );
}

export default ApartmentPage;