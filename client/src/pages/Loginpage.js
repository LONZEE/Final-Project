import React from 'react';

export default function Loginpage() {
    return (
    
            <form className='login'>
                <h1>Login</h1>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </form>
        
    );
}