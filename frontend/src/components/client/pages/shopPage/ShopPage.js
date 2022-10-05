import React from 'react';
import Layout from '../../../common/layout/Layout';
import ProductCard from '../../../common/productCard/ProductCard';
import './ShopPage.css'
const ShopPage = () => {
    return (
        <Layout>
            <section>
                <h1 className="text-center py-5">Product Page</h1>
                <div className="product_page">
                    <div className="shop_sidebar_filter">
                        <ul>
                            <li>Laptop</li>
                            <li>Cloth</li>
                            <li>Tech</li>
                        </ul>
                        <div className="price_filter">
                            <form className="row d-flex">
                                <div className="col-md-5">
                                    <input type="number" placeholder="Min" className="form-control" />
                                </div>
                                <div className="col-md-5">
                                    <input type="number" placeholder="Max" className="form-control" />
                                </div>
                                <div className="col-md-2">
                                    <button type="submit" className="btn btn-primary mb-3"><i className="far fa-arrow-alt-circle-right"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>


                    <div className="product_are">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>

                </div>

            </section>
        </Layout>
    );
};

export default ShopPage;