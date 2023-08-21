import React, {useContext, useState} from 'react';
import TopBar from "../components/TopBar";
import TabBar from "../components/TabBar";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import UnAuthorized from "../components/UnAuthorized";
import CardPhoto from "../assets/images/cards/Photo.png";
import ProductCard from "../components/Catalogue/ProductCard";
import ModalCard from "../components/ModalCard";

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
                            <div className="basket__content__dozen__item-title dozen--one_more__item-tile">Пожалуйста, добавьте ещё 1 хинкали</div>
                            <div className="basket__content__dozen__item-addition dozen--one_more__item-addition">Принимается заказ от 3-х хинкали с ЛЮБОЙ начинкой</div>
                        </div>
                    </div>
                )
            case 'discount':
                return(
                    <div className="basket__content__dozen dozen--discount">
                        <div className="basket__content__dozen__item">
                            <div className="basket__content__dozen__item__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19.7343 29.5273C17.7312 31.4029 14.8602 32.1548 12.1875 32.1548C9.52002 32.1548 6.6375 31.3972 4.64056 29.5273C2.84453 27.8456 2.05017 24.7993 3.74482 22.7148C5.7177 20.2881 11.0314 19.6004 9.20778 15.2989C8.96544 14.7273 8.9117 14.0395 9.37275 13.6182C10.9603 12.1672 13.4146 12.1672 15.0021 13.6182C15.4632 14.0395 15.4095 14.7273 15.1671 15.2989C13.3739 19.5286 18.6374 20.2637 20.6301 22.7148C22.2299 24.6827 21.5054 27.8689 19.7343 29.5273ZM12.1875 19.5934C11.3435 21.9733 11.3435 25.869 12.1875 28.2262C13.0315 25.869 13.0315 21.9733 12.1875 19.5934ZM10.0775 19.5833C11.0576 20.9652 9.90233 22.3317 8.75049 23.6941C7.91853 24.6782 7.08837 25.6601 7.06587 26.6442C6.13153 25.2994 7.25719 23.9586 8.38861 22.611C9.23146 21.6071 10.0775 20.5994 10.0775 19.5833ZM14.2975 19.5833C13.3174 20.9652 14.4727 22.3317 15.6245 23.6941C16.4565 24.6782 17.2866 25.6601 17.3091 26.6442C18.2435 25.2994 17.1178 23.9586 15.9864 22.611C15.1435 21.6071 14.2975 20.5994 14.2975 19.5833Z" fill="white"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M23.0199 26.547C26.9103 28.1402 32.2104 27.7616 35.3593 24.8131C37.1555 23.1311 37.9499 20.0852 36.2551 18.0005C34.2729 15.5623 28.9609 14.904 30.7921 10.5846C31.0345 10.013 31.0882 9.32525 30.6272 8.90388C29.0396 7.45296 26.5853 7.45295 24.9978 8.90388C24.0561 9.76449 25.1869 11.3338 25.1851 12.3437C25.1808 13.5024 24.6818 14.2967 23.9573 14.9323C22.2602 16.4209 19.3258 17.0383 18.6152 19.4278C21.4214 20.9227 23.6434 23.0606 23.0199 26.547ZM27.8125 14.0934C26.9685 16.4733 26.9685 20.369 27.8125 22.7262C28.6565 20.369 28.6565 16.4733 27.8125 14.0934ZM25.7025 14.0833C26.6826 15.4652 25.5273 16.8317 24.3755 18.1941C23.5435 19.1782 22.7134 20.1601 22.6909 21.1442C21.7565 19.7994 22.8822 18.4586 24.0136 17.111C24.8565 16.1071 25.7025 15.0994 25.7025 14.0833ZM29.9225 14.0833C28.9424 15.4652 30.0977 16.8317 31.2495 18.1941C32.0815 19.1782 32.9116 20.1601 32.9341 21.1442C33.8685 19.7994 32.7428 18.4586 31.6114 17.111C30.7685 16.1071 29.9225 15.0994 29.9225 14.0833Z" fill="white"/>
                                </svg>
                                <div className="basket__content__dozen__item__icon-numb">
                                    10
                                </div>
                            </div>
                            <div className="basket__content__dozen__item__content">
                                <div className="basket__content__dozen__item__content-title">хинкали до ДЮЖИНЫ!</div>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19.7343 29.5273C17.7312 31.4029 14.8602 32.1548 12.1875 32.1548C9.52002 32.1548 6.6375 31.3972 4.64056 29.5273C2.84453 27.8456 2.05017 24.7993 3.74482 22.7148C5.7177 20.2881 11.0314 19.6004 9.20778 15.2989C8.96544 14.7273 8.9117 14.0395 9.37275 13.6182C10.9603 12.1672 13.4146 12.1672 15.0021 13.6182C15.4632 14.0395 15.4095 14.7273 15.1671 15.2989C13.3739 19.5286 18.6374 20.2637 20.6301 22.7148C22.2299 24.6827 21.5054 27.8689 19.7343 29.5273ZM12.1875 19.5934C11.3435 21.9733 11.3435 25.869 12.1875 28.2262C13.0315 25.869 13.0315 21.9733 12.1875 19.5934ZM10.0775 19.5833C11.0576 20.9652 9.90233 22.3317 8.75049 23.6941C7.91853 24.6782 7.08837 25.6601 7.06587 26.6442C6.13153 25.2994 7.25719 23.9586 8.38861 22.611C9.23146 21.6071 10.0775 20.5994 10.0775 19.5833ZM14.2975 19.5833C13.3174 20.9652 14.4727 22.3317 15.6245 23.6941C16.4565 24.6782 17.2866 25.6601 17.3091 26.6442C18.2435 25.2994 17.1178 23.9586 15.9864 22.611C15.1435 21.6071 14.2975 20.5994 14.2975 19.5833Z" fill="white"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M23.0199 26.547C26.9103 28.1402 32.2104 27.7616 35.3593 24.8131C37.1555 23.1311 37.9499 20.0852 36.2551 18.0005C34.2729 15.5623 28.9609 14.904 30.7921 10.5846C31.0345 10.013 31.0882 9.32525 30.6272 8.90388C29.0396 7.45296 26.5853 7.45295 24.9978 8.90388C24.0561 9.76449 25.1869 11.3338 25.1851 12.3437C25.1808 13.5024 24.6818 14.2967 23.9573 14.9323C22.2602 16.4209 19.3258 17.0383 18.6152 19.4278C21.4214 20.9227 23.6434 23.0606 23.0199 26.547ZM27.8125 14.0934C26.9685 16.4733 26.9685 20.369 27.8125 22.7262C28.6565 20.369 28.6565 16.4733 27.8125 14.0934ZM25.7025 14.0833C26.6826 15.4652 25.5273 16.8317 24.3755 18.1941C23.5435 19.1782 22.7134 20.1601 22.6909 21.1442C21.7565 19.7994 22.8822 18.4586 24.0136 17.111C24.8565 16.1071 25.7025 15.0994 25.7025 14.0833ZM29.9225 14.0833C28.9424 15.4652 30.0977 16.8317 31.2495 18.1941C32.0815 19.1782 32.9116 20.1601 32.9341 21.1442C33.8685 19.7994 32.7428 18.4586 31.6114 17.111C30.7685 16.1071 29.9225 15.0994 29.9225 14.0833Z" fill="white"/>
                                </svg>
                                <div className="basket__content__dozen__item__icon-numb">
                                    1
                                </div>
                            </div>
                            <div className="basket__content__dozen__item__content">
                                <div className="basket__content__dozen__item__content-title">хинкали в подарок!</div>
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
                    <UnAuthorized page={'basket'} setStatus={setBasket}/>
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
                                            <div className="basket__content__product_card__info__price-cost">
                                                <span>12 ₽</span>
                                                70 ₽
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M8.1 13.34L10.93 10.51L4.74 4.32996C4.26 3.84996 3.43 3.97996 3.13 4.59996C2.42 6.08996 2.68 7.91996 3.91 9.15996L8.1 13.34ZM14.88 11.53C16.41 12.24 18.56 11.74 20.15 10.15C22.06 8.23996 22.43 5.49996 20.96 4.02996C19.5 2.56996 16.76 2.92996 14.84 4.83996C13.25 6.42996 12.75 8.57996 13.46 10.11L4.4 19.17C4.01 19.56 4.01 20.19 4.4 20.58C4.79 20.97 5.42 20.97 5.81 20.58L12 14.41L18.18 20.59C18.57 20.98 19.2 20.98 19.59 20.59C19.98 20.2 19.98 19.57 19.59 19.18L13.41 13L14.88 11.53Z" fill="#111111"/>
                                    </svg>
                                    Приборы
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

                            {/**/}
                            {getDozen()}
                            {/**/}

                            <div className="basket__content__price">
                                <div className="basket__content__price__item">
                                    Стоимость заказа
                                    <div className="basket__content__price__item-cost">
                                        <span>12 ₽</span>
                                        115 ₽
                                    </div>
                                </div>
                                <span className="validate validate-additional">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M7.33301 4.66659H8.66634V5.99992H7.33301V4.66659ZM7.99967 11.3333C8.36634 11.3333 8.66634 11.0333 8.66634 10.6666V7.99992C8.66634 7.63325 8.36634 7.33325 7.99967 7.33325C7.63301 7.33325 7.33301 7.63325 7.33301 7.99992V10.6666C7.33301 11.0333 7.63301 11.3333 7.99967 11.3333ZM7.99967 1.33325C4.31967 1.33325 1.33301 4.31992 1.33301 7.99992C1.33301 11.6799 4.31967 14.6666 7.99967 14.6666C11.6797 14.6666 14.6663 11.6799 14.6663 7.99992C14.6663 4.31992 11.6797 1.33325 7.99967 1.33325ZM7.99967 13.3333C5.05967 13.3333 2.66634 10.9399 2.66634 7.99992C2.66634 5.05992 5.05967 2.66659 7.99967 2.66659C10.9397 2.66659 13.333 5.05992 13.333 7.99992C13.333 10.9399 10.9397 13.3333 7.99967 13.3333Z" fill="#4D4D4D"/>
                                    </svg>
                                    Стоимость доставки определяется в процессе оформления
                                </span>
                            </div>
                        </div>
                        <div className="basket__more">
                            <div className="basket__more-title">Может, что‑нибудь ещё?</div>
                            <div className="basket__more__content">
                                {products && products.map((item)=>(
                                    <ProductCard page={'basket'} data={item} key={item.id}/>
                                ))}
                            </div>
                        </div>
                        <div className="basket__buttons">
                            <div className="basket__buttons__total">
                                <div className="basket__buttons__total-title">
                                    Стоимость заказа
                                </div>
                                <div className="basket__buttons__total__price">
                                    <div className="basket__buttons__total__price-cost">
                                        <span>100 ₽</span>
                                        150 ₽
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-md btn-red">
                                Оформить
                            </button>
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