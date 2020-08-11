import React from 'react';
import './App.css';
import Home from './pages/Home/Home.component.jsx'
import { Route, Switch } from 'react-router-dom'


const HatsPage = () => (
  <div>
    <h1>HATS Page</h1>
  </div>
)

function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/hats" component={HatsPage}></Route>
      </Switch>


    </div>
  );
}

export default App;
