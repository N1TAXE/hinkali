import React from 'react';
import {NavLink} from "react-router-dom";
import {MAIN_ROUTE} from "../../utils/consts";
import iconPhone from "../../assets/images/icons/phone.png";
import iconStore from "../../assets/images/icons/store.png";

const CatalogTopInfo = () => {
    return (
        <div className="catalogue-header__info">
            <NavLink to={MAIN_ROUTE} className="catalogue-header__info-geo">
                <img src={iconStore} alt="Ресторанчик"/>
                Симферополь, ул. Турецкая, 25
            </NavLink>

            <NavLink to="tel:79781297087" className="catalogue-header__info-phone">
                <img src={iconPhone} alt="Телефончик"/>
                +7 978 129-70-87
            </NavLink>
        </div>
    );
};

export default CatalogTopInfo;