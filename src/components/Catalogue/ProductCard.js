import React, {useState} from 'react';
import CardPhoto from "../../assets/images/cards/Photo.png";
import {NavLink} from "react-router-dom";
import ModalCard from "../ModalCard";

const ProductCard = ({data}) => {
    const [isModalOpened, setIsModalOpened] = useState(false)

    return (
        <React.Fragment>
            {isModalOpened &&
                <ModalCard setIsOpened={setIsModalOpened}>
                    <div className="modal">
                        <div className="modal__wrapper">
                            <div className="modal__header">
                                <svg className="no-drag" onClick={() => setIsModalOpened(false)} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.3 17.71C29.91 17.32 29.28 17.32 28.89 17.71L24 22.59L19.11 17.7C18.72 17.31 18.09 17.31 17.7 17.7C17.31 18.09 17.31 18.72 17.7 19.11L22.59 24L17.7 28.89C17.31 29.28 17.31 29.91 17.7 30.3C18.09 30.69 18.72 30.69 19.11 30.3L24 25.41L28.89 30.3C29.28 30.69 29.91 30.69 30.3 30.3C30.69 29.91 30.69 29.28 30.3 28.89L25.41 24L30.3 19.11C30.68 18.73 30.68 18.09 30.3 17.71Z" fill="#8D191D"/>
                                </svg>
                                Ваша заявка отправлена
                            </div>
                            <div className="modal__content gap-8">
                                <p>
                                    В ближайшее время с вами свяжется наш администратор и уточнит детали
                                </p>
                                <button onClick={() => {
                                    setIsModalOpened(false)
                                }
                                } className="btn btn-sm btn-red no-drag">
                                    Хорошо
                                </button>
                            </div>
                        </div>
                    </div>
                </ModalCard>
            }
            <div onClick={() => setIsModalOpened(true)} className="catalogue-content__cards__card">
                <div className="catalogue-content__cards__card-img">
                    <img src={CardPhoto} alt="Вкусно"/>
                    <div className="catalogue-content__cards__card-sale">-15%</div>
                    <div className="catalogue-content__cards__card-ended">
                        Упс..
                        <br/>
                        Закончилось
                    </div>
                </div>
                <div className="catalogue-content__cards__card__content">
                    <div className="catalogue-content__cards__card__content-title">
                        Хинкали с говядиной
                    </div>
                    <div className="catalogue-content__cards__card__content__info">
                        <div className="catalogue-content__cards__card__content__info-weight">
                            35 гр
                        </div>
                        <div className="catalogue-content__cards__card__content__info-cost">
                            45 ₽
                        </div>
                    </div>
                </div>
                <div className="catalogue-content__cards__card__button">
                    <NavLink to="#openModal">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" fill="none">
                            <path d="M12.4999 8.66781H9.16659V12.0011C9.16659 12.3678 8.86659 12.6678 8.49992 12.6678C8.13325 12.6678 7.83325 12.3678 7.83325 12.0011V8.66781H4.49992C4.13325 8.66781 3.83325 8.36781 3.83325 8.00114C3.83325 7.63447 4.13325 7.33447 4.49992 7.33447H7.83325V4.00114C7.83325 3.63447 8.13325 3.33447 8.49992 3.33447C8.86659 3.33447 9.16659 3.63447 9.16659 4.00114V7.33447H12.4999C12.8666 7.33447 13.1666 7.63447 13.1666 8.00114C13.1666 8.36781 12.8666 8.66781 12.4999 8.66781Z"/>
                        </svg>
                        Добавить
                    </NavLink>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProductCard;