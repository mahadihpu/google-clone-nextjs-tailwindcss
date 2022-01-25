// import Image from 'next/image';
import React from 'react';

const Avatar = ({url,className}) => {
    console.log('className',className);
    return (
        
        <img src={url} alt="profile picture" className={` ${className} h-10 rounded-full cursor-pointer transform duration-150 hover:scale-110`} loading="lazy" />
    );
};

export default Avatar;