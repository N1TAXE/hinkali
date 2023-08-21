import React, {useEffect, useState} from 'react';
import CardPhoto from "../../assets/images/cards/Photo.png";
import {NavLink} from "react-router-dom";
import ModalCard from "../ModalCard";

const ProductCard = ({data, page}) => {
    const [isModalOpened, setIsModalOpened] = useState(false)
    const [productCard, setProductCard] = useState('')

        useEffect(() => {
            switch (page) {
                case 'catalogue':
                    return(
                        setProductCard('catalogue')
                    )
                case 'basket':
                    return (
                        setProductCard('basket')
                    )
            }
        })

        const getProductCard = () =>{
            switch (productCard) {
                case 'catalogue':
                    return(
                        <React.Fragment>
                            <div className="product-card-img">
                                <img src={CardPhoto} alt="Вкусно"/>
                                <div className="product-card-sale">-{data.discount}%</div>
                                <div className="product-card-ended">
                                    Упс..
                                    <br/>
                                    Закончилось
                                </div>
                            </div>
                            <div className="product-card__content">
                                <div className="product-card__content-title">
                                    {data.title}
                                </div>
                                <div className="product-card__content__info">
                                    <div className="product-card__content__info-weight">
                                        {data.weight} гр
                                    </div>
                                    <div className="product-card__content__info-cost">
                                        {data.oldPrice && (
                                            <span>{data.oldPrice} ₽</span>
                                        )}
                                        {data.price} ₽
                                    </div>
                                </div>
                            </div>
                            <div className="product-card__button">
                                <NavLink to="#openModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" fill="none">
                                        <path d="M12.4999 8.66781H9.16659V12.0011C9.16659 12.3678 8.86659 12.6678 8.49992 12.6678C8.13325 12.6678 7.83325 12.3678 7.83325 12.0011V8.66781H4.49992C4.13325 8.66781 3.83325 8.36781 3.83325 8.00114C3.83325 7.63447 4.13325 7.33447 4.49992 7.33447H7.83325V4.00114C7.83325 3.63447 8.13325 3.33447 8.49992 3.33447C8.86659 3.33447 9.16659 3.63447 9.16659 4.00114V7.33447H12.4999C12.8666 7.33447 13.1666 7.63447 13.1666 8.00114C13.1666 8.36781 12.8666 8.66781 12.4999 8.66781Z"/>
                                    </svg>
                                    Добавить
                                </NavLink>
                            </div>
                        </React.Fragment>
                    )
                case 'basket':
                    return (
                        <React.Fragment>
                            <div className="product-card-img">
                                <img src={CardPhoto} alt="Вкусно"/>
                                <div className="product-card-sale">-{data.discount}%</div>
                                <div className="product-card-ended">
                                    Упс..
                                    <br/>
                                    Закончилось
                                </div>
                            </div>
                            <div className="product-card__content">
                                <div className="product-card__content__info">

                                    <div className="product-card__content__info-title">
                                        {data.title}
                                    </div>

                                    <div className="product-card__content__info-weight">
                                        {data.weight} гр
                                    </div>

                                </div>
                                <div className="product-card__content__price">
                                    <div className="product-card__content__price-cost">
                                        {data.oldPrice && (
                                            <span>{data.oldPrice} ₽</span>
                                        )}
                                        {data.price} ₽
                                    </div>
                                </div>
                            </div>
                            <div className="product-card__button">
                                <button className="btn btn-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path/>
                                    </svg>
                                </button>
                            </div>
                        </React.Fragment>
                    )
            }
        }

    return (
        <React.Fragment>
            {isModalOpened &&
                <ModalCard setIsOpened={setIsModalOpened}>
                    <div className="modal">
                        <div className="modal__wrapper">
                            <div className="product__modal-img">
                                {data.discount && (
                                    <div className="product__modal-discount">
                                        -{data.discount}%
                                    </div>
                                )}
                                <img src={CardPhoto} alt=""/>
                            </div>
                            <div className="product__modal-content no-drag">
                                <svg className="no-drag product__modal-close" onClick={() => setIsModalOpened(false)} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.3 17.7102C29.91 17.3202 29.28 17.3202 28.89 17.7102L24 22.5902L19.11 17.7002C18.72 17.3102 18.09 17.3102 17.7 17.7002C17.31 18.0902 17.31 18.7202 17.7 19.1102L22.59 24.0002L17.7 28.8902C17.31 29.2802 17.31 29.9102 17.7 30.3002C18.09 30.6902 18.72 30.6902 19.11 30.3002L24 25.4102L28.89 30.3002C29.28 30.6902 29.91 30.6902 30.3 30.3002C30.69 29.9102 30.69 29.2802 30.3 28.8902L25.41 24.0002L30.3 19.1102C30.68 18.7302 30.68 18.0902 30.3 17.7102Z" fill="#8D191D"/>
                                </svg>
                                <div className="product__modal-header">
                                    <h2>{data.title}</h2>
                                    <div className="product__modal-header-price">
                                        {data.oldPrice && (<span className="product-oldprice">{data.oldPrice} ₽</span>)}
                                        <span className="product-price">{data.price} ₽</span>
                                    </div>
                                </div>
                                <div className="product__modal-additional">
                                    <h3>Добавить к заказу</h3>
                                    <div className="additional-item">
                                        <div className="input__checkbox no-drag">
                                            <div className="checkbox">
                                                <input checked type="checkbox"/>
                                                <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.71047 10.2901C5.32047 10.6801 4.69047 10.6801 4.30047 10.2901L0.710469 6.70006C0.320469 6.31006 0.320469 5.68006 0.710469 5.29006C1.10047 4.90006 1.73047 4.90006 2.12047 5.29006L5.00047 8.17006L11.8805 1.29006C12.2705 0.900059 12.9005 0.900059 13.2905 1.29006C13.6805 1.68006 13.6805 2.31006 13.2905 2.70006L5.71047 10.2901Z" fill="white"/>
                                                </svg>
                                            </div>
                                            <p className="input__checkbox-label">
                                                Мацони
                                                <span>+45 ₽</span>
                                            </p>
                                        </div>
                                        <div className="input__counter no-drag">
                                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.9999 14.6668H9.99992C9.63325 14.6668 9.33325 14.3668 9.33325 14.0002C9.33325 13.6335 9.63325 13.3335 9.99992 13.3335H17.9999C18.3666 13.3335 18.6666 13.6335 18.6666 14.0002C18.6666 14.3668 18.3666 14.6668 17.9999 14.6668Z" fill="#111111"/>
                                            </svg>
                                            <input onClick={(e) => e.target.select()} value="1" type="number"/>
                                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.9999 14.6668H14.6666V18.0002C14.6666 18.3668 14.3666 18.6668 13.9999 18.6668C13.6333 18.6668 13.3333 18.3668 13.3333 18.0002V14.6668H9.99992C9.63325 14.6668 9.33325 14.3668 9.33325 14.0002C9.33325 13.6335 9.63325 13.3335 9.99992 13.3335H13.3333V10.0002C13.3333 9.6335 13.6333 9.3335 13.9999 9.3335C14.3666 9.3335 14.6666 9.6335 14.6666 10.0002V13.3335H17.9999C18.3666 13.3335 18.6666 13.6335 18.6666 14.0002C18.6666 14.3668 18.3666 14.6668 17.9999 14.6668Z" fill="#111111"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="additional-item">
                                        <div className="input__checkbox no-drag">
                                            <div className="checkbox">
                                                <input type="checkbox"/>
                                                <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.71047 10.2901C5.32047 10.6801 4.69047 10.6801 4.30047 10.2901L0.710469 6.70006C0.320469 6.31006 0.320469 5.68006 0.710469 5.29006C1.10047 4.90006 1.73047 4.90006 2.12047 5.29006L5.00047 8.17006L11.8805 1.29006C12.2705 0.900059 12.9005 0.900059 13.2905 1.29006C13.6805 1.68006 13.6805 2.31006 13.2905 2.70006L5.71047 10.2901Z" fill="white"/>
                                                </svg>
                                            </div>
                                            <p className="input__checkbox-label">
                                                Аджика
                                                <span>+45 ₽</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="additional-item">
                                        <div className="input__checkbox no-drag">
                                            <div className="checkbox">
                                                <input type="checkbox"/>
                                                <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.71047 10.2901C5.32047 10.6801 4.69047 10.6801 4.30047 10.2901L0.710469 6.70006C0.320469 6.31006 0.320469 5.68006 0.710469 5.29006C1.10047 4.90006 1.73047 4.90006 2.12047 5.29006L5.00047 8.17006L11.8805 1.29006C12.2705 0.900059 12.9005 0.900059 13.2905 1.29006C13.6805 1.68006 13.6805 2.31006 13.2905 2.70006L5.71047 10.2901Z" fill="white"/>
                                                </svg>
                                            </div>
                                            <p className="input__checkbox-label">
                                                Сацебели
                                                <span>+45 ₽</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="additional-item">
                                        <div className="input__checkbox no-drag">
                                            <div className="checkbox">
                                                <input type="checkbox"/>
                                                <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.71047 10.2901C5.32047 10.6801 4.69047 10.6801 4.30047 10.2901L0.710469 6.70006C0.320469 6.31006 0.320469 5.68006 0.710469 5.29006C1.10047 4.90006 1.73047 4.90006 2.12047 5.29006L5.00047 8.17006L11.8805 1.29006C12.2705 0.900059 12.9005 0.900059 13.2905 1.29006C13.6805 1.68006 13.6805 2.31006 13.2905 2.70006L5.71047 10.2901Z" fill="white"/>
                                                </svg>
                                            </div>
                                            <p className="input__checkbox-label">
                                                Фирменный соус
                                                <span>+45 ₽</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="product__modal-desc">
                                    <p>
                                        Хинкали из тонко раскатанного теста с сочной начинкой из говядины с грузинскими специями, зеленью укропа и ароматным бульоном.
                                    </p>
                                </div>
                                <div className="product__modal-info">
                                    <small>На 100</small>
                                    <div className="product__modal-info-list">
                                        <div className="info-item">
                                            <h5>157</h5>
                                            <p>ккал</p>
                                        </div>
                                        <div className="info-item">
                                            <h5>5</h5>
                                            <p>белки</p>
                                        </div>
                                        <div className="info-item">
                                            <h5>5</h5>
                                            <p>жиры</p>
                                        </div>
                                        <div className="info-item">
                                            <h5>23</h5>
                                            <p>углеводы</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="product__modal-buttons">
                                    <div className="input__counter input__counter-sm no-drag">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.9999 14.6668H9.99992C9.63325 14.6668 9.33325 14.3668 9.33325 14.0002C9.33325 13.6335 9.63325 13.3335 9.99992 13.3335H17.9999C18.3666 13.3335 18.6666 13.6335 18.6666 14.0002C18.6666 14.3668 18.3666 14.6668 17.9999 14.6668Z" fill="#111111"/>
                                        </svg>
                                        <input onClick={(e) =>  e.target.select()} value="1" type="number"/>
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.9999 14.6668H14.6666V18.0002C14.6666 18.3668 14.3666 18.6668 13.9999 18.6668C13.6333 18.6668 13.3333 18.3668 13.3333 18.0002V14.6668H9.99992C9.63325 14.6668 9.33325 14.3668 9.33325 14.0002C9.33325 13.6335 9.63325 13.3335 9.99992 13.3335H13.3333V10.0002C13.3333 9.6335 13.6333 9.3335 13.9999 9.3335C14.3666 9.3335 14.6666 9.6335 14.6666 10.0002V13.3335H17.9999C18.3666 13.3335 18.6666 13.6335 18.6666 14.0002C18.6666 14.3668 18.3666 14.6668 17.9999 14.6668Z" fill="#111111"/>
                                        </svg>
                                    </div>
                                    <button onClick={() => setIsModalOpened(false)} className="btn btn-md btn-red no-drag">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" fill="white"/>
                                        </svg>
                                        270 ₽
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalCard>
            }

            <div onClick={() => setIsModalOpened(true)} className={`product-card ${data.discount ? 'sale' : ''} ${!data.inStock ? 'ended' : ''} ${data.selected ? 'added' : ''}`}>
                {getProductCard()}
            </div>
        </React.Fragment>
    );
};

export default ProductCard;