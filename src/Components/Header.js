import React from 'react'
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';
import './Header.css'

function Header({user}) {
    return (
        <div className="header">
            <div className="header__left">
                <Avatar alt={user?.displayName} src={user?.photoURL} className="header__profile"/>
                <AccessTimeIcon />
            </div>
            <div className="header__middle">
                <input type="search" placeholder="Search" />
                <SearchIcon className="search__icon"/>
            </div>
            <div className="header__right">
                <HelpIcon />
            </div>
        </div>
    )
}

export default Header
