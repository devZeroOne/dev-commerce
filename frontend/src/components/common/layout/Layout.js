import React from 'react';
import Navbar from '../../client/navbar/Navbar';
import './layout.css'
const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="layoutContainer">
                {children}
            </div>

            {/* <Footer/> */}
        </>
    );
};

export default Layout;