import './navbar.scss'
import { navbarListLeft, navbarListRight } from './navbar-lists'
import { FcPrevious } from 'react-icons/fc';
import { useState } from 'react';

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [showDropdownMenu, setShowDropdownMenu] = useState(false)
    return (

        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <img src='images/logo.png' alt='logo' />
                </div>
                <div className={showMobileMenu ? 'menu-wrapper active' : 'menu-wrapper'}>
                    <div className="menu-position">
                        <div className="left">
                            <ul className="nav-list">
                                {navbarListLeft.map((listItem, i) => (
                                    <li key={i} className="nav-list-item"> <span>{listItem.icon} </span><p> {listItem.title}</p> </li>
                                ))}
                            </ul>
                        </div>
                        <div className="right">
                            <ul className="nav-list">
                                {navbarListRight.map((listItem, i) => (
                                    <li key={i}
                                        className="nav-list-item"
                                        onClick={() => {
                                            listItem.dropdownItems && listItem.title === listItem.dropdownItems.title &&
                                            setShowDropdownMenu(!showDropdownMenu)
                                        }}
                                    >
                                        <span>{listItem.icon} </span><p>{listItem.title}</p>
                                        {listItem.dropdownItems ?
                                            <ul className={!showDropdownMenu ? 'dropdown' : 'dropdown active'}  >
                                                {listItem.dropdownItems.list.map((item, e) =>
                                                (
                                                    <li key={e} className="nav-list-item" >
                                                        <span>{item.icon} </span><p>{item.title}</p>
                                                    </li>
                                                ))}
                                            </ul> : null
                                        }
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="menu-toogle-content" onClick={() => setShowMobileMenu(!showMobileMenu)} ><p>Menu</p> < FcPrevious className="menu-icon" /> </div>
            </div>
        </div>
    )
};

export default Navbar;
