import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {CATALOGUE_ROUTE, PROFILE_ROUTE} from "../utils/consts";
import no_addresses from "../assets/images/delivery/no_addresses.png";

const Authorized = ({page, setStatus}) => {
    const [authButtons, setAuthButtons] = useState('')
    const [textAuth, setTextAuth] = useState('')
    const [titleAuth, setTitleAuth] = useState('')

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
                setTextAuth('Чтобы совершить свой первый заказ, выберете себе что‑нибудь вкусное на главной странице')
                setTitleAuth('У вас ещё не было заказов…')
                setAuthButtons('orders')
                return;
            case 'deliveryAddresses':
                setTextAuth('Добавьте адрес доставки для быстрого оформления ваших заказов')
                setTitleAuth('Нет адресов')
                setAuthButtons('deliveryAddresses')
                return;
            case 'basket':
                setTextAuth('Если вы наполняли корзину при прошлом визите, войдите в свой профиль')
                setTitleAuth('Ваша корзина пуста')
                setAuthButtons('basket')
                return
        }
    })

    return (
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
    );
};

export default Authorized;