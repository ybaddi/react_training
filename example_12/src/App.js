import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Products from './pages/Products';
import Product from './pages/Product.js';
import Cart from './pages/Cart';
import CartIcon from './components/CartIcon';

function App() {
  return (

    <Router>
    <div className="container">

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">OurStore</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/" >Home</Link>
        
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/products" >Products</Link>
        
      </li>

      <li className="nav-item">
      <Link className="nav-link" to="/cart" >Cart</Link>
        
      </li>
      
      
    </ul>
    
  </div>

  <CartIcon />
</nav>


<Route path="/" exact component={Home}></Route>
<Route path="/products" exact component={Products}></Route>

<Route path="/products/:id" component={Product}></Route>
<Route path="/cart" component={Cart}></Route>
      
    </div>
    </Router>
  );
}

export default App;
