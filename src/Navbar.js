import './Navbar.css';
import Search from './Search';
import React, { useState, useEffect, useRef } from 'react';
function Navbar({ onToggleCart, toggleDarkMode, iconColor, bgColor, darkBG, toggleSidebarWidth, textColor}) {

    const [isMenuVisible, setMenuVisibility] = useState(false);

    const toggleMenuVisibility = () => {
        setMenuVisibility(prevState => !prevState);
    };

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setIsSearchOpen(false);
        }
        };
            document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSearchClick = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <nav className='navbar p-0' style={{backgroundColor: darkBG}}>
            <div className='nav-items'>
                <ul className='nav-list-left nav-list pt-3'>
                    <button onClick={toggleSidebarWidth} className='sidebar-toggle-btn'><i class="fa-solid fa-bars p-2 shadow-effect" style={{color: iconColor}}></i></button>
                    
                    <div className='typewriter-div'>
                        <p className='typewriter-text'>Hi, Abdul Wahab</p>
                    </div>
                </ul>
                
                <form className="search-bar form-inline my-2 my-lg-0 pt-2 pb-2">
                    <div className='search-container d-flex align-items-center'>
                        <input onClick={handleSearchClick} style={{backgroundColor: bgColor}} className="search-input mr-sm-2 pt-1 pb-1" type="search" placeholder="Search" aria-label="Search"/>
                    </div>
                </form>
                <ul className='nav-list-right nav-list pt-3'>
                    {/* <button className="shadow-effect" onClick={toggleDarkMode}><i class="dark-mode-icon fa-regular fa-face-smile p-2" style={{color: iconColor}}></i></button> */}
                    
                    <button className="shadow-effect" onClick={toggleDarkMode}><i className="dark-mode-icon fa-solid fa-lightbulb p-2" style={{color: iconColor}}></i></button>
                    
                    
                </ul>

                {isSearchOpen && (
                    <Search darkBG={darkBG} bgColor={bgColor} searchRef={searchRef} textColor={textColor}/>
                )}

                <div id='nav-btn-div'>
                    <button onClick={toggleMenuVisibility} className='nav-btn'><a><i className="fa-solid fa-bars"> </i></a></button>
                </div>
            
                
            </div>

            {isMenuVisible && (
                <div id='nav-btn-menu'>
                    <ul className='nav-menu-list pt-3 pb-2'>
                        <li key="home"><a href='#'>HOME</a></li>
                        <hr/>
                        <li key="products"><a href='#products'>PRODUCTS</a></li>
                        <hr/>
                        <li key="cart"><a href='#blog'>BLOG</a></li>
                        <hr/>
                        <li onClick={onToggleCart} key="cart"><a>CART</a></li>
                        <hr/>
                    </ul>
                </div>
            )}
            
        </nav>
    )
}

export default Navbar;
