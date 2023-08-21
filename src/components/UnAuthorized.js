import React, {useContext, useEffect, useState} from 'react';
import unauthorized from "../assets/images/delivery/unauthorized.png";
import {NavLink} from "react-router-dom";
import {AUTH_ROUTE, CATALOGUE_ROUTE, PROFILE_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import no_addresses from "../assets/images/delivery/no_addresses.png";

const UnAuthorized = observer(({page, setStatus}) => {
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')
    const [textAuth, setTextAuth] = useState('')
    const [titleAuth, setTitleAuth] = useState('')
    const [buttons, setButtons] = useState('')
    const [authButtons, setAuthButtons] = useState('')
    const {globals} = useContext(Context)

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
        }
    }

    const getAuthButtons = () => {
        switch (authButtons) {
            case 'orders':
                return(
                    <React.Fragment>
                        <NavLink to={CATALOGUE_ROUTE} className="btn btn-md btn-red">На главную</NavLink>
                        <button onClick={() => setStatus('have')} className="btn btn-md btn-red">Тестовый список</button>
                        <NavLink to={PROFILE_ROUTE} className="btn btn-md btn-gray">Назад</NavLink>
                    </React.Fragment>
                )
            case 'deliveryAddresses':
                return(
                    <React.Fragment>
                        <NavLink to={CATALOGUE_ROUTE} className="btn btn-md btn-red">На главную</NavLink>
                        <button onClick={() => setStatus('have')} className="btn btn-md btn-red">Тестовый список</button>
                        <NavLink to={PROFILE_ROUTE} className="btn btn-md btn-gray">Назад</NavLink>
                    </React.Fragment>
                )
            case 'basket':
                return(
                    <React.Fragment>
                        <NavLink to={CATALOGUE_ROUTE} className="btn btn-md btn-red">На главную</NavLink>
                        <button onClick={() => setStatus('have')} className="btn btn-md btn-red">Тестовый список</button>
                        <button className="btn btn-none btn-none-defualt">Добавить блюда из последнего заказа</button>
                    </React.Fragment>
                )
        }
    }

    useEffect(() => {
        switch (page) {
            case 'orders':
                setText('Для доступа к истории заказов необходимо войти в свой профиль')
                setTitle('Вы не авторизованы')
                setTextAuth('Чтобы совершить свой первый заказ, выберете себе что‑нибудь вкусное на главной странице')
                setTitleAuth('У вас ещё не было заказов…')
                setButtons('orders')
                setAuthButtons('orders')
                return;
            case 'deliveryAddresses':
                setText('Для доступа к сохранённым адресам доставки необходимо войти в свой профиль')
                setTitle('Вы не авторизованы')
                setTextAuth('Добавьте адрес доставки для быстрого оформления ваших заказов')
                setTitleAuth('Нет адресов')
                setButtons('deliveryAddresses')
                setAuthButtons('deliveryAddresses')
                return;
            case 'basket':
                setText('Если вы наполняли корзину при прошлом визите, войдите в свой профиль')
                setTitle('Ваша корзина пуста')
                setTextAuth('Если вы наполняли корзину при прошлом визите, войдите в свой профиль')
                setTitleAuth('Ваша корзина пуста')
                setButtons('basket')
                setAuthButtons('basket')
                return
        }
    })

    return (
        <React.Fragment>
            {!globals.getIsAuth ? (
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
            ):(
                <React.Fragment>
                    <div className="authorized__content">
                        <div className="authorized__content-sticker">
                            <img src={no_addresses} alt="Грустный хинкалик"/>
                        </div>
                        <div className="authorized__content-title">
                            {titleAuth}
                        </div>
                        <div className="authorized__content-text">
                            {textAuth}
                        </div>
                    </div>
                    <div className="authorized__buttons">
                        {getAuthButtons()}
                    </div>
                </React.Fragment>
            )}
        </React.Fragment>
    );
});

export default UnAuthorized;