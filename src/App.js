import React from 'react';
import './App.css';
import Header from './components/Header/header.component.jsx'
import Home from './pages/Home/Home.component.jsx'
import ShopPage from './pages/Shop/shop.component.jsx'
import { Route, Switch } from 'react-router-dom'




function App() {
  return (
    <div >
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
      </Switch>


    </div>
  );
}

export default App;
