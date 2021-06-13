import React from 'react';
import './GenderRadio.css';

const GenderRadio = ({gender}) => {
    return (
        <div className="gender-radio">
            <div className="radio-avatar">

            </div>
            <p className="radio-gender-value">{gender}</p>
        </div>
    );
};

export default GenderRadio;