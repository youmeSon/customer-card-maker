import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMG = '/images/logo.png';
const Card = ({card}) => {
    const {name, message, theme, item, itemNumber, email, mobileNumber, fileName, fileURL} = card;
    const URL = fileURL || DEFAULT_IMG;
    return(
        <li className={`${styles.card} ${getStyle(theme)} `}>
            <img  className={styles.avatar} src={URL} alt={fileName} />
            <div className={styles.info} >
                <h1 className={styles.name} >{name}</h1>
                <p className={styles.email} >{email}</p>
                <p className={styles.mobile} >{mobileNumber}</p>
                <p className={styles.item} >{item} - {itemNumber}</p>
                <p className={styles.message} >Message: {message}</p>
            </div>
        </li>
    )
}
function getStyle(theme){
    switch(theme){
        case 'dark':
            return styles.dark;
        case 'light':
            return styles.light;
        case 'colourful':
            return styles.colourful;
            default:
            throw new Error('unknow theme: ${theme}');
    }
}
export default Card;