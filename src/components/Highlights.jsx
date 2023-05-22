import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Highlights () {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="purple">Liibrary</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <div className="highlight">
                            <div className="highlight__img">
                                <FontAwesomeIcon icon="bolt" />
                            </div>
                            <h3 className="highlight__subtitle">Easy and Quick</h3>
                            <p className="highlight__para">
                                Get immediate access books you have purchased
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlights;