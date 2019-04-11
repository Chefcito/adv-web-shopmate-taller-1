import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Store from '../Store/Store';

import store from '../../stores/stores';
import { observer } from 'mobx-react';

class App extends Component {

  constructor(props: {}){
    super(props);

    store.getDepartments();
  }

  render() {
    return (
      <div className="App">
        {/* <h1>{ store.pageTitle }</h1> */}
        <NavBar />
        <Store />

        <button>GO TO MY CART</ button>

      </div>
    );
  }
}

export default observer(App);