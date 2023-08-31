import React, {useContext, useEffect, useRef, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {GeolocationControl, Map, Placemark, Rectangle, YMaps, ZoomControl} from "react-yandex-maps";
import icon from '../assets/images/icons/marker_static.png'
import axios from "axios";
// import {iconSearch} from "../components/Icons";
import ModalCard from "../components/ModalCard";
import { Carousel } from 'react-responsive-carousel';
import {NavLink} from "react-router-dom";
import {CATALOGUE_ROUTE} from "../utils/consts";
import iconGrill from "../assets/images/icons/grill.png";
import iconCard from "../assets/images/icons/сredit_card.png";
import iconWiFi from "../assets/images/icons/wifi.png";
import iconDeck from "../assets/images/icons/deck.png";
import iconChild from "../assets/images/icons/child_friendly.png";
import iconParking from "../assets/images/icons/parking.png";
import iconLiquor from "../assets/images/icons/liquor.png";
import iconBeer from "../assets/images/icons/beer_bar.png";
import iconPhone from "../assets/images/icons/phone.png";
import iconTime from "../assets/images/icons/schedule.png";
import iconKeyboardArrowDown from "../assets/images/icons/keyboard_arrow_down.png";
import iconMoped from "../assets/images/icons/moped.png";
import iconSelfPickup from "../assets/images/icons/self_pickup.png";
import iconTableRestaurant from "../assets/images/icons/table_restaurant.png";
import iconQrCodeScanner from "../assets/images/icons/qr_code_scanner.png";
import iconStar from "../assets/images/icons/star.svg";
import iconYandexZnak from "../assets/images/icons/yandex_znak.svg";
import iconArrowBack from "../assets/images/icons/arrow_back.png";
import iconClose from "../assets/images/icons/close.png";
import iconSearch from "../assets/images/icons/search.png";
import iconCloseGray from "../assets/images/icons/close_gray.png";

const InstitutSelect = observer(() => {
    const [isOpenedMain, setIsOpenedMain] = useState(false)
    const [isOpenedSchedule, setIsOpenedSchedule] = useState(false)
    const [isOpenedFilters, setIsOpenedFilters] = useState(false)
    const [isOpenedBook, setIsOpenedBook] = useState(false)
    const [isOpenedBookAccess, setIsOpenedBookAccess] = useState(false)
    const [places, setPlaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {globals} = useContext(Context)

    const counter = 1058641;
    const counterString = counter.toString();
    const counterDigits = counterString.padStart(9, '0').split('');

    const mult = 0.1

    const images = [
        {
            src:
                "https://media-cdn.tripadvisor.com/media/photo-s/17/ed/de/23/2.jpg"
        },
        {
            src:
                "https://media-cdn.tripadvisor.com/media/photo-s/17/ed/dd/b3/caption.jpg"
        },
        {
            src:
                "https://manezhkursk.ru/wp-content/uploads/2022/11/sh-0037.jpg"
        }
    ];

    const cityCoordinates = globals.getCity.coords;
    const bboxN = [
        [cityCoordinates[0]-mult, cityCoordinates[1]-mult],
        [cityCoordinates[0]+mult, cityCoordinates[1]+mult]
    ];

    const searchPlaces = async () => {
        const apiKey = 'bd392102-eceb-4507-a5c0-7b5e9d7bf816';
        const searchQuery = 'Старик Хинкалыч';
        const category = 'biz';
        const bbox = `${bboxN[0][1]},${bboxN[0][0]}~${bboxN[1][1]},${bboxN[1][0]}`;

        try {
            const data = await axios.get(
                `https://search-maps.yandex.ru/v1/?text=${searchQuery}&type=${category}&lang=ru_RU&apikey=${apiKey}&bbox=${bbox}&rspn=1`
            );

            return data.data.features.map((feature) => ({
                name: feature.properties.name,
                lat: feature.geometry.coordinates[1],
                lng: feature.geometry.coordinates[0],
            }))
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        searchPlaces().then((data) => {
            setPlaces(data);
        });
    }, []);



    useEffect(() => {
        if (places) {
            setIsLoading(false)
        }
    }, [places])

    if (isLoading) {
        return (
            <div>Loading</div>
        )
    }

    const handleBack = () => {
        globals.setCity(null)
    }

    return (
        <div className="map">
            {isOpenedMain &&
                <ModalCard setIsOpened={setIsOpenedMain}>
                    <div className="modal">
                        <div className="modal__wrapper map__institute-info">
                            <div onClick={() => setIsOpenedMain(false)} className="map__institute-close no-drag">
                                <img src={iconCloseGray} alt=""/>
                            </div>
                            <Carousel showThumbs={false} showArrows={false} showStatus={false}>
                                {images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image.src}
                                     alt=""/>
                                ))}
                            </Carousel>
                            <div className="map__institute-content no-drag">
                                <div className="institute-header">
                                    <h3>
                                        ул.Турецкая, 25, Симферополь
                                    </h3>
                                    <div className="d-flex gap-16 flex-center">
                                        <div className="institute-header__rating">
                                            <img src={iconStar} alt=""/>
                                            <span>4,8</span>
                                            <span>(1158)</span>
                                        </div>
                                        <div className="institute-header__goodplace">
                                            <img src={iconYandexZnak} alt=""/>
                                            <span>Хорошее место</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="institute-counter">
                                    <h4>Съедено хинкали</h4>
                                    <div className="counter-wrapper">
                                        {counterDigits && counterDigits.map((n,i) => (
                                            <div key={i} className="counter-item">
                                                {n}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="institute-phone">
                                    <button onClick={() => setIsOpenedSchedule(true)} className="btn btn-mini btn-gray no-drag">
                                        <img src={iconTime} alt=""/>
                                        Открыто до 21:00
                                        <img src={iconKeyboardArrowDown} alt=""/>
                                    </button>
                                    <button className="btn btn-mini btn-gray no-drag">
                                        <img src={iconPhone} alt=""/>
                                        +7 978 228-72-20
                                    </button>
                                </div>
                                <div className="institute-specification">
                                    <div className="institute-specification__item active">
                                        <img src={iconGrill} alt=""/>
                                        Мангал-меню
                                    </div>
                                    <div className="institute-specification__item active">
                                        <img src={iconCard} alt=""/>
                                        Оплата картой
                                    </div>
                                    <div className="institute-specification__item active">
                                        <img src={iconWiFi} alt=""/>
                                        Wi-Fi
                                    </div>
                                    <div className="institute-specification__item">
                                        <img src={iconDeck} alt=""/>
                                        Летняя площадка
                                    </div>
                                    <div className="institute-specification__item active">
                                        <img src={iconChild} alt=""/>
                                        Детская комната
                                    </div>
                                    <div className="institute-specification__item active">
                                        <img src={iconParking} alt=""/>
                                        Парковка
                                    </div>
                                    <div className="institute-specification__item">
                                        <img src={iconLiquor} alt=""/>
                                        Крепкий алкоголь
                                    </div>
                                    <div className="institute-specification__item">
                                        <img src={iconBeer} alt=""/>
                                        Слабый алкоголь
                                    </div>
                                </div>
                                <div className="institute-link no-drag">
                                    Реквизиты компании
                                </div>
                                <div className="institute-buttons">
                                    <button disabled className="btn btn-mini btn-gray no-drag">
                                        <img src={iconMoped} alt=""/>
                                        Доставка
                                    </button>
                                    <NavLink to={CATALOGUE_ROUTE} className="btn btn-mini btn-gray no-drag">
                                        <img src={iconSelfPickup} alt=""/>
                                        Самовывоз
                                    </NavLink>
                                    <button onClick={() => setIsOpenedBook(true)} className="btn btn-mini btn-gray no-drag">
                                        <img src={iconTableRestaurant} alt=""/>
                                        Забронировать столик
                                    </button>
                                    <button className="btn btn-mini btn-gray no-drag">
                                        <img src={iconQrCodeScanner} alt=""/>
                                        Заказать за столиком
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalCard>
            }
            {isOpenedSchedule &&
                <ModalCard setIsOpened={setIsOpenedSchedule}>
                    <div className="modal">
                        <div className="modal__wrapper">
                            <div className="modal__header">
                                <div className="modal__header-btn">
                                    <img className="no-drag" onClick={() => setIsOpenedSchedule(false)} src={iconArrowBack} alt=""/>
                                </div>
                                <h3>Режим работы</h3>
                            </div>
                            <div className="modal__content">
                                <ul className="map__schedule-list">
                                    <li>
                                        <span>Понедельник</span>
                                        <span>10:00–21:00</span>
                                    </li>
                                    <li className="active">
                                        <span>Вторник</span>
                                        <span>10:00–21:00</span>
                                    </li>
                                    <li>
                                        <span>Среда</span>
                                        <span>10:00–21:00</span>
                                    </li>
                                    <li>
                                        <span>Четверг</span>
                                        <span>10:00–21:00</span>
                                    </li>
                                    <li>
                                        <span>Пятница</span>
                                        <span>10:00–22:00</span>
                                    </li>
                                    <li>
                                        <span>Субота</span>
                                        <span>10:00–22:00</span>
                                    </li>
                                    <li>
                                        <span>Воскресенье</span>
                                        <span>10:00–21:00</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </ModalCard>
            }
            {isOpenedBook &&
                <ModalCard setIsOpened={setIsOpenedBook}>
                    <div className="modal">
                        <div className="modal__wrapper">
                            <div className="modal__header">
                                <div className="modal__header-btn">
                                    <img className="no-drag" onClick={() => setIsOpenedBook(false)} src={iconClose} alt=""/>
                                </div>
                                <h3>Забронировать столик</h3>
                            </div>
                            <div className="modal__content gap-8">
                                <div className="input__item input_icon no-drag input_icon_left">
                                    <label htmlFor="address">Заведение</label>
                                    <div className="input__container">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7875 16.525 14.2625C17.5083 12.7375 18 11.3833 18 10.2C18 8.38333 17.4208 6.89583 16.2625 5.7375C15.1042 4.57917 13.6833 4 12 4C10.3167 4 8.89583 4.57917 7.7375 5.7375C6.57917 6.89583 6 8.38333 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35ZM12 21.625C11.8667 21.625 11.7333 21.6 11.6 21.55C11.4667 21.5 11.35 21.4333 11.25 21.35C8.81667 19.2 7 17.2042 5.8 15.3625C4.6 13.5208 4 11.8 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8 19.4 13.5208 18.2 15.3625C17 17.2042 15.1833 19.2 12.75 21.35C12.65 21.4333 12.5333 21.5 12.4 21.55C12.2667 21.6 12.1333 21.625 12 21.625Z" fill="#999999"/>
                                        </svg>
                                        <input placeholder="ул. Турецкая, 25, Симферополь" name="address" type="text"/>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" fill="#999999"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="d-flex flex-center gap-8">
                                    <div className="input__item no-drag">
                                        <label htmlFor="name">Имя</label>
                                        <div className="input__container">
                                            <input placeholder="Имя" name="name" type="text"/>
                                        </div>
                                    </div>
                                    <div className="input__item no-drag">
                                        <label htmlFor="surname">Фамилия</label>
                                        <div className="input__container">
                                            <input placeholder="Фамилия" name="surname" type="text"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-center gap-8">
                                    <div className="input__item no-drag">
                                        <label htmlFor="phone">Телефон</label>
                                        <div className="input__container">
                                            <input placeholder="+7 (___) ___-__-__" name="phone" type="number"/>
                                        </div>
                                    </div>
                                    <div className="input__item no-drag">
                                        <label htmlFor="person">Персон</label>
                                        <div className="input__container">
                                            <input value="1" name="person" type="number"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-center gap-8">
                                    <div className="input__item no-drag">
                                        <label htmlFor="date">Дата</label>
                                        <div className="input__container">
                                            <input placeholder="__.__.____" name="date" type="date"/>

                                        </div>
                                    </div>
                                    <div className="input__item no-drag">
                                        <label htmlFor="time">Время</label>
                                        <div className="input__container">
                                            <input placeholder="__:__" name="time" type="time"/>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    После заполнения заявки с вами свяжется администратор
                                </p>
                                <button onClick={() => {
                                    setIsOpenedBookAccess(true)
                                }
                                } className="btn btn-sm btn-red no-drag">
                                    Забронировать
                                </button>
                                <button onClick={() => setIsOpenedBook(false)} className="btn btn-sm btn-gray no-drag">
                                    Отменить
                                </button>
                            </div>
                        </div>
                    </div>
                </ModalCard>
            }
            {isOpenedBookAccess &&
                <ModalCard setIsOpened={setIsOpenedBookAccess}>
                    <div className="modal">
                        <div className="modal__wrapper">
                            <div className="modal__header">
                                <svg className="no-drag" onClick={() => setIsOpenedBookAccess(false)} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.3 17.71C29.91 17.32 29.28 17.32 28.89 17.71L24 22.59L19.11 17.7C18.72 17.31 18.09 17.31 17.7 17.7C17.31 18.09 17.31 18.72 17.7 19.11L22.59 24L17.7 28.89C17.31 29.28 17.31 29.91 17.7 30.3C18.09 30.69 18.72 30.69 19.11 30.3L24 25.41L28.89 30.3C29.28 30.69 29.91 30.69 30.3 30.3C30.69 29.91 30.69 29.28 30.3 28.89L25.41 24L30.3 19.11C30.68 18.73 30.68 18.09 30.3 17.71Z" fill="#8D191D"/>
                                </svg>
                                <h3>Ваша заявка отправлена</h3>
                            </div>
                            <div className="modal__content gap-8">
                                <p>
                                    В ближайшее время с вами свяжется наш администратор и уточнит детали
                                </p>
                                <button onClick={() => {
                                    setIsOpenedBookAccess(false)
                                    setIsOpenedBook(false)
                                }
                                } className="btn btn-sm btn-red no-drag">
                                    Хорошо
                                </button>
                            </div>
                        </div>
                    </div>
                </ModalCard>
            }
            {isOpenedFilters &&
                <ModalCard setIsOpened={setIsOpenedFilters}>
                    <div className="modal">
                        <div className="modal__wrapper">
                            <div className="modal__header">
                                <svg className="no-drag" onClick={() => setIsOpenedFilters(false)} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.3 17.71C29.91 17.32 29.28 17.32 28.89 17.71L24 22.59L19.11 17.7C18.72 17.31 18.09 17.31 17.7 17.7C17.31 18.09 17.31 18.72 17.7 19.11L22.59 24L17.7 28.89C17.31 29.28 17.31 29.91 17.7 30.3C18.09 30.69 18.72 30.69 19.11 30.3L24 25.41L28.89 30.3C29.28 30.69 29.91 30.69 30.3 30.3C30.69 29.91 30.69 29.28 30.3 28.89L25.41 24L30.3 19.11C30.68 18.73 30.68 18.09 30.3 17.71Z" fill="#8D191D"/>
                                </svg>
                                <h3>Фильтры</h3>
                            </div>
                            <div className="modal__content gap-16">
                                <div className="map__filters-list">
                                    <button className="filter">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.308 14.5668C3.15244 14.4668 3.05522 14.3252 3.01633 14.1418C2.97744 13.9585 3.008 13.7891 3.108 13.6335L5.74133 9.60016C5.04133 9.27794 4.45244 8.8085 3.97467 8.19183C3.49689 7.57516 3.19689 6.86683 3.07467 6.06683C3.04133 5.87794 3.09411 5.7085 3.233 5.5585C3.37189 5.4085 3.54689 5.3335 3.758 5.3335H11.5913C11.8024 5.3335 11.9774 5.4085 12.1163 5.5585C12.2552 5.7085 12.308 5.87794 12.2747 6.06683C12.1524 6.86683 11.8524 7.57516 11.3747 8.19183C10.8969 8.8085 10.308 9.27794 9.608 9.60016L9.99133 10.2002C9.758 10.3113 9.56633 10.4224 9.41633 10.5335C9.26633 10.6446 9.10245 10.8002 8.92467 11.0002L8.258 9.96683C8.14689 9.98905 7.95245 10.0002 7.67467 10.0002H7.37467C7.27467 10.0002 7.18022 9.98905 7.09133 9.96683L5.77467 12.0002H9.14133C9.28578 11.6002 9.52744 11.2779 9.86633 11.0335C10.2052 10.7891 10.5858 10.6668 11.008 10.6668C11.5636 10.6668 12.0358 10.8613 12.4247 11.2502C12.8136 11.6391 13.008 12.1113 13.008 12.6668C13.008 13.2224 12.8136 13.6946 12.4247 14.0835C12.0358 14.4724 11.5636 14.6668 11.008 14.6668C10.5858 14.6668 10.2052 14.5446 9.86633 14.3002C9.52744 14.0557 9.28578 13.7335 9.14133 13.3335H4.908L4.24133 14.3668C4.14133 14.5224 3.99967 14.6196 3.81633 14.6585C3.633 14.6974 3.46356 14.6668 3.308 14.5668ZM11.008 13.3335C11.1969 13.3335 11.3552 13.2696 11.483 13.1418C11.6108 13.0141 11.6747 12.8557 11.6747 12.6668C11.6747 12.4779 11.6108 12.3196 11.483 12.1918C11.3552 12.0641 11.1969 12.0002 11.008 12.0002C10.8191 12.0002 10.6608 12.0641 10.533 12.1918C10.4052 12.3196 10.3413 12.4779 10.3413 12.6668C10.3413 12.8557 10.4052 13.0141 10.533 13.1418C10.6608 13.2696 10.8191 13.3335 11.008 13.3335ZM6.308 4.66683C6.208 4.66683 6.12744 4.6335 6.06633 4.56683C6.00522 4.50016 5.97467 4.41127 5.97467 4.30016C5.97467 4.07794 5.93578 3.87516 5.858 3.69183C5.78022 3.5085 5.64689 3.30572 5.458 3.0835C5.26911 2.83905 5.133 2.60572 5.04967 2.3835C4.96633 2.16127 4.93578 1.90572 4.958 1.61683C4.96911 1.53905 5.00522 1.47238 5.06633 1.41683C5.12744 1.36127 5.20244 1.3335 5.29133 1.3335C5.39133 1.3335 5.47189 1.36683 5.533 1.4335C5.59411 1.50016 5.62467 1.58905 5.62467 1.70016C5.62467 1.92239 5.66356 2.12239 5.74133 2.30016C5.81911 2.47794 5.95244 2.67794 6.14133 2.90016C6.34133 3.15572 6.48022 3.39461 6.558 3.61683C6.63578 3.83905 6.66356 4.09461 6.64133 4.3835C6.63022 4.46127 6.59411 4.52794 6.533 4.5835C6.47189 4.63905 6.39689 4.66683 6.308 4.66683ZM7.97467 4.66683C7.87467 4.66683 7.79411 4.6335 7.733 4.56683C7.67189 4.50016 7.64133 4.41127 7.64133 4.30016C7.65244 4.07794 7.61911 3.87516 7.54133 3.69183C7.46356 3.5085 7.33022 3.30572 7.14133 3.0835C6.94133 2.85016 6.79967 2.61961 6.71633 2.39183C6.633 2.16405 6.60244 1.90572 6.62467 1.61683C6.63578 1.53905 6.67189 1.47238 6.733 1.41683C6.79411 1.36127 6.86911 1.3335 6.958 1.3335C7.058 1.3335 7.13856 1.36683 7.19967 1.4335C7.26078 1.50016 7.29133 1.58905 7.29133 1.70016C7.29133 1.92239 7.33022 2.12239 7.408 2.30016C7.48578 2.47794 7.61911 2.67794 7.808 2.90016C7.99689 3.14461 8.133 3.38072 8.21633 3.6085C8.29967 3.83627 8.33022 4.09461 8.308 4.3835C8.29689 4.46127 8.26078 4.52794 8.19967 4.5835C8.13856 4.63905 8.06356 4.66683 7.97467 4.66683ZM9.64133 4.66683C9.54133 4.66683 9.46078 4.6335 9.39967 4.56683C9.33856 4.50016 9.308 4.41127 9.308 4.30016C9.31911 4.07794 9.28578 3.87516 9.208 3.69183C9.13022 3.5085 8.99689 3.30572 8.808 3.0835C8.608 2.85016 8.46633 2.61961 8.383 2.39183C8.29967 2.16405 8.26911 1.90572 8.29133 1.61683C8.30244 1.53905 8.33856 1.47238 8.39967 1.41683C8.46078 1.36127 8.53578 1.3335 8.62467 1.3335C8.72467 1.3335 8.80522 1.36683 8.86633 1.4335C8.92744 1.50016 8.958 1.58905 8.958 1.70016C8.958 1.92239 8.99689 2.12239 9.07467 2.30016C9.15244 2.47794 9.28578 2.67794 9.47467 2.90016C9.66356 3.14461 9.79967 3.38072 9.883 3.6085C9.96633 3.83627 9.99689 4.09461 9.97467 4.3835C9.96356 4.46127 9.92744 4.52794 9.86633 4.5835C9.80522 4.63905 9.73022 4.66683 9.64133 4.66683Z" fill="#4D4D4D"/>
                                        </svg>
                                        Мангал-меню
                                    </button>
                                    <button className="filter">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.3334 2.6665H2.66671C1.92671 2.6665 1.34004 3.25984 1.34004 3.99984L1.33337 11.9998C1.33337 12.7398 1.92671 13.3332 2.66671 13.3332H13.3334C14.0734 13.3332 14.6667 12.7398 14.6667 11.9998V3.99984C14.6667 3.25984 14.0734 2.6665 13.3334 2.6665ZM12.6667 11.9998H3.33337C2.96671 11.9998 2.66671 11.6998 2.66671 11.3332V7.99984H13.3334V11.3332C13.3334 11.6998 13.0334 11.9998 12.6667 11.9998ZM13.3334 5.33317H2.66671V3.99984H13.3334V5.33317Z" fill="#4D4D4D"/>
                                        </svg>
                                        Оплата картой
                                    </button>
                                    <button className="filter">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.37331 6.70668C1.71331 7.04668 2.25331 7.08001 2.61998 6.77335C5.73331 4.21335 10.2533 4.21335 13.3733 6.76668C13.7466 7.07335 14.2933 7.04668 14.6333 6.70668C15.0266 6.31335 15 5.66001 14.5666 5.30668C10.76 2.19335 5.25331 2.19335 1.43998 5.30668C1.00664 5.65335 0.973308 6.30668 1.37331 6.70668ZM6.54664 11.88L7.52664 12.86C7.78664 13.12 8.20664 13.12 8.46664 12.86L9.44664 11.88C9.75998 11.5667 9.69331 11.0267 9.29331 10.82C8.47998 10.4 7.50664 10.4 6.68664 10.82C6.30664 11.0267 6.23331 11.5667 6.54664 11.88ZM4.05998 9.39335C4.38664 9.72001 4.89998 9.75335 5.27997 9.48001C6.90664 8.32668 9.09331 8.32668 10.72 9.48001C11.1 9.74668 11.6133 9.72001 11.94 9.39335L11.9466 9.38668C12.3466 8.98668 12.32 8.30668 11.86 7.98001C9.56664 6.32001 6.43998 6.32001 4.13998 7.98001C3.67998 8.31335 3.65331 8.98668 4.05998 9.39335Z" fill="#4D4D4D"/>
                                        </svg>
                                        Wi-Fi
                                    </button>
                                    <button className="filter active">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.99997 14.6666C7.81108 14.6666 7.65275 14.6027 7.52497 14.475C7.39719 14.3472 7.3333 14.1889 7.3333 14V5.99997H2.3833C2.21663 5.99997 2.11108 5.92219 2.06663 5.76663C2.02219 5.61108 2.06663 5.48886 2.19997 5.39997L7.2333 1.86663C7.46663 1.71108 7.72219 1.6333 7.99997 1.6333C8.27775 1.6333 8.5333 1.71108 8.76663 1.86663L13.8 5.39997C13.9333 5.48886 13.9777 5.61108 13.9333 5.76663C13.8889 5.92219 13.7833 5.99997 13.6166 5.99997H8.66663V14C8.66663 14.1889 8.60275 14.3472 8.47497 14.475C8.34719 14.6027 8.18886 14.6666 7.99997 14.6666ZM2.66663 14.6666C2.47775 14.6666 2.31941 14.6027 2.19163 14.475C2.06386 14.3472 1.99997 14.1889 1.99997 14V11.1666L1.5833 8.8833C1.54997 8.69441 1.5833 8.52775 1.6833 8.3833C1.7833 8.23886 1.92775 8.14997 2.11663 8.11663C2.29441 8.0833 2.4583 8.11941 2.6083 8.22497C2.7583 8.33052 2.84997 8.47219 2.8833 8.64997L3.26663 10.6666H5.3333C5.52219 10.6666 5.68052 10.7305 5.8083 10.8583C5.93608 10.9861 5.99997 11.1444 5.99997 11.3333V14C5.99997 14.1889 5.93608 14.3472 5.8083 14.475C5.68052 14.6027 5.52219 14.6666 5.3333 14.6666C5.14441 14.6666 4.98608 14.6027 4.8583 14.475C4.73052 14.3472 4.66663 14.1889 4.66663 14V12H3.3333V14C3.3333 14.1889 3.26941 14.3472 3.14163 14.475C3.01386 14.6027 2.85552 14.6666 2.66663 14.6666ZM10.6666 14.6666C10.4777 14.6666 10.3194 14.6027 10.1916 14.475C10.0639 14.3472 9.99997 14.1889 9.99997 14V11.3333C9.99997 11.1444 10.0639 10.9861 10.1916 10.8583C10.3194 10.7305 10.4777 10.6666 10.6666 10.6666H12.7333L13.1166 8.64997C13.15 8.47219 13.2416 8.33052 13.3916 8.22497C13.5416 8.11941 13.7055 8.0833 13.8833 8.11663C14.0722 8.14997 14.2166 8.23886 14.3166 8.3833C14.4166 8.52775 14.45 8.69441 14.4166 8.8833L14 11.1666V14C14 14.1889 13.9361 14.3472 13.8083 14.475C13.6805 14.6027 13.5222 14.6666 13.3333 14.6666C13.1444 14.6666 12.9861 14.6027 12.8583 14.475C12.7305 14.3472 12.6666 14.1889 12.6666 14V12H11.3333V14C11.3333 14.1889 11.2694 14.3472 11.1416 14.475C11.0139 14.6027 10.8555 14.6666 10.6666 14.6666Z" fill="#4D4D4D"/>
                                        </svg>
                                        Летняя площадка
                                    </button>
                                    <button className="filter">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.66665 12.6668C4.11109 12.6668 3.63887 12.4724 3.24998 12.0835C2.86109 11.6946 2.66665 11.2224 2.66665 10.6668H1.99998C1.81109 10.6668 1.65276 10.6029 1.52498 10.4752C1.3972 10.3474 1.33331 10.1891 1.33331 10.0002V8.66683C1.33331 7.9335 1.59442 7.30572 2.11665 6.7835C2.63887 6.26127 3.26665 6.00016 3.99998 6.00016H5.99998C6.18887 6.00016 6.3472 6.06405 6.47498 6.19183C6.60276 6.31961 6.66665 6.47794 6.66665 6.66683V9.3335H8.99998L11.3333 6.4335V4.66683H9.99998C9.81109 4.66683 9.65276 4.60294 9.52498 4.47516C9.3972 4.34739 9.33331 4.18905 9.33331 4.00016C9.33331 3.81127 9.3972 3.65294 9.52498 3.52516C9.65276 3.39738 9.81109 3.3335 9.99998 3.3335H11.3333C11.7 3.3335 12.0139 3.46405 12.275 3.72516C12.5361 3.98627 12.6666 4.30016 12.6666 4.66683V6.4335C12.6666 6.58905 12.6416 6.73627 12.5916 6.87516C12.5416 7.01405 12.4722 7.14461 12.3833 7.26683L10.0666 10.1668C9.94442 10.3224 9.78887 10.4446 9.59998 10.5335C9.41109 10.6224 9.21665 10.6668 9.01665 10.6668H6.66665C6.66665 11.2224 6.4722 11.6946 6.08331 12.0835C5.69442 12.4724 5.2222 12.6668 4.66665 12.6668ZM4.66665 11.3335C4.85554 11.3335 5.01387 11.2696 5.14165 11.1418C5.26942 11.0141 5.33331 10.8557 5.33331 10.6668H3.99998C3.99998 10.8557 4.06387 11.0141 4.19165 11.1418C4.31942 11.2696 4.47776 11.3335 4.66665 11.3335ZM3.99998 5.3335C3.81109 5.3335 3.65276 5.26961 3.52498 5.14183C3.3972 5.01405 3.33331 4.85572 3.33331 4.66683C3.33331 4.47794 3.3972 4.31961 3.52498 4.19183C3.65276 4.06405 3.81109 4.00016 3.99998 4.00016H5.99998C6.18887 4.00016 6.3472 4.06405 6.47498 4.19183C6.60276 4.31961 6.66665 4.47794 6.66665 4.66683C6.66665 4.85572 6.60276 5.01405 6.47498 5.14183C6.3472 5.26961 6.18887 5.3335 5.99998 5.3335H3.99998ZM12.6666 12.6668C12.1111 12.6668 11.6389 12.4724 11.25 12.0835C10.8611 11.6946 10.6666 11.2224 10.6666 10.6668C10.6666 10.1113 10.8611 9.63905 11.25 9.25016C11.6389 8.86127 12.1111 8.66683 12.6666 8.66683C13.2222 8.66683 13.6944 8.86127 14.0833 9.25016C14.4722 9.63905 14.6666 10.1113 14.6666 10.6668C14.6666 11.2224 14.4722 11.6946 14.0833 12.0835C13.6944 12.4724 13.2222 12.6668 12.6666 12.6668ZM12.6666 11.3335C12.8555 11.3335 13.0139 11.2696 13.1416 11.1418C13.2694 11.0141 13.3333 10.8557 13.3333 10.6668C13.3333 10.4779 13.2694 10.3196 13.1416 10.1918C13.0139 10.0641 12.8555 10.0002 12.6666 10.0002C12.4778 10.0002 12.3194 10.0641 12.1916 10.1918C12.0639 10.3196 12 10.4779 12 10.6668C12 10.8557 12.0639 11.0141 12.1916 11.1418C12.3194 11.2696 12.4778 11.3335 12.6666 11.3335Z" fill="#4D4D4D"/>
                                        </svg>
                                        Доставка
                                    </button>
                                    <button className="filter">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.99992 6.08981C8.26152 6.08981 8.48546 5.99666 8.67175 5.81037C8.85804 5.62408 8.95118 5.40014 8.95118 5.13854C8.95118 4.87695 8.85804 4.653 8.67175 4.46672C8.48546 4.28043 8.26152 4.18728 7.99992 4.18728C7.73832 4.18728 7.51438 4.28043 7.32809 4.46672C7.1418 4.653 7.04866 4.87695 7.04866 5.13854C7.04866 5.40014 7.1418 5.62408 7.32809 5.81037C7.51438 5.99666 7.73832 6.08981 7.99992 6.08981ZM7.99992 10.6678C7.9365 10.6678 7.87308 10.6559 7.80967 10.6321C7.74625 10.6083 7.69076 10.5766 7.6432 10.537C6.48583 9.51435 5.62176 8.56507 5.05101 7.68912C4.48025 6.81316 4.19487 5.99468 4.19487 5.23367C4.19487 4.04459 4.57736 3.09729 5.34233 2.39178C6.1073 1.68626 6.99317 1.3335 7.99992 1.3335C9.00667 1.3335 9.89253 1.68626 10.6575 2.39178C11.4225 3.09729 11.805 4.04459 11.805 5.23367C11.805 5.99468 11.5196 6.81316 10.9488 7.68912C10.3781 8.56507 9.51401 9.51435 8.35664 10.537C8.30908 10.5766 8.25359 10.6083 8.19017 10.6321C8.12675 10.6559 8.06334 10.6678 7.99992 10.6678Z" fill="#4D4D4D"/>
                                            <path d="M4.27721 8.86054C4.65538 9.08114 4.78311 9.56653 4.56252 9.9447L3.03832 12.5576H12.9615L11.4373 9.9447C11.2167 9.56653 11.3445 9.08114 11.7226 8.86054C12.1008 8.63994 12.5862 8.76768 12.8068 9.14585L14.4701 11.9972C15.025 12.9484 14.3388 14.143 13.2375 14.143H2.76229C1.66103 14.143 0.974879 12.9484 1.52977 11.9972L3.19305 9.14585C3.41365 8.76768 3.89904 8.63994 4.27721 8.86054Z" fill="#4D4D4D"/>
                                        </svg>
                                        Cамовывоз
                                    </button>
                                    <button disabled className="filter">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.66665 2.05332V6.66665H14C14 3.97998 12.0133 1.75332 9.42665 1.38665C9.02665 1.32665 8.66665 1.64665 8.66665 2.05332ZM12.88 10.5933C13.58 9.69332 14 8.55999 14 7.33332H4.29331L3.83998 6.37998C3.73331 6.14665 3.49331 5.99998 3.23998 5.99998H1.99998C1.63331 5.99998 1.33331 6.29998 1.33331 6.66665C1.33331 7.03332 1.63331 7.33332 1.99998 7.33332H2.81331C2.81331 7.33332 4.07331 10.0467 4.22665 10.28C3.33998 10.7533 2.79998 11.7933 3.06665 12.9067C3.26665 13.7467 3.95998 14.42 4.79998 14.6067C6.19998 14.9133 7.45331 13.9667 7.63331 12.6667H9.01998C9.19998 13.96 10.4466 14.9067 11.8333 14.6133C12.68 14.4333 13.3733 13.7667 13.5866 12.9267C13.82 12 13.4933 11.14 12.88 10.5933ZM5.33331 13.3333C4.77998 13.3333 4.33331 12.8867 4.33331 12.3333C4.33331 11.78 4.77998 11.3333 5.33331 11.3333C5.88665 11.3333 6.33331 11.78 6.33331 12.3333C6.33331 12.8867 5.88665 13.3333 5.33331 13.3333ZM11.3333 13.3333C10.78 13.3333 10.3333 12.8867 10.3333 12.3333C10.3333 11.78 10.78 11.3333 11.3333 11.3333C11.8866 11.3333 12.3333 11.78 12.3333 12.3333C12.3333 12.8867 11.8866 13.3333 11.3333 13.3333Z" fill="#BFBFBF"/>
                                        </svg>
                                        Детская комната
                                    </button>
                                    <button className="filter">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.52667 2H5.33333C4.6 2 4 2.6 4 3.33333V12.6667C4 13.4 4.6 14 5.33333 14C6.06667 14 6.66667 13.4 6.66667 12.6667V10H8.66667C11.0467 10 12.9467 7.91333 12.6333 5.47333C12.3733 3.46 10.56 2 8.52667 2ZM8.8 7.33333H6.66667V4.66667H8.8C9.53333 4.66667 10.1333 5.26667 10.1333 6C10.1333 6.73333 9.53333 7.33333 8.8 7.33333Z" fill="#4D4D4D"/>
                                        </svg>
                                        Парковка
                                    </button>
                                    <button disabled className="filter">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.6667 6.00001H11.6267C11.8467 5.63335 11.98 5.21335 11.9933 4.76001C12.02 4.07335 11.7067 3.43335 11.22 2.95335C10.1933 1.92668 9.39333 1.91335 8.67333 2.09335C8.13333 1.63335 7.44 1.34668 6.66667 1.34668C5.40667 1.34668 4.32667 2.08668 3.82 3.15335C2.76667 3.50668 2 4.49335 2 5.66668C2 6.90668 2.85333 7.94001 4 8.24001V12.6667C4 13.4 4.6 14 5.33333 14H10C10.7333 14 11.3333 13.4 11.3333 12.6667H12.6667C13.4 12.6667 14 12.0667 14 11.3333V7.33335C14 6.60001 13.4 6.00001 12.6667 6.00001ZM4.66667 7.00001C3.93333 7.00001 3.33333 6.40001 3.33333 5.66668C3.33333 5.10001 3.7 4.60001 4.24667 4.41335L4.78 4.23335L5.02 3.72668C5.33333 3.08001 5.96 2.68001 6.66667 2.68001C7.19333 2.68001 7.59333 2.91335 7.82667 3.11335L8.34667 3.54668C8.34667 3.54668 8.77333 3.33335 9.32667 3.33335C10.06 3.33335 10.66 3.93335 10.66 4.66668H8.66C6.44667 4.66668 6.1 7.00001 4.66667 7.00001ZM12.6667 11.3333H11.3333V7.33335H12.6667V11.3333Z" fill="#BFBFBF"/>
                                        </svg>
                                        Слабый алкоголь
                                    </button>
                                    <button className="filter active">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.66667 14.6668C2.47778 14.6668 2.31944 14.6029 2.19167 14.4752C2.06389 14.3474 2 14.1891 2 14.0002C2 13.8113 2.06389 13.6529 2.19167 13.5252C2.31944 13.3974 2.47778 13.3335 2.66667 13.3335H3.33333V11.2002C2.94444 11.0668 2.625 10.8307 2.375 10.4918C2.125 10.1529 2 9.76683 2 9.3335V4.66683C2 4.47794 2.06389 4.31961 2.19167 4.19183C2.31944 4.06405 2.47778 4.00016 2.66667 4.00016H5.33333C5.52222 4.00016 5.68056 4.06405 5.80833 4.19183C5.93611 4.31961 6 4.47794 6 4.66683V9.3335C6 9.76683 5.875 10.1529 5.625 10.4918C5.375 10.8307 5.05556 11.0668 4.66667 11.2002V13.3335H5.33333C5.52222 13.3335 5.68056 13.3974 5.80833 13.5252C5.93611 13.6529 6 13.8113 6 14.0002C6 14.1891 5.93611 14.3474 5.80833 14.4752C5.68056 14.6029 5.52222 14.6668 5.33333 14.6668H2.66667ZM3.33333 7.3335H4.66667V5.3335H3.33333V7.3335ZM8.66667 14.6668C8.3 14.6668 7.98611 14.5363 7.725 14.2752C7.46389 14.0141 7.33333 13.7002 7.33333 13.3335V6.96683C7.33333 6.67794 7.41667 6.41961 7.58333 6.19183C7.75 5.96405 7.96667 5.80016 8.23333 5.70016L8.86667 5.46683C9.02222 5.41127 9.13889 5.33072 9.21667 5.22516C9.29444 5.11961 9.33333 4.98905 9.33333 4.8335V2.00016C9.33333 1.81127 9.39722 1.65294 9.525 1.52516C9.65278 1.39738 9.81111 1.3335 10 1.3335H12C12.1889 1.3335 12.3472 1.39738 12.475 1.52516C12.6028 1.65294 12.6667 1.81127 12.6667 2.00016V4.8335C12.6667 4.98905 12.7056 5.11961 12.7833 5.22516C12.8611 5.33072 12.9778 5.41127 13.1333 5.46683L13.7667 5.70016C14.0333 5.80016 14.25 5.96405 14.4167 6.19183C14.5833 6.41961 14.6667 6.67794 14.6667 6.96683V13.3335C14.6667 13.7002 14.5361 14.0141 14.275 14.2752C14.0139 14.5363 13.7 14.6668 13.3333 14.6668H8.66667ZM10.6667 3.3335H11.3333V2.66683H10.6667V3.3335ZM8.66667 8.00016H13.3333V6.96683L12.7 6.7335C12.2778 6.57794 11.9444 6.3335 11.7 6.00016C11.4556 5.66683 11.3333 5.28905 11.3333 4.86683V4.66683H10.6667V4.86683C10.6667 5.28905 10.5444 5.66683 10.3 6.00016C10.0556 6.3335 9.72222 6.57794 9.3 6.7335L8.66667 6.96683V8.00016ZM8.66667 13.3335H13.3333V12.0002H8.66667V13.3335Z" fill="#4D4D4D"/>
                                        </svg>
                                        Крепкий алкоголь
                                    </button>
                                </div>
                                <div className="d-flex flex-column gap-8">
                                    <button onClick={() => {
                                        setIsOpenedFilters(false)
                                    }} className="btn btn-sm btn-red no-drag">
                                        Показать
                                    </button>
                                    <button onClick={() => {
                                        setIsOpenedFilters(false)
                                    }
                                    } className="btn btn-sm btn-gray no-drag">
                                        Сбросить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalCard>
            }
            <div onClick={handleBack} className="map__topbar">
                <div className="map__topbar-btn">
                    <img src={iconArrowBack} alt=""/>
                </div>
                <h3>{globals.getCity.title}</h3>
            </div>
            <div className="map__map">
                <YMaps>
                    <div>
                        <Map
                            defaultState={{
                                center: cityCoordinates,
                                zoom: 13
                            }}
                            width="100vw"
                            height="100vh"
                            options={{
                                size: "small",
                                suppressMapOpenBlock: true,
                            }}
                        >
                            <ZoomControl options={{ position: { right: 10, bottom: 150 }, zoomSize: 'small' }} />
                            <GeolocationControl options={{ position: { right: 10, bottom: 100 }}} />
                            {places && places.map((place, index) => (
                                <Placemark
                                    key={index}
                                    onClick={() => setIsOpenedMain(true)}
                                    geometry={[place.lat, place.lng]}
                                    options={{
                                        iconLayout: 'default#image',
                                        iconImageHref: icon,
                                        iconImageSize: [44, 60],
                                        iconImageOffset: [-20, -35],
                                    }}
                                    properties={{
                                        balloonContent: place.name, // Содержимое всплывающей подсказки при клике на метку
                                    }}
                                />
                            ))}
                        </Map>
                    </div>
                </YMaps>
            </div>
            <div className="map__search">
                <div className="input__item input_icon input_icon_left">
                    <div className="input__container">
                        <img src={iconSearch} alt=""/>
                        <input placeholder="Найти по адресу" name="search" type="text"/>
                    </div>
                </div>
                <button onClick={() => setIsOpenedFilters(true)} className="btn btn-icon btn-tiny btn-red">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 18H13C13.55 18 14 17.55 14 17C14 16.45 13.55 16 13 16H11C10.45 16 10 16.45 10 17C10 17.55 10.45 18 11 18ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7ZM7 13H17C17.55 13 18 12.55 18 12C18 11.45 17.55 11 17 11H7C6.45 11 6 11.45 6 12C6 12.55 6.45 13 7 13Z" fill="white"/>
                    </svg>
                </button>
            </div>
        </div>
    );
});

export default InstitutSelect;