import './index.css';
import Nav from "./components/Nav";
import Landing from './components/Landing';
import Highlights from './components/Highlights';
import Featured from './components/Featured';
import Discounted from './components/Discounted';
import Explore from './components/Explore';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from "./pages/Books"
import { books } from "./data"
import BookInfo from './pages/BookInfo';
import { Link } from 'react-router-dom';
import Cart from "./pages/Cart"
import { useState } from 'react';


function App() {
  let [cart, setCart] = useState([]);

  //we want the functionality to begin in cart when we click a button on a different page (bookinfo)

  function addToCart () {
    console.log("add to cart");

  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books  books={books}/>} />
        <Route path="/books/:id" render={() => <BookInfo  books={books} addToCart={addToCart}/> } />
        <Route path="/cart" render={() => <Cart  books={books}/>} />
        <Footer />
        
      </div>
      </Router>
  )
}

export default App;



