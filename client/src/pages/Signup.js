import React, { useState } from "react";
export default function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function signUp(ev){
        ev.preventDefault();
        await fetch('http://localhost:4000/signup', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        })
    }


    return (
        <form className="signup" onSubmit={signUp}>
        <h1>Sign Up</h1>
        <input type="text" placeholder="Username" value={username} onChange={ev => setUsername(ev.target.value)} />
        <input type="password" placeholder="Password" value={password}onChange={ev => setPassword(ev.target.value)}  />
        <button>Register</button>
    </form>
    );
}
