import React, { Component } from 'react';
import { observer } from 'mobx-react';

import store from '../../stores/stores';
import DepartmentsMenu from '../DepartmentsMenu/DepartmentsMenu';
import { Link } from 'react-router-dom';

const NavBar = () => {
    if(!store.departments) return <p>Cargando...</p>;

    return <nav className="nav-bar">
    <   div className="nav-bar__main-logo">
        <Link to="/">
            <h2 className="nav-bar__main-logo__h2">SHOPMATE</h2></Link>
        </div>

        <DepartmentsMenu />

        <div className="nav-bar__search-bar">

        </div>   

        <div className="nav-bar__shopping-cart">
            
        </div>  
    </nav>;
}


export default observer(NavBar);