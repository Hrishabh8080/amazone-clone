import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './css/Login.css'
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // console.log(auth);
                if (auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.log))
    }
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .auth(auth => {
                history.push('/');
            })
            .catch(error => alert(error.message))

    }

    return (
        <div className='login'>
            <Link to="/">
                <img className='login__logo' src="https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" name="" id="" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" name="" id="" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>

                    <p>By continuing, you agree to Amazon's Clone Conditions of Use and Privacy Notice. </p>
                    <button onClick={register} className='login__registerButton'>Create new Amazon account</button>
                </form>
            </div>
        </div>
    )
}
export default Login
