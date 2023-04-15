import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-center mt-5 m-3'>         
            <Link to='/'>Home</Link>
            <Link className='mx-3' to='/about'>About</Link>
            <Link to='/login'>Login</Link>
            <Link className='mx-3' to='/register'>Register</Link>
        </div>
    );
};

export default Header;