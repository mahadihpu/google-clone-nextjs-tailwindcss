import React from 'react';

const HeaderElement = ({Icon, title,selected}) => {
    return (
        <div className={`flex ${selected && 'text-blue-500'} items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:cursor-pointer hover:border-blue-300`}>
            <Icon className="h-4" /><p className="hidden sm:inline-flex">{title}</p>
        </div>
    );
};

export default HeaderElement;