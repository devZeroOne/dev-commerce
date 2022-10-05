import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Layout from '../../../common/layout/Layout';
import Deshboard from '../../account/Deshboard';
import Order from '../../account/Order';
import './account.css'
const Account = () => {
    let { accountPages } = useParams();
    console.log(accountPages)
    return (
       <Layout>
       
            <section className="account">

                <div className="account_sidebar">
                    <h2>Account</h2>
                    <div className="profile">
                        {/* <img src={} alt="" /> */}
                        <p>Taher Mamun</p>
                    </div>
                    <hr />
                    <ul className="side_nav" >
                        <li><NavLink activeClassName="active_link" to="/account/dashboard">Dashboard</NavLink></li>
                        <li><NavLink activeClassName="active_link" to="/account/orders">Orders</NavLink></li>
                        <li><NavLink activeClassName="active_link" to="/account/myCart">My Cart</NavLink></li>
                        <li><NavLink activeClassName="active_link" to="/account/settings">Settings</NavLink></li>
                        <li><button >Log Out</button></li>
                    </ul>



                </div>
                <div className="account_body">
                    {
                        accountPages === "dashboard" ? <Deshboard/> :
                        accountPages === "orders" ? <Order/> :""
                            
                    }
                </div>


            </section>
       </Layout>
    );
};

export default Account;