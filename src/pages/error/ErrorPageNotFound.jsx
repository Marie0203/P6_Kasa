import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./ErrorPageNotFound.scss";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";

export function ErrorPageNotFound() {
    return (
        <>
            <Navbar />
            <Main>
                <div className="error-page">
                    <h1>404</h1>
                    <h2>Oups! La page que vous demandez n'existe pas.</h2>
                    <Link to="/">Retourner sur la page d'accueil</Link>
                </div>
            </Main>
            <Footer />
        </>
    );
}