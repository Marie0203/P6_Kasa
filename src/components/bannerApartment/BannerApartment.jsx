import React, { useState } from "react";
import "./BannerApartment.scss";
import chevronGauche from "../../assets/ChevronGauche.png"
import chevronDroit from "../../assets/ChevronDroit.png"

function BannerApartment({ pictures }) {
    const [index, setIndex] = useState(0)
    const totalPictures = pictures.length - 1 

    if (index < 0) setIndex(totalPictures)  
    if (index > totalPictures) setIndex(0)  

    return (
        <div className="carousel">

         {/* affiche la première image */}
            <div className="div-image">
                <img src={pictures[index]} className="classImage" key={"car-" + index} alt={"photo " + index} />
            </div>

            {/* si plus d'une image, alors ce code sera exécuté */}
            {totalPictures > 0 && (
                <div className="button">
                    <button onClick={() => setIndex(index - 1)}>{index}
                        <img src={chevronGauche} className='classChevronGauche' alt={"flèche gauche "} />
                    </button>
                    <button onClick={() => setIndex(index + 1)}>{index}
                        <img src={chevronDroit} className="classChevronDroit" alt={"flèche droite "} />
                    </button>
                </div>
            )}
            {totalPictures > 0 && (
                // compteur d'images //
                <div className="compteur">
                    <p className="compteurText">
                        {index + 1}/{totalPictures + 1}
                    </p>
                </div>
            )}
        </div>
    )
}

export default BannerApartment;