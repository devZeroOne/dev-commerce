import React from 'react';
import './ProductCard.css'
import StarRatings from 'react-star-ratings';

const ProductCard = ({ item }) => {



    const addToCartHandler = (item) => {

        if (!localStorage.getItem("cart")) {
            let newItem = {
                name: item.name,
                price: item.price,
                quantity: 1,
                product: item._id

            };
            let data = [];
            data.push(newItem);
            localStorage.setItem("cart", JSON.stringify(data))
        } else {

            let newItem = {
                name: item.name,
                price: item.price,
                quantity: 1,
                product: item._id
            };
            let Xproduct = JSON.parse(localStorage.getItem("cart"))

            let bool = false;
            Xproduct.filter(i => {
                if (i.product === item._id) {
                    bool = true;
                }
            })

            if (!bool) {
                Xproduct.push(newItem);
                localStorage.setItem("cart", JSON.stringify(Xproduct))

            }


        }

    }


    return (
        <div className="height d-flex justify-content-center align-items-center">

            <div className="card p-3">

                <div className="d-flex justify-content-between align-items-center ">
                    <div className="mt-2">

                        <div className="mt-5">
                            <h5 className="text-uppercase mb-0">{item.category}</h5>
                            <h1 className="main-heading mt-0">{item.name}</h1>
                            <div className="d-flex flex-row user-ratings">
                                <div className="ratings">

                                    <StarRatings
                                        rating={item.ratings}
                                        starRatedColor="orange"
                                        starDimension='30px'
                                        starSpacing="0px"
                                        numberOfStars={5}
                                        name='rating'
                                    />

                                </div>
                                <h6 className="text-muted ml-1">{item.ratings}/5</h6>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img src={item.image[0].url} width="100" />
                    </div>
                </div>



                <p className="py-5">A great option weather you are at office or at home. </p>

                <button onClick={() => addToCartHandler(item)} className="btn btn-primary">Add to cart</button>
            </div>

        </div>
    );
};

export default ProductCard;