import React, {useEffect, useState} from 'react';
import ModalCard from "./ModalCard";

const TopBar = ({title,icon, page}) => {
    const [buttons, setButtons] = useState('')
    const [isModalClearOpened, setIsModalClearOpened] = useState(false)

    useEffect(() => {
        switch (page) {
            case 'basket':
                return (
                    setButtons('basket')
                )
            case 'any':
                return (
                    setButtons('any')
                )
        }
    })
    const getButtons = () => {
        switch (buttons) {
            case 'basket':
                return(
                    <React.Fragment>
                        <div className="top-bar__left">
                            <div className="top-bar__icon">
                                {icon}
                            </div>
                            {title}
                        </div>
                        <button onClick={() => setIsModalClearOpened(true)} className="btn btn-none top-bar__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6C4.71667 6 4.47917 5.90417 4.2875 5.7125C4.09583 5.52083 4 5.28333 4 5C4 4.71667 4.09583 4.47917 4.2875 4.2875C4.47917 4.09583 4.71667 4 5 4H9C9 3.71667 9.09583 3.47917 9.2875 3.2875C9.47917 3.09583 9.71667 3 10 3H14C14.2833 3 14.5208 3.09583 14.7125 3.2875C14.9042 3.47917 15 3.71667 15 4H19C19.2833 4 19.5208 4.09583 19.7125 4.2875C19.9042 4.47917 20 4.71667 20 5C20 5.28333 19.9042 5.52083 19.7125 5.7125C19.5208 5.90417 19.2833 6 19 6V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM7 6V19H17V6H7ZM9 16C9 16.2833 9.09583 16.5208 9.2875 16.7125C9.47917 16.9042 9.71667 17 10 17C10.2833 17 10.5208 16.9042 10.7125 16.7125C10.9042 16.5208 11 16.2833 11 16V9C11 8.71667 10.9042 8.47917 10.7125 8.2875C10.5208 8.09583 10.2833 8 10 8C9.71667 8 9.47917 8.09583 9.2875 8.2875C9.09583 8.47917 9 8.71667 9 9V16ZM13 16C13 16.2833 13.0958 16.5208 13.2875 16.7125C13.4792 16.9042 13.7167 17 14 17C14.2833 17 14.5208 16.9042 14.7125 16.7125C14.9042 16.5208 15 16.2833 15 16V9C15 8.71667 14.9042 8.47917 14.7125 8.2875C14.5208 8.09583 14.2833 8 14 8C13.7167 8 13.4792 8.09583 13.2875 8.2875C13.0958 8.47917 13 8.71667 13 9V16Z" fill="#8D191D"/>
                            </svg>
                        </button>
                    </React.Fragment>
                )
            case 'any':
                return(
                    <React.Fragment>
                        <div className="top-bar__left">
                            <div className="top-bar__icon">
                                {icon}
                            </div>
                            {title}
                        </div>
                    </React.Fragment>
                )
        }
    }

    return (
        <React.Fragment>
    {isModalClearOpened &&
        <ModalCard setIsOpened={setIsModalClearOpened}>
            <div className="modal">
                <div className="modal__wrapper">
                    <div className="modal__header justify-between">
                        <div className="d-flex flex-center justify-between">
                            <div onClick={() => setIsModalClearOpened(false)} className="d-flex flex-center justify-center modal__btn no-drag">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19 11.0002H7.82998L12.71 6.12021C13.1 5.73021 13.1 5.09021 12.71 4.70021C12.32 4.31021 11.69 4.31021 11.3 4.70021L4.70998 11.2902C4.31998 11.6802 4.31998 12.3102 4.70998 12.7002L11.3 19.2902C11.69 19.6802 12.32 19.6802 12.71 19.2902C13.1 18.9002 13.1 18.2702 12.71 17.8802L7.82998 13.0002H19C19.55 13.0002 20 12.5502 20 12.0002C20 11.4502 19.55 11.0002 19 11.0002Z" fill="#8D191D"/>
                                </svg>
                            </div>
                            <h3>Очистить корзину?</h3>
                        </div>
                    </div>
                    <div className="modal__content gap-8">
                        <p>
                            Вы точно хотите очистить корзину? Отменить данное действие будет невозможно.
                        </p>
                        <button className="btn btn-sm btn-red no-drag">
                            Удалить
                        </button>
                        <button onClick={() => setIsModalClearOpened(false)} className="btn btn-sm btn-gray no-drag">
                            Отменить
                        </button>
                    </div>
                </div>
            </div>
        </ModalCard>
        }

        <div className="top-bar">
            {getButtons()}
        </div>
        </React.Fragment>
    );
};

export default TopBar;