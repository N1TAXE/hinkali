import React, {useEffect, useState} from 'react';
import unauthorized from "../assets/images/delivery/unauthorized.png";
import {NavLink} from "react-router-dom";
import {AUTH_ROUTE, PROFILE_ROUTE} from "../utils/consts";

const UnAuthorized = ({page, setStatus}) => {
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')
    const [buttons, setButtons] = useState('')

    const getButtons = () => {
        switch (buttons) {
            case 'orders':
                return(
                    <React.Fragment>
                        <NavLink to={AUTH_ROUTE} className="btn btn-md btn-red">Войти</NavLink>
                        <NavLink to={PROFILE_ROUTE} className="btn btn-md btn-gray">Назад</NavLink>
                    </React.Fragment>
                )
            case 'deliveryAddresses':
                return(
                    <React.Fragment>
                        <NavLink to={AUTH_ROUTE} className="btn btn-md btn-red">Войти</NavLink>
                        <NavLink to={PROFILE_ROUTE} className="btn btn-md btn-gray">Назад</NavLink>
                    </React.Fragment>
                )
            case 'basket':
                return(
                    <NavLink to={AUTH_ROUTE} className="btn btn-md btn-red">Войти</NavLink>
                )
            case 'orderPlacement':
                return(
                    <React.Fragment>
                        <NavLink to={AUTH_ROUTE} className="btn btn-md btn-red">Войти</NavLink>
                        <button onClick={() => setStatus('remained')} className="btn btn-md btn-red">Остались товары</button>
                        <button onClick={() => setStatus('unAuthOrder')} className="btn btn-md btn-gray">Пропустить</button>
                    </React.Fragment>
                )
        }
    }

    useEffect(() => {
        switch (page) {
            case 'orders':
                setText('Для доступа к истории заказов необходимо войти в свой профиль')
                setTitle('Вы не авторизованы')
                setButtons('orders')
                return;
            case 'deliveryAddresses':
                setText('Для доступа к сохранённым адресам доставки необходимо войти в свой профиль')
                setTitle('Вы не авторизованы')
                setButtons('deliveryAddresses')
                return;
            case 'basket':
                setText('Если вы наполняли корзину при прошлом визите, войдите в свой профиль')
                setTitle('Ваша корзина пуста')
                setButtons('basket')
                return
            case 'orderPlacement':
                setText('Поздравим с днём рождения, расскажем об акциях, предложим специальные условия и многое другое')
                setTitle('Перед тем как продолжить рекомендуем авторизоваться')
                setButtons('orderPlacement')
                return
        }
    })

    return (
        <React.Fragment>
            <div className="unauthorized__content">
                <div className="unauthorized__content-sticker">
                    <img src={unauthorized} alt="Весёлый хинкалик"/>
                </div>
                <div className="unauthorized__content-title">{title}</div>
                <div className="unauthorized__content-text">
                    {text}
                </div>
            </div>
            <div className="unauthorized__buttons">
                {getButtons()}
            </div>
        </React.Fragment>
    );
};

export default UnAuthorized;