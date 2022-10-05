import React from 'react';
import { NavLink } from 'react-router-dom';
import "./ShoppingCart.css"
const CartSummary = ({button=true}) => {
    return (
        <>
            <div className="cart_summary_area">
                <h3>Summary</h3>
                <div className="div1">
                    <p>
                        <span>3 Items</span>
                        <span>$564.98</span>
                    </p>
                    <p>
                        <span>Shipping</span>
                        <span>Free</span>
                    </p>
                </div>
                <div>
                    <p>
                        <span>Total (tax incl.)</span>
                        <span>$419.00</span>
                    </p>

                    
                       {
                        button&& <NavLink to="/checkout" >Checkout</NavLink> 
                       }
                    


                </div>
            </div>
        </>
    );
};

export default CartSummary;