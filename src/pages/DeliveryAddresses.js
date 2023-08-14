import React, {useContext, useState} from 'react';
import TopBar from "../components/TopBar";
import TabBar from "../components/TabBar";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import no_addresses from "../assets/images/delivery/no_addresses.png"
import unauthorized from "../assets/images/delivery/unauthorized.png"
import {NavLink} from "react-router-dom";
import {AUTH_ROUTE, PROFILE_ROUTE} from "../utils/consts";
import ModalCard from "../components/ModalCard";

const DeliveryAddresses = observer(() => {
    const {globals} = useContext(Context)
    const [deliveryAddresses, setDeliveryAddresses] = useState('empty')
    const [isModalOpened, setIsModalOpened] = useState(false)

    const getDeliveryAddresses = () =>{
        switch (deliveryAddresses){
            case 'empty':
                return(
                    <React.Fragment>
                        <div className="delivery-addresses__content">
                            <div className="delivery-addresses__content-sticker">
                                <img src={no_addresses} alt="Грустный хинкалик"/>
                            </div>
                            <div className="delivery-addresses__content-title">Нет адресов</div>
                            <div className="delivery-addresses__content-text">
                                Добавьте адрес доставки для быстрого оформления ваших заказов
                            </div>
                        </div>
                        <div className="delivery-addresses-buttons">
                            <button onClick={() => setIsModalOpened(true)} className="btn btn-md btn-red">
                                + Добавить адрес
                            </button>
                            <button onClick={() => setDeliveryAddresses('have')} className="btn btn-md btn-red">
                                + Добавить адрес
                            </button>
                            <NavLink to={PROFILE_ROUTE} className="btn btn-md btn-gray">Назад</NavLink>
                        </div>
                    </React.Fragment>
                )
            case 'have':
                return (
                    <React.Fragment>
                        <div className="delivery-addresses__list">
                            <div className="delivery-addresses__list__items">
                                {Array.from({length:3},(_,i)=>(
                                    <div key={i} className="delivery-addresses__list__items-item">
                                        ул. Севастопольская, 126
                                        <button className="btn btn-none btn-mini">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M5 19H6.4L15.025 10.375L13.625 8.975L5 17.6V19ZM19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3042 2.75 17.8625 2.75C18.4208 2.75 18.8917 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.57083 21.275 6.1125C21.2917 6.65417 21.1083 7.11667 20.725 7.5L19.3 8.925ZM4 21C3.71667 21 3.47917 20.9042 3.2875 20.7125C3.09583 20.5208 3 20.2833 3 20V17.175C3 17.0417 3.025 16.9125 3.075 16.7875C3.125 16.6625 3.2 16.55 3.3 16.45L13.6 6.15L17.85 10.4L7.55 20.7C7.45 20.8 7.3375 20.875 7.2125 20.925C7.0875 20.975 6.95833 21 6.825 21H4ZM14.325 9.675L13.625 8.975L15.025 10.375L14.325 9.675Z" fill="#8D191D"/>
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="delivery-addresses-buttons">
                            <button onClick={() => setIsModalOpened(true)} className="btn btn-md btn-red">
                                + Добавить новый адрес
                            </button>
                            <NavLink to={PROFILE_ROUTE} className="btn btn-md btn-gray">Назад</NavLink>
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
                            <div className="personal-modal__topbar">
                                <div className="personal-modal__topbar-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M19 11.0002H7.82998L12.71 6.12021C13.1 5.73021 13.1 5.09021 12.71 4.70021C12.32 4.31021 11.69 4.31021 11.3 4.70021L4.70998 11.2902C4.31998 11.6802 4.31998 12.3102 4.70998 12.7002L11.3 19.2902C11.69 19.6802 12.32 19.6802 12.71 19.2902C13.1 18.9002 13.1 18.2702 12.71 17.8802L7.82998 13.0002H19C19.55 13.0002 20 12.5502 20 12.0002C20 11.4502 19.55 11.0002 19 11.0002Z" fill="#8D191D"/>
                                    </svg>
                                </div>
                                Сохранить изменения?
                            </div>
                            <div className="personal-modal__buttons">
                                <button className="btn btn-sm btn-red">Сохранить</button>
                                <button onClick={() => setIsModalOpened(false)} className="btn btn-sm btn-gray no-drag">Отменить</button>
                            </div>
                        </div>
                    </div>
                </ModalCard>
            }

            <div className="delivery-addresses">
                <TopBar title="Адреса доставки" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM12 21.625C11.8667 21.625 11.7333 21.6 11.6 21.55C11.4667 21.5 11.35 21.4333 11.25 21.35C8.81667 19.2 7 17.2042 5.8 15.3625C4.6 13.5208 4 11.8 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8 19.4 13.5208 18.2 15.3625C17 17.2042 15.1833 19.2 12.75 21.35C12.65 21.4333 12.5333 21.5 12.4 21.55C12.2667 21.6 12.1333 21.625 12 21.625Z" fill="#8D191D"/></svg>}/>
                {!globals.getIsAuth ? (
                    <React.Fragment>
                        <div className="delivery-addresses__content empty">
                            <div className="delivery-addresses__content-sticker">
                                <img src={unauthorized} alt="Весёлый хинкалик"/>
                            </div>
                            <div className="delivery-addresses__content-title">Вы не авторизованы</div>
                            <div className="delivery-addresses__content-text">
                                Для доступа к сохранённым адресам доставки необходимо войти в свой профиль
                            </div>
                        </div>
                        <div className="delivery-addresses-buttons">
                            <NavLink to={AUTH_ROUTE} className="btn btn-md btn-red">Войти</NavLink>
                            <NavLink to={PROFILE_ROUTE} className="btn btn-md btn-gray">Назад</NavLink>
                        </div>
                    </React.Fragment>
                ):(
                    <React.Fragment>
                        {getDeliveryAddresses()}
                    </React.Fragment>
                )}
                <TabBar/>
            </div>
        </React.Fragment>
    );
});

export default DeliveryAddresses;