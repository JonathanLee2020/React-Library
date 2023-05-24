import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import Rating from '../components/Lawson/Rating'
import Price from '../components/Lawson/Price'
import Book from '../components/Lawson/Book'

export default function BookInfo({books, addItemToCart, cart}) {
    let { id } = useParams();
    const book = books.find((book => +book.id == +id));
    console.log(book);
    let [added, setAdded] = useState(false);

    function addBookToCart (book) {
        setAdded(true);
        addItemToCart(book)
    }
    
    function bookExistsonCart () {
        return cart.find(book => book.id === +id)
    }

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
                            <img 
                            src={book.url}
                            /> 
                        </figure>
                        <div className="book__selected--description">
                            <h2 className="book__selected--title">{book.title}</h2>
                            <Rating rating={book.rating}/>
                            <div className="book__seleted--price">
                                <Price originalPrice={book.originalPrice} salePrice={book.salePrice}/>
                            </div>
                            <div className="book__summary">
                                <div className="book__summary--title">
                                    Summary
                                </div>
                                <p className="book__summary--para">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus iste, a quia itaque voluptatem quam voluptates corporis consequatur sequi suscipit sint nesciunt explicabo expedita amet, tempore debitis quibusdam commodi doloribus.
                                </p>
                                <p className="book__summary--para">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus iste, a quia itaque voluptatem quam voluptates corporis consequatur sequi suscipit sint nesciunt explicabo expedita amet, tempore debitis quibusdam commodi doloribus.
                                </p>
                        </div>
                            {bookExistsonCart() ? (
                            <Link to={`/cart`}>
                            <button className="btn">Checkout</button>
                            </Link>
                                ) : (
                                <button className="btn" onClick={() => addBookToCart(book)}>
                                    Add to Cart</button>
                            )}
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
                    <div className="books">
                        {
                            books.filter(book => book.rating === 5 && +book.id !== +id).slice(0, 4)
                            .map(book => <Book book={book} key = {book.id} />)
                        }
                    </div>
                    
                </div>
            </div>
        </main>
    </div>
  )
}
