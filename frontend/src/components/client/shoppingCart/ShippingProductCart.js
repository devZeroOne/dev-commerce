import React, { useState } from 'react';

const ShippingProductCart = ({ cartItem ,deteleCartItem,quantityUpdate}) => {
 

    return (
        <>
            <div className="cart_card_box_area">
                <h2 className="title">Shopping cart</h2>

                <div className="card_box">
                    {
                        cartItem && cartItem.map(item =>
                            <div className="cart_card">
                                {/* <img src={} alt="" /> */}
                                <div className="description">
                                    <h2> {item.name}</h2>
                                    <p className="price">${item.price}</p>
                                </div>

                                <div className="number_Of_items">
                                    <button onClick={() => quantityUpdate(item.product,'-')}>-</button>
                                    <input type="number" readOnly value={item.quantity} />
                                    <button onClick={() => quantityUpdate(item.product,"+")}>+</button>
                                </div>

                                <p className="total_price_of_items">$56.26</p>
                                <button onClick={() => deteleCartItem(item)}><i className="fas fa-trash"></i></button>

                            </div>

                        )
                    }


                </div>


            </div>
        </>
    );
};

export default ShippingProductCart;