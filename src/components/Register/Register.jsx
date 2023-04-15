import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../fireBase/fireBase.config'

const auth = getAuth(app);

const Register = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
    const handleSubmit = (event)=>{
        // step 01 prevent user refress
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password); 
        // step 02 create user in firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .then(error=>{
            console.error(error);
        })
       
    }

    const handleOnChange= (event)=>{
        // console.log(event.target.value);
        setEmail(event.target.value);
    }

    const handlePasswordBlur=(event)=>{
        // console.log(event.target.value);
        setPassword(event.target.value)
    }
    return (
        <div className='container'>
            <h3>please register</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={handleOnChange} type="email"  placeholder='your email' name="email" id="email" />
                 <br />
                <input onBlur={handlePasswordBlur} className='my-3 ' type="password" placeholder='your password' name="password" id="password" /> 
                <br />
                <input type="submit" value="register" />
            </form>
        </div>
    );
};

export default Register;