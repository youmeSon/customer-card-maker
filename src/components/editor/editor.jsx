import React from 'react';
import CardEditor from '../card-edit-form/card-edit-form';
import Card from '../card/card';
import styles from './editor.module.css';
import CardAddForm from './../card-add-form/card-add-form';

const Editor = ({cards, addCard}) => (
            <section className={styles.editor}>
                <h1 className={styles.title}>Card Editor</h1>
                {
                    cards.map(card => 
                        <CardEditor key={card.id} card={card} />
                        
                    )
                    
                }
                <CardAddForm onAdd={addCard}/>
            </section>
    );

export default Editor;