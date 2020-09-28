import React from 'react';
import './App.css';
import Home from './pages/Home/Home.component.jsx'
import ShopPage from './pages/Shop/shop.component.jsx'
import { Route, Switch } from 'react-router-dom'




function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
      </Switch>


    </div>
  );
}

export default App;
