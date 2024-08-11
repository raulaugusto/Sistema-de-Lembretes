import React from 'react';
import styles from '../styles/Input.module.scss';

export default function Input({ htmlFor, id, label, type, placeholder, value, onChange }) {
    return (
        <div className={styles.inputContainer}>
            <label htmlFor={htmlFor} className={styles.label}>{label}</label>
            <input
                id={id}
                className={styles.input}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
