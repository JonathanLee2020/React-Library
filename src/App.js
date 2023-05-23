import './index.css';
import Nav from "./components/Nav";
import Landing from './components/Landing';
import Highlights from './components/Highlights';
import Featured from './components/Featured';
import Discounted from './components/Discounted';
import Explore from './components/Explore';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Landing />
        <Highlights />
        <Featured />
        <Discounted />
        <Explore />
        <Footer />
      </div>
      </Router>
  )
}

export default App;
