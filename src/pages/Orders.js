import React, {useContext, useState} from 'react';
import TopBar from "../components/TopBar";
import TabBar from "../components/TabBar";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import UnAuthorized from "../components/UnAuthorized";
import {NavLink} from "react-router-dom";
import {PROFILE_ROUTE} from "../utils/consts";
import OrdersCard from "../components/Orders/OrdersCard";

const Orders = observer(() => {
    const {globals} = useContext(Context)
    const [orders, setOrders] = useState('empty')
    const dataOrders = [
        {
            orderId: '№ 42',
            orderDate: '24.05.23 11:03',
            orderStatus: 'cooking',
            orderCourse: 'Хинкали с говядиной',
            orderCost: 653,
            orderPrice: '45 ₽ × 1 шт.',
            orderOldCost: 662,
            orderDeliveryTime: 'В ближайшее время',
            orderContact: 'Паша Техник +7 999 999-99-00',
            orderAddresses: 'ул. Симферопольская, д. 26, кв. 2, Севастополь',
            orderPaymentMethod: 'Наличными',
            orderGot: 2000,
            orderSurrender: 1400,
        },
        {
            orderId: '№ 233',
            orderDate: '24.05.23 03:03',
            orderStatus: 'waiting',
            orderCourse: 'Хинкали с говядиной',
            orderCost: 233,
            orderPrice: '45 ₽ × 1 шт.',
            orderOldCost: 553,
            orderDeliveryTime: 'В ближайшее время',
            orderContact: 'Вася Пчелкин +7 939 992-91-00',
            orderAddresses: 'ул. Симферопольская, д. 26, кв. 2, Севастополь',
            orderPaymentMethod: 'Картой',
            orderGot: 1232,
            orderSurrender: 200,
        },
        {
            orderId: '№ 5233',
            orderDate: '24.05.23 03:03',
            orderStatus: 'processing',
            orderCourse: 'Хинкали с говядиной',
            orderCost: 123,
            orderPrice: '45 ₽ × 1 шт.',
            orderOldCost: 323,
            orderDeliveryTime: 'В ближайшее время',
            orderContact: 'Вася Пчелкин +7 939 992-91-00',
            orderAddresses: 'ул. Симферопольская, д. 26, кв. 2, Севастополь',
            orderPaymentMethod: 'Картой',
            orderGot: 5233,
            orderSurrender: 1334,
        },
        {
            orderId: '№ 12345',
            orderDate: '24.05.23 03:03',
            orderStatus: 'going',
            orderCourse: 'Хинкали с говядиной',
            orderCost: 325,
            orderPrice: '45 ₽ × 1 шт.',
            orderOldCost: 555,
            orderDeliveryTime: 'В ближайшее время',
            orderContact: 'Вася Пчелкин +7 939 992-91-00',
            orderAddresses: 'ул. Симферопольская, д. 26, кв. 2, Севастополь',
            orderPaymentMethod: 'Наличными',
            orderGot: 2234,
            orderSurrender: 1111,
        },
        {
            orderId: '№ 42',
            orderDate: '24.05.23 11:03',
            orderStatus: 'cooking',
            orderCourse: 'Хинкали с говядиной',
            orderCost: 653,
            orderPrice: '45 ₽ × 1 шт.',
            orderOldCost: 662,
            orderDeliveryTime: 'В ближайшее время',
            orderContact: 'Паша Техник +7 999 999-99-00',
            orderAddresses: 'ул. Симферопольская, д. 26, кв. 2, Севастополь',
            orderPaymentMethod: 'Наличными',
            orderGot: 2000,
            orderSurrender: 1400,
        },
        {
            orderId: '№ 233',
            orderDate: '24.05.23 03:03',
            orderStatus: 'waiting',
            orderCourse: 'Хинкали с говядиной',
            orderCost: 233,
            orderPrice: '45 ₽ × 1 шт.',
            orderOldCost: 553,
            orderDeliveryTime: 'В ближайшее время',
            orderContact: 'Вася Пчелкин +7 939 992-91-00',
            orderAddresses: 'ул. Симферопольская, д. 26, кв. 2, Севастополь',
            orderPaymentMethod: 'Картой',
            orderGot: 1232,
            orderSurrender: 200,
        },
        {
            orderId: '№ 5233',
            orderDate: '24.05.23 03:03',
            orderStatus: 'processing',
            orderCourse: 'Хинкали с говядиной',
            orderCost: 123,
            orderPrice: '45 ₽ × 1 шт.',
            orderOldCost: 323,
            orderDeliveryTime: 'В ближайшее время',
            orderContact: 'Вася Пчелкин +7 939 992-91-00',
            orderAddresses: 'ул. Симферопольская, д. 26, кв. 2, Севастополь',
            orderPaymentMethod: 'Картой',
            orderGot: 5233,
            orderSurrender: 1334,
        },
        {
            orderId: '№ 12345',
            orderDate: '24.05.23 03:03',
            orderStatus: 'going',
            orderCourse: 'Хинкали с говядиной',
            orderCost: 325,
            orderPrice: '45 ₽ × 1 шт.',
            orderOldCost: 555,
            orderDeliveryTime: 'В ближайшее время',
            orderContact: 'Вася Пчелкин +7 939 992-91-00',
            orderAddresses: 'ул. Симферопольская, д. 26, кв. 2, Севастополь',
            orderPaymentMethod: 'Наличными',
            orderGot: 2234,
            orderSurrender: 1111,
        },
    ]

    const getOrders = () =>{
        switch (orders) {
            case 'empty':
                return(
                    <UnAuthorized page={'orders'} setStatus={setOrders}/>
                )
            case 'have':
                return (
                    <React.Fragment>
                        <div className="orders__list">
                            {dataOrders && dataOrders.map((item)=>(
                                <OrdersCard data={item} key={item.id}/>
                            ))}
                        </div>
                        <div className="orders__button">
                            <NavLink to={PROFILE_ROUTE} className="btn btn-md btn-red">Назад</NavLink>
                        </div>
                    </React.Fragment>
                )
        }
    }

    return (
        <div className={!globals.getIsAuth ? ("unauthorized"):("orders authorized")}>
            <TopBar page={'any'} title="Заказы" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8 17C8.28333 17 8.52083 16.9042 8.7125 16.7125C8.90417 16.5208 9 16.2833 9 16C9 15.7167 8.90417 15.4792 8.7125 15.2875C8.52083 15.0958 8.28333 15 8 15C7.71667 15 7.47917 15.0958 7.2875 15.2875C7.09583 15.4792 7 15.7167 7 16C7 16.2833 7.09583 16.5208 7.2875 16.7125C7.47917 16.9042 7.71667 17 8 17ZM8 13C8.28333 13 8.52083 12.9042 8.7125 12.7125C8.90417 12.5208 9 12.2833 9 12C9 11.7167 8.90417 11.4792 8.7125 11.2875C8.52083 11.0958 8.28333 11 8 11C7.71667 11 7.47917 11.0958 7.2875 11.2875C7.09583 11.4792 7 11.7167 7 12C7 12.2833 7.09583 12.5208 7.2875 12.7125C7.47917 12.9042 7.71667 13 8 13ZM8 9C8.28333 9 8.52083 8.90417 8.7125 8.7125C8.90417 8.52083 9 8.28333 9 8C9 7.71667 8.90417 7.47917 8.7125 7.2875C8.52083 7.09583 8.28333 7 8 7C7.71667 7 7.47917 7.09583 7.2875 7.2875C7.09583 7.47917 7 7.71667 7 8C7 8.28333 7.09583 8.52083 7.2875 8.7125C7.47917 8.90417 7.71667 9 8 9ZM12 17H16C16.2833 17 16.5208 16.9042 16.7125 16.7125C16.9042 16.5208 17 16.2833 17 16C17 15.7167 16.9042 15.4792 16.7125 15.2875C16.5208 15.0958 16.2833 15 16 15H12C11.7167 15 11.4792 15.0958 11.2875 15.2875C11.0958 15.4792 11 15.7167 11 16C11 16.2833 11.0958 16.5208 11.2875 16.7125C11.4792 16.9042 11.7167 17 12 17ZM12 13H16C16.2833 13 16.5208 12.9042 16.7125 12.7125C16.9042 12.5208 17 12.2833 17 12C17 11.7167 16.9042 11.4792 16.7125 11.2875C16.5208 11.0958 16.2833 11 16 11H12C11.7167 11 11.4792 11.0958 11.2875 11.2875C11.0958 11.4792 11 11.7167 11 12C11 12.2833 11.0958 12.5208 11.2875 12.7125C11.4792 12.9042 11.7167 13 12 13ZM12 9H16C16.2833 9 16.5208 8.90417 16.7125 8.7125C16.9042 8.52083 17 8.28333 17 8C17 7.71667 16.9042 7.47917 16.7125 7.2875C16.5208 7.09583 16.2833 7 16 7H12C11.7167 7 11.4792 7.09583 11.2875 7.2875C11.0958 7.47917 11 7.71667 11 8C11 8.28333 11.0958 8.52083 11.2875 8.7125C11.4792 8.90417 11.7167 9 12 9ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5Z" fill="#8D191D"/></svg>}/>
            {!globals.getIsAuth ? (
                <UnAuthorized page={'orders'}/>
            ):(
                <React.Fragment>
                    {getOrders()}
                </React.Fragment>
            )}
            <TabBar/>
        </div>
    );
});

export default Orders;