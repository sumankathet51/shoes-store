import React, {useState} from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import shoes from './data/shoes/shoes.json';
import Product from './pages/product/product';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from "./components/cart/cart";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";

const App = () => {
    const [cart, setCart] = useState([]);
  return (
    <div className="App">

        <Router>
            <Header cart={cart} />
            <Switch>
                <Route exact path="/" >
                    <Home shoes={shoes} cart={cart} setCart={setCart} />
                </Route>
                <Route exact path="/login" >
                    <Login />
                </Route>
                <Route exact path="/register" >
                    <Register />
                </Route>
                <Route exact path="/product/:id" >
                    <Product shoes={shoes} setCart={setCart} cart={cart} />
                </Route>
                <Route exact path="/cart" >
                    <Cart setCart={setCart} cart={cart} />
                </Route>
            </Switch>

            <Footer />

        </Router>
    </div>
  );
}

export default App;
