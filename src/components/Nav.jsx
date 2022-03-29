import React from 'react';

import logo from './images/logo.jpg'; 
import clients from './images/clients.png'; 
import search from './images/search.png'; 
import status from './images/status.png'; 
import logout from './images/logout.jpg'; 


const Nav = () =>{
    return(
        <>
        <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="logo">
                    <a href="/#" className="nav-link">
                        <img src={logo} alt="logo" height="50px" width="50px"/>
                        <span className="link-text logo-text">name<br/>dummy</span>
                        <div className="arrow">
                        <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fad"
                        data-icon="angle-double-right"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
                        >
                        
                        <g className="fa-group">
                            <path
                            fill="currentColor"
                            d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z"
                            className="fa-secondary"
                            ></path>
                            <path
                            fill="currentColor"
                            d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                            className="fa-primary"
                            ></path>
                        </g>
                        </svg>
                    </div>
                    </a>
                    </li>
            
                    <li className="nav-item">
                    <a href="/#" className="nav-link">
                        <img className='icon' src={clients} alt="clients" height="20hv" width="30hv"/>
                        <span className="link-text">Clients</span>
                    </a>
                    </li>
            
                    <li className="nav-item">
                    <a href="/#" className="nav-link">
                        <img className='icon' src={search} alt="search" height="20hv" width="30hv"/>
                        <span className="link-text">Search</span>
                    </a>
                    </li>
            
                    <li className="nav-item">
                    <a href="/#" className="nav-link">
                        <img className='icon' src={status} alt="status" height="20hv" width="30hv"/>
                        <span className="link-text">Status</span>
                    </a>
                    </li>
            
                    
            
                    <li className="nav-item" id="themeButton">
                    <a href="/#" className="nav-link">
                        <img className='icon' src={logout} alt="logout" height="20hv" width="30hv" />
                        <span className="link-text">Logout</span>
                    </a>
                    </li>
                </ul>
                </nav>
        </>
    )
}

export {Nav};