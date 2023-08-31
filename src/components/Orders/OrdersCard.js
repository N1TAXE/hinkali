import React, {useState} from 'react';
import OrdersStatus from "./OrdersStatus";
import ModalCard from "../ModalCard";
import iconClose from "../../assets/images/icons/close.png";
import iconRefresh from "../../assets/images/icons/refresh.png";

const OrdersCard = ({data}) => {
    const [isModalOpened, setIsModalOpened] = useState(false)

    return (
        <React.Fragment>
            {isModalOpened &&
                <ModalCard setIsOpened={setIsModalOpened}>
                    <div className="modal">
                        <div className="modal__wrapper">
                            <div className="modal__header">
                                <div className="modal__header-btn no-drag" onClick={() => setIsModalOpened(false)}>
                                    <img src={iconClose} alt=""/>
                                </div>
                                <h3>Заказ {data.orderId}</h3>
                            </div>
                            <div className="orders__modal__content">
                                <div className="orders__modal__content-info">
                                    {data.orderDate}
                                    <OrdersStatus status={data.orderStatus}/>
                                </div>
                                <div className="orders__modal__content__list">
                                    {Array.from({length:3}, (_,index) => (
                                        <div className="orders__modal__content__list__item">
                                            <div className="orders__modal__content__list__item__name">
                                                <div className="orders__modal__content__list__item__name-title">
                                                    {data.orderCourse}
                                                </div>
                                                <div className="orders__modal__content__list__item__name-cost price--cost">
                                                    <span>{data.orderOldCost} ₽</span>
                                                    <h5>{data.orderCost} ₽</h5>
                                                </div>
                                            </div>
                                            <div className="orders__modal__content__list__item-price">
                                                {data.orderPrice}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="orders__modal__content__price">
                                    Стоимость заказа
                                    <div className="orders__modal__content__price-cost price--cost">
                                        <span><small>{data.orderOldCost} ₽</small></span>
                                        <h3>{data.orderCost} ₽</h3>
                                    </div>
                                </div>
                                <div className="orders__modal__content__delivery">
                                    <div className="orders__modal__content__delivery__price">
                                        Доставка
                                        <div className="orders__modal__content__delivery__price-cost price--cost">
                                            <span><small></small></span>
                                            <h3>{data.orderCost} ₽</h3>
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
                                        <div className="orders__modal__content__total-cost price--cost">
                                            <span>{data.orderOldCost} ₽</span>
                                            <h2>{data.orderCost} ₽</h2>
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
                                    <img src={iconRefresh} alt=""/>
                                    Повторить заказ
                                </button>
                                <button className="btn btn-none btn-icon-modal no-drag">
                                    <img src={iconClose} alt=""/>
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
                        <h3 className="orders__list__item__header__info-numb">{data.orderId}</h3>
                        <div className="orders__list__item__header__info-date">{data.orderDate}</div>
                    </div>
                    <OrdersStatus status={data.orderStatus}/>
                </div>
                <div className="orders__list__item__delivery">
                    <h3 className="orders__list__item__delivery-title">Доставка</h3>
                    <small className="orders__list__item__delivery-addresses">{data.orderAddresses}</small>
                </div>
                <div className="orders__list__item__price">
                    <h3>Сумма</h3>
                    <div className="orders__list__item__price-cost price--cost">
                        <span><small>{data.orderOldCost} ₽</small></span>
                        <h3>{data.orderCost} ₽</h3>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default OrdersCard;