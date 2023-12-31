import React, {useContext, useState} from 'react';
import TabBar from "../components/TabBar";
import TopBar from "../components/TopBar";
import {NavLink} from "react-router-dom";
import {
    AUTH_ROUTE,
    DELIVERYADDRESSES_ROUTE,
    ORDERS_ROUTE,
    PERSONAL_ROUTE
} from "../utils/consts";
import ModalCard from "../components/ModalCard";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import iconInfo from "../assets/images/icons/info.png";
import iconLogout from "../assets/images/icons/logout.png";

const Profile = observer(() => {
    const {globals} = useContext(Context)
    const [isModalOpened, setIsModalOpened] = useState(false)
    return (
        <React.Fragment>
            {isModalOpened &&
                <ModalCard setIsOpened={setIsModalOpened}>
                    <div className="modal">
                        <div className="modal__wrapper">
                            <div className="modal__header justify-between">
                                <div className="d-flex flex-center justify-between">
                                    <div onClick={() => setIsModalOpened(false)} className="d-flex flex-center justify-center modal__btn no-drag">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M19 11.0002H7.82998L12.71 6.12021C13.1 5.73021 13.1 5.09021 12.71 4.70021C12.32 4.31021 11.69 4.31021 11.3 4.70021L4.70998 11.2902C4.31998 11.6802 4.31998 12.3102 4.70998 12.7002L11.3 19.2902C11.69 19.6802 12.32 19.6802 12.71 19.2902C13.1 18.9002 13.1 18.2702 12.71 17.8802L7.82998 13.0002H19C19.55 13.0002 20 12.5502 20 12.0002C20 11.4502 19.55 11.0002 19 11.0002Z" fill="#8D191D"/>
                                        </svg>
                                    </div>
                                    <h3>Выйти из аккаунта?</h3>
                                </div>
                            </div>
                            <div className="modal__content gap-8">
                                <NavLink to={AUTH_ROUTE} onClick={() => globals.setIsAuth(false)} className="btn btn-sm btn-red no-drag">Выйти</NavLink>
                                <button onClick={() => setIsModalOpened(false)} className="btn btn-sm btn-gray no-drag">Отменить</button>
                            </div>
                        </div>
                    </div>
                </ModalCard>
            }

            <div className="profile">
                <TopBar page={'any'} title="Профиль" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V17.2C4 16.6333 4.14583 16.1125 4.4375 15.6375C4.72917 15.1625 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6458 8.75 13.3875C9.81667 13.1292 10.9 13 12 13C13.1 13 14.1833 13.1292 15.25 13.3875C16.3167 13.6458 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2708 15.1625 19.5625 15.6375C19.8542 16.1125 20 16.6333 20 17.2V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z" fill="#8D191D"/></svg>}/>
                <div className="profile-content">
                    <div className="profile-content__info">
                        <h2 className="profile-content__info-name">Добавить имя</h2>
                        <h4 className="profile-content__info-numb">+7 999 999-99-99</h4>
                    </div>
                    <div className="profile-content__gift">
                        <div className="profile-content__gift-header">
                            <h3>Получи дюжину хинкали в подарок!</h3>
                            <button className="btn btn-none">
                                <img src={iconInfo} alt=""/>
                            </button>
                        </div>
                        <div className="profile-content__gift__content">
                            {Array.from({length:3},(_,i)=>(
                                <div className="profile-content__gift__content-item active">
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M34.4358 33.5747C30.5969 37.1692 25.0947 38.61 19.9725 38.61C14.8605 38.61 9.33632 37.1581 5.50929 33.5747C2.06728 30.3517 0.54493 24.5136 3.79265 20.5188C7.57358 15.8681 17.7571 14.5501 14.2622 6.30651C13.7977 5.21101 13.6947 3.89302 14.5783 3.08547C17.6207 0.304842 22.3244 0.304848 25.3668 3.08547C26.2504 3.89302 26.1474 5.21101 25.6829 6.30651C22.2463 14.4125 32.3335 15.8214 36.1524 20.5188C39.2185 24.2901 37.83 30.3963 34.4358 33.5747ZM19.9726 14.5368C18.3552 19.0978 18.3552 26.5637 19.9726 31.0811C21.5901 26.5637 21.5901 19.0978 19.9726 14.5368ZM15.9289 14.5174C17.8072 17.1657 15.5932 19.7845 13.3858 22.3956C11.7914 24.2815 10.2004 26.1633 10.1573 28.0493C8.36666 25.4721 10.5239 22.9025 12.6923 20.3198C14.3075 18.3959 15.9289 16.4646 15.9289 14.5174ZM24.0164 14.5174C22.138 17.1657 24.3521 19.7845 26.5595 22.3956C28.1539 24.2815 29.7449 26.1633 29.788 28.0493C31.5786 25.4721 29.4213 22.9025 27.253 20.3198C25.6378 18.3959 24.0164 16.4646 24.0164 14.5174Z"/>
                                    </svg>
                                </div>
                            ))}
                            {Array.from({length:9},(_,i)=>(
                                <div className="profile-content__gift__content-item">
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M34.4358 33.5747C30.5969 37.1692 25.0947 38.61 19.9725 38.61C14.8605 38.61 9.33632 37.1581 5.50929 33.5747C2.06728 30.3517 0.54493 24.5136 3.79265 20.5188C7.57358 15.8681 17.7571 14.5501 14.2622 6.30651C13.7977 5.21101 13.6947 3.89302 14.5783 3.08547C17.6207 0.304842 22.3244 0.304848 25.3668 3.08547C26.2504 3.89302 26.1474 5.21101 25.6829 6.30651C22.2463 14.4125 32.3335 15.8214 36.1524 20.5188C39.2185 24.2901 37.83 30.3963 34.4358 33.5747ZM19.9726 14.5368C18.3552 19.0978 18.3552 26.5637 19.9726 31.0811C21.5901 26.5637 21.5901 19.0978 19.9726 14.5368ZM15.9289 14.5174C17.8072 17.1657 15.5932 19.7845 13.3858 22.3956C11.7914 24.2815 10.2004 26.1633 10.1573 28.0493C8.36666 25.4721 10.5239 22.9025 12.6923 20.3198C14.3075 18.3959 15.9289 16.4646 15.9289 14.5174ZM24.0164 14.5174C22.138 17.1657 24.3521 19.7845 26.5595 22.3956C28.1539 24.2815 29.7449 26.1633 29.788 28.0493C31.5786 25.4721 29.4213 22.9025 27.253 20.3198C25.6378 18.3959 24.0164 16.4646 24.0164 14.5174Z"/>
                                    </svg>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="profile-content__list">
                        <NavLink to={PERSONAL_ROUTE} className="profile-content__list-link">
                            Личные данные
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9.29006 15.88L13.1701 12L9.29006 8.11998C8.90006 7.72998 8.90006 7.09998 9.29006 6.70998C9.68006 6.31998 10.3101 6.31998 10.7001 6.70998L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" fill="#8D191D"/>
                            </svg>
                        </NavLink>
                        <NavLink to={DELIVERYADDRESSES_ROUTE} className="profile-content__list-link">
                            Адреса доставки
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9.29006 15.88L13.1701 12L9.29006 8.11998C8.90006 7.72998 8.90006 7.09998 9.29006 6.70998C9.68006 6.31998 10.3101 6.31998 10.7001 6.70998L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" fill="#8D191D"/>
                            </svg>
                        </NavLink>
                        <NavLink to={ORDERS_ROUTE} className="profile-content__list-link">
                            Заказы
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9.29006 15.88L13.1701 12L9.29006 8.11998C8.90006 7.72998 8.90006 7.09998 9.29006 6.70998C9.68006 6.31998 10.3101 6.31998 10.7001 6.70998L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" fill="#8D191D"/>
                            </svg>
                        </NavLink>
                    </div>
                </div>
                <div className="profile__button">
                    <button onClick={() => setIsModalOpened(true)} className="btn btn-none btn-none-defualt">
                        <img src={iconLogout} alt=""/>
                        Выйти из аккаунта
                    </button>
                </div>
                <TabBar/>
            </div>
        </React.Fragment>
    );
});

export default Profile;