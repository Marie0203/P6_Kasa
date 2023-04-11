import React from "react";
import "./Footer.scss";
import logoFooter from "../../assets/logo-footer.png";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__logo">
                <img src={logoFooter} alt="logo" />
            </div>
            <div className="footer__text">© 2020 Kasa. All rights reserved</div>
        </div>
    );
}

export default Footer;