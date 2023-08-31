import React, {useContext, useState} from 'react';
import {NavLink} from "react-router-dom";
import {MAIN_ROUTE, PROFILE_ROUTE} from "../utils/consts";
import TabBar from "../components/TabBar";
import TopBar from "../components/TopBar";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import iconPhone from "../assets/images/icons/phone_gray.png"
import iconWarning from "../assets/images/icons/warning.png";

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
                                        <img src={iconPhone} alt=""/>
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
                                    <img src={iconWarning} alt=""/>
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