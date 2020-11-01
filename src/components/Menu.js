import React from 'react';
import {Link} from "react-router-dom";

function Menu(props) {

    const menu = [
        {name:"home", route: "/"},
        {name:"registration", route: "/registration"},
        {name:"login", route: "/login"}
    ]

    
    return (
    <>
        {
            menu.map(route => <li><Link to={route.route}>{route.name}</Link></li>)        
        }
    </>
    )

}

export default Menu;