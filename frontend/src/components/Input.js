import React from 'react';
import styles from '../styles/Input.module.scss';

export default function Input(props) {
    return (
        <div className={styles.inputContainer}>
            <label className={styles.label}>{props.label}</label>
            <input
                className={styles.input}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
}

