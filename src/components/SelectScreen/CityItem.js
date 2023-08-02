import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {iconCheckCircle} from "../Icons";

const CityItem = observer(({city, index, letter, select, setSelect, handleChoose}) => {
    const [isSelect, setIsSelect] = useState(false)

    useEffect(() => {
        if (select || select === 0) {
            if (select === city.id) {
                setIsSelect(true)
            } else {
                setIsSelect(false)
            }
        } else {
            setIsSelect(false)
        }
    }, [select])
    return (
        <li onClick={() => handleChoose(city)} key={city.id} className="select__item">
            <div className="item__letter">
                {index === 0 && letter.letter}
            </div>
            <div className="item__city">
                {city.title}
                {city.insitutes >1 && (
                    <div className="city__institutes">
                        {city.insitutes}
                    </div>
                )}
            </div>
            {isSelect && (
                <div className="item__check">
                    <img src={iconCheckCircle} alt=""/>
                </div>
            )}
        </li>
    );
});

export default CityItem;