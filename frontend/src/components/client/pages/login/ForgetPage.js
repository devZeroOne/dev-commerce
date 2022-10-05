import React, { useState } from 'react';
import Layout from '../../../common/layout/Layout';
import axios from 'axios';
import swal from 'sweetalert';

const ForgetPage = () => {


    const [email, setEmail] = useState({
        email: ''
    })

    const onChangeHandlerLogin = (e) => {


        let data = { ...email };
        data[e.target.name] = e.target.value;
        setEmail(data)


    }




    const handleSubmit = (e) => {
        e.preventDefault();


        axios.post("api/v1/auth/forget/password", email)
            .then(data => swal("Email Sent"))
            .catch(err => swal(err.response.data.message));


    }



    return (
        <Layout>
            <h4>Reset Your Password</h4>
            <form className="p-5" onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                    <label className="form-label">Enter Your Email</label>
                    <input name="email" onChange={onChangeHandlerLogin} type="email" id="loginName" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-3">Send Reset Link</button>
            </form>
        </Layout>
    );
};

export default ForgetPage;