import React from 'react';
import unauthorized from "../assets/images/delivery/unauthorized.png";
import TopBar from "../components/TopBar";
import TabBar from "../components/TabBar";

const OrderAccepted = () => {
    return (
        <div className="order-accepted">
            <TopBar title={"Заказ принят"} page={'any'} icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.29 16.29L5.7 12.7C5.31 12.31 5.31 11.68 5.7 11.29C6.09 10.9 6.72 10.9 7.11 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z" fill="#8D191D"/></svg>}/>
            <div className="order-accepted__content">
                <div className="order-accepted__content-sticker">
                    <img src={unauthorized} alt="Весёлый хинкалик"/>
                </div>
                <div className="order-accepted__content-title">Спасибо за заказ!</div>
                <div className="order-accepted__content-number">
                    Номер заказа
                    <span>№ 2565</span>
                </div>
                <div className="order-accepted__content-text">
                    В ближайшее время с вами свяжется наш администратор и уточнит детали
                </div>
            </div>
            <div className="order-accepted__buttons">
                <React.Fragment>
                    <button  className="btn btn-md btn-red">Хорошо</button>
                    <button  className="btn btn-md btn-gray">Оставить отзыв</button>
                </React.Fragment>
            </div>
            <TabBar/>
        </div>
    );
};

export default OrderAccepted;