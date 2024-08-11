import React from 'react';
import styles from '../styles/Input.module.scss';

export default function Input(props) {
    return (
        <div className={styles.inputContainer}>
            <label htmlFor={props.htmlFor}className={styles.label}>{props.label}</label>
            <input
                id={props.id}
                className={styles.input}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
}

