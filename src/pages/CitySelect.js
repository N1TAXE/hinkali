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
            insitutes: 2,
            coords: [44.676411, 34.410129]
        },
        {
            id: 1,
            title: 'Анапа',
            insitutes: 1,
            coords: [44.894818, 37.316367]
        },
        {
            id: 2,
            title: 'Бахчисарай',
            insitutes: 4,
            coords: [44.744997, 33.848035]
        },
        {
            id: 3,
            title: 'Белгород',
            insitutes: 1,
            coords: [50.595414, 36.587277]
        },
        {
            id: 4,
            title: 'Великий Новгород',
            insitutes: 1,
            coords: [58.522857, 31.269816]
        },
        {
            id: 5,
            title: 'Воронеж',
            insitutes: 1,
            coords: [51.660781, 39.200296]
        },
        {
            id: 6,
            title: 'Геленджик',
            insitutes: 1,
            coords: [44.561012, 38.077115]
        },
        {
            id: 7,
            title: 'Евпатория',
            insitutes: 2,
            coords: [45.190635, 33.367643]
        },
        {
            id: 8,
            title: 'Екатеринбург',
            insitutes: 3,
            coords: [56.838011, 60.597474]
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
            globals.setCity(citiesList.find((city) => city.id === select))
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
                <div className="input__item input_icon input_icon_left">
                    <label htmlFor="search">Выберите город</label>
                    <div className="input__container">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 14.0001H14.71L14.43 13.7301C15.63 12.3301 16.25 10.4201 15.91 8.39014C15.44 5.61014 13.12 3.39014 10.32 3.05014C6.09001 2.53014 2.53002 6.09014 3.05002 10.3201C3.39002 13.1201 5.61002 15.4401 8.39002 15.9101C10.42 16.2501 12.33 15.6301 13.73 14.4301L14 14.7101V15.5001L18.25 19.7501C18.66 20.1601 19.33 20.1601 19.74 19.7501C20.15 19.3401 20.15 18.6701 19.74 18.2601L15.5 14.0001ZM9.50002 14.0001C7.01002 14.0001 5.00002 11.9901 5.00002 9.50014C5.00002 7.01014 7.01002 5.00014 9.50002 5.00014C11.99 5.00014 14 7.01014 14 9.50014C14 11.9901 11.99 14.0001 9.50002 14.0001Z" fill="#999999"/>
                        </svg>
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