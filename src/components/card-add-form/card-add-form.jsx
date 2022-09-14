import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './card-add-form.module.css';

const CardAddForm = ({FileInput, onAdd}) => {
    const formRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const themeRef = useRef();
    const mobileNumberRef = useRef();
    const itemRef = useRef();
    const itemNumberRef = useRef();
    const messageRef = useRef();
   
    const onSubmit = (event) => {
        event.preventDefault();
        const card = {
            id: Date.now(),
            name: nameRef.current.value || '',
            email: emailRef.current.value || '',
            theme: themeRef.current.value,
            mobileNumber: mobileNumberRef.current.value || '',
            item: itemRef.current.value || '',
            itemNumber: itemNumberRef.current.value || '',
            message: messageRef.current.value || '',
            fileNaem: '',
            fileURL: '',
        }
        formRef.current.reset();
        onAdd(card);
    }
    
    return (
        <form ref={formRef} className={styles.form}>
            <input ref={nameRef} className={styles.input} type="text" name="name" placeholder="name" />
            <input ref={emailRef} className={styles.input} type="text" name="email" placeholder="email" />
            <select ref={themeRef} className={styles.dropdown} name="theme" placeholder="theme">
                <option placeholder="dark" >dark</option>
                <option placeholder="light">light</option>
                <option placeholder="colourful">colourful</option>
            </select>
            <input ref={mobileNumberRef} className={styles.input} type="text" name="mobileNumber" placeholder="mobileNumber" />
            <input ref={itemRef} className={styles.input} type="text" name="item" placeholder="item" />
            <input ref={itemNumberRef} className={styles.input} type="text" name="itemNumber" placeholder="itemNumber" />
            <textarea ref={messageRef} className={styles.message} name="message" placeholder="message"></textarea>
            <Button name="Add" onClick={onSubmit}/>
            <div className ={styles.fileInput}>
                <FileInput />
            </div>
        </form>
    )
}

export default CardAddForm;