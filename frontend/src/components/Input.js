import React from 'react';
import './Input.css'

export default function Input(props) {
    return (
        <div id="input">
            <label >{props.label}</label>
            <input id='answer'
                type={props.type} 
                placeholder={props.placeholder} 
                value={props.value} 
                onChange={props.onChange}
            />
        </div>
    );
}
