import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './login.css'
import axios from 'axios';

import swal from 'sweetalert';
const Login = () => {
    const [switchAccount, setSwitchAccount] = useState(true)
    const [loginCredential, setLoginCredential] = useState({
        email: '',
        password: '',
    })

    const [signupCredential, setSignupCredential] = useState({
        name: '',
        email: '',
        password: '',
        avatar: '',
    })

    const onChangeHandlerSignUP = (e) => {

        if (e.target.name === "avatar") {
            let reader = new FileReader();

            reader.onload = () => {
                let data = { ...signupCredential };
                data[e.target.name] = reader.result;
                setSignupCredential(data)

            }
            reader.readAsDataURL(e.target.files[0]);
        } else {
            let data = { ...signupCredential };
            data[e.target.name] = e.target.value;
            setSignupCredential(data)
        }

    }

    const onChangeHandlerLogin = (e) => {

        
            let data = { ...loginCredential };
            data[e.target.name] = e.target.value;
            setLoginCredential(data)
      

    }




    const handleSignUP = (e) => {
        e.preventDefault();

        console.log(signupCredential)
        axios.post("/api/v1/auth/register", signupCredential)
            .then(data => swal("User OK"))
            .catch(err =>swal(err.response.data.message+"ehehehehe") );


    }

    const loginSubmitHandler=(e)=>{
        e.preventDefault();
     
        axios.post("/api/v1/auth/login", loginCredential)
            .then(data => swal("Login Success"))
            .catch(err =>swal(err.response.data.message+"ehehehehe") );
    }


    return (
        <>



            <div className='sign_in_page'>

                {switchAccount ?

                    <form onSubmit={loginSubmitHandler}>
                        <div className="form-outline mb-4">
                            <label className="form-label" >Email or username</label>
                            <input name="email" onChange={(e) => onChangeHandlerLogin(e)} type="email" id="loginName" className="form-control" />
                        </div>


                        <div className="form-outline mb-4">
                            <label className="form-label" >Password</label>
                            <input name="password" onChange={(e) => onChangeHandlerLogin(e)} type="password" id="loginPassword" className="form-control" />
                        </div>

                        <div className="form-outline mb-4">
                            <NavLink to="/forgetPassword">Forgot password?</NavLink>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>


                    </form>


                    :


                    <form onSubmit={handleSignUP}>
                        <div className="form-outline mb-4">
                            <label className="form-label">Enter Your Name</label>
                            <input name="name" onChange={(e) => onChangeHandlerSignUP(e)} type="text" className="form-control" />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" >Enter Your Email</label>
                            <input name="email" onChange={(e) => onChangeHandlerSignUP(e)} type="email" className="form-control" />
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" >Password</label>
                            <input name="password" onChange={(e) => onChangeHandlerSignUP(e)} type="password" className="form-control" />
                        </div>


                        <div className="form-outline mb-4">
                            <label className="form-label" >Password</label>
                            <input name="avatar" onChange={(e) => onChangeHandlerSignUP(e)} type="file" className="form-control" />
                        </div>


                        <button type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>


                    </form>

                }


                <div className="switch_account">
                    {switchAccount ?
                        <p>
                            Dont't have an account?
                            <button onClick={() => setSwitchAccount(false)}>Sign Up Here</button>
                        </p> : <p>
                            Already have an account?
                            <button onClick={() => setSwitchAccount(true)}>Sign In Here</button>
                        </p>
                    }
                </div>
            </div>






        </>
    );
};

export default Login;