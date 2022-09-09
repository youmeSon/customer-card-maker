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
    const [cards, setCards] = useState({
        1:  {
            id: '1',
            name: 'Youme',
            theme: 'dark',
            item: 'blue shirt',
            itemNumber: '1234',
            email: 'winellyoume@gmail.com',
            mobileNumber: '07464604222',
            fileName: 'youme',
            fileURL: null,
            message: 'Hello',
        },
        2: {
            id: '2',
            name: 'Hyodon',
            theme: 'light',
            item: 'Pink pants',
            itemNumber: '4567',
            email: 'winellyoume2@gmail.com',
            mobileNumber: '07464604322',
            fileName: 'youme',
            fileURL: null,
            message: 'Hello',
        },
        3: {
            id: '3',
            name: 'Yena',
            theme: 'colourful',
            item: 'Green Skirt',
            itemNumber: '3463',
            email: 'winellyoume3@gmail.com',
            mobileNumber: '07464604422',
            fileName: 'youme',
            fileURL: null,
            message: 'Hello',
        },
    })
    
    
    
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
    });


    const updateOrAddCard = (card) => {
        setCards(cards => {
        const updated = {...cards};
        updated[card.id] = card;
        return updated;
       })
    }

    const deleteCard = () => {
        console.log('hey');
    }
    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
                <div className={styles.container}>
                    <Editor cards={cards} addCard={updateOrAddCard} updateCard={updateOrAddCard} deleteCard={deleteCard}/>
                    <Preview cards={cards}/>
                </div>
            <Footer />
        </section>
    )
}

export default Maker;