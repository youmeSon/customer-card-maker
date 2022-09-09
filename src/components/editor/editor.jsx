import React from 'react';
import CardEditor from '../card-edit-form/card-edit-form';
import Card from '../card/card';
import styles from './editor.module.css';
import CardAddForm from './../card-add-form/card-add-form';

const Editor = ({cards, addCard, updateCard, deleteCard}) => (
            <section className={styles.editor}>
                <h1 className={styles.title}>Card Editor</h1>
                {
                    Object.keys(cards).map(key=> 
                        <CardEditor key={key} card={cards[key]} updateCard={updateCard} deleteCard={deleteCard}/>
                        
                    )
                    
                }
                <CardAddForm onAdd={addCard}/>
            </section>
    );

export default Editor;