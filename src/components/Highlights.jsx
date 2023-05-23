import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./Lawson/Highlight";

function Highlights () {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose Ohio gaming<span className="purple">Liibrary</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <Highlight icon={<FontAwesomeIcon icon="bolt" />} 
                            title="Easy and Quick"
                            para="Get immediate access books you have purchased"
                        />

                        <Highlight icon={<FontAwesomeIcon icon="book-open" />} 
                            title="10,000+ Books"
                            para="Library has books available in all the categories that you love."/>
                        <Highlight icon={<FontAwesomeIcon icon="bolt" />} 
                            title="Affordable"
                            para="Best-sellers at a fraction of the price!"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlights;