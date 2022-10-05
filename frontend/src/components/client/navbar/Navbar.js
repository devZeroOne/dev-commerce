import React from 'react';
import { Container, Nav, Navbar as ReactNav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <ReactNav collapseOnSelect expand="lg" bg="" variant="dark">
            <Container className=''>
                <h1 className="col-md-3 ms-md-auto  text-info">E-comDEV</h1>
                <ReactNav.Toggle aria-controls="responsive-navbar-nav" />
                <ReactNav.Collapse id="responsive-navbar-nav">
                    <Nav className=" col-md-3 ms-md-auto">
                        <NavLink className={({ isActive }) => isActive ? styles.active_nav : styles.default_nav} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? styles.active_nav : styles.default_nav} to="/shop">Shop</NavLink>
                    </Nav>
                    <Nav className="col-md-6 pt-2">
                        <div className={`input-group ${styles.search_input_box}` }>
                            <div className="form-outline">
                                <input id="search-input" type="search" className="form-control" />
                            </div>
                            <button id="search-button" type="button" className="btn btn-primary h-100">
                                <i className="fas fa-search"></i>
                            </button>
                            
                        </div>
                        <NavLink className={styles.login_header} to="/login">Login</NavLink>
                        <NavLink className={styles.login_header} to="/cart">
                            
                           <p> <i className="fas fa-shopping-cart">0</i></p>
                            </NavLink>
                        
                    </Nav>
                </ReactNav.Collapse>
            </Container>
        </ReactNav>
    );
};

export default Navbar;