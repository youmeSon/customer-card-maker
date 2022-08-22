import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';



const Login = ({authService}) => {
    const onLogin = () => {
        authService.login()
        .then(console.log)
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
                </section>
            <Footer />
        </section>
            
    )};

export default Login;