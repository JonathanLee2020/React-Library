import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import Rating from '../components/Lawson/Rating'
import Price from '../components/Lawson/Price'

export default function BookInfo({books}) {
    let { id } = useParams();
    let book = books.find((book => book.id === id));
    console.log(book);
  return (
    <div id="books__body">
        <main id="books__main">
            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <Link to="/books" className="book__link">
                            <FontAwesomeIcon icon="arrow-left"/>
                        </Link>
                        <Link to="/books" className="book__link">
                            <h2 className='book__selected--title--top'>Books</h2>
                        </Link>
                    </div>
                    <div className="book__selected">
                        <figure className="book__selected--figure">
                            <img src="https://covers.openlibrary.org/b/id/8091016-L.jpg" alt="" className="book__selected--img" />
                        </figure>
                        <div className="book__selected--description">
                            <h2 className="book__selected--title">Crack the Coding Interview</h2>
                            <Rating rating="4.5"/>
                            <div className="book__seleted--price">
                                <Price originalPrice={4.50} salePrice={3.50}/>
                            </div>
                            <div className="book__summary">
                                <div className="book__summary--title">
                                    Summary
                                </div>
                                <p className="book__summary__para">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus iste, a quia itaque voluptatem quam voluptates corporis consequatur sequi suscipit sint nesciunt explicabo expedita amet, tempore debitis quibusdam commodi doloribus.
                                </p>
                                <p className="book__summary__para">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus iste, a quia itaque voluptatem quam voluptates corporis consequatur sequi suscipit sint nesciunt explicabo expedita amet, tempore debitis quibusdam commodi doloribus.
                                </p>
                            </div>
                            <button className="btn">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="book__container">
                <div className="row">
                    <div className="book__selected--top">
                        <h2 className="book__selected--title--top">
                            Recommended Books
                        </h2>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}