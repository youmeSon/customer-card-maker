import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';
import { useNavigate } from "react-router-dom";


const Login = ({authService}) => {

    let navigate = useNavigate();
    const goToMaker = (userId) => {
            navigate('/maker', {state: { id: userId}});
    }

    const onLogin = (event) => {
        authService.login(event.currentTarget.textContent)
        .then(data => goToMaker(data.user.uid));
        
        }

    const onLoginEmail = () => {
        const error = document.querySelector(`.${styles.error}`);
        const emailAddress = document.getElementById('LoginEmail').value;
        if(emailAddress.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
            authService.emailLogin(emailAddress);
        } else {
            error.classList.remove(styles.hide);
        }
        
    }
    return (
        <section className={styles.login}>
            <Header />
                <section className={styles.content}>
                    <h1>Log in</h1>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <button className={styles.button} onClick={onLogin}>Google</button>
                            </li>  
                        </ul>
                        <span className={styles.or}>or</span>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <input type="email" placeholder="Please enter your email" className={styles.input} id="LoginEmail"/>
                                <button className={styles.button} onClick={onLoginEmail}>Email</button>
                                <span className={`${styles.error} ${styles.hide}`} >Email address is invalid.</span>
                                <span className={`${styles.success} ${styles.hide}`} >Please check your email inbox.</span>
                            </li>  
                        </ul>
                </section>
            <Footer />
        </section>
            
    )};

export default Login;