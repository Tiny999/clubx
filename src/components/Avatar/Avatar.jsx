import React from 'react';
import Default from '../../assets/images/avatar-default.svg';

import './Avatar.css';

const Avatar = ({src, size}) => {
    return (
        <>
            <img src={src ? src : Default} alt="avatar" className={`avatar avatar-${size}`} />
        </>
    )
};

export default Avatar;