import React, {useState} from 'react';
import OrdersStatus from "./OrdersStatus";
import ModalCard from "../ModalCard";

const OrdersCard = ({data}) => {
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
                                <h3>Заказ {data.orderId}</h3>
                            </div>
                            <div className="orders__modal__content">
                                <div className="orders__modal__content-info">
                                    {data.orderDate}
                                    <OrdersStatus status={data.orderStatus}/>
                                </div>
                                <div className="orders__modal__content__list">
                                    <div className="orders__modal__content__list__item">
                                        <div className="orders__modal__content__list__item__name">
                                            <div className="orders__modal__content__list__item__name-title">
                                                {data.orderCourse}
                                            </div>
                                            <div className="orders__modal__content__list__item__name-cost">
                                                {data.orderCost}
                                            </div>
                                        </div>
                                        <div className="orders__modal__content__list__item-price">
                                            {data.orderPrice}
                                        </div>
                                    </div>
                                    <div className="orders__modal__content__list__item">
                                        <div className="orders__modal__content__list__item__name">
                                            <div className="orders__modal__content__list__item__name-title">
                                                {data.orderCourse}
                                            </div>
                                            <div className="orders__modal__content__list__item__name-cost">
                                                <span>{data.orderOldCost} ₽</span>
                                                {data.orderCost} ₽
                                            </div>
                                        </div>
                                        <div className="orders__modal__content__list__item-price">
                                            {data.orderPrice}
                                        </div>
                                    </div>
                                    <div className="orders__modal__content__list__item">
                                        <div className="orders__modal__content__list__item__name">
                                            <div className="orders__modal__content__list__item__name-title">
                                                {data.orderCourse}
                                            </div>
                                            <div className="orders__modal__content__list__item__name-cost">
                                                {data.orderCost}
                                            </div>
                                        </div>
                                        <div className="orders__modal__content__list__item-price">
                                            {data.orderPrice}
                                        </div>
                                    </div>
                                </div>
                                <div className="orders__modal__content__price">
                                    Стоимость заказа
                                    <div className="orders__modal__content__price-cost">
                                        <span>{data.orderOldCost}</span>
                                        {data.orderCost}
                                    </div>
                                </div>
                                <div className="orders__modal__content__delivery">
                                    <div className="orders__modal__content__delivery__price">
                                        Доставка
                                        <div className="orders__modal__content__delivery__price-cost">
                                            {data.orderCost}
                                        </div>
                                    </div>
                                    <div className="orders__modal__content__delivery__info">
                                        <div className="orders__modal__content__delivery__info-time">
                                            {data.orderDeliveryTime}
                                        </div>
                                        <div className="orders__modal__content__delivery__info-contact">
                                            {data.orderContact}
                                        </div>
                                        <div className="orders__modal__content__delivery__info-addresses">
                                            {data.orderAddresses}
                                        </div>
                                    </div>
                                    <div className="orders__modal__content__total">
                                        Итого
                                        <div className="orders__modal__content__total-cost">
                                            <span>{data.orderOldCost} ₽</span>
                                            {data.orderCost} ₽
                                        </div>
                                    </div>
                                    <div className="orders__modal__content__payment">
                                        <div className="orders__modal__content__payment-title">
                                            Оплата
                                        </div>
                                        <div className="orders__modal__content__payment__info">
                                            <div className="orders__modal__content__payment__info__price">
                                                <div className="orders__modal__content__payment__info__price-title">
                                                    {data.orderPaymentMethod}
                                                </div>
                                                <div className="orders__modal__content__payment__info__price-cost">
                                                    {data.orderGot} ₽
                                                </div>
                                            </div>
                                            <div className="orders__modal__content__payment__info__price">
                                                <div className="orders__modal__content__payment__info__price-title">
                                                    Сдача
                                                </div>
                                                <div className="orders__modal__content__payment__info__price-cost">
                                                    {data.orderSurrender} ₽
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="orders__modal__buttons">
                                <button className="btn btn-red btn-icon-modal no-drag">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M17.6498 6.34999C16.0198 4.71999 13.7098 3.77999 11.1698 4.03999C7.49978 4.40999 4.47978 7.38999 4.06978 11.06C3.51978 15.91 7.26978 20 11.9998 20C15.1898 20 17.9298 18.13 19.2098 15.44C19.5298 14.77 19.0498 14 18.3098 14C17.9398 14 17.5898 14.2 17.4298 14.53C16.2998 16.96 13.5898 18.5 10.6298 17.84C8.40978 17.35 6.61978 15.54 6.14978 13.32C5.30978 9.43999 8.25978 5.99999 11.9998 5.99999C13.6598 5.99999 15.1398 6.68999 16.2198 7.77999L14.7098 9.28999C14.0798 9.91999 14.5198 11 15.4098 11H18.9998C19.5498 11 19.9998 10.55 19.9998 9.99999V6.40999C19.9998 5.51999 18.9198 5.06999 18.2898 5.69999L17.6498 6.34999Z" fill="white"/>
                                    </svg>
                                    Повторить заказ
                                </button>
                                <button className="btn btn-none btn-icon-modal no-drag">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path d="M18.8002 5.71022C18.4102 5.32022 17.7802 5.32022 17.3902 5.71022L12.5002 10.5902L7.61022 5.70021C7.22022 5.31021 6.59021 5.31021 6.20021 5.70021C5.81021 6.09021 5.81021 6.72022 6.20021 7.11022L11.0902 12.0002L6.20021 16.8902C5.81021 17.2802 5.81021 17.9102 6.20021 18.3002C6.59021 18.6902 7.22022 18.6902 7.61022 18.3002L12.5002 13.4102L17.3902 18.3002C17.7802 18.6902 18.4102 18.6902 18.8002 18.3002C19.1902 17.9102 19.1902 17.2802 18.8002 16.8902L13.9102 12.0002L18.8002 7.11022C19.1802 6.73022 19.1802 6.09022 18.8002 5.71022Z" fill="#8D191D"/>
                                    </svg>
                                    Отменить заказ
                                </button>
                            </div>
                        </div>
                    </div>
                </ModalCard>
            }

            <div onClick={() => setIsModalOpened(true)} className="orders__list__item">
                <div className="orders__list__item__header">
                    <div className="orders__list__item__header__info">
                        <div className="orders__list__item__header__info-numb">{data.orderId}</div>
                        <div className="orders__list__item__header__info-date">{data.orderDate}</div>
                    </div>
                    <OrdersStatus status={data.orderStatus}/>
                </div>
                <div className="orders__list__item__delivery">
                    <div className="orders__list__item__delivery-title">Доставка</div>
                    <div className="orders__list__item__delivery-addresses">{data.orderAddresses}</div>
                </div>
                <div className="orders__list__item__price">
                    Сумма
                    <div className="catalogue-content__cards__card__content__info-cost">
                        <span>{data.orderOldCost} ₽</span>
                        {data.orderCost} ₽
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default OrdersCard;