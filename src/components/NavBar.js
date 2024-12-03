import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => (
    <nav className="navbar navbar-light bg-light">
        <h3 className="navbar-brand">INSUMOS-CEVADA</h3>
        <CartWidget />
    </nav>
);

export default NavBar;
