import React, {useEffect, useState, useContext} from 'react';
import {observer} from "mobx-react-lite";
import {iconLogo, iconSearch} from "../components/Icons"
import CityItem from "../components/SelectScreen/CityItem";
import {Context} from "../index";

const CitySelect = observer(() => {
    const [cities, setCities] = useState([])
    const [select, setSelect] = useState(null)
    const [isSelect, setIsSelect] = useState(false)
    const {globals} = useContext(Context)

    const handleChoose = (city) => {
        if (select === city.id) {
            setSelect(null)
        } else {
            setSelect(city.id)
        }
    }

    const citiesList = [
        {
            id: 0,
            title: 'Алушта',
            insitutes: 2
        },
        {
            id: 1,
            title: 'Анапа',
            insitutes: 1
        },
        {
            id: 2,
            title: 'Бахчисарай',
            insitutes: 4
        },
        {
            id: 3,
            title: 'Белгород',
            insitutes: 1
        },
        {
            id: 4,
            title: 'Великий Новгород',
            insitutes: 1
        },
        {
            id: 5,
            title: 'Воронеж',
            insitutes: 1
        },
        {
            id: 6,
            title: 'Геленджик',
            insitutes: 1
        },
        {
            id: 7,
            title: 'Доброе',
            insitutes: 1
        },
        {
            id: 8,
            title: 'Евпатория',
            insitutes: 2
        },
        {
            id: 9,
            title: 'Екатеринбург',
            insitutes: 3
        }
    ]

    function sortAndGroupCities(citiesList) {
        const sortedCities = citiesList.sort((a, b) => a.title.localeCompare(b.title));

        const groupedCities = [];
        let currentLetter = null;

        sortedCities.forEach(city => {
            const firstLetter = city.title.charAt(0).toUpperCase();

            if (currentLetter !== firstLetter) {
                currentLetter = firstLetter;
                groupedCities.push({
                    letter: currentLetter,
                    cities: [city],
                });
            } else {
                groupedCities[groupedCities.length - 1].cities.push(city);
            }
        });

        return groupedCities;
    }

    const handleSearch = (event) => {
        const searchText = event.target.value.toLowerCase();
        const filtered = citiesList.filter((city) => city.title.toLowerCase().includes(searchText));
        setCities(sortAndGroupCities(filtered))
    };

    useEffect(() => {
        setCities(sortAndGroupCities(citiesList))
    }, [])

    const handleApply = () => {
        if (select || select === 0) {
            globals.setCity(select)
        }
    }

    useEffect(() => {
        if (select || select === 0) {
            setIsSelect(true)
        } else {
            setIsSelect(false)
        }
    }, [select])

    return (
        <React.Fragment>
            <div className="select__header">
                <img src={iconLogo} alt="Старик Хинкалыч"/>
            </div>
            <div className="select__title">
                {citiesList.reduce((total, city) => total + city.insitutes, 0)} хинкальная в {citiesList.length} городах
            </div>
            <div className="select__search">
                <div className="input__item input_icon_left">
                    <label htmlFor="search">Выберите город</label>
                    <div className="input__container">
                        <img src={iconSearch} alt=""/>
                        <input onChange={handleSearch} placeholder="Найти" name="search" type="text"/>
                    </div>
                </div>
            </div>
            <ul className="select__list">
                {cities && cities.map((letter) => {
                    return letter.cities.map((city, index) => (
                        <CityItem key={index} city={city} index={index} letter={letter} select={select} setSelect={setSelect} handleChoose={handleChoose}/>
                    ))
                })}
            </ul>
            <div className="select__button-wrapper">
                <button disabled={!isSelect} onClick={handleApply} className="btn btn-md btn-red">
                    Выбрать
                </button>
            </div>
        </React.Fragment>
    );
});
export default CitySelect;