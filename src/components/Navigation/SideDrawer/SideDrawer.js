import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';

const sideDrawer = props => (
    <div className='SideDrawer'>
        <div className='AdjustedLogo'>
            <Logo />
        </div>
        <nav>
            <NavigationItems />
        </nav>
    </div>
);

export default sideDrawer;