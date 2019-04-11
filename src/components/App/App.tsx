import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { observer } from 'mobx-react';

import NavBar from '../NavBar/NavBar';
import Store from '../Store/Store';

import store from '../../stores/stores';
import Home from '../Home/Home';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

class App extends Component {

  constructor(props: {}){
    super(props);

    store.getDepartments();
  }

  render() {
    return (
      <div className="App">
        <Router>          
          <Switch>   
            <Route path="/" component={ Home } exact />
            <Route path="/shoppingCart" component={ ShoppingCart } exact />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default observer(App);