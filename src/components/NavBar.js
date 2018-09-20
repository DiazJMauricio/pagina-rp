import React, {Component} from 'react';
import './NavBar.css';
import logo from '../img/logoHG.png';

function NavBar (){
    return(
        <div className="NavBar-container">
            <div className="NavBar">
                <img src={logo} className="logo-nav"/>
            </div>
        </div>
    );
}
export default NavBar;