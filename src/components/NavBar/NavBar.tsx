import React, { Component } from 'react';
import { observer } from 'mobx-react';

import store from '../../stores/stores';
import DepartmentsMenu from '../DepartmentsMenu/DepartmentsMenu';

const NavBar = () => {
    if(!store.departments) return <p>Cargando...</p>;

    return <nav className="nav-bar">
        <DepartmentsMenu />
    </nav>;
}


export default observer(NavBar);