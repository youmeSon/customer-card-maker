import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './card-edit-form.module.css';

const CardEditor = ({FileInput, card, updateCard, deleteCard}) => {
    
    const nameRef = useRef();
    const emailRef = useRef();
    const themeRef = useRef();
    const mobileNumberRef = useRef();
    const itemRef = useRef();
    const itemNumberRef = useRef();
    const messageRef = useRef();

    const {name, message, theme, item, itemNumber, email, mobileNumber, fileName, fileURL} = card;
    const onSubmit = () => {
        deleteCard(card)
    }

    const onChange = (event) => {
        if(event.currentTarget == null){
            return;
        }
        event.preventDefault();
        updateCard({...card, [event.currentTarget.name]: event.currentTarget.value,})
    };
    
    return (
        <form className={styles.form}>
            <input ref={nameRef} className={styles.input} type="text" name="name" value={name}  onChange={onChange}/>
            <input ref={emailRef} className={styles.input} type="text" name="email" value={email}  onChange={onChange}/>
            <select ref={themeRef} className={styles.dropdown} name="theme" value={theme}>
                <option value="dark" >Dark</option>
                <option value="light">Light</option>
                <option value="colourful">Colourful</option>
            </select>
            <input ref={mobileNumberRef} className={styles.input} type="text" name="mobileNumber" value={mobileNumber}  onChange={onChange}/>
            <input ref={itemRef} className={styles.input} type="text" name="item" value={item}  onChange={onChange}/>
            <input ref={itemNumberRef} className={styles.input} type="text" name="itemNumber" value={itemNumber}  onChange={onChange}/>
            <textarea ref={messageRef} className={styles.message} name="message" value={message} onChange={onChange}></textarea>
            <Button name="Delete" onClick={onSubmit}/>
            <div className ={styles.fileInput}>
                <FileInput />
            </div>
        </form>
    )
}

export default CardEditor;