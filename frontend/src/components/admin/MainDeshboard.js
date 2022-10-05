import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import AllProduct from './AllProduct';
import CreateProduct from './CreateProduct';
import './MainDashboard.css'
const MainDeshboard = () => {

    let { adminPage } = useParams();

    return (<>
        <div className="admin_top_bar">
            <marquee >E-com DEV - Admin Panel</marquee>
        </div>
        <div className='admin_dashboard'>
            {/* sidebar nav start */}
            <div className="bg-light sidebar_admin" >
                <div className="d-flex flex-column flex-shrink-0 p-3 bg-light"  >
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <svg className="bi pe-none me-2" width="40" height="32"></svg>
                        <span className="fs-4"> <NavLink className="nav-link" to="/admin">Dashboard</NavLink></span>

                    </a>


                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link active" : " nav-link"} to="/admin/dashboard">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link active" : " nav-link"} to="/admin/create-product">create product</NavLink>
                        </li>

                        <li class="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link active" : " nav-link"} to="/admin/all-product">Products</NavLink>
                        </li>
                    </ul>



                </div>

            </div>
            {/* sidebar nav end */}
            <div className="dashboard_body">

                {
                    adminPage === "create-product" ? <CreateProduct /> :
                        adminPage === "all-product" ? <AllProduct /> : "Chart"

                }


            </div>
        </div>

    </>
    )
};

export default MainDeshboard;