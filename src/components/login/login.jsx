import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';



const Login = ({authService}) => {
    const onLogin = () => {
        authService.login()
        .then(console.log)
    }
    return (
        <section>
            <Header />
                <section>
                    <h1>Log in</h1>
                        <ul>
                            <li>
                                <button onClick={onLogin}>Google</button>
                            </li>  
                        </ul>
                </section>
            <Footer />
        </section>
            
    )};

export default Login;