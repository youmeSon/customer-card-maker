import React from 'react';
import Header from '../header/header';
import Footer from './../footer/footer';
import styles from './maker.module.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

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
                <div className={styles.container}>
                    <Editor />
                    <Preview />
                </div>
            <Footer />
        </section>
    )
}

export default Maker;