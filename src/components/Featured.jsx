// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Book from "./Lawson/Book";
import { books } from "../data"
import {gaming} from "../data"


function Featured () {
    console.log(books);
    let fiveStars = [];
    //we getting only the 5 star books
    for (let book of books) {
        if (book.rating === 5) {
            fiveStars.push(book);
        }
    }
    //since we only want to display 4, we slice the array to only display the first four
    let toDisplay = fiveStars.slice(0, 4);
    console.log(`toDisplay is ${toDisplay}`);

    return (
        <section id="features">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Featured <span className="purple">Books</span>
                    </h2>
                    <div className="books">
                        {
                            toDisplay.map((book) => 
                                <Book book={book} key={book.id}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured;