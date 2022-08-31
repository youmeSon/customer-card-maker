import React from 'react';
import CardEditor from '../card-editor/card-editor';
import Card from '../card/card';
import styles from './editor.module.css';

const Editor = ({cards}) => (
            <section className={styles.editor}>
                <h1 className={styles.title}>Card Editor</h1>
                {
                    cards.map(card => 
                        <CardEditor card={card} />
                    )
                }
            </section>
    );

export default Editor;