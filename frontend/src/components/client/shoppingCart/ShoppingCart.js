import React, { useState } from 'react';
import { useEffect } from 'react';
import CartSummary from './CartSummary';
import ShippingProductCart from './ShippingProductCart';
import './ShoppingCart.css'
const ShoppingCart = () => {

    const [cartItem, setCartItem] = useState([])


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('cart'))
        setCartItem(data)

    }, [])

    let deteleCartItem = (item) => {
        let data = JSON.parse(localStorage.getItem('cart'))
        data = data.filter(i => i.product !== item.product);
        localStorage.setItem('cart', JSON.stringify(data))
        setCartItem(data)
    }

    const quantityUpdate = (id, position) => {

        let data = [...cartItem]

        if (position === "-") {
            data.forEach(item => {
                if (item.product === id) {
                    item.quantity = item.quantity - 1
                }
            })


        } else {
            data.forEach(item => {
                if (item.product === id) {
                    item.quantity = item.quantity + 1
                }
            })

        }

        localStorage.setItem('cart', JSON.stringify(data))
        setCartItem(data)

    }


    return (
        <div className="shipping_cart_page_area">



            <ShippingProductCart deteleCartItem={deteleCartItem} quantityUpdate={quantityUpdate} cartItem={cartItem} />
            <CartSummary />
        </div>
    );
};

export default ShoppingCart;