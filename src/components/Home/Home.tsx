import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { observer } from 'mobx-react';

import NavBar from '../NavBar/NavBar';
import Store from '../Store/Store';

import store from '../../stores/stores';

@observer class Home extends Component {

  constructor(props: {}){
    super(props);

    store.getDepartments();
  }

  render() {
    return (
      <div className="Home">
        {/* <h1>{ store.pageTitle }</h1> */}

        <NavBar />
        <Store />

        <Link to="/shoppingCart">MY CART</Link>

      </div>
    );
  }
}

export default Home;