import React from 'react';
import Header from '../header/header';
import Footer from './../footer/footer';
import styles from './maker.module.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const Maker = ({authService}) => {
    let navigate = useNavigate();

    const onLogout = () => {
        authService.logout();
    }

    useEffect(()=> {
        authService.onAuthChange(user => {
            if(!user) {
                navigate('/');
            }
        })
    })
    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <Footer />

        </section>
    )
}

export default Maker;