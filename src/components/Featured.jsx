import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Featured () {
    return (
        <section id="features">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Featured <span className="purple">Books</span>
                    </h2>
                    <div className="books">
                        <div className="book">
                            <a href="">
                                <figure className="book__img--wrapper">
                                    <img src="https://covers.openlibrary.org/b/id/8091016-L.jpg" alt="" />
                                </figure>
                            </a>
                            <div className="title">
                                <a href="/" className="book__title--link">
                                    gaming😎
                                </a>
                            </div>
                            <div className="book__ratings">
                                <FontAwesomeIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured;