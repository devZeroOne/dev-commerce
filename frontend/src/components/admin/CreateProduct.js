import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useState } from 'react';


const CreateProduct = () => {

    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        category: '',
        price: 0,
        image: '',
    })

    const onChangeHandler = (e) => {

        if (e.target.name === "image") {
            let reader = new FileReader();

            reader.onload = () => {
                let data = { ...newProduct };
                data[e.target.name] = reader.result;
                setNewProduct(data)

            }
            reader.readAsDataURL(e.target.files[0]);
        } else {
            let data = { ...newProduct };
            data[e.target.name] = e.target.value;
            setNewProduct(data)
        }

    }


    const handleSubmit = (e) => {
        e.preventDefault();
// const option={
//     headers:{
//         "Authorization":`Bearer ${localStorage.getItem("token")}`,
//         "Accept":'application/json'
//     }
// }


        axios.post("/api/v1/product/create", newProduct)
            .then(data => swal("Product Create Success"))
            .catch(err => swal(err.response.data.message));


    }



    return (
        <div className="px-5">
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>

                <div className="form-outline mb-4">
                    <label className="form-label" >Product Name</label>
                    <input onChange={(e) => onChangeHandler(e)} name="name" type="text" className="form-control" />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" >Product Description</label>
                    <input onChange={(e) => onChangeHandler(e)} name="description" type="text" className="form-control" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" >Product Price</label>
                    <input onChange={(e) => onChangeHandler(e)} name="price" type="text" className="form-control" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" >Product Category</label>
                    <input onChange={(e) => onChangeHandler(e)} name="category" type="text" className="form-control" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" >Product Image</label>
                    <input onChange={(e) => onChangeHandler(e)} name="image" type="file" className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-3">Add Product</button>

            </form>

        </div>
    );
};

export default CreateProduct;