import React, {useContext, useState} from 'react';
import TopBar from "../components/TopBar";
import TabBar from "../components/TabBar";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import UnAuthorized from "../components/UnAuthorized";
import CardPhoto from "../assets/images/cards/Photo.png";
import ProductCard from "../components/Catalogue/ProductCard";
import ModalCard from "../components/ModalCard";
import {NavLink} from "react-router-dom";
import {MAIN_ROUTE, ORDERPLACEMENT_ROUTE} from "../utils/consts";
import Authorized from "../components/Authorized";
import iconKhinkali from "../assets/images/icons/khinkali-icon.png";
import iconTableWare from "../assets/images/icons/tableware_icon.png";
import iconInfoBlack from "../assets/images/icons/info_black.png";

const Basket = observer(() => {
    const {globals} = useContext(Context)
    const [basket, setBasket] = useState('empty')
    const [isModalDeleteOpened, setIsModalDeleteOpened] = useState(false)
    const [isWare, setIsWare] = useState(false)
    const [dozen, setDozen] = useState('discount')

    const getDozen = () => {
        switch (dozen) {
            case 'oneMore':
                return(
                    <div className="basket__content__dozen dozen--one_more">
                        <div className="basket__content__dozen__item dozen--one_more__item">
                            <h3 className="basket__content__dozen__item-title dozen--one_more__item-tile">Пожалуйста, добавьте ещё 1 хинкали</h3>
                            <div className="basket__content__dozen__item-addition dozen--one_more__item-addition">Принимается заказ от 3-х хинкали с ЛЮБОЙ начинкой</div>
                        </div>
                    </div>
                )
            case 'discount':
                return(
                    <div className="basket__content__dozen dozen--discount">
                        <div className="basket__content__dozen__item">
                            <div className="basket__content__dozen__item__icon">
                                <img src={iconKhinkali} alt=""/>
                                <div className="basket__content__dozen__item__icon-numb">
                                    10
                                </div>
                            </div>
                            <div className="basket__content__dozen__item__content">
                                <h3 className="basket__content__dozen__item__content-title">хинкали до ДЮЖИНЫ!</h3>
                                <div className="basket__content__dozen__item__content-addition">при заказе 12-ти вы платите за 11!</div>
                            </div>
                        </div>
                    </div>
                )
            case 'gift':
                return(
                    <div className="basket__content__dozen dozen--gift">
                        <div className="basket__content__dozen__item">
                            <div className="basket__content__dozen__item__icon">
                                <img src={iconKhinkali} alt=""/>
                                <div className="basket__content__dozen__item__icon-numb">
                                    1
                                </div>
                            </div>
                            <div className="basket__content__dozen__item__content">
                                <h3 className="basket__content__dozen__item__content-title">хинкали в подарок!</h3>
                                <div className="basket__content__dozen__item__content-addition">Условия акции выполнены</div>
                            </div>
                        </div>
                    </div>
                )
        }
    }

    const products = [
        {
            id: 0,
            title: 'Хинкали с говядиной',
            discount: 15,
            price: 45,
            oldPrice: 50,
            weight: 35,
            inStock: true,
            selected: true
        },
        {
            id: 1,
            title: 'Хинкали с мясом и зеленью',
            discount: 15,
            price: 45,
            oldPrice: 50,
            weight: 35,
            inStock: false,
            selected: false
        },
        {
            id: 2,
            title: 'Хинкали с мясом без зелени',
            discount: null,
            price: 45,
            oldPrice: null,
            weight: 35,
            inStock: true,
            selected: false
        },
        {
            id: 3,
            title: 'Хинкали с бараниной и зеленью',
            discount: null,
            price: 45,
            oldPrice: null,
            weight: 35,
            inStock: true,
            selected: true
        },
        {
            id: 4,
            title: 'Хинкали с бараниной и зеленью',
            discount: null,
            price: 45,
            oldPrice: null,
            weight: 35,
            inStock: true,
            selected: false
        },
        {
            id: 5,
            title: 'Хинкали с бараниной и зеленью',
            discount: null,
            price: 45,
            oldPrice: null,
            weight: 35,
            inStock: true,
            selected: false
        }
    ]

    const getBasket = () =>{
        switch (basket) {
            case 'empty':
                return(
                    <React.Fragment>
                        {!globals.getIsAuth ? <UnAuthorized page={'basket'} setStatus={setBasket}/> : <Authorized page={'basket'} setStatus={setBasket}/>}
                    </React.Fragment>
                )
            case 'have':
                return (
                    <React.Fragment>
                        <div className="basket__content">
                            <div className="basket__content__buttons">
                                <label className="input__checkbox">
                                    <div className="checkbox">
                                        <input type="checkbox"/>
                                        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.71047 10.2901C5.32047 10.6801 4.69047 10.6801 4.30047 10.2901L0.710469 6.70006C0.320469 6.31006 0.320469 5.68006 0.710469 5.29006C1.10047 4.90006 1.73047 4.90006 2.12047 5.29006L5.00047 8.17006L11.8805 1.29006C12.2705 0.900059 12.9005 0.900059 13.2905 1.29006C13.6805 1.68006 13.6805 2.31006 13.2905 2.70006L5.71047 10.2901Z" fill="white"></path></svg>
                                    </div>
                                    <p className="input__checkbox-label">
                                        Выбрать всё
                                    </p>
                                </label>
                                <button onClick={() => setIsModalDeleteOpened(true)} className="btn btn-none btn-icon-modal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M18.2997 5.70997C17.9097 5.31997 17.2797 5.31997 16.8897 5.70997L11.9997 10.59L7.10973 5.69997C6.71973 5.30997 6.08973 5.30997 5.69973 5.69997C5.30973 6.08997 5.30973 6.71997 5.69973 7.10997L10.5897 12L5.69973 16.89C5.30973 17.28 5.30973 17.91 5.69973 18.3C6.08973 18.69 6.71973 18.69 7.10973 18.3L11.9997 13.41L16.8897 18.3C17.2797 18.69 17.9097 18.69 18.2997 18.3C18.6897 17.91 18.6897 17.28 18.2997 16.89L13.4097 12L18.2997 7.10997C18.6797 6.72997 18.6797 6.08997 18.2997 5.70997Z" fill="#DD989B"/>
                                    </svg>
                                    Удалить выбранные
                                </button>
                            </div>
                            {Array.from({length:3}, (_,index) => (
                                <div key={index} className="basket__content__product_card">
                                    <label className="input__checkbox">
                                        <div className="checkbox">
                                            <input type="checkbox"/>
                                            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.71047 10.2901C5.32047 10.6801 4.69047 10.6801 4.30047 10.2901L0.710469 6.70006C0.320469 6.31006 0.320469 5.68006 0.710469 5.29006C1.10047 4.90006 1.73047 4.90006 2.12047 5.29006L5.00047 8.17006L11.8805 1.29006C12.2705 0.900059 12.9005 0.900059 13.2905 1.29006C13.6805 1.68006 13.6805 2.31006 13.2905 2.70006L5.71047 10.2901Z" fill="white"></path></svg>
                                        </div>
                                    </label>
                                    <div className="basket__content__product_card-img">
                                        <img src={CardPhoto} alt="" className=""/>
                                    </div>
                                    <div className="basket__content__product_card__info">
                                        <div className="basket__content__product_card__info__price">
                                            <div className="basket__content__product_card__info__price__data">
                                                <div className="basket__content__product_card__info__price__data-title">
                                                    Хинкали с мясом без зелени
                                                </div>
                                                <div className="basket__content__product_card__info__price__data-price">
                                                    35 ₽ / шт.
                                                </div>
                                            </div>
                                            <div className="basket__content__product_card__info__price-cost price--cost">
                                                <span><small>12 ₽</small></span>
                                                <h3>70 ₽</h3>
                                            </div>
                                        </div>
                                        <div className="basket__content__product_card__info__buttons">
                                            <button className="btn btn-mini btn-gray">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M12.2005 3.80665C11.9405 3.54665 11.5205 3.54665 11.2605 3.80665L8.00047 7.05998L4.74047 3.79998C4.48047 3.53998 4.06047 3.53998 3.80047 3.79998C3.54047 4.05998 3.54047 4.47998 3.80047 4.73998L7.06047 7.99998L3.80047 11.26C3.54047 11.52 3.54047 11.94 3.80047 12.2C4.06047 12.46 4.48047 12.46 4.74047 12.2L8.00047 8.93998L11.2605 12.2C11.5205 12.46 11.9405 12.46 12.2005 12.2C12.4605 11.94 12.4605 11.52 12.2005 11.26L8.94047 7.99998L12.2005 4.73998C12.4538 4.48665 12.4538 4.05998 12.2005 3.80665Z" fill="#8D191D"/>
                                                </svg>
                                            </button>
                                            <div className="input__counter input__counter-sm basket__content__product_card__info__buttons-input">
                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.9999 14.6668H9.99992C9.63325 14.6668 9.33325 14.3668 9.33325 14.0002C9.33325 13.6335 9.63325 13.3335 9.99992 13.3335H17.9999C18.3666 13.3335 18.6666 13.6335 18.6666 14.0002C18.6666 14.3668 18.3666 14.6668 17.9999 14.6668Z" fill="#111111"></path>
                                                </svg>
                                                <input type="number" value="1"/>
                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.9999 14.6668H14.6666V18.0002C14.6666 18.3668 14.3666 18.6668 13.9999 18.6668C13.6333 18.6668 13.3333 18.3668 13.3333 18.0002V14.6668H9.99992C9.63325 14.6668 9.33325 14.3668 9.33325 14.0002C9.33325 13.6335 9.63325 13.3335 9.99992 13.3335H13.3333V10.0002C13.3333 9.6335 13.6333 9.3335 13.9999 9.3335C14.3666 9.3335 14.6666 9.6335 14.6666 10.0002V13.3335H17.9999C18.3666 13.3335 18.6666 13.6335 18.6666 14.0002C18.6666 14.3668 18.3666 14.6668 17.9999 14.6668Z" fill="#111111"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="basket__content__tableware">
                                <div className="basket__content__tableware-title">
                                    <img src={iconTableWare} alt=""/>
                                    <h4>Приборы</h4>
                                </div>
                                <div className="basket__content__tableware-buttons">
                                    {isWare && (
                                    <div
                                        className="input__counter input__counter-sm basket__content__product_card__info__buttons-input">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M17.9999 14.6668H9.99992C9.63325 14.6668 9.33325 14.3668 9.33325 14.0002C9.33325 13.6335 9.63325 13.3335 9.99992 13.3335H17.9999C18.3666 13.3335 18.6666 13.6335 18.6666 14.0002C18.6666 14.3668 18.3666 14.6668 17.9999 14.6668Z"
                                                fill="#111111"></path>
                                        </svg>
                                        <input type="number" value="1"/>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M17.9999 14.6668H14.6666V18.0002C14.6666 18.3668 14.3666 18.6668 13.9999 18.6668C13.6333 18.6668 13.3333 18.3668 13.3333 18.0002V14.6668H9.99992C9.63325 14.6668 9.33325 14.3668 9.33325 14.0002C9.33325 13.6335 9.63325 13.3335 9.99992 13.3335H13.3333V10.0002C13.3333 9.6335 13.6333 9.3335 13.9999 9.3335C14.3666 9.3335 14.6666 9.6335 14.6666 10.0002V13.3335H17.9999C18.3666 13.3335 18.6666 13.6335 18.6666 14.0002C18.6666 14.3668 18.3666 14.6668 17.9999 14.6668Z"
                                                fill="#111111"></path>
                                        </svg>
                                    </div>
                                )}
                                    <div className="input__switch">
                                        <input type="checkbox" name="male" checked={isWare} onChange={(e) => {
                                            setIsWare(e.target.checked)
                                        }}/>
                                        <div className="input__switch-icon"></div>
                                        <div className="input__switch-bg"></div>
                                    </div>
                                </div>
                            </div>

                            {getDozen()}

                            <div className="basket__content__price">
                                <div className="basket__content__price__item">
                                    Стоимость заказа
                                    <div className="basket__content__price__item-cost price--cost">
                                        <span>12 ₽</span>
                                        <h2>115 ₽</h2>
                                    </div>
                                </div>
                                <span className="validate validate-additional">
                                    <img src={iconInfoBlack} alt=""/>
                                    Стоимость доставки определяется в процессе оформления
                                </span>
                            </div>
                        </div>
                        <div className="basket__more">
                            <h3 className="basket__more-title">Может, что‑нибудь ещё?</h3>
                            <div className="basket__more__content">
                                {products && products.map((item)=>(
                                    <ProductCard page={'basket'} data={item} key={item.id}/>
                                ))}
                            </div>
                        </div>
                        <div className="basket__buttons">
                            <div className="basket__buttons__total">
                                <h3 className="basket__buttons__total-title">
                                    Стоимость заказа
                                </h3>
                                <div className="basket__buttons__total__price">
                                    <div className="basket__buttons__total__price-cost price--cost">
                                        <span>100 ₽</span>
                                        <h2>150 ₽</h2>
                                    </div>
                                </div>
                            </div>
                            <NavLink to={ORDERPLACEMENT_ROUTE} className="btn btn-md btn-red">
                                Оформить
                            </NavLink>
                        </div>
                    </React.Fragment>
                )
        }
    }

    return (
        <React.Fragment>
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
                                    <h3>Удалить выбранные?</h3>
                                </div>
                            </div>
                            <div className="modal__content gap-8">
                                <p>
                                    Вы точно хотите удалить выбранные? Отменить данное действие будет невозможно.
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

            <div className={`${!globals.getIsAuth ? "unauthorized" : "authorized"} ${basket === 'have' ? 'basket' : ''}`}>
                <TopBar page={`${basket === 'have' ? 'basket' : 'any'}`} title="Корзина" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4.99984 21C4.71651 21 4.45818 20.9125 4.22484 20.7375C3.99151 20.5625 3.83318 20.3333 3.74984 20.05L0.949842 9.95C0.866508 9.71667 0.904008 9.5 1.06234 9.3C1.22068 9.1 1.43318 9 1.69984 9H6.74984L11.1498 2.45C11.2332 2.31667 11.3498 2.20833 11.4998 2.125C11.6498 2.04167 11.8082 2 11.9748 2C12.1415 2 12.2998 2.04167 12.4498 2.125C12.5998 2.20833 12.7165 2.31667 12.7998 2.45L17.1998 9H22.2998C22.5665 9 22.779 9.1 22.9373 9.3C23.0957 9.5 23.1332 9.71667 23.0498 9.95L20.2498 20.05C20.1665 20.3333 20.0082 20.5625 19.7748 20.7375C19.5415 20.9125 19.2832 21 18.9998 21H4.99984ZM11.9998 17C12.5498 17 13.0207 16.8042 13.4123 16.4125C13.804 16.0208 13.9998 15.55 13.9998 15C13.9998 14.45 13.804 13.9792 13.4123 13.5875C13.0207 13.1958 12.5498 13 11.9998 13C11.4498 13 10.979 13.1958 10.5873 13.5875C10.1957 13.9792 9.99984 14.45 9.99984 15C9.99984 15.55 10.1957 16.0208 10.5873 16.4125C10.979 16.8042 11.4498 17 11.9998 17ZM9.17484 9H14.7998L11.9748 4.8L9.17484 9Z" fill="#8D191D"/></svg>}/>
                {!globals.getIsAuth ? (
                    <UnAuthorized page={'basket'}/>
                ):(
                    <React.Fragment>
                        {getBasket()}
                    </React.Fragment>
                )}
                <TabBar/>
            </div>
        </React.Fragment>
    );
});

export default Basket;