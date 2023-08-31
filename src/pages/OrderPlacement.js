import React, {useContext, useState} from 'react';
import TopBar from "../components/TopBar";
import TabBar from "../components/TabBar";
import UnAuthorized from "../components/UnAuthorized";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {NavLink} from "react-router-dom";
import {BASKET_ROUTE, MAIN_ROUTE, ORDERACCEPTED_ROUTE} from "../utils/consts";
import ModalCard from "../components/ModalCard";
import iconPhoneGray from "../assets/images/icons/phone_gray.png";
import iconContactPage from "../assets/images/icons/contact_page.png";
import iconLocation from "../assets/images/icons/location_gray_999.png";
import iconArrowDown from "../assets/images/icons/keyboard_arrow_down_gray_999.png";
import iconUser from "../assets/images/icons/person.png";
import iconTime from "../assets/images/icons/timer_gray_999.png";
import iconInfoGreen from "../assets/images/icons/info_green.png";

const OrderPlacement = observer(() => {
    const {globals} = useContext(Context)
    const [orderPlacement, setOrderPlacement] = useState('empty')
    const [isModalChangeInstitutOpened, setIsModalChangeInstitutOpened] = useState(false)
    const [isModalChangeAddressesOpened, setIsModalChangeAddressesOpened] = useState(false)
    const [isModalOpened, setIsModalOpened] = useState(false)
    const [isModalChangeOpened, setIsModalChangeOpened] = useState(false)
    const [isModalDeleteOpened, setIsModalDeleteOpened] = useState(false)
    const [isModalSaveOpened, setIsModalSaveOpened] = useState(false)
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
                                    <p className="order-placement-remained__content__info-addition">
                                        Вы можете просто очистить старую корзину или объединить всё и редактировать при необходимости
                                    </p>
                                </div>
                                <div className="order-placement-remained__content__list">
                                    {Array.from({length:3}, (_,i) => (
                                        <div key={i} className="order-placement-remained__content__list__item">
                                            <div className="order-placement-remained__content__list__item__info">
                                                <small className="order-placement-remained__content__list__item__info-title">Хинкали с мясом без зелени</small>
                                                <div className="order-placement-remained__content__list__item__info-cost price--cost">
                                                    <span>465 ₽</span>
                                                    <h5>500 ₽</h5>
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
                                    <div onClick={() => setOrderPlacement(`${!globals.getIsAuth ? ('unAuthOrder') : ('authOrder')}`)} className="form-radio__toggle__item">
                                        <input type="radio" name="delivery" checked/>
                                        <div className="form-radio__toggle__item-tab">
                                            Доставка
                                        </div>
                                    </div>
                                    <div onClick={() => setOrderPlacement('selfDelivery')} className="form-radio__toggle__item">
                                        <input type="radio" name="delivery"/>
                                        <div className="form-radio__toggle__item-tab">
                                            Самовывоз
                                        </div>
                                    </div>
                                    <div onClick={() => setOrderPlacement('atTable')} className="form-radio__toggle__item">
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
                                    <img src={iconLocation} alt=""/>
                                    <input placeholder="ул. Севастопольская, 126, Симферополь" name="adresses-delivey" type="text"/>
                                    <img src={iconArrowDown} alt=""/>
                                </div>
                            </div>
                            <div className="input__item input_icon input_icon_left">
                                <label htmlFor="user">Получатель</label>
                                <div className="input__container">
                                    <img src={iconUser} alt=""/>
                                    <input placeholder="Username" name="user" type="text"/>
                                </div>
                                <div className="input__container">
                                    <img src={iconPhoneGray} alt=""/>
                                    <input placeholder="+7 999 999-99-99" name="user" type="number"/>
                                    <img src={iconContactPage} alt=""/>
                                </div>
                            </div>
                            <div className="input__item input_icon input_icon_left input_icon_right">
                                <label htmlFor="time-delivey">Время доставки</label>
                                <div className="input__container">
                                    <img src={iconTime} alt=""/>
                                    <input placeholder="В ближайшее время" name="time-delivey" type="text"/>
                                    <img src={iconArrowDown} alt=""/>
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
                                        <div key={i} className="order-placement-remained__content__list__item">
                                            <div className="order-placement-remained__content__list__item__info">
                                                <div className="order-placement-remained__content__list__item__info-title">Хинкали с мясом без зелени</div>
                                                <div className="order-placement-remained__content__list__item__info-cost price--cost">
                                                    <span>465 ₽</span>
                                                    <h5>500 ₽</h5>
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
                                    <div className="order-placement__check__info__price-cost price--cost">
                                        <span><small>700 ₽</small></span>
                                        <h3>550 ₽</h3>
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
                                            <img src={iconInfoGreen} alt=""/>
                                            Для бесплатной доставки добавьте ещё на
                                            <span>850 ₽</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-placement__check__info__total">
                                    <h2 className="order-placement__check__info__total-title">Итого</h2>
                                    <div className="order-placement__check__info__total-cost price--cost">
                                        <span>700 ₽</span>
                                        <h2>550 ₽</h2>
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
                            <NavLink to={ORDERACCEPTED_ROUTE} className="btn btn-md btn-red">Всё верно, продолжить</NavLink>
                            <button onClick={() => setOrderPlacement('closeSoon')} className="btn btn-md btn-gray">Скоро закроется</button>
                            <NavLink to={BASKET_ROUTE} className="btn btn-md btn-gray">Назад</NavLink>
                            <NavLink className="order-placement__buttons-link" to={MAIN_ROUTE}>Продолжая, вы соглашаетесь на обработку персональных данных и условия пользовательского соглашения</NavLink>
                        </div>
                    </React.Fragment>
                )
            case 'closeSoon':
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
                            <div className="order-placement__tabs__notification">
                                <h3>Хинкальная скоро закроется</h3>
                                <h4>Но вы ещё успеваете воспользоваться самовывозом</h4>
                                <h5>Оформить доставку можно с 10:00–21:00</h5>
                                <small>А пока вы можете ознакомиться с нашим меню и почитать новости на главной странице</small>
                            </div>
                        </div>
                        <div className="order-placement__form close-soon">
                            <div className="input__item input_icon input_icon_left input_icon_right">
                                <label htmlFor="adresses-delivey">Адрес доставки</label>
                                <div className="input__container">
                                    <img src={iconLocation} alt=""/>
                                    <input disabled placeholder="ул. Севастопольская, 126, Симферополь" name="adresses-delivey" type="text"/>
                                    <img src={iconLocation} alt=""/>
                                </div>
                            </div>
                            <div className="input__item input_icon input_icon_left">
                                <label htmlFor="user">Получатель</label>
                                <div className="input__container">
                                    <img src={iconUser} alt=""/>
                                    <input disabled placeholder="Username" name="user" type="text"/>
                                </div>
                                <div className="input__container">
                                    <img src={iconPhoneGray} alt=""/>
                                    <input disabled placeholder="+7 999 999-99-99" name="user" type="number"/>
                                    <img src={iconContactPage} alt=""/>
                                </div>
                            </div>
                            <div className="input__item input_icon input_icon_left input_icon_right">
                                <label htmlFor="time-delivey">Время доставки</label>
                                <div className="input__container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M14.0001 1H10.0001C9.4501 1 9.0001 1.45 9.0001 2C9.0001 2.55 9.4501 3 10.0001 3H14.0001C14.5501 3 15.0001 2.55 15.0001 2C15.0001 1.45 14.5501 1 14.0001 1ZM12.0001 14C12.5501 14 13.0001 13.55 13.0001 13V9C13.0001 8.45 12.5501 8 12.0001 8C11.4501 8 11.0001 8.45 11.0001 9V13C11.0001 13.55 11.4501 14 12.0001 14ZM19.0301 7.39L19.7801 6.64C20.1601 6.26 20.1701 5.63 19.7801 5.24L19.7701 5.23C19.3801 4.84 18.7601 4.85 18.3701 5.23L17.6201 5.98C16.0701 4.74 14.1201 4 12.0001 4C7.2001 4 3.1201 7.96 3.0001 12.76C2.8701 17.84 6.9401 22 12.0001 22C16.9801 22 21.0001 17.97 21.0001 13C21.0001 10.88 20.2601 8.93 19.0301 7.39ZM12.0001 20C8.1301 20 5.0001 16.87 5.0001 13C5.0001 9.13 8.1301 6 12.0001 6C15.8701 6 19.0001 9.13 19.0001 13C19.0001 16.87 15.8701 20 12.0001 20Z" fill="#999999"/>
                                    </svg>
                                    <input disabled placeholder="В ближайшее время" name="time-delivey" type="text"/>
                                    <img src={iconArrowDown} alt=""/>
                                </div>
                            </div>
                            <div className="d-flex flex-center gap-8">
                                <div className="input__item flex-big">
                                    <label htmlFor="street">Улица</label>
                                    <div className="input__container">
                                        <input disabled placeholder="Улица" name="street" type="text"/>
                                    </div>
                                </div>
                                <div className="input__item flex-small">
                                    <label htmlFor="house">Дом</label>
                                    <div className="input__container">
                                        <input disabled placeholder="Дом" name="house" type="text"/>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-center gap-8">
                                <div className="input__item">
                                    <label htmlFor="entrance">Подъезд</label>
                                    <div className="input__container">
                                        <input disabled placeholder="Подъезд" name="entrance" type="number"/>
                                    </div>
                                </div>
                                <div className="input__item">
                                    <label htmlFor="apartment/office">Кв/офис</label>
                                    <div className="input__container">
                                        <input disabled placeholder="Кв/офис" name="apartment/office" type="text"/>
                                    </div>
                                </div>
                                <div className="input__item">
                                    <label htmlFor="floor">Этаж</label>
                                    <div className="input__container">
                                        <input disabled placeholder="Этаж" name="floor" type="number"/>
                                    </div>
                                </div>
                            </div>
                            <div className="input__item">
                                <label htmlFor="comment">Комментарий к заказу</label>
                                <div className="input__container">
                                    <input disabled placeholder="Вы можете добавить примечания к заказу" name="comment" type="text"/>
                                </div>
                            </div>
                        </div>
                        <div className="order-placement__payment-method close-soon">
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
                                    <input disabled name="payment-method" type="radio"/>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#B3B3B3"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="order-placement__payment-method__item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM19 18H5C4.45 18 4 17.55 4 17V12H20V17C20 17.55 19.55 18 19 18ZM20 8H4V6H20V8Z" fill="#8D191D"/>
                                </svg>
                                <div className="order-placement__payment-method__item-name">Картой</div>
                                <div className="order-placement__payment-method__item-btn">
                                    <input disabled name="payment-method" type="radio"/>
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
                                    <input disabled name="payment-method" type="radio"/>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#B3B3B3"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="order-placement__buttons">
                            <button disabled className="btn btn-md btn-red close-soon">Всё верно, продолжить</button>
                            <NavLink to={BASKET_ROUTE} className="btn btn-md btn-gray">Назад</NavLink>
                            <NavLink className="order-placement__buttons-link close-soon" to={MAIN_ROUTE}>Продолжая, вы соглашаетесь на обработку персональных данных и условия пользовательского соглашения</NavLink>
                        </div>
                    </React.Fragment>
                )
            case 'authOrder':
                return (
                    <React.Fragment>
                        <div className="order-placement__tabs">
                            <div className="form-radio">
                                <label>Способ получения</label>
                                <div className="form-radio__toggle">
                                    <div onClick={() => setOrderPlacement(`${!globals.getIsAuth ? ('unAuthOrder') : ('authOrder')}`)} className="form-radio__toggle__item">
                                        <input type="radio" name="delivery" checked/>
                                        <div className="form-radio__toggle__item-tab">
                                            Доставка
                                        </div>
                                    </div>
                                    <div onClick={() => setOrderPlacement('selfDelivery')} className="form-radio__toggle__item">
                                        <input type="radio" name="delivery"/>
                                        <div className="form-radio__toggle__item-tab">
                                            Самовывоз
                                        </div>
                                    </div>
                                    <div onClick={() => setOrderPlacement('atTable')} className="form-radio__toggle__item">
                                        <input type="radio" name="delivery"/>
                                        <div className="form-radio__toggle__item-tab">
                                            За столиком
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-placement__form">
                            <div onClick={() => setIsModalChangeAddressesOpened(true)} className="input__item input_icon input_icon_left input_icon_right">
                                <label htmlFor="adresses-delivey">Адрес доставки</label>
                                <div className="input__container">
                                    <img src={iconLocation} alt=""/>
                                    <input readOnly placeholder="ул. Севастопольская, 126, Симферополь" name="adresses-delivey" type="text"/>
                                    <img src={iconArrowDown} alt=""/>
                                </div>
                            </div>
                            <div className="input__item input_icon input_icon_left">
                                <label htmlFor="user">Получатель</label>
                                <div className="input__container">
                                    <img src={iconUser} alt=""/>
                                    <input placeholder="Username" name="user" type="text"/>
                                </div>
                                <div className="input__container">
                                    <img src={iconPhoneGray} alt=""/>
                                    <input placeholder="+7 999 999-99-99" name="user" type="number"/>
                                    <img src={iconContactPage} alt=""/>
                                </div>
                            </div>
                            <div className="input__item input_icon input_icon_left input_icon_right">
                                <label htmlFor="time-delivey">Время доставки</label>
                                <div className="input__container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M14.0001 1H10.0001C9.4501 1 9.0001 1.45 9.0001 2C9.0001 2.55 9.4501 3 10.0001 3H14.0001C14.5501 3 15.0001 2.55 15.0001 2C15.0001 1.45 14.5501 1 14.0001 1ZM12.0001 14C12.5501 14 13.0001 13.55 13.0001 13V9C13.0001 8.45 12.5501 8 12.0001 8C11.4501 8 11.0001 8.45 11.0001 9V13C11.0001 13.55 11.4501 14 12.0001 14ZM19.0301 7.39L19.7801 6.64C20.1601 6.26 20.1701 5.63 19.7801 5.24L19.7701 5.23C19.3801 4.84 18.7601 4.85 18.3701 5.23L17.6201 5.98C16.0701 4.74 14.1201 4 12.0001 4C7.2001 4 3.1201 7.96 3.0001 12.76C2.8701 17.84 6.9401 22 12.0001 22C16.9801 22 21.0001 17.97 21.0001 13C21.0001 10.88 20.2601 8.93 19.0301 7.39ZM12.0001 20C8.1301 20 5.0001 16.87 5.0001 13C5.0001 9.13 8.1301 6 12.0001 6C15.8701 6 19.0001 9.13 19.0001 13C19.0001 16.87 15.8701 20 12.0001 20Z" fill="#999999"/>
                                    </svg>
                                    <input placeholder="В ближайшее время" name="time-delivey" type="text"/>
                                    <img src={iconArrowDown} alt=""/>
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
                                        <div key={i} className="order-placement-remained__content__list__item">
                                            <div className="order-placement-remained__content__list__item__info">
                                                <div className="order-placement-remained__content__list__item__info-title">Хинкали с мясом без зелени</div>
                                                <div className="order-placement-remained__content__list__item__info-cost price--cost">
                                                    <span>465 ₽</span>
                                                    <h5>500 ₽</h5>
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
                                    <div className="order-placement__check__info__price-cost price--cost">
                                        <span><small>700 ₽</small></span>
                                        <h3>550 ₽</h3>
                                    </div>
                                </div>
                                <div className="order-placement__check__info__delivery">
                                    <div className="order-placement__check__info__delivery__price">
                                        <h3 className="order-placement__check__info__delivery__price-title">Доставка</h3>
                                        <div className="order-placement__check__info__delivery__price-cost price--cost">
                                            <span><small></small></span>
                                            <h3>Бесплатно</h3>
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
                                        <h2>550 ₽</h2>
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
                            <NavLink to={ORDERACCEPTED_ROUTE} className="btn btn-md btn-red">Всё верно, продолжить</NavLink>
                            <button onClick={() => setOrderPlacement('closeSoon')} className="btn btn-md btn-gray">Скоро закроется</button>
                            <NavLink to={BASKET_ROUTE} className="btn btn-md btn-gray">Назад</NavLink>
                            <NavLink className="order-placement__buttons-link" to={MAIN_ROUTE}>Продолжая, вы соглашаетесь на обработку персональных данных и условия пользовательского соглашения</NavLink>
                        </div>
                    </React.Fragment>
                )
            case 'selfDelivery':
                return (
                    <React.Fragment>
                        <div className="order-placement__tabs">
                            <div className="form-radio">
                                <label>Способ получения</label>
                                <div className="form-radio__toggle">
                                    <div onClick={() => setOrderPlacement(`${!globals.getIsAuth ? ('unAuthOrder') : ('authOrder')}`)} className="form-radio__toggle__item">
                                        <input type="radio" name="delivery"/>
                                        <div className="form-radio__toggle__item-tab">
                                            Доставка
                                        </div>
                                    </div>
                                    <div onClick={() => setOrderPlacement('selfDelivery')} className="form-radio__toggle__item">
                                        <input type="radio" name="delivery" checked/>
                                        <div className="form-radio__toggle__item-tab">
                                            Самовывоз
                                        </div>
                                    </div>
                                    <div onClick={() => setOrderPlacement('atTable')} className="form-radio__toggle__item">
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
                                <label htmlFor="adresses-delivey">Получить по адресу</label>
                                <div className="input__container">
                                    <img src={iconLocation} alt=""/>
                                    <input placeholder="ул. Севастопольская, 126, Симферополь" name="adresses-delivey" type="text"/>
                                    <img src={iconArrowDown} alt=""/>
                                </div>
                            </div>
                            <div className="input__item input_icon input_icon_left">
                                <label htmlFor="user">Получатель</label>
                                <div className="input__container">
                                    <img src={iconUser} alt=""/>
                                    <input placeholder="Username" name="user" type="text"/>
                                </div>
                                <div className="input__container">
                                    <img src={iconPhoneGray} alt=""/>
                                    <input placeholder="+7 999 999-99-99" name="user" type="number"/>
                                    <img src={iconContactPage} alt=""/>
                                </div>
                            </div>
                            <div className="input__item input_icon input_icon_left input_icon_right">
                                <label htmlFor="time-delivey">Время доставки</label>
                                <div className="input__container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M14.0001 1H10.0001C9.4501 1 9.0001 1.45 9.0001 2C9.0001 2.55 9.4501 3 10.0001 3H14.0001C14.5501 3 15.0001 2.55 15.0001 2C15.0001 1.45 14.5501 1 14.0001 1ZM12.0001 14C12.5501 14 13.0001 13.55 13.0001 13V9C13.0001 8.45 12.5501 8 12.0001 8C11.4501 8 11.0001 8.45 11.0001 9V13C11.0001 13.55 11.4501 14 12.0001 14ZM19.0301 7.39L19.7801 6.64C20.1601 6.26 20.1701 5.63 19.7801 5.24L19.7701 5.23C19.3801 4.84 18.7601 4.85 18.3701 5.23L17.6201 5.98C16.0701 4.74 14.1201 4 12.0001 4C7.2001 4 3.1201 7.96 3.0001 12.76C2.8701 17.84 6.9401 22 12.0001 22C16.9801 22 21.0001 17.97 21.0001 13C21.0001 10.88 20.2601 8.93 19.0301 7.39ZM12.0001 20C8.1301 20 5.0001 16.87 5.0001 13C5.0001 9.13 8.1301 6 12.0001 6C15.8701 6 19.0001 9.13 19.0001 13C19.0001 16.87 15.8701 20 12.0001 20Z" fill="#999999"/>
                                    </svg>
                                    <input placeholder="В ближайшее время" name="time-delivey" type="text"/>
                                    <img src={iconArrowDown} alt=""/>
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
                                    <input name="payment-method" type="radio" />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#B3B3B3"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="order-placement__payment-method__item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM19 18H5C4.45 18 4 17.55 4 17V12H20V17C20 17.55 19.55 18 19 18ZM20 8H4V6H20V8Z" fill="#8D191D"/>
                                </svg>
                                <div className="order-placement__payment-method__item-name">Картой</div>
                                <div className="order-placement__payment-method__item-btn">
                                    <input name="payment-method" type="radio" checked/>
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
                                        <div key={i} className="order-placement-remained__content__list__item">
                                            <div className="order-placement-remained__content__list__item__info">
                                                <div className="order-placement-remained__content__list__item__info-title">Хинкали с мясом без зелени</div>
                                                <div className="order-placement-remained__content__list__item__info-cost price--cost">
                                                    <span>465 ₽</span>
                                                    <h5>500 ₽</h5>
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
                                    <div className="order-placement__check__info__price-cost price--cost">
                                        <span><small>700 ₽</small></span>
                                        <h3>550 ₽</h3>
                                    </div>
                                </div>
                                <div className="order-placement__check__info__total">
                                    <h2 className="order-placement__check__info__total-title">Итого</h2>
                                    <div className="order-placement__check__info__total-cost price--cost">
                                        <span>700 ₽</span>
                                        <h2>550 ₽</h2>
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
                            <NavLink to={ORDERACCEPTED_ROUTE} className="btn btn-md btn-red">Всё верно, продолжить</NavLink>
                            <NavLink to={BASKET_ROUTE} className="btn btn-md btn-gray">Назад</NavLink>
                            <NavLink className="order-placement__buttons-link" to={MAIN_ROUTE}>Продолжая, вы соглашаетесь на обработку персональных данных и условия пользовательского соглашения</NavLink>
                        </div>
                    </React.Fragment>
                )
            case 'atTable':
                return (
                    <React.Fragment>
                        <div className="order-placement__tabs">
                            <div className="form-radio">
                                <label>Способ получения</label>
                                <div className="form-radio__toggle">
                                    <div onClick={() => setOrderPlacement(`${!globals.getIsAuth ? ('unAuthOrder') : ('authOrder')}`)} className="form-radio__toggle__item">
                                        <input type="radio" name="delivery"/>
                                        <div className="form-radio__toggle__item-tab">
                                            Доставка
                                        </div>
                                    </div>
                                    <div onClick={() => setOrderPlacement('selfDelivery')} className="form-radio__toggle__item">
                                        <input type="radio" name="delivery"/>
                                        <div className="form-radio__toggle__item-tab">
                                            Самовывоз
                                        </div>
                                    </div>
                                    <div onClick={() => setOrderPlacement('atTable')} className="form-radio__toggle__item">
                                        <input type="radio" name="delivery" checked/>
                                        <div className="form-radio__toggle__item-tab">
                                            За столиком
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-placement__form">
                            <div className="d-flex flex-center gap-8">
                                <div onClick={() => setIsModalChangeInstitutOpened(true)} className="input__item input_icon input_icon_left input_icon_right flex-big">
                                    <label htmlFor="adresses-institut">Адрес заведения</label>
                                    <div className="input__container">
                                        <img src={iconLocation} alt=""/>
                                        <input readOnly onClick={() => setIsModalChangeInstitutOpened(true)} placeholder="ул. Севастопольская, 126, Симферополь" name="adresses-institut" type=""/>
                                        <img src={iconArrowDown} alt=""/>
                                    </div>
                                </div>
                                <div className="input__item input_icon input_icon_right flex-small">
                                    <label htmlFor="table">Столик</label>
                                    <div className="input__container">
                                        <input placeholder="10" name="table" type="number"/>
                                        <img src={iconArrowDown} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="input__item input_icon input_icon_left">
                                <label htmlFor="user">Получатель</label>
                                <div className="input__container">
                                    <img src={iconUser} alt=""/>
                                    <input placeholder="Username" name="user" type="text"/>
                                </div>
                                <div className="input__container">
                                    <img src={iconPhoneGray} alt=""/>
                                    <input placeholder="+7 999 999-99-99" name="user" type="number"/>
                                    <img src={iconContactPage} alt=""/>
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
                                    <input name="payment-method" type="radio" />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#B3B3B3"/>
                                    </svg>
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
                                    <input name="payment-method" type="radio" checked/>
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
                                        <div key={i} className="order-placement-remained__content__list__item">
                                            <div className="order-placement-remained__content__list__item__info">
                                                <div className="order-placement-remained__content__list__item__info-title">Хинкали с мясом без зелени</div>
                                                <div className="order-placement-remained__content__list__item__info-cost price--cost">
                                                    <span>465 ₽</span>
                                                    <h5>500 ₽</h5>
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
                                    <div className="order-placement__check__info__price-cost price--cost">
                                        <span><small>700 ₽</small></span>
                                        <h3>550 ₽</h3>
                                    </div>
                                </div>
                                <div className="order-placement__check__info__total">
                                    <h2 className="order-placement__check__info__total-title">Итого</h2>
                                    <div className="order-placement__check__info__total-cost price--cost">
                                        <span>700 ₽</span>
                                        <h2>550 ₽</h2>
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
                            <NavLink to={ORDERACCEPTED_ROUTE} className="btn btn-md btn-red">Всё верно, продолжить</NavLink>
                            <NavLink to={BASKET_ROUTE} className="btn btn-md btn-gray">Назад</NavLink>
                            <NavLink className="order-placement__buttons-link" to={MAIN_ROUTE}>Продолжая, вы соглашаетесь на обработку персональных данных и условия пользовательского соглашения</NavLink>
                        </div>
                    </React.Fragment>
                )
        }
    }

    return (
        <React.Fragment>
            {isModalChangeInstitutOpened &&
                <ModalCard setIsOpened={setIsModalChangeInstitutOpened}>
                    <div className="modal modal-order-placement">
                        <div className="modal__wrapper">
                            <div className="modal__header justify-between">
                                <div className="d-flex flex-center justify-between">
                                    <div onClick={() => setIsModalChangeInstitutOpened(false)} className="d-flex flex-center justify-center modal__btn no-drag">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M19 11.0002H7.82998L12.71 6.12021C13.1 5.73021 13.1 5.09021 12.71 4.70021C12.32 4.31021 11.69 4.31021 11.3 4.70021L4.70998 11.2902C4.31998 11.6802 4.31998 12.3102 4.70998 12.7002L11.3 19.2902C11.69 19.6802 12.32 19.6802 12.71 19.2902C13.1 18.9002 13.1 18.2702 12.71 17.8802L7.82998 13.0002H19C19.55 13.0002 20 12.5502 20 12.0002C20 11.4502 19.55 11.0002 19 11.0002Z" fill="#8D191D"/>
                                        </svg>
                                    </div>
                                    <h3>Адрес заведения</h3>
                                </div>
                            </div>
                            <div className="modal__content gap-8">
                                <h3>
                                    Ваша корзина наполнена блюдами, которые точно есть в наличии по адресу:
                                </h3>
                                <h4>
                                    ул. Турецкая, 25, Симферополь
                                </h4>
                                <small>
                                    Если вы хотите изменить заведение вам нужно будет заново заполнить корзину. Продолжить?
                                </small>
                                <NavLink to={MAIN_ROUTE} className="btn btn-sm btn-red no-drag">
                                    Другое заведение
                                </NavLink>
                                <button onClick={() => setIsModalChangeInstitutOpened(false)} className="btn btn-sm btn-gray no-drag">
                                    Назад
                                </button>
                            </div>
                        </div>
                    </div>
                </ModalCard>
            }
            {isModalChangeAddressesOpened &&
                <ModalCard setIsOpened={setIsModalChangeAddressesOpened}>
                    <div className="modal">
                        <div className="modal__wrapper">
                            <div className="modal__header justify-between">
                                <div className="d-flex flex-center justify-between">
                                    <div onClick={() => setIsModalChangeAddressesOpened(false)} className="d-flex flex-center justify-center modal__btn no-drag">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M19 11.0002H7.82998L12.71 6.12021C13.1 5.73021 13.1 5.09021 12.71 4.70021C12.32 4.31021 11.69 4.31021 11.3 4.70021L4.70998 11.2902C4.31998 11.6802 4.31998 12.3102 4.70998 12.7002L11.3 19.2902C11.69 19.6802 12.32 19.6802 12.71 19.2902C13.1 18.9002 13.1 18.2702 12.71 17.8802L7.82998 13.0002H19C19.55 13.0002 20 12.5502 20 12.0002C20 11.4502 19.55 11.0002 19 11.0002Z" fill="#8D191D"/>
                                        </svg>
                                    </div>
                                    <h3>Адрес доставки</h3>
                                </div>
                            </div>
                            <div className="modal__content modal-order-placement__content gap-8">
                                <div className="modal-order-placement__content__radio-item">
                                    <div className="modal-order-placement__content__radio-item-btn no-drag">
                                        <input name="addresses" type="radio" checked/>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#B3B3B3"/>
                                        </svg>
                                    </div>
                                    <div className="modal-order-placement__content__radio-item-addresses">
                                        пр. Победы, 95
                                    </div>
                                    <button onClick={() => setIsModalChangeOpened(true)} className="btn btn-none no-drag">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M5 19H6.4L15.025 10.375L13.625 8.975L5 17.6V19ZM19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3042 2.75 17.8625 2.75C18.4208 2.75 18.8917 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.57083 21.275 6.1125C21.2917 6.65417 21.1083 7.11667 20.725 7.5L19.3 8.925ZM4 21C3.71667 21 3.47917 20.9042 3.2875 20.7125C3.09583 20.5208 3 20.2833 3 20V17.175C3 17.0417 3.025 16.9125 3.075 16.7875C3.125 16.6625 3.2 16.55 3.3 16.45L13.6 6.15L17.85 10.4L7.55 20.7C7.45 20.8 7.3375 20.875 7.2125 20.925C7.0875 20.975 6.95833 21 6.825 21H4ZM14.325 9.675L13.625 8.975L15.025 10.375L14.325 9.675Z" fill="#8D191D"/>
                                        </svg>
                                    </button>
                                </div>
                                {Array.from({length:2}, (_,i) => (
                                    <div key={i} className="modal-order-placement__content__radio-item">
                                        <div className="modal-order-placement__content__radio-item-btn no-drag">
                                            <input name="addresses" type="radio"/>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#B3B3B3"/>
                                            </svg>
                                        </div>
                                        <div className="modal-order-placement__content__radio-item-addresses">
                                            пр. Победы, 95
                                        </div>
                                        <button onClick={() => setIsModalChangeOpened(true)} className="btn btn-none no-drag">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M5 19H6.4L15.025 10.375L13.625 8.975L5 17.6V19ZM19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3042 2.75 17.8625 2.75C18.4208 2.75 18.8917 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.57083 21.275 6.1125C21.2917 6.65417 21.1083 7.11667 20.725 7.5L19.3 8.925ZM4 21C3.71667 21 3.47917 20.9042 3.2875 20.7125C3.09583 20.5208 3 20.2833 3 20V17.175C3 17.0417 3.025 16.9125 3.075 16.7875C3.125 16.6625 3.2 16.55 3.3 16.45L13.6 6.15L17.85 10.4L7.55 20.7C7.45 20.8 7.3375 20.875 7.2125 20.925C7.0875 20.975 6.95833 21 6.825 21H4ZM14.325 9.675L13.625 8.975L15.025 10.375L14.325 9.675Z" fill="#8D191D"/>
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                                <div className="modal-order-placement__content-btn">
                                    <button onClick={() => setIsModalOpened(true)} className="btn btn-none btn-icon-modal no-drag">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" fill="#8D191D"/>
                                        </svg>
                                        Добавить новый адрес
                                    </button>
                                </div>
                                <NavLink to={MAIN_ROUTE} className="btn btn-sm btn-red no-drag">
                                    Другое заведение
                                </NavLink>
                                <button onClick={() => setIsModalChangeAddressesOpened(false)} className="btn btn-sm btn-gray no-drag">
                                    Назад
                                </button>
                            </div>
                        </div>
                    </div>
                </ModalCard>
            }

            {isModalOpened &&
                <ModalCard setIsOpened={setIsModalOpened}>
                    <div className="modal">
                        <div className="modal__wrapper">
                            <div className="modal__header">
                                <svg className="no-drag" onClick={() => setIsModalOpened(false)} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.3 17.71C29.91 17.32 29.28 17.32 28.89 17.71L24 22.59L19.11 17.7C18.72 17.31 18.09 17.31 17.7 17.7C17.31 18.09 17.31 18.72 17.7 19.11L22.59 24L17.7 28.89C17.31 29.28 17.31 29.91 17.7 30.3C18.09 30.69 18.72 30.69 19.11 30.3L24 25.41L28.89 30.3C29.28 30.69 29.91 30.69 30.3 30.3C30.69 29.91 30.69 29.28 30.3 28.89L25.41 24L30.3 19.11C30.68 18.73 30.68 18.09 30.3 17.71Z" fill="#8D191D"/>
                                </svg>
                                <h3>Добавить новый адрес</h3>
                            </div>
                            <div className="modal__content gap-8">
                                <div className="d-flex flex-center gap-8">
                                    <div className="input__item flex-big no-drag">
                                        <label htmlFor="street">Улица</label>
                                        <div className="input__container">
                                            <input placeholder="Улица" name="street" type="text"/>
                                        </div>
                                    </div>
                                    <div className="input__item flex-small no-drag">
                                        <label htmlFor="house">Дом</label>
                                        <div className="input__container">
                                            <input placeholder="Дом" name="house" type="text"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-center gap-8">
                                    <div className="input__item no-drag">
                                        <label htmlFor="entrance">Подъезд</label>
                                        <div className="input__container">
                                            <input placeholder="Подъезд" name="entrance" type="number"/>
                                        </div>
                                    </div>
                                    <div className="input__item no-drag">
                                        <label htmlFor="apartment/office">Кв/офис</label>
                                        <div className="input__container">
                                            <input placeholder="Кв/офис" name="apartment/office" type="text"/>
                                        </div>
                                    </div>
                                    <div className="input__item no-drag">
                                        <label htmlFor="floor">Этаж</label>
                                        <div className="input__container">
                                            <input placeholder="Этаж" name="floor" type="number"/>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-sm btn-red no-drag">
                                    Сохранить
                                </button>
                                <button onClick={() => setIsModalOpened(false)} className="btn btn-sm btn-gray no-drag">
                                    Отменить
                                </button>
                            </div>
                        </div>
                    </div>
                </ModalCard>
            }

            {isModalChangeOpened &&
                <ModalCard setIsOpened={setIsModalChangeOpened}>
                    <div className="modal">
                        <div className="modal__wrapper">
                            <div className="modal__header justify-between">
                                <div className="d-flex flex-center justify-between">
                                    <div onClick={() => setIsModalChangeOpened(false)} className="d-flex flex-center justify-center modal__btn no-drag">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M19 11.0002H7.82998L12.71 6.12021C13.1 5.73021 13.1 5.09021 12.71 4.70021C12.32 4.31021 11.69 4.31021 11.3 4.70021L4.70998 11.2902C4.31998 11.6802 4.31998 12.3102 4.70998 12.7002L11.3 19.2902C11.69 19.6802 12.32 19.6802 12.71 19.2902C13.1 18.9002 13.1 18.2702 12.71 17.8802L7.82998 13.0002H19C19.55 13.0002 20 12.5502 20 12.0002C20 11.4502 19.55 11.0002 19 11.0002Z" fill="#8D191D"/>
                                        </svg>
                                    </div>
                                    <h3>ул. Севастопольская, 126</h3>
                                </div>
                                <div onClick={() => setIsModalDeleteOpened(true)} className="d-flex flex-center justify-center modal__btn no-drag">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6C4.71667 6 4.47917 5.90417 4.2875 5.7125C4.09583 5.52083 4 5.28333 4 5C4 4.71667 4.09583 4.47917 4.2875 4.2875C4.47917 4.09583 4.71667 4 5 4H9C9 3.71667 9.09583 3.47917 9.2875 3.2875C9.47917 3.09583 9.71667 3 10 3H14C14.2833 3 14.5208 3.09583 14.7125 3.2875C14.9042 3.47917 15 3.71667 15 4H19C19.2833 4 19.5208 4.09583 19.7125 4.2875C19.9042 4.47917 20 4.71667 20 5C20 5.28333 19.9042 5.52083 19.7125 5.7125C19.5208 5.90417 19.2833 6 19 6V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM9 16C9 16.2833 9.09583 16.5208 9.2875 16.7125C9.47917 16.9042 9.71667 17 10 17C10.2833 17 10.5208 16.9042 10.7125 16.7125C10.9042 16.5208 11 16.2833 11 16V9C11 8.71667 10.9042 8.47917 10.7125 8.2875C10.5208 8.09583 10.2833 8 10 8C9.71667 8 9.47917 8.09583 9.2875 8.2875C9.09583 8.47917 9 8.71667 9 9V16ZM13 16C13 16.2833 13.0958 16.5208 13.2875 16.7125C13.4792 16.9042 13.7167 17 14 17C14.2833 17 14.5208 16.9042 14.7125 16.7125C14.9042 16.5208 15 16.2833 15 16V9C15 8.71667 14.9042 8.47917 14.7125 8.2875C14.5208 8.09583 14.2833 8 14 8C13.7167 8 13.4792 8.09583 13.2875 8.2875C13.0958 8.47917 13 8.71667 13 9V16Z" fill="#8D191D"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="modal__content gap-8">
                                <div className="d-flex flex-center gap-8">
                                    <div className="input__item flex-big no-drag">
                                        <label htmlFor="street">Улица</label>
                                        <div className="input__container">
                                            <input placeholder="Улица" name="street" type="text"/>
                                        </div>
                                    </div>
                                    <div className="input__item flex-small no-drag">
                                        <label htmlFor="house">Дом</label>
                                        <div className="input__container">
                                            <input placeholder="Дом" name="house" type="text"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-center gap-8">
                                    <div className="input__item no-drag">
                                        <label htmlFor="entrance">Подъезд</label>
                                        <div className="input__container">
                                            <input placeholder="Подъезд" name="entrance" type="number"/>
                                        </div>
                                    </div>
                                    <div className="input__item no-drag">
                                        <label htmlFor="apartment/office">Кв/офис</label>
                                        <div className="input__container">
                                            <input placeholder="Кв/офис" name="apartment/office" type="text"/>
                                        </div>
                                    </div>
                                    <div className="input__item no-drag">
                                        <label htmlFor="floor">Этаж</label>
                                        <div className="input__container">
                                            <input placeholder="Этаж" name="floor" type="number"/>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => setIsModalSaveOpened(true)} className="btn btn-sm btn-red no-drag">
                                    Сохранить
                                </button>
                                <button onClick={() => setIsModalChangeOpened(false)} className="btn btn-sm btn-gray no-drag">
                                    Отменить
                                </button>
                            </div>
                        </div>
                    </div>
                </ModalCard>
            }

            {isModalDeleteOpened &&
                <ModalCard setIsOpened={setIsModalDeleteOpened}>
                    <div className="modal">
                        <div className="modal__wrapper">
                            <div className="modal__header justify-between">
                                <div className="d-flex flex-center justify-between">
                                    <div onClick={() => setIsModalDeleteOpened(false)} className="d-flex flex-center justify-center modal__btn no-drag">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M19 11.0002H7.82998L12.71 6.12021C13.1 5.73021 13.1 5.09021 12.71 4.70021C12.32 4.31021 11.69 4.31021 11.3 4.70021L4.70998 11.2902C4.31998 11.6802 4.31998 12.3102 4.70998 12.7002L11.3 19.2902C11.69 19.6802 12.32 19.6802 12.71 19.2902C13.1 18.9002 13.1 18.2702 12.71 17.8802L7.82998 13.0002H19C19.55 13.0002 20 12.5502 20 12.0002C20 11.4502 19.55 11.0002 19 11.0002Z" fill="#8D191D"/>
                                        </svg>
                                    </div>
                                    <h3>Удалить адрес?</h3>
                                </div>
                            </div>
                            <div className="modal__content gap-8">
                                <p>
                                    Вы уверены? Отменить данное действие будет невозможно.
                                </p>
                                <button className="btn btn-sm btn-red no-drag">
                                    Удалить
                                </button>
                                <button onClick={() => setIsModalDeleteOpened(false)} className="btn btn-sm btn-gray no-drag">
                                    Отменить
                                </button>
                            </div>
                        </div>
                    </div>
                </ModalCard>
            }

            {isModalSaveOpened &&
                <ModalCard setIsOpened={setIsModalSaveOpened}>
                    <div className="modal">
                        <div className="modal__wrapper">
                            <div className="modal__header justify-between">
                                <div className="d-flex flex-center justify-between">
                                    <div onClick={() => setIsModalSaveOpened(false)} className="d-flex flex-center justify-center modal__btn no-drag">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M19 11.0002H7.82998L12.71 6.12021C13.1 5.73021 13.1 5.09021 12.71 4.70021C12.32 4.31021 11.69 4.31021 11.3 4.70021L4.70998 11.2902C4.31998 11.6802 4.31998 12.3102 4.70998 12.7002L11.3 19.2902C11.69 19.6802 12.32 19.6802 12.71 19.2902C13.1 18.9002 13.1 18.2702 12.71 17.8802L7.82998 13.0002H19C19.55 13.0002 20 12.5502 20 12.0002C20 11.4502 19.55 11.0002 19 11.0002Z" fill="#8D191D"/>
                                        </svg>
                                    </div>
                                    <h3>Сохранить изменения?</h3>
                                </div>
                            </div>
                            <div className="modal__content gap-8">
                                <button className="btn btn-sm btn-red no-drag">
                                    Сохранить
                                </button>
                                <button onClick={() => setIsModalSaveOpened(false)} className="btn btn-sm btn-gray no-drag">
                                    Отменить
                                </button>
                            </div>
                        </div>
                    </div>
                </ModalCard>
            }

            <div className={!globals.getIsAuth ? "order-placement unauthorized" : "order-placement authorized"}>
                <TopBar page={'any'} title="Оформление заказа" icon={<NavLink to={BASKET_ROUTE}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19.0005 11.0002H7.83047L12.7105 6.12021C13.1005 5.73021 13.1005 5.09021 12.7105 4.70021C12.3205 4.31021 11.6905 4.31021 11.3005 4.70021L4.71047 11.2902C4.32047 11.6802 4.32047 12.3102 4.71047 12.7002L11.3005 19.2902C11.6905 19.6802 12.3205 19.6802 12.7105 19.2902C13.1005 18.9002 13.1005 18.2702 12.7105 17.8802L7.83047 13.0002H19.0005C19.5505 13.0002 20.0005 12.5502 20.0005 12.0002C20.0005 11.4502 19.5505 11.0002 19.0005 11.0002Z" fill="#8D191D"/></svg></NavLink>}/>
                {getOrderPlacement()}
                <TabBar/>
            </div>
        </React.Fragment>
    );
});

export default OrderPlacement;