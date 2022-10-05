import React, { useState } from 'react';
import './Checkout.css'
import CartSummary from '../../shoppingCart/CartSummary';
import Layout from '../../../common/layout/Layout';


const Checkout = () => {
    const [conInfo, setConInfo] = useState('')

    const onChangeInfoHandler = (e) => {


        const orderDetails = { ...conInfo };
        orderDetails[e.target.name] = e.target.value;
        setConInfo(orderDetails)
    }
    console.log(conInfo);

    const [paymentOption, setPaymentOption] = useState(true)

    const handleContinuePayment = () => {


        setPaymentOption(false)
    }
    return (
        <>
            <Layout>
                <section className="checkout_cart_page_area">

                    <div className="shipping_details_area">


                        {
                            paymentOption ? <form action="">

                                <h2>Personal Information</h2>


                                <div className="form-outline mb-4">
                                    <label className="form-label" >Email</label>
                                    <input className="form-control" onChange={(e) => onChangeInfoHandler(e)} disabled value="tahermamun5@gmail.com" name="" type="text" />
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" >Name</label>
                                    <input className="form-control" onChange={(e) => onChangeInfoHandler(e)} name="userName" type="text" placeholder='Enter your name...' required />
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" >Phone</label>
                                    <input className="form-control" onChange={(e) => onChangeInfoHandler(e)} name="userPhone" type="text" placeholder="Enter your phone number..." required />
                                </div>

                                <h2>Shipping Address</h2>

                                <div className="form-outline mb-4">
                                    <label className="form-label" >Name</label>
                                    <input className="form-control" onChange={(e) => onChangeInfoHandler(e)} name="shippingName" type="text" placeholder='Enter your name...' />

                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" >Street and House Number</label>
                                    <input className="form-control" onChange={(e) => onChangeInfoHandler(e)} name="streetAndHouseNo" type="text" placeholder="Enter your street and house number..." />

                                </div>


                                <div className="form-outline mb-4">
                                    <label className="form-label" >Address</label>
                                    <input className="form-control" onChange={(e) => onChangeInfoHandler(e)} name="shippingAddress" type="text" placeholder="Enter your address..." />

                                </div>


                                <div className="form-outline mb-4">
                                    <label className="form-label" >Zip/Postal Code</label>
                                    <input className="form-control" onChange={(e) => onChangeInfoHandler(e)} name="shippingZipPostalCode" type="text" placeholder="Enter your address..." />

                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" >City</label>
                                    <input className="form-control" onChange={(e) => onChangeInfoHandler(e)} name="shippingCity" type="text" placeholder="Enter your address..." />

                                </div>




                                <div className='input_option_country'>
                                    <label >Country</label>
                                    <select onChange={(e) => onChangeInfoHandler(e)} id="shippingCountry" name="shippingCountry" required>
                                        <option value="" selected disabled hidden>Select Country</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Bangladesh">United State</option>
                                    </select>
                                </div>


                                <input type="submit" onClick={() => setPaymentOption(false)} className="button" value="Process to Continue" />

                            </form> :

                                <div className="information_show_and_payment_area">

                                    <h2>Contact Information</h2>
                                    <p>Name: <span>{conInfo.userName}</span></p>
                                    <p>Email: <span>{conInfo.userEmail}</span></p>
                                    <p>Phone: <span>+{conInfo.userPhone}</span></p>
                                    <hr />
                                    <h2>Shipping Address</h2>
                                    <p>Name: <span>{conInfo.shippingName}</span></p>
                                    <p>Street and House Number: <span>{conInfo.streetAndHouseNo}</span></p>
                                    <p>Address: <span>{conInfo.shippingAddress}</span></p>
                                    <p>Zip/Postal Code: <span>+{conInfo.shippingZipPostalCode}</span></p>
                                    <p>City: <span>+{conInfo.shippingCity}</span></p>
                                    <p>Country: <span>+{conInfo.shippingCountry}</span></p>
                                    <hr />

                                    <h2>Shipping Method</h2>

                                    <p className="shippingRate">
                                        <div>
                                            <input type="radio" checked />
                                            Local Shipping
                                        </div>
                                        <span>Free</span>
                                    </p>

                                    <input type="button" onClick={() => handleContinuePayment()} className="button" value="Continue Payment" data-bs-toggle="modal" data-bs-target="#staticBackdrop" />
                                    <input type="button" onClick={() => setPaymentOption(true)} className="button_return" value="Return to Checkout" />

                                </div>



                        }



                    </div>
                    <CartSummary button={false} />
                </section>


                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Pay Now</h5>
                            </div>
                            <div className="modal-body">
                                <p>
                                    This store can’t accept payments right now.
                                </p>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>





            </Layout>

        </>
    );
};

export default Checkout;