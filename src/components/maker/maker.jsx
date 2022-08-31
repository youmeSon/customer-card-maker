import React from 'react';
import Header from '../header/header';
import Footer from './../footer/footer';
import styles from './maker.module.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import { useState } from 'react';

const Maker = ({authService}) => {
    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'Yena',
            theme: 'light',
            item: 'blue shirt',
            itemNumber: '1234',
            email: 'winellyoume@gmail.com',
            mobileNumber: '07464604222',
            fileName: 'youme',
            fileURL: 'youme.png'
        },
        {
            id: '2',
            name: 'Hyodon',
            theme: 'light',
            item: 'Pink pants',
            itemNumber: '4567',
            email: 'winellyoume2@gmail.com',
            mobileNumber: '07464604322',
            fileName: 'youme',
            fileURL: 'youme.png'
        },
        {
            id: '3',
            name: 'Youme',
            theme: 'light',
            item: 'Green Skirt',
            itemNumber: '3463',
            email: 'winellyoume3@gmail.com',
            mobileNumber: '07464604422',
            fileName: 'youme',
            fileURL: 'youme.png'
        }
    ])
    const navigate = useNavigate();

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
                    <Editor cards={cards}/>
                    <Preview cards={cards}/>
                </div>
            <Footer />
        </section>
    )
}

export default Maker;