import React, { Component } from 'react';
import { observer } from 'mobx-react';

import store from '../../stores/stores';

@observer class ShopingCart extends Component {

  constructor(props: {}){
    super(props);

    store.getDepartments();
  }

  render() {
    return (
      <div className="Shoping">
        {/* <h1>{ store.pageTitle }</h1> */}

        ShopingCart

      </div>
    );
  }
}

export default ShopingCart;