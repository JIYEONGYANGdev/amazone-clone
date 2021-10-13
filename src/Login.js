import React, {useState} from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { auth } from './firebase';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory(); //! redirect 하고싶은 페이지를 history dp push

    const login = e => {
        e.preventDefault(); // ! this stops the refresh! *form 제출 시 refresh 되는 걸 막는
        
        // do login logic..

        //? firebase에서 authentication탭에서 이메일 비번 사용 설정 check V
        auth.signInWithEmailAndPassword(email, password) //* track하려면? <- state
            .then((auth) => { // ** happens only if when successfully logged in
                //! logged in, redirect to hompage.. <- useHistory!!!
                history.push('/');
                //?? listener 가 필요함, 새로고침해도 login이 유지되는거나 logout 하는 거나 data layer로 tracking 되도록 
            })
            .catch(e => alert(e.message));
            
        }
    const register = e => {
        e.preventDefault();
        
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //! created a user and logged in..
            history.push('/');
            })
            .catch(e => alert(e.message));
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>  
                    <h5>E-mail</h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                    <button type='submit' onClick={login} className='login__signInButton'>Sign In</button>
                </form>
                <p>By signing-in you agree to Amazon's Condition of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our interest-Based Ads Notice.</p>
                <button type='submit' onClick={register} className='login__registerButton'>Create your Amazon Account</button>
                </div>

        </div>
    )
}

export default Login
