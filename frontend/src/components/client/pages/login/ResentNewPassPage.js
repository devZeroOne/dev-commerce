import React, { useState } from 'react';
import Layout from '../../../common/layout/Layout';
import axios from 'axios';
import swal from 'sweetalert';
import { useParams } from 'react-router-dom';


const ResentNewPassPage = () => {
let {resetToken}= useParams();

    const [pass, setPass] = useState({
        password: '',
        confirmPassword: ''
    })

    const onChangeHandlerLogin = (e) => {


        let data = { ...pass };
        data[e.target.name] = e.target.value;
        setPass(data)

 
    }



    const handleSubmit = (e) => {
        e.preventDefault();
console.log(resetToken,pass)

        axios.put(`/api/v1/auth/password/reset/${resetToken}`, pass)
            .then(data => swal("Password Reset Success"))
            .catch(err => swal(err.response.data.message));


    }



    return (
        <Layout>
            <h4>Setup New Password</h4>
            <form className="p-5" onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                    <label className="form-label">Enter Your Email</label>
                    <input name="password" onChange={onChangeHandlerLogin} type="password" id="loginName" className="form-control" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label">Enter Your Email</label>
                    <input name="confirmPassword" onChange={onChangeHandlerLogin} type="password" id="loginName" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-3">Send Reset Link</button>
            </form>
        </Layout>
    );
};

export default ResentNewPassPage;