import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../common/productCard/ProductCard';
import './productSection.css'


const ProductSection = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {

        axios.get('/api/v1/product')
            .then(response => setProduct(response.data.products))
            .catch(respons => console.log(respons))

    })

    return (
        <div>
            <h1 className="text-center py-5">Product</h1>
            <div className="product_area">
                {
                    product.map(item => <ProductCard item={item} />)
                }

            </div>
        </div>
    );
};

export default ProductSection;