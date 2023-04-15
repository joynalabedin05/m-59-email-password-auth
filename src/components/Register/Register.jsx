import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../fireBase/fireBase.config'

const auth = getAuth(app);

const Register = () => {
//  const [email, setEmail] = useState('');
//  const [password, setPassword] = useState('');

const [error, setError] = useState('');
const [success, setSuccess] = useState('');

    const handleSubmit = (event)=>{
        // step 01 prevent user refress
        event.preventDefault();
        setSuccess('');
        setError('')
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password); 

        // validate
        if(!/(?=.*[A-Z])/.test(password)){
            setError('please use at least one uppercase');
            return;
        }
        else if(!/(?=.*[0-9].*[0-9]) /.test(password)){
            setError('please set at least two disits');
            return;
        }
        else if(password.length<6){
            setError('please add at least 6 characters');
            return;
        }
        
        // step 02 create user in firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setError('');
            event.target.reset();
            setSuccess('user has created successly');
        })
        .catch(error=>{
            // console.error(error.message);
            setError(error.message);
            // 
        })
       
    }

    const handleOnChange= (event)=>{
        // console.log(event.target.value);
        // setEmail(event.target.value);
    }

    const handlePasswordBlur=(event)=>{
        // console.log(event.target.value);
        // setPassword(event.target.value)
    }
    return (
        <div className='container'>
            <h3>please register</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={handleOnChange} type="email"  placeholder='your email' name="email" id="email" required />
                 <br />
                <input onBlur={handlePasswordBlur} className='my-3 ' type="password" placeholder='your password' name="password" id="password" required/> 
                <br />
                <input type="submit" value="register" />
            </form>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Register;