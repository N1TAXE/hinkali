import React from 'react';

const CatalogStories = () => {
    return (
        <div className="catalogue-header__stories">
            {Array.from({length:6},(_,i)=>(
                <div key={i} className="catalogue-header__stories__item">
                    <div className="catalogue-header__stories__item-title">Весеннее меню</div>
                </div>
            ))}
        </div>
    );
};

export default CatalogStories;