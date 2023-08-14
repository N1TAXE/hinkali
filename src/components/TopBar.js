import React from 'react';

const Header = ({title,icon}) => {
    return (
        <div className="top-bar">
            <div className="top-bar__icon">
                {icon}
            </div>
            {title}
        </div>
    );
};

export default Header;