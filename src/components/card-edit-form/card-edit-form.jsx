import React from 'react';
import Button from '../button/button';
import styles from './card-edit-form.module.css';
import ImageFileInput from '../image-file-input/image-file-input';

const CardEditor = ({card}) => {
    const {name, message, theme, item, itemNumber, email, mobileNumber, fileName, fileURL} = card;
    const onSubmit = () => {

    }
    
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" name="name" value={name} />
            <input className={styles.input} type="text" name="email" value={email} />
            <select className={styles.dropdown} name="theme" value={theme}>
                <option value="dark" >Dark</option>
                <option value="light">Light</option>
                <option value="colourful">Colourful</option>
            </select>
            <input className={styles.input} type="text" name="mobileNumber" value={mobileNumber} />
            <input className={styles.input} type="text" name="item" value={item} />
            <input className={styles.input} type="text" name="itemNumber" value={itemNumber} />
            <textarea className={styles.message} name="message" value={message}></textarea>
            <Button name="Delete" onClick={onSubmit}/>
            <div className ={styles.fileInput}>
                <ImageFileInput />
            </div>
        </form>
    )
}

export default CardEditor;