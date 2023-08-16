import React from 'react';
import unauthorized from "../assets/images/delivery/unauthorized.png";
import {NavLink} from "react-router-dom";
import {AUTH_ROUTE, PROFILE_ROUTE} from "../utils/consts";

const Unauthorized = () => {
    return (
        <React.Fragment>
            <div className="unauthorized__content">
                <div className="unauthorized__content-sticker">
                    <img src={unauthorized} alt="Весёлый хинкалик"/>
                </div>
                <div className="unauthorized__content-title">Вы не авторизованы</div>
                <div className="unauthorized__content-text">
                    Для доступа к сохранённым адресам доставки необходимо войти в свой профиль
                </div>
            </div>
            <div className="unauthorized__buttons">
                <NavLink to={AUTH_ROUTE} className="btn btn-md btn-red">Войти</NavLink>
                <NavLink to={PROFILE_ROUTE} className="btn btn-md btn-gray">Назад</NavLink>
            </div>
        </React.Fragment>
    );
};

export default Unauthorized;