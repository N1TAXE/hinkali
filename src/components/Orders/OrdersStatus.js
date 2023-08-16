import React, {useEffect, useState} from 'react';

const OrdersStatus = ({status}) => {
    const [text, setText] = useState('')

    useEffect(() => {
        switch (status) {
            case 'processing':
                return setText('В обработке')
            case 'waiting':
                return setText('В ожидании')
            case 'going':
                return setText('В пути')
            case 'cooking':
                return setText('Готовится')
        }
    }, [status])

    return (
        <React.Fragment>
            <div className={`orders__list__item__header-status ${status}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fill="white"/>
                </svg>
                {text}
            </div>
        </React.Fragment>
    );
};

export default OrdersStatus;