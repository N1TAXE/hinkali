import React, {useContext, useState} from 'react';
import TopBar from "../components/TopBar";
import TabBar from "../components/TabBar";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {NavLink} from "react-router-dom";
import {PROFILE_ROUTE} from "../utils/consts";
import ModalCard from "../components/ModalCard";
import UnAuthorized from "../components/UnAuthorized";
import Authorized from "../components/Authorized";

const DeliveryAddresses = observer(() => {
    const {globals} = useContext(Context)
    const [deliveryAddresses, setDeliveryAddresses] = useState('empty')
    const [isModalOpened, setIsModalOpened] = useState(false)
    const [isModalChangeOpened, setIsModalChangeOpened] = useState(false)
    const [isModalDeleteOpened, setIsModalDeleteOpened] = useState(false)
    const [isModalSaveOpened, setIsModalSaveOpened] = useState(false)

    const getDeliveryAddresses = () =>{
        switch (deliveryAddresses){
            case 'empty':
                return(
                    <React.Fragment>
                        {!globals.getIsAuth ? <UnAuthorized page={'deliveryAddresses'} setStatus={setDeliveryAddresses}/> : <Authorized page={'deliveryAddresses'} setStatus={setDeliveryAddresses}/>}
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
                                        <button onClick={() => setIsModalChangeOpened(true)} className="btn btn-none btn-mini">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M5 19H6.4L15.025 10.375L13.625 8.975L5 17.6V19ZM19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3042 2.75 17.8625 2.75C18.4208 2.75 18.8917 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.57083 21.275 6.1125C21.2917 6.65417 21.1083 7.11667 20.725 7.5L19.3 8.925ZM4 21C3.71667 21 3.47917 20.9042 3.2875 20.7125C3.09583 20.5208 3 20.2833 3 20V17.175C3 17.0417 3.025 16.9125 3.075 16.7875C3.125 16.6625 3.2 16.55 3.3 16.45L13.6 6.15L17.85 10.4L7.55 20.7C7.45 20.8 7.3375 20.875 7.2125 20.925C7.0875 20.975 6.95833 21 6.825 21H4ZM14.325 9.675L13.625 8.975L15.025 10.375L14.325 9.675Z" fill="#8D191D"/>
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="delivery-addresses__buttons">
                            <button onClick={() => setIsModalOpened(true)} className="btn btn-md btn-red gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M18.5 13H13.5V18C13.5 18.55 13.05 19 12.5 19C11.95 19 11.5 18.55 11.5 18V13H6.5C5.95 13 5.5 12.55 5.5 12C5.5 11.45 5.95 11 6.5 11H11.5V6C11.5 5.45 11.95 5 12.5 5C13.05 5 13.5 5.45 13.5 6V11H18.5C19.05 11 19.5 11.45 19.5 12C19.5 12.55 19.05 13 18.5 13Z" fill="white"/>
                                </svg>
                                Добавить новый адрес
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

            <div className={!globals.getIsAuth ? ("unauthorized"):("delivery-addresses authorized")}>
                <TopBar page={'any'} title="Адреса доставки" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM12 21.625C11.8667 21.625 11.7333 21.6 11.6 21.55C11.4667 21.5 11.35 21.4333 11.25 21.35C8.81667 19.2 7 17.2042 5.8 15.3625C4.6 13.5208 4 11.8 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8 19.4 13.5208 18.2 15.3625C17 17.2042 15.1833 19.2 12.75 21.35C12.65 21.4333 12.5333 21.5 12.4 21.55C12.2667 21.6 12.1333 21.625 12 21.625Z" fill="#8D191D"/></svg>}/>
                {!globals.getIsAuth ? (
                    <UnAuthorized page={'deliveryAddresses'}/>
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