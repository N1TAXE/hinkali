import React, {useContext, useState} from 'react';
import TopBar from "../components/TopBar";
import TabBar from "../components/TabBar";
import UnAuthorized from "../components/UnAuthorized";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {NavLink} from "react-router-dom";
import {BASKET_ROUTE, MAIN_ROUTE} from "../utils/consts";

const OrderPlacement = observer(() => {
    const {globals} = useContext(Context)
    const [orderPlacement, setOrderPlacement] = useState('unAuthOrder')
    const getOrderPlacement = () => {
        switch (orderPlacement) {
            case 'empty':
                return(
                    <UnAuthorized page={'orderPlacement'} setStatus={setOrderPlacement}/>
                )
            case 'remained':
                return(
                    <React.Fragment>
                        <div className="order-placement-remained">
                            <div className="order-placement-remained__content">
                                <div className="order-placement-remained__content__info">
                                    <h3 className="order-placement-remained__content__info-title">
                                        В прошлый раз вы наполнили корзину, но не оформили заказ.
                                    </h3>
                                    <div className="order-placement-remained__content__info-addition">
                                        Вы можете просто очистить старую корзину или объединить всё и редактировать при необходимости
                                    </div>
                                </div>
                                <div className="order-placement-remained__content__list">
                                    {Array.from({length:3}, (_,i) => (
                                        <div className="order-placement-remained__content__list__item">
                                            <div className="order-placement-remained__content__list__item__info">
                                                <div className="order-placement-remained__content__list__item__info-title">Хинкали с мясом без зелени</div>
                                                <div className="order-placement-remained__content__list__item__info-cost">
                                                    <span>465 ₽</span>
                                                    500 ₽
                                                </div>
                                            </div>
                                            <div className="order-placement-remained__content__list__item-price">
                                                35 ₽ × 2 шт.
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="order-placement-remained__buttons">
                                <button className="btn btn-md btn-red">Объединить всё</button>
                                <button className="btn btn-md btn-gray">Очистить старую корзину</button>
                            </div>
                        </div>
                    </React.Fragment>
                )
            case 'unAuthOrder':
                return (
                    <React.Fragment>
                        <div className="order-placement__tabs">
                            <div className="form-radio">
                                <label>Способ получения</label>
                                <div className="form-radio__toggle">
                                    <div className="form-radio__toggle__item">
                                        <input type="radio" name="delivery" checked/>
                                        <div className="form-radio__toggle__item-tab">
                                            Доставка
                                        </div>
                                    </div>
                                    <div className="form-radio__toggle__item">
                                        <input type="radio" name="delivery"/>
                                        <div className="form-radio__toggle__item-tab">
                                            Самовывоз
                                        </div>
                                    </div>
                                    <div className="form-radio__toggle__item">
                                        <input type="radio" name="delivery"/>
                                        <div className="form-radio__toggle__item-tab">
                                            За столиком
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-placement__form">
                            <div className="input__item input_icon input_icon_left input_icon_right">
                                <label htmlFor="adresses-delivey">Адрес доставки</label>
                                <div className="input__container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7875 16.525 14.2625C17.5083 12.7375 18 11.3833 18 10.2C18 8.38333 17.4208 6.89583 16.2625 5.7375C15.1042 4.57917 13.6833 4 12 4C10.3167 4 8.89583 4.57917 7.7375 5.7375C6.57917 6.89583 6 8.38333 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35ZM12 21.625C11.8667 21.625 11.7333 21.6 11.6 21.55C11.4667 21.5 11.35 21.4333 11.25 21.35C8.81667 19.2 7 17.2042 5.8 15.3625C4.6 13.5208 4 11.8 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8 19.4 13.5208 18.2 15.3625C17 17.2042 15.1833 19.2 12.75 21.35C12.65 21.4333 12.5333 21.5 12.4 21.55C12.2667 21.6 12.1333 21.625 12 21.625Z" fill="#999999"/>
                                    </svg>
                                    <input placeholder="ул. Севастопольская, 126, Симферополь" name="adresses-delivey" type="text"/>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7875 16.525 14.2625C17.5083 12.7375 18 11.3833 18 10.2C18 8.38333 17.4208 6.89583 16.2625 5.7375C15.1042 4.57917 13.6833 4 12 4C10.3167 4 8.89583 4.57917 7.7375 5.7375C6.57917 6.89583 6 8.38333 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35ZM12 21.625C11.8667 21.625 11.7333 21.6 11.6 21.55C11.4667 21.5 11.35 21.4333 11.25 21.35C8.81667 19.2 7 17.2042 5.8 15.3625C4.6 13.5208 4 11.8 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8 19.4 13.5208 18.2 15.3625C17 17.2042 15.1833 19.2 12.75 21.35C12.65 21.4333 12.5333 21.5 12.4 21.55C12.2667 21.6 12.1333 21.625 12 21.625Z" fill="#999999"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="input__item input_icon input_icon_left">
                                <label htmlFor="user">Получатель</label>
                                <div className="input__container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM18 20H6C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V17.2C4 16.6333 4.14583 16.1125 4.4375 15.6375C4.72917 15.1625 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6458 8.75 13.3875C9.81667 13.1292 10.9 13 12 13C13.1 13 14.1833 13.1292 15.25 13.3875C16.3167 13.6458 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2708 15.1625 19.5625 15.6375C19.8542 16.1125 20 16.6333 20 17.2V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20ZM6 18H18V17.2C18 17.0167 17.9542 16.85 17.8625 16.7C17.7708 16.55 17.65 16.4333 17.5 16.35C16.6 15.9 15.6917 15.5625 14.775 15.3375C13.8583 15.1125 12.9333 15 12 15C11.0667 15 10.1417 15.1125 9.225 15.3375C8.30833 15.5625 7.4 15.9 6.5 16.35C6.35 16.4333 6.22917 16.55 6.1375 16.7C6.04583 16.85 6 17.0167 6 17.2V18ZM12 10C12.55 10 13.0208 9.80417 13.4125 9.4125C13.8042 9.02083 14 8.55 14 8C14 7.45 13.8042 6.97917 13.4125 6.5875C13.0208 6.19583 12.55 6 12 6C11.45 6 10.9792 6.19583 10.5875 6.5875C10.1958 6.97917 10 7.45 10 8C10 8.55 10.1958 9.02083 10.5875 9.4125C10.9792 9.80417 11.45 10 12 10Z" fill="#999999"/>
                                    </svg>
                                    <input placeholder="Username" name="user" type="text"/>
                                </div>
                                <div className="input__container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M19.95 21C17.8 21 15.7042 20.5208 13.6625 19.5625C11.6208 18.6042 9.8125 17.3375 8.2375 15.7625C6.6625 14.1875 5.39583 12.3792 4.4375 10.3375C3.47917 8.29583 3 6.2 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.075 8.725 3.225C8.90833 3.375 9.01667 3.56667 9.05 3.8L9.7 7.3C9.73333 7.53333 9.72917 7.74583 9.6875 7.9375C9.64583 8.12917 9.55 8.3 9.4 8.45L6.975 10.9C7.675 12.1 8.55417 13.225 9.6125 14.275C10.6708 15.325 11.8333 16.2333 13.1 17L15.45 14.65C15.6 14.5 15.7958 14.3875 16.0375 14.3125C16.2792 14.2375 16.5167 14.2167 16.75 14.25L20.2 14.95C20.4333 15 20.625 15.1125 20.775 15.2875C20.925 15.4625 21 15.6667 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21ZM6.025 9L7.675 7.35L7.25 5H5.025C5.10833 5.68333 5.225 6.35833 5.375 7.025C5.525 7.69167 5.74167 8.35 6.025 9ZM19 18.95V16.75L16.65 16.275L14.975 17.95C15.625 18.2333 16.2875 18.4583 16.9625 18.625C17.6375 18.7917 18.3167 18.9 19 18.95Z" fill="#999999"/>
                                    </svg>
                                    <input placeholder="+7 999 999-99-99" name="user" type="number"/>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 14C12.55 14 13.0208 13.8042 13.4125 13.4125C13.8042 13.0208 14 12.55 14 12C14 11.45 13.8042 10.9792 13.4125 10.5875C13.0208 10.1958 12.55 10 12 10C11.45 10 10.9792 10.1958 10.5875 10.5875C10.1958 10.9792 10 11.45 10 12C10 12.55 10.1958 13.0208 10.5875 13.4125C10.9792 13.8042 11.45 14 12 14ZM8 18H16V17.425C16 17.025 15.8917 16.6583 15.675 16.325C15.4583 15.9917 15.1583 15.7417 14.775 15.575C14.3417 15.3917 13.8958 15.25 13.4375 15.15C12.9792 15.05 12.5 15 12 15C11.5 15 11.0208 15.05 10.5625 15.15C10.1042 15.25 9.65833 15.3917 9.225 15.575C8.84167 15.7417 8.54167 15.9917 8.325 16.325C8.10833 16.6583 8 17.025 8 17.425V18ZM18 22H6C5.45 22 4.97917 21.8042 4.5875 21.4125C4.19583 21.0208 4 20.55 4 20V4C4 3.45 4.19583 2.97917 4.5875 2.5875C4.97917 2.19583 5.45 2 6 2H13.175C13.4417 2 13.6958 2.05 13.9375 2.15C14.1792 2.25 14.3917 2.39167 14.575 2.575L19.425 7.425C19.6083 7.60833 19.75 7.82083 19.85 8.0625C19.95 8.30417 20 8.55833 20 8.825V20C20 20.55 19.8042 21.0208 19.4125 21.4125C19.0208 21.8042 18.55 22 18 22ZM18 20V8.85L13.15 4H6V20H18Z" fill="#999999"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="input__item input_icon input_icon_left input_icon_right">
                                <label htmlFor="adresses-delivey">Время доставки</label>
                                <div className="input__container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M14.0001 1H10.0001C9.4501 1 9.0001 1.45 9.0001 2C9.0001 2.55 9.4501 3 10.0001 3H14.0001C14.5501 3 15.0001 2.55 15.0001 2C15.0001 1.45 14.5501 1 14.0001 1ZM12.0001 14C12.5501 14 13.0001 13.55 13.0001 13V9C13.0001 8.45 12.5501 8 12.0001 8C11.4501 8 11.0001 8.45 11.0001 9V13C11.0001 13.55 11.4501 14 12.0001 14ZM19.0301 7.39L19.7801 6.64C20.1601 6.26 20.1701 5.63 19.7801 5.24L19.7701 5.23C19.3801 4.84 18.7601 4.85 18.3701 5.23L17.6201 5.98C16.0701 4.74 14.1201 4 12.0001 4C7.2001 4 3.1201 7.96 3.0001 12.76C2.8701 17.84 6.9401 22 12.0001 22C16.9801 22 21.0001 17.97 21.0001 13C21.0001 10.88 20.2601 8.93 19.0301 7.39ZM12.0001 20C8.1301 20 5.0001 16.87 5.0001 13C5.0001 9.13 8.1301 6 12.0001 6C15.8701 6 19.0001 9.13 19.0001 13C19.0001 16.87 15.8701 20 12.0001 20Z" fill="#999999"/>
                                    </svg>
                                    <input placeholder="В ближайшее время" name="adresses-delivey" type="text"/>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M8.11973 9.29006L11.9997 13.1701L15.8797 9.29006C16.2697 8.90006 16.8997 8.90006 17.2897 9.29006C17.6797 9.68006 17.6797 10.3101 17.2897 10.7001L12.6997 15.2901C12.3097 15.6801 11.6797 15.6801 11.2897 15.2901L6.69973 10.7001C6.30973 10.3101 6.30973 9.68006 6.69973 9.29006C7.08973 8.91006 7.72973 8.90006 8.11973 9.29006Z" fill="#999999"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="d-flex flex-center gap-8">
                                <div className="input__item flex-big">
                                    <label htmlFor="street">Улица</label>
                                    <div className="input__container">
                                        <input placeholder="Улица" name="street" type="text"/>
                                    </div>
                                </div>
                                <div className="input__item flex-small">
                                    <label htmlFor="house">Дом</label>
                                    <div className="input__container">
                                        <input placeholder="Дом" name="house" type="text"/>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-center gap-8">
                                <div className="input__item">
                                    <label htmlFor="entrance">Подъезд</label>
                                    <div className="input__container">
                                        <input placeholder="Подъезд" name="entrance" type="number"/>
                                    </div>
                                </div>
                                <div className="input__item">
                                    <label htmlFor="apartment/office">Кв/офис</label>
                                    <div className="input__container">
                                        <input placeholder="Кв/офис" name="apartment/office" type="text"/>
                                    </div>
                                </div>
                                <div className="input__item">
                                    <label htmlFor="floor">Этаж</label>
                                    <div className="input__container">
                                        <input placeholder="Этаж" name="floor" type="number"/>
                                    </div>
                                </div>
                            </div>
                            <div className="input__item">
                                <label htmlFor="comment">Комментарий к заказу</label>
                                <div className="input__container">
                                    <input placeholder="Вы можете добавить примечания к заказу" name="comment" type="text"/>
                                </div>
                            </div>
                        </div>
                        <div className="order-placement__payment-method">
                            <h2 className="order-placement__payment-method-title">Способ оплаты</h2>
                            <div className="order-placement__payment-method__item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M2 17C2 16.4477 2.44772 16 3 16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H3C2.44772 18 2 17.5523 2 17Z" fill="#8D191D"/>
                                    <path d="M2 20C2 19.4477 2.44772 19 3 19H21C21.5523 19 22 19.4477 22 20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20Z" fill="#8D191D"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M22 5C22 3.89543 21.1046 3 20 3H4C2.89543 3 2 3.89543 2 5V13C2 14.1046 2.89543 15 4 15H20C21.1046 15 22 14.1046 22 13V5ZM5 5C4.44772 5 4 5.44772 4 6V12C4 12.5523 4.44772 13 5 13H19C19.5523 13 20 12.5523 20 12V6C20 5.44772 19.5523 5 19 5H5Z" fill="#8D191D"/>
                                    <path d="M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z" fill="#8D191D"/>
                                    <path d="M18 9C18 9.55228 17.5523 10 17 10C16.4477 10 16 9.55228 16 9C16 8.44772 16.4477 8 17 8C17.5523 8 18 8.44772 18 9Z" fill="#8D191D"/>
                                    <path d="M8 9C8 9.55228 7.55228 10 7 10C6.44772 10 6 9.55228 6 9C6 8.44772 6.44772 8 7 8C7.55228 8 8 8.44772 8 9Z" fill="#8D191D"/>
                                </svg>
                                <div className="order-placement__payment-method__item-name">Наличными</div>
                                <div className="order-placement__payment-method__item-btn">
                                    <input name="payment-method" type="radio" checked/>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#B3B3B3"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="input__item">
                                <label htmlFor="change">С какой суммы подготовить сдачу?</label>
                                <div className="input__container">
                                    <input placeholder="2 000 ₽" name="change" type="text"/>
                                    <button className="btn btn-none">Без сдачи</button>
                                </div>
                            </div>
                            <div className="order-placement__payment-method__item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM19 18H5C4.45 18 4 17.55 4 17V12H20V17C20 17.55 19.55 18 19 18ZM20 8H4V6H20V8Z" fill="#8D191D"/>
                                </svg>
                                <div className="order-placement__payment-method__item-name">Картой</div>
                                <div className="order-placement__payment-method__item-btn">
                                    <input name="payment-method" type="radio"/>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#B3B3B3"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="order-placement__payment-method__item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3 4V6.94911L2 6.53111V15.82L12 20L22 15.82V6.53111L21 6.94911V4L12 7.49673L3 4ZM16.3278 11.1365L20 9.70977V14.4216L12 17.7656L4 14.4216V9.70977L7.67218 11.1365L12 12.9455L16.3278 11.1365ZM19 7.78511V6.99009L12 9.70977L5 6.99009V7.78511L8.39755 9.20529L12 10.6049L15.6024 9.20529L19 7.78511Z" fill="#8D191D"/>
                                </svg>
                                <div className="order-placement__payment-method__item-name">Онлайн (PayMaster)</div>
                                <div className="order-placement__payment-method__item-btn">
                                    <input name="payment-method" type="radio"/>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#B3B3B3"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="order-placement__check">
                            <div className="order-placement__check__info">
                                <h2 className="order-placement__check__info-title">Ваш заказ</h2>
                                <div className="order-placement-remained__content__list order-placement__check__info__list">
                                    {Array.from({length:3}, (_,i) => (
                                        <div className="order-placement-remained__content__list__item">
                                            <div className="order-placement-remained__content__list__item__info">
                                                <div className="order-placement-remained__content__list__item__info-title">Хинкали с мясом без зелени</div>
                                                <div className="order-placement-remained__content__list__item__info-cost">
                                                    <span>465 ₽</span>
                                                    500 ₽
                                                </div>
                                            </div>
                                            <div className="order-placement-remained__content__list__item-price">
                                                35 ₽ × 2 шт.
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="order-placement__check__info__price">
                                    <h3 className="order-placement__check__info__price-title">Стоимость заказа</h3>
                                    <div className="order-placement__check__info__price-cost">
                                        <span>700 ₽</span>
                                        550 ₽
                                    </div>
                                </div>
                                <div className="order-placement__check__info__delivery">
                                    <div className="order-placement__check__info__delivery__price">
                                        <h3 className="order-placement__check__info__delivery__price-title">Доставка</h3>
                                        <div className="order-placement__check__info__delivery__price-cost">
                                            <span></span>
                                            Бесплатно
                                        </div>
                                    </div>
                                    <div className="order-placement__check__info__delivery__info">
                                        <div className="order-placement__check__info__delivery__info-time">В ближайшее время</div>
                                        <div className="order-placement__check__info__delivery__info-contact">Username +7 999 999-99-99</div>
                                        <div className="order-placement__check__info__delivery__info-addresses">ул. Севастопольская, д. 26, кв. 2, Симферополь</div>
                                        <div className="order-placement__check__info__delivery__info-additional">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M7.33301 4.66683H8.66634V6.00016H7.33301V4.66683ZM7.99967 11.3335C8.36634 11.3335 8.66634 11.0335 8.66634 10.6668V8.00016C8.66634 7.6335 8.36634 7.3335 7.99967 7.3335C7.63301 7.3335 7.33301 7.6335 7.33301 8.00016V10.6668C7.33301 11.0335 7.63301 11.3335 7.99967 11.3335ZM7.99967 1.3335C4.31967 1.3335 1.33301 4.32016 1.33301 8.00016C1.33301 11.6802 4.31967 14.6668 7.99967 14.6668C11.6797 14.6668 14.6663 11.6802 14.6663 8.00016C14.6663 4.32016 11.6797 1.3335 7.99967 1.3335ZM7.99967 13.3335C5.05967 13.3335 2.66634 10.9402 2.66634 8.00016C2.66634 5.06016 5.05967 2.66683 7.99967 2.66683C10.9397 2.66683 13.333 5.06016 13.333 8.00016C13.333 10.9402 10.9397 13.3335 7.99967 13.3335Z" fill="#558950"/>
                                            </svg>
                                            Для бесплатной доставки добавьте ещё на
                                            <span>850 ₽</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-placement__check__info__total">
                                    <h2 className="order-placement__check__info__total-title">Итого</h2>
                                    <div className="order-placement__check__info__total-cost">
                                        <span>700 ₽</span>
                                        550 ₽
                                    </div>
                                </div>
                                <div className="order-placement__check__info__payment">
                                    <h3 className="order-placement__check__info__payment-title">Оплата</h3>
                                    <div className="order-placement__check__info__payment__info">
                                        <div className="order-placement__check__info__payment__info__item">
                                            <div className="order-placement__check__info__payment__info__item-name">Наличными</div>
                                            <div className="order-placement__check__info__payment__info__item-cost">2 000 ₽</div>
                                        </div>
                                        <div className="order-placement__check__info__payment__info__item">
                                            <div className="order-placement__check__info__payment__info__item-name">Сдача</div>
                                            <div className="order-placement__check__info__payment__info__item-cost">1 400 ₽</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-placement__buttons">
                            <button className="btn btn-md btn-red">Всё верно, продолжить</button>
                            <button className="btn btn-md btn-gray">Назад</button>
                            <NavLink className="order-placement__buttons-link" to={MAIN_ROUTE}>Продолжая, вы соглашаетесь на обработку персональных данных и условия пользовательского соглашения</NavLink>
                        </div>
                    </React.Fragment>
                )
        }
    }

    return (
        <div className={!globals.getIsAuth ? "order-placement unauthorized" : "order-placement authorized"}>
            <TopBar page={'any'} title="Оформление заказа" icon={<NavLink to={BASKET_ROUTE}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19.0005 11.0002H7.83047L12.7105 6.12021C13.1005 5.73021 13.1005 5.09021 12.7105 4.70021C12.3205 4.31021 11.6905 4.31021 11.3005 4.70021L4.71047 11.2902C4.32047 11.6802 4.32047 12.3102 4.71047 12.7002L11.3005 19.2902C11.6905 19.6802 12.3205 19.6802 12.7105 19.2902C13.1005 18.9002 13.1005 18.2702 12.7105 17.8802L7.83047 13.0002H19.0005C19.5505 13.0002 20.0005 12.5502 20.0005 12.0002C20.0005 11.4502 19.5505 11.0002 19.0005 11.0002Z" fill="#8D191D"/></svg></NavLink>}/>
            {getOrderPlacement()}
            <TabBar/>
        </div>
    );
});

export default OrderPlacement;