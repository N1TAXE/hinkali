import React, {useContext, useState} from 'react';
import {NavLink} from "react-router-dom";
import {MAIN_ROUTE, PROFILE_ROUTE} from "../utils/consts";
import TabBar from "../components/TabBar";
import TopBar from "../components/TopBar";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {globals} = useContext(Context)
    const [auth, setAuth] = useState('phone')
    const [isSmsEnter, setIsSmsEnter] = useState(false)

    const getAuth = () => {
        switch (auth) {
            case 'phone':
                return (
                    <React.Fragment>
                        <div className="auth-content unauthorized__content">
                            <div className="auth-content__info">
                                <h2 className="auth-content__info-title">
                                    Укажите номер телефона
                                </h2>
                                <p className="auth-content__info-text">
                                    Чтобы быстро совершать заказы, получать скидки и использовать все преимущества регистрации
                                </p>
                            </div>
                            <div className="auth-content__inputs">
                                <div className="input__item input_icon input_icon_left">
                                    <div className="input__container">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M19.95 21C17.8 21 15.7042 20.5208 13.6625 19.5625C11.6208 18.6042 9.8125 17.3375 8.2375 15.7625C6.6625 14.1875 5.39583 12.3792 4.4375 10.3375C3.47917 8.29583 3 6.2 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.075 8.725 3.225C8.90833 3.375 9.01667 3.56667 9.05 3.8L9.7 7.3C9.73333 7.53333 9.72917 7.74583 9.6875 7.9375C9.64583 8.12917 9.55 8.3 9.4 8.45L6.975 10.9C7.675 12.1 8.55417 13.225 9.6125 14.275C10.6708 15.325 11.8333 16.2333 13.1 17L15.45 14.65C15.6 14.5 15.7958 14.3875 16.0375 14.3125C16.2792 14.2375 16.5167 14.2167 16.75 14.25L20.2 14.95C20.4333 15 20.625 15.1125 20.775 15.2875C20.925 15.4625 21 15.6667 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21ZM6.025 9L7.675 7.35L7.25 5H5.025C5.10833 5.68333 5.225 6.35833 5.375 7.025C5.525 7.69167 5.74167 8.35 6.025 9ZM19 18.95V16.75L16.65 16.275L14.975 17.95C15.625 18.2333 16.2875 18.4583 16.9625 18.625C17.6375 18.7917 18.3167 18.9 19 18.95Z" fill="#999999"/>
                                        </svg>
                                        <input placeholder="+7 (___) ___-__-__" name="search" type="tel"/>
                                    </div>
                                </div>
                                <label className="input__checkbox no-drag">
                                    <div className="checkbox">
                                        <input type="checkbox"/>
                                        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.71047 10.2901C5.32047 10.6801 4.69047 10.6801 4.30047 10.2901L0.710469 6.70006C0.320469 6.31006 0.320469 5.68006 0.710469 5.29006C1.10047 4.90006 1.73047 4.90006 2.12047 5.29006L5.00047 8.17006L11.8805 1.29006C12.2705 0.900059 12.9005 0.900059 13.2905 1.29006C13.6805 1.68006 13.6805 2.31006 13.2905 2.70006L5.71047 10.2901Z" fill="white"/>
                                        </svg>
                                    </div>
                                    <p className="input__checkbox-label">
                                        Войти как гость
                                    </p>
                                </label>
                            </div>
                        </div>
                        <div className="auth-footer">
                            <button onClick={() => setAuth('sms')} className="btn btn-md btn-red">Получить СМС-код</button>
                            <NavLink to={MAIN_ROUTE} className="auth-footer__link">
                                Продолжая, вы соглашаетесь на обработку персональных данных и условия пользовательского соглашения
                            </NavLink>
                        </div>
                    </React.Fragment>
                )

            case 'sms':
                return (
                    <React.Fragment>
                        <div className="auth-content unauthorized__content">
                            <div className="auth-content__info">
                                <h2 className="auth-content__info-title">
                                    Введите код из СМС
                                </h2>
                                <p className="auth-content__info-text">
                                    Код отправлен на номер
                                </p>
                                <h3 className="auth-content__info-numb">
                                    +7 999 360-19-36
                                </h3>
                            </div>
                            <div className="auth-content__inputs">
                                <div className="auth-content__inputs-sms validate--error">
                                    {Array.from({length:4},(_,i)=>(
                                        <NavLink to={PROFILE_ROUTE} onClick={() => globals.setIsAuth(true)}>
                                            <input key={i} type="text" placeholder="*"/>
                                        </NavLink>
                                    ))}
                                </div>
                                <span className="validate validate-error">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path d="M8.5 3.99329L13.52 12.6666H3.48L8.5 3.99329ZM2.32667 12C1.81333 12.8866 2.45333 14 3.48 14H13.52C14.5467 14 15.1867 12.8866 14.6733 12L9.65333 3.32662C9.14 2.43995 7.86 2.43995 7.34667 3.32662L2.32667 12ZM7.83333 7.33329V8.66662C7.83333 9.03329 8.13333 9.33329 8.5 9.33329C8.86667 9.33329 9.16667 9.03329 9.16667 8.66662V7.33329C9.16667 6.96662 8.86667 6.66662 8.5 6.66662C8.13333 6.66662 7.83333 6.96662 7.83333 7.33329ZM7.83333 10.6666H9.16667V12H7.83333V10.6666Z" fill="#8D191D"/>
                                    </svg>
                                    Неверный код, попробуйте ещё раз
                                </span>
                            </div>
                        </div>
                        <div className="auth-footer">
                            <button disabled className="btn btn-md btn-red">
                                Запросить новый код через 00:59
                            </button>
                            <button onClick={() => setAuth('phone')} className="btn-none btn btn-md">
                                Изменить номер телефона
                            </button>
                        </div>
                    </React.Fragment>
                )
        }
    }

    return(
        <div className="auth unauthorized">
            <TopBar page={'any'} title="Войти" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V17.2C4 16.6333 4.14583 16.1125 4.4375 15.6375C4.72917 15.1625 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6458 8.75 13.3875C9.81667 13.1292 10.9 13 12 13C13.1 13 14.1833 13.1292 15.25 13.3875C16.3167 13.6458 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2708 15.1625 19.5625 15.6375C19.8542 16.1125 20 16.6333 20 17.2V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z" fill="#8D191D"/></svg>}/>
            {getAuth()}
            <TabBar/>
        </div>
    )
});

export default Auth;