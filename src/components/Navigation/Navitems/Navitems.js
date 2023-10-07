import React from "react";

import NavItem from "../Navitem/Navitem";

import './Navitems.css';

const NavItems = (props) => {
    return (
     <ul className="nav-items">
       <NavItem link="/">Shopping</NavItem>
       <NavItem link="/Checkout">Checkout</NavItem>
     </ul>

    )
}

export default NavItems